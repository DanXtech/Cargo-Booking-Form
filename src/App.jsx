
import { useEffect, useState } from "react";
import CargoBookingForm from "./Pages/CargoBookingForm"

const App = () => {
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);


    if (isLoading) {
        return (
            <div className="min-h-screen bg-blue-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white mb-4"></div>
                    <p className="text-white text-xl">Loading...</p>
                </div>
            </div>
        );
    }
    return (
        <div className=" overflow-y-auto scrollbar-none py-10  px-2  lg:px-20">
            <CargoBookingForm />

        </div>
    )
}

export default App