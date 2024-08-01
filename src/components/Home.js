import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./home.css";
import spiralLogo from '../images/—Pngtree—light green spiral notebook png_14548230.png';

const Home = () => {
  // Retrieve contacts from the Redux store
  const contactsList = useSelector((state) => state);

  // Get the dispatch function to send actions to the Redux store
  const dispatch = useDispatch();

  // Function to handle contact deletion
  const handleDeleteContact = (contactId) => {
    dispatch({ type: "DELETE_CONTACT", payload: contactId });
    toast.success("Contact deleted!");
  };

  return (
    <div className="container home-container">
      <img className="" src={spiralLogo} alt="diary_background"/>
      <div className="row d-flex justify-content-center p-0 table-container rounded-4">
        <div className="col-md-12 my-1 rounded-4 bg-white p-0  h-100 overflow">
          <table className="table table-hover">
            <thead className="text-white bg-primary border border-4 border-warning rounded-4 text-start">
              <tr>
                <th scope="col" className="remove">No</th>
                <th scope="col">Contact Name</th>
                <th scope="col" className="remove">Contact Email</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody className="border border-4 border-danger border-bottom-0 rounded-4">
              {contactsList.map((contact, index) => (
                <tr key={index}>
                  <td className="text-secondary column remove">{index + 1}</td>
                  <td className="column">{contact.name}</td>
                  <td className="column remove">{contact.email}</td>
                  <td className="column">{contact.number}</td>
                  <td className="column">
                    <Link to={`/edit/${contact.id}`} className="btn btn-small">
                      <i className="fa fa-edit"></i>
                    </Link>
                  </td>
                  <td className="column">
                    <button
                      type="button"
                      onClick={() => handleDeleteContact(contact.id)}
                      className="btn btn-small"
                    >
                      <i className="fa fa-trash-o"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
