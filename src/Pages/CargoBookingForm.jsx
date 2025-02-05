import React, { useState, useEffect } from 'react';
import CargoDetailsStep from '../components/CargoDetailsStep';
import PickupDetailsStep from '../components/PickupDetailsStep';
import DeliveryDetailsStep from '../components/DeliveryDetailsStep';
import ContactDetailsStep from '../components/ContactDetailsStep';

const CargoBookingForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Shipment Details
        cargoType: '',
        weight: '',
        dimensions: { length: '', width: '', height: '' },
        // Pickup Details
        pickupAddress: '',
        pickupDate: '',
        pickupInstructions: '',
        // Delivery Details
        deliveryAddress: '',
        deliveryDate: '',
        deliveryInstructions: '',
        // Contact Information
        name: '',
        email: '',
        phone: ''
    });
    const [errors, setErrors] = useState({});
    const [price, setPrice] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);



    // Calculate price based on form data changes
    useEffect(() => {
        if (formData.weight && formData.dimensions.length) {
            const volume =
                parseFloat(formData.dimensions.length) *
                parseFloat(formData.dimensions.width) *
                parseFloat(formData.dimensions.height);
            const basePrice = parseFloat(formData.weight) * 10;
            const volumePrice = volume * 0.5;
            setPrice(basePrice + volumePrice);
        }
    }, [formData.weight, formData.dimensions]);

    const validateStep = (stepNumber) => {
        const newErrors = {};

        switch (stepNumber) {
            case 1:
                if (!formData.cargoType) newErrors.cargoType = 'Cargo type is required';
                if (!formData.weight) newErrors.weight = 'Weight is required';
                if (!formData.dimensions.length) newErrors.length = 'Length is required';
                if (!formData.dimensions.width) newErrors.width = 'Width is required';
                if (!formData.dimensions.height) newErrors.height = 'Height is required';
                break;
            case 2:
                if (!formData.pickupAddress) newErrors.pickupAddress = 'Pickup address is required';
                if (!formData.pickupDate) newErrors.pickupDate = 'Pickup date is required';
                break;
            case 3:
                if (!formData.deliveryAddress) newErrors.deliveryAddress = 'Delivery address is required';
                if (!formData.deliveryDate) newErrors.deliveryDate = 'Delivery date is required';
                break;
            case 4:
                if (!formData.name) newErrors.name = 'Name is required';
                if (!formData.email) newErrors.email = 'Email is required';
                if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
                    newErrors.email = 'Invalid email format';
                }
                if (!formData.phone) newErrors.phone = 'Phone is required';
                break;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep(step)) {
            setStep(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        setStep(prev => prev - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateStep(4)) {
            // Handle form submission
            console.log('Form submitted:', formData);
            setShowSuccess(true);
        }
    };


    const closeModal = () => {
        setShowSuccess(false);
        setStep(1);
        setFormData({
            cargoType: '', weight: '', dimensions: { length: '', width: '', height: '' },
            pickupAddress: '', pickupDate: '', pickupInstructions: '',
            deliveryAddress: '', deliveryDate: '', deliveryInstructions: '',
            name: '', email: '', phone: ''
        });
    };



    const renderStepContent = () => {
        const props = { formData, setFormData, errors };

        switch (step) {
            case 1:
                return <CargoDetailsStep {...props} />;
            case 2:
                return <PickupDetailsStep {...props} />;
            case 3:
                return <DeliveryDetailsStep {...props} />;
            case 4:
                return <ContactDetailsStep {...props} />;
            default:
                return null;
        }
    };


    return (
        <div className=" px-2 flex items-center justify-center  ">
            <div className='container mx-auto'>
                <div className='flex items-center justify-center h-[100vh]'>
                    <div className="bg-white shadow-lg rounded-2xl p-5 lg:p-10 w-full lg:w-[765px]">


                        <h1 className='text-center py-10 text-2xl lg:text-5xl capitalize font-bold'>Cargo Shipment Booking</h1>

                        {/* Progress Steps */}
                        <div className="">
                            <div className="flex justify-between">
                                {['Cargo Details', 'Pickup', 'Delivery', 'Contact'].map((label, index) => (
                                    <div
                                        key={label}
                                        className={`flex flex-col items-center flex-1 ${index < step ? 'text-blue-600' : 'text-gray-400'
                                            }`}
                                    >
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${index + 1 === step ? 'bg-blue-600 text-white' :
                                            index + 1 < step ? 'bg-blue-100 text-blue-600' :
                                                'bg-gray-200 text-gray-400'
                                            }`}>
                                            {index + 1}
                                        </div>
                                        <span className="text-sm hidden md:block">{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <form onSubmit={handleSubmit}>
                            {renderStepContent()}

                            {/* Price Display */}
                            {price > 0 && (
                                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium">Estimated Price:</span>
                                        <span className="text-xl font-bold">${price.toFixed(2)}</span>
                                    </div>
                                </div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="mt-6 flex justify-between">
                                {step > 1 && (
                                    <button
                                        type="button"
                                        onClick={handlePrevious}
                                        className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                                    >
                                        Previous
                                    </button>
                                )}
                                <div className="ml-auto">
                                    {step < 4 ? (
                                        <button
                                            type="button"
                                            onClick={handleNext}
                                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                        >
                                            Next
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                                        >
                                            Submit Booking
                                        </button>
                                    )}
                                </div>
                            </div>
                        </form>


                    </div>
                </div>
                {showSuccess && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-3">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-4">Success!</h2>
                            <p>Your cargo booking has been successfully submitted.</p>
                            <button onClick={closeModal} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CargoBookingForm











