<h1>Cargo Booking Form</h1>

<p>
  This is a React-based Cargo Booking Form that allows users to input shipment, pickup, delivery, and contact details. The form ensures a smooth user experience with validation and structured input fields.
</p>

<h2>Features</h2>

<ul>
  <li>
    Modular form sections: Shipment Details, Pickup Details, Delivery Details, and Contact Information
  </li>
  <li>
    Responsive design for better user experience
  </li>
  <li>
    State management for handling form inputs
  </li>
</ul>
<h2>
  Prerequisites
</h2>
<p>
  Ensure you have the following installed:
</p>

<ul>
  <li>
    Node.js (v16 or later)
  </li>
  <li>
    npm (v8 or later) or yarn
  </li>
</ul>



<h2>Installation</h2>

<ul>
  <h3>Clone the repository:</h3>
  <h5>git clone https://github.com/DanXtech/Cargo-Booking-Form
</h5>
</ul>


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
