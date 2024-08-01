# ContactList

This is a Contact Management Application built with React and Redux. It allows users to add, edit, and delete contacts. The application also includes routing and toast notifications.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system.

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/spunkysyed/Contactlist.git
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

The application will be available at http://localhost:3000.

## Features

- Add new Contacts
- Edit existing contacts
- Delete contacts
- View list of contacts
- Toast notifications for actions

## Technologies Used

- Html
- CSS
- React
- Redux
- Bootstrap

## Folder Structure

```
contactlist/
├── public
│ └── index.html          # Main HTML file for the application
├── src
│ ├── components          # Contains all the component files
│ │ ├── addcontact.css    # Styles for AddContact component
│ │ ├── AddContact.js     # Component to add a new contact
│ │ ├── ContactList.js    # Main component handling routing and state initialization
│ │ ├── editcontact.css   # Styles for EditContact component
│ │ ├── EditContact.js    # Component to edit an existing contact
│ │ ├── home.css          # Styles for Home component
│ │ ├── Home.js           # Home component displaying list of contacts
│ │ ├── navbar.css        # Styles for Navbar component
│ │ ├── Navbar.js         # Navbar component for navigation
│ ├── fonts               # Contains font files
│ │ └── rimouski_sb.otf   # Custom font used in the application
│ ├── images
│ │ └──-PngTree-light.png #Custom image for contact list    
│ ├── reducers            # Contains the reducer files
│ │ └── ContactReducer.js # Reducer to handle contact actions
│ ├── store               # Contains the store setup file
│ │ └── store.js          # Redux store configuration
│ ├── App.js              # Main App component
│ ├── index.js            # Main entry point of the application
├── .gitignore            # Specifies which files and directories to ignore in the repository
├── package-lock.json     # Automatically generated file for package installation
├── package.json          # Contains project metadata and dependencies
└── README.md             # Project description and setup instructions
```