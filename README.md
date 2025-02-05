Cargo Booking Form

This is a React-based Cargo Booking Form that allows users to input shipment, pickup, delivery, and contact details. The form ensures a smooth user experience with validation and structured input fields.

Features

Modular form sections: Shipment Details, Pickup Details, Delivery Details, and Contact Information

Responsive design for better user experience

State management for handling form inputs

Prerequisites

Ensure you have the following installed:

Node.js (v16 or later)

npm (v8 or later) or yarn

Installation

Clone the repository:

git clone https://github.com/your-repo/cargo-booking-form.git

Navigate to the project folder:

cd cargo-booking-form

Install dependencies:

npm install

or

yarn install

Running the Project Locally

To start the development server, run:

npm start

or

yarn start

This will launch the application at http://localhost:5173/.

Project Structure

├── src
│ ├── components
│ │ ├── ShipmentDetails.tsx
│ │ ├── PickupDetails.tsx
│ │ ├── DeliveryDetails.tsx
│ │ ├── ContactInformation.tsx
│ │ ├── CargoBookingForm.tsx
│ ├── App.tsx
│ ├── index.tsx
├── public
├── package.json
├── tsconfig.json
└── README.md

Deployment

To build the project for production, run:

npm run build

or

yarn build

Contributing

Feel free to fork the project and create a pull request with improvements or bug fixes.

License

This project is licensed under the MIT License.
