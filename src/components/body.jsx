import React from 'react';

const Body = () => {
  return (
    <div className="relative w-screen overflow-x-hidden">

      {/* Hero Image Section */}
      <div className="relative w-screen h-screen">
        <img
          className="w-full h-full object-cover opacity-50 transition-transform duration-700 hover:scale-110 m-3 rounded-2xl"
          src="/Images/JU1.jpg"
          alt="Jadavpur University"
        />
        <div className="absolute top-60 right-10 text-black text-5xl font-extrabold drop-shadow-lg">
          Jadavpur University
          <div className="text-amber-700 hover:text-amber-900 mt-2 text-xl transition duration-500 hover:underline">
            JUSB Student Branch | Innovate, Inspire, Lead
          </div>
        </div>
      </div>

      {/* About & Chapters Section */}
      <div className="relative w-screen mt-14">
        <img
          className="w-full h-full object-cover opacity-40 transition-transform duration-700 hover:scale-110 m-3 rounded-2xl"
          src="/Images/back2.jpg"
          alt=""
        />
        <div className="mt-10 flex flex-col lg:flex-row justify-center items-start gap-10 absolute top-40 px-10 w-full">
          
          {/* About Us Box */}
          <div className="bg-blue-100 text-black text-2xl font-bold p-6 rounded-2xl w-full lg:w-1/2 transition-transform duration-500 hover:scale-105 shadow-xl">
            <div className="text-center underline text-3xl mb-2">ABOUT US</div>
            <div className="text-justify text-2xl p-2">
              As one of the oldest universities of the country, Jadavpur University, and its students have a certain duty - the duty to give back to society across all disciplines and inculcate the habit of thinking in every individual who comes along. The IEEE Jadavpur University Student Branch is one little endeavor in that process...
              <br /><br />
              <a className="text-blue-800 underline mt-2 inline-block" href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer">
                More about IEEE
              </a>
            </div>
          </div>

          {/* Chapters Box */}
          <div className="bg-blue-100 text-black text-2xl font-bold p-6 rounded-2xl w-full lg:w-1/2 min-h-[400px] transition-transform duration-500 hover:scale-105 shadow-xl">
            <p className="underline text-center text-3xl">STUDENT BRANCH CHAPTERS</p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <img className="w-40" src="/Images/comsoc.png" alt="ComSoc" />
              <img className="w-40" src="/Images/cs.png" alt="CS" />
              <img className="w-40" src="/Images/ias.png" alt="IAS" />
              <img className="w-40" src="/Images/pes.png" alt="PES" />
              <img className="w-40" src="/Images/wie.png" alt="WIE" />
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[90px]"></div>

      {/* Past Sponsors */}
      <div className="text-center bg-yellow-100 p-10 text-2xl font-bold m-3 rounded-2xl">
        <p className="underline">PAST SPONSORS</p>
        <img
          className="mt-10 mx-auto transition-transform duration-500 hover:scale-105 rounded-3xl"
          src="/Images/ps.png"
          alt="Past Sponsors"
        />
      </div>

      {/* Contact Us Section */}
      <div className="bg-gradient-to-b from-yellow-100 to-white py-20 px-6 md:px-20 mt-20">
        <h2 className="text-4xl font-bold text-center underline mb-14">CONTACT US</h2>
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Contact Form */}
          <div className="bg-blue-50 p-8 rounded-xl shadow-lg flex-1 transform transition-transform duration-500 hover:scale-105">
            <form className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <input type="text" placeholder="Your Name" className="w-full border border-black rounded-md px-4 py-2 focus:outline-none" />
                <input type="email" placeholder="Your Email" className="w-full border border-black rounded-md px-4 py-2 focus:outline-none" />
              </div>
              <input type="text" placeholder="Subject" className="w-full border border-black rounded-md px-4 py-2 focus:outline-none" />
              <textarea placeholder="Message" rows="6" className="w-full border border-black rounded-md px-4 py-2 focus:outline-none"></textarea>
              <div className="text-center">
                <button type="submit" className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-8 py-2 rounded-md shadow-md transition">
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="flex flex-col gap-6 flex-1">
            <div className="bg-yellow-400 p-6 rounded-xl shadow-md text-center transform transition-transform duration-500 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">Our Address</h3>
              <p>Jadavpur University</p>
              <p>188, Raja S.C. Mallick Rd, Jadavpur</p>
              <p>Kolkata - 700032</p>
              <p>Phone: +91 33 2414 6666</p>
            </div>
            <div className="bg-yellow-400 p-6 rounded-xl shadow-md text-center transform transition-transform duration-500 hover:scale-105">
              <div className="flex justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 4H8m8-8H8m-4 0h.01M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-1">Email Us</h3>
              <p>jaduniv.ieee@gmail.com</p>
            </div>

            {/* Map */}
            <div className="rounded-xl shadow-md overflow-hidden transform transition-transform duration-500 hover:scale-105">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.583509331249!2d88.3672715743859!3d22.599185332910875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027132fb5bbac3%3A0xfdf3349bc6d7c89f!2sJadavpur%20University!5e0!3m2!1sen!2sin!4v1642842528383!5m2!1sen!2sin"
                width="100%" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Jadavpur University Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-yellow-100 text-black px-10 py-12 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-lg">
          
          {/* IEEE JUSB Info */}
          <div>
            <h2 className="text-2xl font-bold underline mb-4">IEEE JUSB</h2>
            <p>
              The Jadavpur University IEEE student branch, founded in 2010, belongs to the Kolkata section of Region 10 of the organization. We are a group of enthusiastic students who are promoting innovative ideas both within and outside the campus.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="text-2xl font-bold underline mb-4">Useful Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Chapters</a></li>
              <li><a href="#" className="hover:underline">Events</a></li>
              <li><a href="#" className="hover:underline">Sponsors</a></li>
              <li><a href="#" className="hover:underline">Team</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold underline mb-4">Contact Us</h2>
            <p>Jadavpur University 188, Raja S.C. Mallick Rd, Kolkata-700032 India</p>
            <p className="mt-2">Phone: +91 98361 05125</p>
            <p>Email: <a href="mailto:jaduniv.ieee@gmail.com" className="text-blue-800 hover:underline">jaduniv.ieee@gmail.com</a></p>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="text-2xl font-bold underline mb-4">Follow Us</h2>
            <ul className="space-y-3">
              <li>
                <a href="https://x.com/IeeeJadavpur" className="flex items-center gap-2 hover:text-blue-700 transition-colors">
                  <i className="fab fa-x-twitter text-xl"></i> Twitter
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/ieeejusb" className="flex items-center gap-2 hover:text-blue-700 transition-colors">
                  <i className="fab fa-facebook text-xl"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/_ieeeju/" className="flex items-center gap-2 hover:text-pink-600 transition-colors">
                  <i className="fab fa-instagram text-xl"></i> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/ieee-ju" className="flex items-center gap-2 hover:text-blue-900 transition-colors">
                  <i className="fab fa-linkedin text-xl"></i> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-black mt-10 pt-6 text-center text-sm">
          © Copyright IEEE JUSB. All Rights Reserved
          <br />
          Made with <span className="text-red-600">❤</span> by IEEE JUSB
        </div>
      </footer>
    </div>
  );
};

export default Body;
