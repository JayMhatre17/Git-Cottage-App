import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white p-8 bottom-0">
        <div className="container mx-auto flex flex-wrap justify-between mt-3">
          <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p>
              <Link
                to="mailto:jay17mhatre@gmail.com"
                className="flex items-center"
              >
                <MdOutlineMailOutline /> jayprabha@gmail.com
              </Link>
            </p>
            <p>
              <Link to="tel:+91 9270326629" className="flex items-center">
                <FaPhone /> +91 9270326629
              </Link>
            </p>
            <p>
              Address:{" "}
              <Link to="https://www.google.com/maps/place/Jay+Prabha+Holiday+Home+Hotel/@18.7287728,72.8665638,17z/data=!4m6!3m5!1s0x3be87845e2dbca71:0xdf7454cdf08fcb3!8m2!3d18.7287728!4d72.8691387!16s%2Fg%2F11g8cs0gqn?entry=ttu">
                Near Bhileshwar lake, Kihim, Alibag 402208
              </Link>
            </p>
          </div>

          <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mt-4 sm:mt-0">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/images">Images</a>
              </li>
              <li>
                <a href="/location">Location</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/booking">Bookings</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mt-4 sm:mt-0">
            <h3 className="text-lg font-bold mb-2">Connect with Us</h3>
            <ul>
              <li className=" items-center">
                <a
                  href="https://www.facebook.com/TechSolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="#4267B2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                  <div>Facebook</div>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="https://www.instagram.com/TechSolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="#E1306C"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <Link to="https://www.instagram.com/jayprabha.holiday.home/">
                    Instagram
                  </Link>
                </a>
              </li>
            </ul>
            <ul className="list-none">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="#25D366"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Whatsapp:
              </li>
              <>
                <li>
                  <Link to="tel:+91 9270326629">+91 9270326629</Link>
                </li>
                <li>
                  <Link to="tel:+91 9764457976">+91 9764457976</Link>
                </li>
                <li>
                  <Link to="tel:+91 9370628695">+91 9370628695</Link>
                </li>
              </>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p>&copy; JayPrabha Holiday Home. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
