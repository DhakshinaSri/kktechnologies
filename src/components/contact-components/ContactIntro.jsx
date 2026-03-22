import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/contact-components/ContactForm";

export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 px-6 md:px-20">

        {/* Left Content */}
        <div className="lg:col-span-2 flex flex-col justify-center">

          <h2 className="text-4xl font-bold text-black mb-4 relative inline-block">
            Reach Out To Us
            <span className="absolute left-0 -bottom-2 w-72 h-1.5 bg-[#0D3B53]"></span>
          </h2>

          <h3 className="text-xl font-bold text-gray-600 mb-4">
            We’d love to hear from you!
          </h3>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Whether you have a question, a project idea, or need support, 
            our team is here to help you every step of the way.
          </p>

          <div className="space-y-8 text-gray-700">

            <div>
              <p className="font-bold mb-4 text-gray-500">Reach Us</p>

              <div className="flex items-center space-x-3 mb-4 font-semibold text-black">
                <Phone className="text-[#0D3B53] w-5 h-5" />
                <span>+91-XXXXX XXXXX</span>
              </div>

              <div className="flex items-center space-x-3 font-semibold text-black">
                <Mail className="text-[#0D3B53] w-5 h-5" />
                <span>Email: info@kktechnologies.com</span>
              </div>
            </div>

            <div>
              <p className="font-bold mb-4 text-gray-500">Our Presence</p>
              <div className="flex items-start space-x-3 font-semibold text-black">
                <MapPin className="text-[#0D3B53] w-5 h-5 mt-1" />
                <div>
                  <p className="mb-2">Tamil Nadu, India </p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-bold mb-4 text-gray-500">Our Office</p>
              <div className="flex items-start space-x-3 font-semibold text-black">
                <MapPin className="text-[#0D3B53] w-5 h-5 mt-1" />
                <div>
                  <p className="mb-2">Monday – Friday: 9:00 AM – 6:00 PM</p>
                  <p className="mb-2">Saturday: 10:00 AM – 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-3 flex items-center">
          <ContactForm />
        </div>

      </div>

    </section>
  );
}