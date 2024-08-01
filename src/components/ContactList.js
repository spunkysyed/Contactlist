   import React, { useEffect } from "react";
   import { HashRouter, Route, Routes } from "react-router-dom";
   import { useDispatch } from "react-redux";
   import { ToastContainer } from "react-toastify";

   import Navbar from "./Navbar";
   import Home from "./Home";
   import AddContact from "./AddContact";
   import EditContact from "./EditContact";

   const ContactList = () => {
   // Get the dispatch function from the Redux store
   const dispatch = useDispatch();

   // Fetch contacts from an external API and dispatch them to the Redux store
   useEffect(() => {
     // Function to fetch contacts
     const fetchContacts = async () => {
       // Array to store fetched contacts
       const contacts = [];
       // Fetch contacts from the API
       const response = await fetch("https://jsonplaceholder.typicode.com/users/");
       const data = await response.json();
       // Map over the fetched data and push formatted contacts to the array
       data.forEach((contact) => {
         contacts.push({
           id: contact.id,
           name: contact.name,
           number: contact.phone,
           email: contact.email,
         });
       });
       // Dispatch an action to store the fetched contacts in the Redux store
       dispatch({ type: "FETCH_CONTACTS", payload: contacts });
     };
 
     fetchContacts();
   }, [dispatch]);
 
   return (
     <div className="App">
       <HashRouter>
         {/* Container for displaying toast notifications */}
         <ToastContainer />
         {/* Navigation bar */}
         <Navbar />
         {/* Define the routes for the application */}
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/add" element={<AddContact />} />
           <Route path="/edit/:id" element={<EditContact />} />
         </Routes>
       </HashRouter>
     </div>
   );
 };
 

   export default ContactList;
