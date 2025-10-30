import React from "react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import Reviews from "./Reviews";

const teamMembers = [
  {
    id: 1,
    name: "Alexander Smith",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Alexander Smith",
    role: "Team Member",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Alexander Smith",
    role: "Team Member",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
  },
];

const Team = () => {
  return (
    <section className="w-full py-16 font-Montserrat bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">
          Our <span className="text-green-600 border-b-4 border-green-600">Teams</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          From residential installations to commercial systems, Korsmart delivers tailored
          solar services designed to maximize energy efficiency and long-term saving.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white shadow-md rounded-lg overflow-hidden w-[90%] sm:w-80 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-80 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
              <div className="flex justify-center gap-5 mt-4 text-gray-600">
                <FaInstagram className="cursor-pointer hover:text-green-600 transition" />
                <FaFacebookF className="cursor-pointer hover:text-green-600 transition" />
                <FaXTwitter className="cursor-pointer hover:text-green-600 transition" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Reviews />
    </section>
  );
};

export default Team;
