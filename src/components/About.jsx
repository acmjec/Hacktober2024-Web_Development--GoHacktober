import React from "react";
import logo from "../assets/acm_logo.png";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-200 text-black">
      {/* Header Section */}
      <header className="bg-gray-200 py-5">
        <div className="flex justify-center">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="h-16"
          />
        </div>
      </header>

      {/* Main About Section */}
      <section className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg leading-relaxed mb-8">
          ACM at Jabalpur Engineering College brings together computing
          educators, researchers, and professionals to inspire dialogue, share
          resources, and address the field's challenges.
          <br />
          <br />
          As the world’s largest computing society, ACM strengthens the
          profession’s collective voice through strong leadership, promotion of
          the highest standards, and recognition of technical excellence. ACM
          supports the professional growth of its members by providing
          opportunities for life-long learning, career development, and
          professional networking.
        </p>

        {/* Basic Info Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
          <h2 className="text-2xl font-semibold mb-4">Basic Info</h2>
          <ul className="text-left space-y-3">
            <li>
              <strong>Establishment:</strong> 30 April, 2018
            </li>
            <li>
              <strong>Phone No:</strong> 91-761-2331953
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:jecjabalpur.acm@gmail.com"
                className="text-blue-400 underline hover:text-blue-600"
              >
                jecjabalpur.acm@gmail.com
              </a>
            </li>
            <li>
              <strong>Address:</strong> Gokalpur, Jabalpur, Madhya Pradesh
              482011
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a
                href="https://www.jecjabalpur.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-600"
              >
                www.jecjabalpur.ac.in
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
