import { format } from 'date-fns';
import React from 'react';

const SingleBookingModal = ({appointment, modalTitle, selectedDate}) => {

  const { name, slots } = appointment;

  

  const handleOnSubmitBoolingModal = e => {
    e.preventDefault()

    const form = e.target;
    const modalSelectedDate = form.modalDate.value;
    const slot = form.selectedSlot.value;
    const name = form.name.value;
    const phoneNumber = form.phoneNumber.value;
    const email = form.email.value;

    const selectedForm = {
      name,
      slot,
      modalSelectedDate,
      phoneNumber,
      email

    }
    console.log(selectedForm);
  }

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
          <form onSubmit={handleOnSubmitBoolingModal}>
            <input
              type="text"
              name='modalDate'
              disabled
              value={format(selectedDate, 'PP')}
              className="input input-bordered w-full mt-4"
            />
            <select name="selectedSlot" className="select select-bordered w-full mt-4">
              
              {
                slots.map((slot, idx)=><option key={idx} value={slot}>{slot}</option>)
              }
            </select>
            <input
              type="text"
              name='name'
              placeholder="Full Name"
              className="input input-bordered w-full mt-4"
            />
              <input
                type="number"
                name='phoneNumber'
                placeholder="Phone Number"
                className="input input-bordered w-full mt-4"
              />
            <input
              type="email"
              name='email'
              placeholder="Email"
              className="input input-bordered w-full mt-4"
            />
            <button
              type='submit'
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

export default SingleBookingModal;