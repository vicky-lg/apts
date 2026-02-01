import { motion } from "framer-motion";


export default function ServiceCard({ title, desc, icon }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
        >
            <div className="text-3xl">{icon}</div>
            <h3 className="mt-4 text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-slate-600">{desc}</p>
        </motion.div>
    );
}