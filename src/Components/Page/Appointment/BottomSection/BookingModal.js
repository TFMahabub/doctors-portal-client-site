import { format } from "date-fns";
import React from "react";
import SingleBookingModal from "./SingleBookingModal";

const BookingModal = ({ appointments, modalTitle, selectedDate }) => {

  
  return (
    <div>
      {
        appointments.map(appointment => 
        <SingleBookingModal
          key={appointment._id}
          appointment = {appointment}
          modalTitle={modalTitle}
          selectedDate={selectedDate}
        ></SingleBookingModal>)
      }
    </div>
  );
};

export default BookingModal;
