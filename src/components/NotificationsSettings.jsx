import { useState } from "react";
import { motion } from "framer-motion"

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
                        <div className="flex flex-wrap gap-1">
  {checkboxOptions.map((option) => (
    <motion.label
      key={option.name}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: .99 }}
      transition={{ duration: 0.2 }}
      className="text-sm w-full max-w-[33%] flex items-center gap-2 border border-gray-200 rounded-sm px-3 py-1 cursor-pointer hover:bg-gray-50"
    >
      <input
        type="checkbox"
        name={option.name}
        checked={checked[option.name]}
        onChange={handleChange}
        className="w-4 h-4 accent-[#a89af3]"
      />
      {option.label}
    </motion.label>
  ))}
</div>
                </section>
        );
}

export default NotificationsSettings;