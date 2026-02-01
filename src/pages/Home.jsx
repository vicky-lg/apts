// import { motion } from "framer-motion";
// import ServiceCard from "../components/ServiceCard";
// import StatCounter from "../components/StatCounter";


// export default function Home() {
//     return (
//         <div id="home">
//             {/* HERO */}
//             <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
//                 <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
//                     <h1 className="text-5xl font-bold">Accounting & Tax Made Simple</h1>
//                     <p className="mt-6 text-slate-600">
//                         Helping individuals & businesses stay compliant, save taxes, and grow confidently.
//                     </p>
//                     <a href="#contact" className="inline-block mt-8 bg-slate-900 text-white px-6 py-3 rounded">
//                         Book Free Consultation
//                     </a>
//                 </motion.div>
//             </section>


//             {/* ABOUT */}
//             <section id="about" className="max-w-5xl mx-auto px-6 py-20">
//                 <h2 className="text-3xl font-semibold">About Me</h2>
//                 <p className="mt-6 text-slate-600">
//                     I am a professional accountant with strong experience in tax planning,
//                     statutory compliance, and business accounting. My focus is accuracy,
//                     transparency, and long-term client relationships.
//                 </p>
//             </section>


//             {/* SERVICES */}
//             <section id="services" className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
//                 <ServiceCard title="Tax Filing & Planning" desc="Accurate filing with smart tax-saving strategies" icon="📄" />
//                 <ServiceCard title="Business Accounting" desc="Bookkeeping, payroll & reporting" icon="💼" />
//                 <ServiceCard title="Compliance & GST" desc="Stress-free regulatory compliance" icon="🛡️" />
//             </section>
//             {/* STATS */}
//             <section className="bg-slate-900 text-white py-20">
//                 <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
//                     <StatCounter value={10} label="Years Experience" />
//                     <StatCounter value={500} label="Clients Served" />
//                     <StatCounter value={100} label="Compliance Record" />
//                 </div>
//             </section>


//             {/* CONTACT */}
//             <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
//                 <h2 className="text-3xl font-semibold">Get in Touch</h2>
//                 <p className="mt-6 text-slate-600">
//                     Looking for a reliable accountant? Reach out directly — I personally handle all enquiries.
//                 </p>


//                 <div className="mt-8 space-y-4 text-lg">
//                     <p>
//                         📞 <span className="font-medium">+91 98765 43210</span>
//                     </p>
//                     <p>
//                         💬 <span className="font-medium">WhatsApp available on the same number</span>
//                     </p>
//                     <p>
//                         ✉️ <span className="font-medium">contact@yourfirmname.com</span>
//                     </p>
//                     <p className="text-slate-500 text-sm">
//                         Business Hours: Monday – Saturday, 10:00 AM – 7:00 PM
//                     </p>
//                 </div>
//             </section>
//         </div>
//     );
// }
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import StatCounter from "../components/StatCounter";


export default function Home() {
    return (
        <div id="home">
            {/* HERO */}
            <section className="max-w-7xl mx-auto px-6 py-24 grid gap-12 md:grid-cols-2 items-center">
                <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">Accounting & Tax Made Simple</h1>
                    <p className="mt-6 text-slate-600">
                        Helping individuals & businesses stay compliant, save taxes, and grow confidently.
                    </p>
                    <a href="#contact" className="inline-block mt-8 bg-slate-900 text-white px-6 py-3 rounded">
                        Book Free Consultation
                    </a>
                </motion.div>
            </section>


            {/* ABOUT */}
            <section id="about" className="max-w-5xl mx-auto px-6 py-20 text-center">
                <h2 className="text-3xl font-semibold">About Me</h2>
                <p className="mt-6 text-slate-600">
                    I am a professional accountant with strong experience in tax planning,
                    statutory compliance, and business accounting. My focus is accuracy,
                    transparency, and long-term client relationships.
                </p>
            </section>


            <section id="services" className="max-w-7xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-semibold text-center mb-12">Services</h2>
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                    <ServiceCard title="Tax Filing & Planning" desc="Accurate filing with smart tax-saving strategies" icon="📄" />
                    <ServiceCard title="Business Accounting" desc="Bookkeeping, payroll & reporting" icon="💼" />
                    <ServiceCard title="Compliance & GST" desc="Stress-free regulatory compliance" icon="🛡️" />
                </div>
            </section>


            {/* STATS */}
            <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                    <StatCounter value={10} label="Years Experience" />
                    <StatCounter value={500} label="Clients Served" />
                    <StatCounter value={100} label="Compliance Record" />
                </div>
            </section>


            {/* CONTACT */}
            <section id="contact" className="max-w-4xl mx-auto px-6 py-20 text-center">
                <h2 className="text-3xl font-semibold">Get in Touch</h2>
                <p className="mt-6 text-slate-600">
                    Looking for a reliable accountant? Reach out directly — I personally handle all enquiries.
                </p>


                <div className="mt-8 space-y-4 text-lg">
                    <p>
                        📞 <span className="font-medium">+91 98765 43210</span>
                    </p>
                    <p>
                        💬 <span className="font-medium">WhatsApp available on the same number</span>
                    </p>
                    <p>
                        ✉️ <span className="font-medium">contact@yourfirmname.com</span>
                    </p>
                    <p className="text-slate-500 text-sm">
                        Business Hours: Monday – Saturday, 10:00 AM – 7:00 PM
                    </p>
                </div>
            </section>
        </div>
    );
}