export default function Navbar() {
    return (
        <nav className="sticky top-0 bg-white/80 backdrop-blur shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-lg md:text-xl font-bold">PERIASAMY | Accountant</h1>
                <div className="hidden md:flex space-x-6 text-sm font-medium">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact" className="text-slate-900">Contact</a>
                </div>
            </div>
        </nav>
    );
}