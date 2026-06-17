import React, { useState } from "react";
import { assets, cities } from "../assets/assets";
import heroImage from "../assets/heroImage.png";
import Toast from "./Toast";

const Hero = () => {
  const [formData, setFormData] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  // Random availability checker
  const checkAvailability = () => {
    // Random true/false with 50% probability
    return Math.random() < 0.5;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id === "destinationInput" ? "destination" : id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.destination) {
      setToast({
        show: true,
        message: "Please select a destination",
        type: "error",
      });
      return;
    }
    if (!formData.checkIn) {
      setToast({
        show: true,
        message: "Please select check-in date",
        type: "error",
      });
      return;
    }
    if (!formData.checkOut) {
      setToast({
        show: true,
        message: "Please select check-out date",
        type: "error",
      });
      return;
    }
    if (formData.checkIn > formData.checkOut) {
      setToast({
        show: true,
        message: "Check-out date must be after check-in date",
        type: "error",
      });
      return;
    }

    const isAvailable = checkAvailability();

    if (isAvailable) {
      setToast({
        show: true,
        message: ` Great news! Rooms are available in ${formData.destination} for your selected dates!`,
        type: "success",
      });
    } else {
      setToast({
        show: true,
        message: ` Sorry, no rooms available in ${formData.destination} for the selected dates. Please try different dates.`,
        type: "error",
      });
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${heroImage})` }}
      className="flex flex-col items-start justify-center px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-no-repeat bg-cover bg-center min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-32"
    >
      {/* Toast Notification */}
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: "", type: "" })}
        />
      )}

      {/* Badge/Pill */}
      <p className="bg-[#49B9FF]/50 px-3.5 py-1 rounded-full text-xs sm:text-sm md:text-base inline-block mb-3 sm:mb-4">
        The Ultimate Hotel Experience
      </p>

      {/* Main Heading */}
      <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold md:font-extra-bold max-w-xl lg:max-w-2xl mt-2 sm:mt-3 md:mt-4 leading-tight sm:leading-tight md:leading-[1.2] lg:leading-[1.3] xl:leading-[56px]">
        Discover Your Perfect Gateway Destination
      </h1>

      {/* Description */}
      <p className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg mt-2 sm:mt-3 md:mt-4">
        Unparalleled luxury and Comfort await at the world's most exclusive
        hotels and resorts. Start Your journey today.
      </p>
    </div>
  );
};

export default Hero;
