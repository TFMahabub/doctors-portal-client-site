import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import SingleCart from "./SingleCart";

const Carts = () => {
  const [appointments, setAppointments] = useState([]);
  const [modalTitle, setModalTitle] = useState('');

  useEffect(() => {
    fetch("AppoinmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
      {appointments.map((ap) => (
        <SingleCart 
        key={ap._id} 
        ap={ap}
        setModalTitle={setModalTitle}
        />
      ))}
      <BookingModal
       appointments = {appointments}
       modalTitle={modalTitle}
      ></BookingModal>
    </div>
  );
};

export default Carts;
