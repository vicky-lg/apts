import CountUp from "react-countup";


export default function StatCounter({ value, label }) {
    return (
        <div className="text-center">
            <h3 className="text-4xl font-bold">
                <CountUp end={value} duration={2} />+
            </h3>
            <p className="text-slate-600 mt-2">{label}</p>
        </div>
    );
}