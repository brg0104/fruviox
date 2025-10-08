// "use client";

// import { useState } from "react";
// import { Button } from "../components/Button";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // You can replace this with API call or email integration
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center bg-[#121315] text-white px-6 py-20 animate-fade-in">
//       <div className="max-w-5xl w-full bg-[#F4F4F4] rounded-3xl p-10 md:p-16 text-black shadow-lg grid grid-cols-1 md:grid-cols-2 gap-10">
        
//         {/* LEFT: Contact Form */}
//         <div>
//           <h1 className="text-4xl font-bold mb-4">Let's Connect 👋</h1>
//           <p className="text-gray-600 mb-8">
//             Have a question, project idea, or collaboration in mind?  
//             Drop me a message and I’ll get back to you soon!
//           </p>

//           <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />

//             <textarea
//               name="message"
//               placeholder="Your Message"
//               rows={5}
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             ></textarea>

//             <Button
//               type="submit"
//               variant="default"
//               size="lg"
//               className="bg-yellow-500 text-black rounded-full hover:scale-105 transition-transform duration-300 font-semibold"
//             >
//               Send Message 🚀
//             </Button>
//           </form>
//         </div>

//         {/* RIGHT: Contact Info */}
//         <div className="flex flex-col justify-center items-start md:items-end gap-6">
//           <div className="bg-[#121315] text-white rounded-2xl p-6 w-full md:w-80 shadow-md">
//             <h2 className="text-xl font-semibold mb-2 text-yellow-400">Contact Info</h2>
//             <p className="text-gray-300 mb-2">📧 hello@yourdomain.com</p>
//             <p className="text-gray-300 mb-2">📞 +91 98765 43210</p>
//             <p className="text-gray-300">📍 Mumbai, India</p>
//           </div>

//           <div className="bg-[#121315] text-white rounded-2xl p-6 w-full md:w-80 shadow-md">
//             <h2 className="text-xl font-semibold mb-2 text-yellow-400">Follow Me</h2>
//             <div className="flex gap-4">
//               <a href="#" className="hover:text-yellow-400 transition">Instagram</a>
//               <a href="#" className="hover:text-yellow-400 transition">LinkedIn</a>
//               <a href="#" className="hover:text-yellow-400 transition">Twitter</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fadeIn 0.8s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import BottomPage from "../bottom/Page";

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  description: string;
  agree: boolean;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    description: "",
    agree: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message);

      if (response.ok) {
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          description: "",
          agree: false,
        });
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="relative min-h-screen p-10"
      style={{ fontFamily: "'Righteous', cursive", backgroundColor: "#f4f4f4" }}
    >
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');`}
      </style>

      <h1 className="text-9xl font-bold text-[#ffffff] mb-12 text-center z-10 relative pt-16">
        Contact Us
      </h1>

      <div className="text-center mt-8 text-lg flex flex-col gap-3">
        <span>Email</span>
        <span className="text-7xl font-light">contact.fruviox@gmail.com</span>
      </div>

      {/* Contact Form */}
      <div className="mt-20 w-full mx-auto p-10 bg-[#f4f4f4] rounded-2xl">
        <h2 className="text-2xl font-semibold mb-8 text-center">Get in Touch</h2>

        <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="p-4 border-b-2 border-[#F0B100] focus:outline-none focus:border-[#d49b00] bg-transparent transition-colors duration-300"
            required
          />

          {/* Company */}
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company (optional)"
            className="p-4 border-b-2 border-[#F0B100] focus:outline-none focus:border-[#d49b00] bg-transparent transition-colors duration-300"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="p-4 border-b-2 border-[#F0B100] focus:outline-none focus:border-[#d49b00] bg-transparent transition-colors duration-300"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-4 border-b-2 border-[#F0B100] focus:outline-none focus:border-[#d49b00] bg-transparent transition-colors duration-300"
            required
          />

          {/* Description */}
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="p-4 border-b-2 border-[#F0B100] focus:outline-none focus:border-[#d49b00] bg-transparent h-40 resize-none transition-colors duration-300"
            required
          ></textarea>

          {/* Privacy & Submit */}
          <div className="flex flex-col items-center mt-6">
            <label className="flex items-center mb-3 text-sm">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mr-2 w-4 h-4 accent-[#F0B100]"
                required
              />
              I agree with the{" "}
              <a href="/privacy" className="text-[#F0B100] underline">
                privacy policy
              </a>
            </label>

            <button
              type="submit"
              className="bg-white text-black border border-black px-8 py-4 rounded-full hover:bg-gray-100 transition w-1/3"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <BottomPage />
    </div>
  );
}
