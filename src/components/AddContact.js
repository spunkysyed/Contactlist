import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './addcontact.css';

const AddContact = () => {
  // State variables to store the form inputs
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  // Retrieve the list of contacts from the Redux store
  const contactsList = useSelector((state) => state);

  // Get the dispatch function from the Redux store
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if the email already exists in the contacts list
    const isEmailExists = contactsList.find(
      (contact) => contact.email === contactEmail && contactEmail
    );
    // Check if the phone number already exists in the contacts list
    const isNumberExists = contactsList.find(
      (contact) => contact.number === parseInt(contactNumber) && contactNumber
    );

    // Validate form fields
    if (!contactEmail || !contactNumber || !contactName) {
      return toast.warning("Please fill all fields!");
    }

    // Show error if email already exists
    if (isEmailExists) {
      return toast.error("This email already exists!");
    }

    // Show error if phone number already exists
    if (isNumberExists) {
      return toast.error("This number already exists!");
    }

    // Create a new contact object
    const newContact = {
      id: contactsList[contactsList.length - 1].id + 1,
      name: contactName,
      email: contactEmail,
      number: contactNumber,
    };

    // Dispatch an action to add the new contact to the Redux store
    dispatch({ type: "ADD_CONTACT", payload: newContact });
    // Show success message
    toast.success("Contact added!");
    // Navigate back to the home page
    navigate("/");
  };

  return (
    <div className="container bg-primary rounded-4 pt-5 mt-5 add-container">
      <h1 className="display-3 text-center">Add Contact</h1>
      <div className="">
        <div className="col-md-12 p-5">
          {/* Form to add a new contact */}
          <form className="text-center d-flex flex-column gap-2" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div className="form-group mb-5">
              <input
                type="number"
                placeholder="Phone Number"
                className="form-control"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Add Contact"
                className="btn btn-block btn-warning rounded-pill px-3"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
