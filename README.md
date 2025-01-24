# React + Vite

This project is a minimal setup to get React working with Vite, featuring Hot Module Replacement (HMR) and ESLint rules. It includes a fully functional frontend application for displaying, searching, filtering, and paginating customer data.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Features

### Frontend (React)

- **Framework**: Built using Vite and React.
- **Core Features**:

  - Display paginated customer data in a table.
  - Search functionality for `name_of_customer` or `email`.
  - Filtering based on specific fields.
  - Pagination controls with "Previous" and "Next" buttons.

- **Tools**:
  - Axios for API calls.
  - React Hooks for state management.

### Deployment

- **Frontend Deployment**: The React application is deployed on Vercel.

## Getting Started

### Prerequisites

- [React](https://reactjs.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone <https://github.com/abhishekchaurasiya/customer-data-frontend>
   cd frontend
   ```

   npm install
   cd frontend
   npm run dev

   Access the Application
   Frontend: Customer Data Frontend
   Plugins Used
   Currently, two official plugins are available for React integration in Vite:

   @vitejs/plugin-react: Uses Babel for Fast Refresh.
   @vitejs/plugin-react-swc: Uses SWC for Fast Refresh.

   Project Structure:
   frontend/
   ├── public/ # Static assets
   ├── src/ # Source code
   │ ├── components/ # React components
   │ └── App.jsx # Main application file
   ├── package.json # Project dependencies
   └── vite.config.js # Vite configuration
   └── tailwind.config.js # Taiwind configuration

   Technologies Used
   Frontend: React, Vite
   API Calls: Axios
   Icons: Using Lucide-React
   State Management: React Hooks
   Deployment: Vercel

   Usage
   Search: Query by name_of_customer or email.
   Filter: Narrow down results based on specific fields.
   Pagination: Navigate data with "Previous" and "Next" buttons.

Access the Application:
Frontend: https://customer-data-frontend-two.vercel.app/
