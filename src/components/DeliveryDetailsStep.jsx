import { useEffect } from "react";

const DeliveryDetailsStep = ({ formData, setFormData, errors }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1">Delivery Address</label>
                <textarea
                    className="w-full p-2 border rounded-md"
                    rows="3"
                    value={formData.deliveryAddress}
                    onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                />
                {errors.deliveryAddress && <p className="text-red-500 text-sm mt-1">{errors.deliveryAddress}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Delivery Date</label>
                <input
                    type="date"
                    className="w-full p-2 border rounded-md"
                    value={formData.deliveryDate}
                    onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                />
                {errors.deliveryDate && <p className="text-red-500 text-sm mt-1">{errors.deliveryDate}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Special Instructions</label>
                <textarea
                    className="w-full p-2 border rounded-md"
                    rows="3"
                    value={formData.deliveryInstructions}
                    onChange={(e) => setFormData({ ...formData, deliveryInstructions: e.target.value })}
                />
            </div>
        </div>
    )
}

export default DeliveryDetailsStep