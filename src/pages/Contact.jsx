export default function Contact() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-semibold">Contact Me</h2>
            <form className="mt-8 grid gap-6">
                <input className="border p-3 rounded" placeholder="Your Name" />
                <input className="border p-3 rounded" placeholder="Email" />
                <textarea className="border p-3 rounded" placeholder="Message" />
                <button className="bg-slate-900 text-white py-3 rounded">Send Message</button>
            </form>
        </div>
    );
}