# MERN Frontend

This is the frontend part of a MERN stack application built with React, Vite, and Tailwind CSS.

## Features

- Modern React application with Vite build tool
- Tailwind CSS for styling
- Radix UI components with data-slot pattern
- Responsive design
- Component-based architecture

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

## Available Scripts

- `npm start` or `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally

## Development

To start the development server:

```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
├── src/
│   ├── main.jsx          # Application entry point
│   ├── App.jsx           # Main application component
│   └── index.css         # Global styles and Tailwind imports
├── components/
│   ├── ui/               # Reusable UI components (Button, Card, Input, etc.)
│   ├── LandingPage.jsx   # Landing page component
│   ├── FarmerDashboard.jsx
│   ├── BuyerDashboard.jsx
│   ├── ProductPage.jsx
│   ├── ChatPage.jsx
│   ├── PaymentPage.jsx
│   ├── OrderTracking.jsx
│   ├── AdminPanel.jsx
│   ├── Analytics.jsx
│   ├── AuthModal.jsx
│   ├── Navigation.jsx
│   └── ImageWithFallback.jsx
├── public/
│   └── vite.svg          # Favicon
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── index.html            # HTML template
```

## Standard React Project Structure

Here's a recommended structure for React projects:

```
my-react-app/
├── public/                 # Static assets
│   ├── index.html
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # Base UI components (Button, Input, etc.)
│   │   ├── layout/        # Layout components (Header, Footer, Sidebar)
│   │   └── common/        # Common components (Loading, Error, etc.)
│   ├── pages/             # Page-level components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── hooks/             # Custom React hooks
│   │   ├── useAuth.js
│   │   └── useApi.js
│   ├── context/           # React context providers
│   │   └── AuthContext.js
│   ├── services/          # API calls and business logic
│   │   ├── api.js
│   │   └── auth.js
│   ├── utils/             # Utility functions
│   │   ├── helpers.js
│   │   └── constants.js
│   ├── styles/            # Global styles
│   │   └── globals.css
│   ├── assets/            # Images, fonts, icons
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # React entry point
│   └── index.css          # Global CSS
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## UI Components

The project uses a comprehensive set of UI components built with Radix UI primitives and styled with Tailwind CSS. All components follow the modern `data-slot` pattern for better maintainability.

### Why UI Directory is Important:

- **Reusability**: Components like Button, Card, Input can be used across multiple pages
- **Consistency**: Ensures all buttons, forms, etc. look the same throughout the app
- **Maintainability**: Change a component once, it updates everywhere
- **Separation of Concerns**: UI components vs. business logic components

## Backend Integration

This frontend is designed to work with a MERN stack backend. You'll need to:

1. Set up your MongoDB database
2. Create your Express.js backend server
3. Configure API endpoints
4. Update the frontend to make API calls to your backend

## Building for Production

To build the application for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI primitives
- **Lucide React** - Icon library
- **React Hook Form** - Form handling
- **Recharts** - Chart components
- **Sonner** - Toast notifications

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is part of a MERN stack application.
