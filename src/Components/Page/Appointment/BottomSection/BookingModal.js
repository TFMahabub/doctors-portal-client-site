import React from "react";

const BookingModal = ({ appointments, modalTitle }) => {
  const { name, slots } = appointments;

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{modalTitle}</h3>
          <form action="">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full mt-4"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full mt-4"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full mt-4"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full mt-4"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full mt-4"
            />
            <button
              type="submit"
              className="btn mt-4 w-full tracking-wide text-white "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
