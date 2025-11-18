import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="max-w-xl w-full text-center">
        
        {/* ICON */}
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-20 w-20 text-green-600" />
        </div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Thank You!
        </h1>

        {/* SUBTITLE */}
        <p className="mt-4 text-lg md:text-xl text-muted-foreground">
          Your message has been successfully sent.  
          Our team will reach out to you shortly.
        </p>

        {/* CARD */}
        <div className="mt-8 bg-white rounded-2xl shadow-[0_20px_45px_rgba(0,0,0,0.12)] p-6 md:p-8">
          <p className="text-md md:text-lg text-gray-700 leading-relaxed">
            We appreciate your interest in working with us.  
            In the meantime, feel free to explore our services or return to the homepage.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-6 py-3 rounded-xl font-semibold text-white 
              bg-gradient-to-r from-[#E05D35] to-[#f77b4f] shadow hover:shadow-lg transition"
            >
              Back to Home
            </Link>

            <Link
              to="/services"
              className="px-6 py-3 rounded-xl font-semibold border border-gray-300 
              text-foreground hover:bg-gray-100 transition"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
