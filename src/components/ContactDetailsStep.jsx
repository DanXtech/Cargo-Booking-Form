import { useEffect } from "react";

const ContactDetailsStep = ({ formData, setFormData, errors }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                    type="email"
                    className="w-full p-2 border rounded-md"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                    type="tel"
                    className="w-full p-2 border rounded-md"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
        </div>
    )
}

export default ContactDetailsStep