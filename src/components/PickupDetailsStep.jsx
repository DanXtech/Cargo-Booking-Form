import { useEffect } from "react";

const PickupDetailsStep = ({ formData, setFormData, errors }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1">Pickup Address</label>
                <textarea
                    className="w-full p-2 border rounded-md"
                    rows="3"
                    value={formData.pickupAddress}
                    onChange={(e) => setFormData({ ...formData, pickupAddress: e.target.value })}
                />
                {errors.pickupAddress && <p className="text-red-500 text-sm mt-1">{errors.pickupAddress}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Pickup Date</label>
                <input
                    type="date"
                    className="w-full p-2 border rounded-md"
                    value={formData.pickupDate}
                    onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                />
                {errors.pickupDate && <p className="text-red-500 text-sm mt-1">{errors.pickupDate}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Special Instructions</label>
                <textarea
                    className="w-full p-2 border rounded-md"
                    rows="3"
                    value={formData.pickupInstructions}
                    onChange={(e) => setFormData({ ...formData, pickupInstructions: e.target.value })}
                />
            </div>
        </div>

    )
}

export default PickupDetailsStep