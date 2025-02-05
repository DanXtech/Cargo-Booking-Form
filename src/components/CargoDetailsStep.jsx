import { useEffect } from "react";

const CargoDetailsStep = ({ formData, setFormData, errors }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1">Cargo Type</label>
                <select
                    className="w-full p-2 border rounded-md"
                    value={formData.cargoType}
                    onChange={(e) => setFormData({ ...formData, cargoType: e.target.value })}
                >
                    <option value="">Select cargo type</option>
                    <option value="general">General Cargo</option>
                    <option value="fragile">Fragile</option>
                    <option value="perishable">Perishable</option>
                    <option value="hazardous">Hazardous</option>
                </select>
                {errors.cargoType && <p className="text-red-500 text-sm mt-1">{errors.cargoType}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Weight (kg)</label>
                <input
                    type="number"
                    className="w-full p-2 border rounded-md"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                />
                {errors.weight && <p className="text-red-500 text-sm mt-1">{errors.weight}</p>}
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Length (cm)</label>
                    <input
                        type="number"
                        className="w-full p-2 border rounded-md"
                        value={formData.dimensions.length}
                        onChange={(e) => setFormData({
                            ...formData,
                            dimensions: { ...formData.dimensions, length: e.target.value }
                        })}
                    />
                    {errors.length && <p className="text-red-500 text-sm mt-1">{errors.length}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Width (cm)</label>
                    <input
                        type="number"
                        className="w-full p-2 border rounded-md"
                        value={formData.dimensions.width}
                        onChange={(e) => setFormData({
                            ...formData,
                            dimensions: { ...formData.dimensions, width: e.target.value }
                        })}
                    />
                    {errors.width && <p className="text-red-500 text-sm mt-1">{errors.width}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Height (cm)</label>
                    <input
                        type="number"
                        className="w-full p-2 border rounded-md"
                        value={formData.dimensions.height}
                        onChange={(e) => setFormData({
                            ...formData,
                            dimensions: { ...formData.dimensions, height: e.target.value }
                        })}
                    />
                    {errors.height && <p className="text-red-500 text-sm mt-1">{errors.height}</p>}
                </div>
            </div>
        </div>
    );
};

export default CargoDetailsStep;
