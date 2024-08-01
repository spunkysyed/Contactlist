import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./editcontact.css";

const EditContact = () => {
  // State variables to store the form inputs
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  // Retrieve the contact ID from the URL parameters
  const { id } = useParams();

  // Retrieve the list of contacts from the Redux store
  const contactsList = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Find the current contact based on the contact ID
  const currentContact = contactsList.find(
    (contact) => contact.id === parseInt(id)
  );

  console.log(currentContact)

  // Set the form inputs to the current contact's details
  useEffect(() => {
    if (currentContact) {
      setContactName(currentContact.name);
      setContactEmail(currentContact.email);
      setContactNumber(currentContact.number);
    }
  }, [currentContact]);

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if the email already exists in other contacts
    const isEmailExists = contactsList.find(
      (contact) => contact.id !== parseInt(id) && contact.email === contactEmail
    );
    // Check if the phone number already exists in other contacts
    const isNumberExists = contactsList.find(
      (contact) => contact.id !== parseInt(id) && contact.number === parseInt(contactNumber)
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

    // Create an updated contact object
    const updatedContact = {
      id: parseInt(id),
      name: contactName,
      email: contactEmail,
      number: contactNumber,
    };

    // Dispatch an action to update the contact in the Redux store
    dispatch({ type: "UPDATE_CONTACT", payload: updatedContact });
    // Show success message
    toast.success("Contact updated!");
    // Navigate back to the home page
    navigate("/");
  };

  return (
    <div className="container edit-container bg-primary rounded-4">
      {currentContact ? (
        <>
          <h1 className="display-3 text-center fw-bold d-flex gap-3 mt-5 justify-content-center align-items-center">
            Edit Contact <span className="btn btn-warning rounded-square fs-3 px-3">{id}</span>
          </h1>
          <div className="edit-form-container">
            <div className="col-md-12 p-5">
              {/* Form to edit the contact */}
              <form className="text-center" onSubmit={handleFormSubmit}>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="form-control"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
                </div>
                <div className="form-group mt-4 d-flex justify-content-center gap-4">
                  <input
                    type="submit"
                    value="Update"
                    className="btn btn-warning"
                  />
                  <Link to="/" className="btn btn-danger ms-3">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-5 text-center fw-bold">
          Contact with id {id} does not exist!!
        </h1>
      )}
    </div>
  );
};

export default EditContact;
