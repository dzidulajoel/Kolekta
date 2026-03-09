import { useState } from "react";

const checkboxOptions = [
        { name: "push", label: "Notifications push" },
        { name: "email", label: "Emails" },
        { name: "sms", label: "SMS" }, // tu peux ajouter d'autres options
];

function NotificationsSettings() {
        const [checked, setChecked] = useState({
                push: false,
                email: false,
                sms: false,
        });

        const handleChange = (e) => {
                const { name, checked: value } = e.target;
                setChecked((prev) => ({ ...prev, [name]: value }));
        };

        return (
                <section className="mt-4">
                        <div className="flex flex-col gap-2">
                                {checkboxOptions.map((option) => (
                                        <label key={option.name} className="text-sm flex items-center gap-2">
                                                <input
                                                        type="checkbox"
                                                        name={option.name}
                                                        checked={checked[option.name]}
                                                        onChange={handleChange}
                                                        className="w-4 h-4 accent-[#a89af3] cursor-pointer"
                                                        accent-
                                                />
                                                {option.label}
                                        </label>
                                ))}
                        </div>
                </section>
        );
}

export default NotificationsSettings;