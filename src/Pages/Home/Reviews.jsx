import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Barbara D. Smith",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=100&q=80",
    text: "I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn't be happier with our new place!",
    rating: 4,
  },
  {
    id: 2,
    name: "Barbara D. Smith",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=100&q=80",
    text: "I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn't be happier with our new place!",
    rating: 4,
  },
];

const Reviews = () => {
  return (
    <section className="w-full py-16 px-4 md:px-20 2xl:px-14 bg-white font-Montserrat">
      {/* Header */}
      <div className="text-left mb-10">
        <h2 className="text-3xl font-bold mb-2">
          Reviews
          <span className="block w-16 h-1 bg-green-600 mt-1"></span>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <FaQuoteLeft className="text-green-600 text-4xl mb-4" />
            <p className="text-gray-700 mb-6 leading-relaxed">{review.text}</p>
            <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-10 h-10 2xl:w-16 2xl:h-16 rounded-full object-cover"
                />
                <h4 className="font-semibold text-gray-900">{review.name}</h4>
              </div>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < review.rating ? "text-yellow-500" : "text-gray-300"}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
