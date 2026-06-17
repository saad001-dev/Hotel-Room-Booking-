import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  Star,
  MapPin,
  Users,
  Bed,
  Bath,
  Wifi,
  Coffee,
  Car,
  Utensils,
  Tv,
  Wind,
  ChevronLeft,
  Calendar,
  CheckCircle,
  ThumbsUp,
  MessageCircle,
  Share2,
  Heart,
  X,
} from "lucide-react";

// Destinations data
const destinations = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500",
    name: "Luxury Suite Ocean View",
    address: "Main Road 123 Street, 23 Colony",
    price: 399,
    originalPrice: 599,
    isBestSeller: true,
    rating: 4.8,
    reviews: 234,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500",
    name: "Premium King Suite",
    address: "Main Road 123 Street, 23 Colony",
    price: 299,
    originalPrice: 499,
    isBestSeller: false,
    rating: 4.6,
    reviews: 189,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500",
    name: "Family Deluxe Room",
    address: "Main Road 12 Street, 23 Colony",
    price: 249,
    originalPrice: 399,
    isBestSeller: false,
    rating: 4.5,
    reviews: 156,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500",
    name: "Cozy Standard Room",
    address: "Main Road 123 Street, 23 Colony",
    price: 199,
    originalPrice: 299,
    isBestSeller: false,
    rating: 4.3,
    reviews: 98,
  },
];

// Bed options
const bedOptions = [
  {
    id: 1,
    type: "Single Bed",
    count: 1,
    price: 30,
    image:
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?w=300",
  },
  {
    id: 2,
    type: "Double Bed",
    count: 1,
    price: 50,
    image:
      "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?w=300",
  },
  {
    id: 3,
    type: "Queen Bed",
    count: 1,
    price: 100,
    image:
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?w=300",
  },
  {
    id: 4,
    type: "King Bed",
    count: 1,
    price: 150,
    image:
      "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?w=300",
  },
  {
    id: 5,
    type: "2 Double Beds",
    count: 2,
    price: 180,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300",
  },
];

// Reviews data
const reviews = [
  {
    id: 1,
    name: "John Smith",
    rating: 5,
    date: "March 2025",
    comment:
      "Absolutely amazing experience! The room was spotless and the service was impeccable. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    rating: 5,
    date: "February 2025",
    comment:
      "Best hotel stay ever! The ocean view was breathtaking and the staff was very friendly.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Mike Brown",
    rating: 4,
    date: "February 2025",
    comment:
      "Great location and comfortable beds. Only minor issue was the wifi speed.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    rating: 5,
    date: "January 2025",
    comment:
      "Luxury at its finest! Everything was perfect from check-in to check-out.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "David Wilson",
    rating: 4,
    date: "January 2025",
    comment:
      "Very good value for money. The premium amenities were worth every penny.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const Room = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const room = destinations.find((item) => item.id === parseInt(id));

  const [selectedBeds, setSelectedBeds] = useState(1);
  const [selectedRating, setSelectedRating] = useState("all");

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupPosition, setPopupPosition] = useState("side");
  const [wishlistStatus, setWishlistStatus] = useState(false);
  const [showWishlistFeedback, setShowWishlistFeedback] = useState(false);

  // Email states
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    specialRequests: "",
  });

  // YOUR EMAILJS CONFIGURATION (From .env file)
  const EMAILJS_CONFIG = {
    SERVICE_ID: "service_c0q2yci", // Your Service ID
    TEMPLATE_ID: "template_h28agcf", // Your Template ID
    PUBLIC_KEY: "qEsgm6YgqQFx1pAmH", // Your Public Key
  };

  // If no specific room (direct /room)
  if (!room) {
    return (
      <div className="min-h-screen pt-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
              All Hotels & Rooms
            </h1>
            <p className="text-gray-600 text-base sm:text-lg">
              Choose from our collection of luxury accommodations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {destinations.map((dest) => (
              <Link
                key={dest.id}
                to={`/room/${dest.id}`}
                state={{ room: dest }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 xs:h-56 sm:h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {dest.isBestSeller && (
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold">
                      Best Seller
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white/95 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-3 sm:py-1.5 shadow-lg">
                    <div className="text-xs text-gray-500 line-through">
                      ${dest.originalPrice}
                    </div>
                    <div className="text-base sm:text-xl font-bold text-gray-900">
                      ${dest.price}
                      <span className="text-xs font-normal text-gray-500">
                        /night
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs sm:text-sm font-semibold">
                      {dest.rating}
                    </span>
                    <span className="text-xs text-gray-500">
                      ({dest.reviews} reviews)
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition line-clamp-1">
                    {dest.name}
                  </h3>
                  <div className="flex items-start gap-1 text-gray-500 mb-4">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm line-clamp-1">
                      {dest.address}
                    </span>
                  </div>
                  <button className="w-full py-2 sm:py-2.5 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition text-sm sm:text-base">
                    View Details
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Room detail view
  const filteredReviews =
    selectedRating === "all"
      ? reviews
      : reviews.filter((r) => r.rating === parseInt(selectedRating));

  const averageRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);

  const ratingDistribution = {
    5: reviews.filter((r) => r.rating === 5).length,
    4: reviews.filter((r) => r.rating === 4).length,
    3: reviews.filter((r) => r.rating === 3).length,
    2: reviews.filter((r) => r.rating === 2).length,
    1: reviews.filter((r) => r.rating === 1).length,
  };

  const selectedBed = bedOptions.find((b) => b.id === selectedBeds);
  const totalPrice = room.price + (selectedBed?.price || 0);
  const totalWithTax = Math.round(totalPrice * 1.12);
  const today = new Date().toISOString().split("T")[0];

  // Generate Booking ID
  const generateBookingId = () => {
    return "HOTEL-" + Math.random().toString(36).substr(2, 8).toUpperCase();
  };

  // Send Email Function
  const sendBookingEmail = async (bookingData) => {
    setIsSendingEmail(true);

    const templateParams = {
      guestName: bookingData.name,
      guestEmail: bookingData.email,
      guestPhone: bookingData.phone,
      roomName: room.name,
      bedType: selectedBed?.type || "Standard Bed",
      checkInDate: bookingData.checkIn,
      checkOutDate: bookingData.checkOut,
      guestCount: bookingData.guests,
      specialRequests: bookingData.specialRequests || "None",
      totalAmount: `$${totalWithTax}`,
      roomPrice: `$${room.price}`,
      bedUpgrade: selectedBed?.price > 0 ? `+$${selectedBed.price}` : "None",
      taxes: `$${Math.round(totalPrice * 0.12)}`,
      bookingId: bookingData.bookingId,
      bookingDate: new Date().toLocaleString(),
      hotelAddress: room.address,
    };

    console.log("Sending email with params:", templateParams);

    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY,
      );
      console.log("Email sent successfully:", response);
      return true;
    } catch (error) {
      console.error("Email send error details:", error);
      throw error;
    } finally {
      setIsSendingEmail(false);
    }
  };

  const handleBookNow = () => {
    setPopupPosition("side");
    setIsPopupOpen(true);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Updated handleSubmit with email
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate dates
    if (formData.checkIn >= formData.checkOut) {
      alert("Check-out date must be after check-in date");
      return;
    }

    const bookingId = generateBookingId();
    const bookingData = {
      ...formData,
      bookingId: bookingId,
    };

    setBookingDetails(bookingData);

    try {
      await sendBookingEmail(bookingData);

      // Close booking popup and show success
      setIsPopupOpen(false);
      setShowSuccessPopup(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: 1,
        specialRequests: "",
      });

      // Auto close success popup after 5 seconds
      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 5000);
    } catch (error) {
      alert("Booking failed! Please try again or contact support.");
      console.error("Booking error:", error);
    }
  };

  const handleWishlist = () => {
    setWishlistStatus(!wishlistStatus);
    setShowWishlistFeedback(true);
    setTimeout(() => setShowWishlistFeedback(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: room.name, url: window.location.href });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button - Responsive positioning */}
      <div className="fixed top-3 left-3 sm:top-4 sm:left-4 z-50">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1 sm:gap-2 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg hover:bg-white transition-all text-sm sm:text-base"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden xs:inline">Back to Rooms</span>
          <span className="xs:hidden">Back</span>
        </button>
      </div>

      {/* Hero Image */}
      <div
        className="relative h-[40vh] xs:h-[45vh] sm:h-[50vh] md:h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${room.image})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2 line-clamp-2">
              {room.name}
            </h1>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-white text-xs sm:text-sm md:text-base">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{averageRating}</span>
                <span className="text-gray-300">
                  ({reviews.length} reviews)
                </span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="line-clamp-1">{room.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Bed Selection */}
            <div className="w-full bg-white rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-4 md:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
                <Bed className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-indigo-600" />
                Select Your Bed Type
              </h2>
              <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                {bedOptions.map((bed) => (
                  <div
                    key={bed.id}
                    className={`cursor-pointer rounded-lg sm:rounded-xl border-2 transition-all ${
                      selectedBeds === bed.id
                        ? "border-indigo-600 bg-indigo-50"
                        : "border-gray-200 hover:border-indigo-300"
                    }`}
                    onClick={() => setSelectedBeds(bed.id)}
                  >
                    <div
                      className="h-20 xs:h-24 sm:h-28 md:h-32 bg-cover bg-center rounded-t-lg sm:rounded-t-xl"
                      style={{ backgroundImage: `url(${bed.image})` }}
                    ></div>
                    <div className="p-1.5 sm:p-2 md:p-3">
                      <div className="font-semibold text-xs sm:text-sm">
                        {bed.type}
                      </div>
                      <div className="text-[10px] xs:text-xs text-gray-500">
                        {bed.count} bed{bed.count > 1 ? "s" : ""}
                      </div>
                      {bed.price > 0 && (
                        <div className="text-[10px] xs:text-xs text-indigo-600 font-semibold mt-0.5 sm:mt-1">
                          +${bed.price}/night
                        </div>
                      )}
                      {selectedBeds === bed.id && (
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-600 mt-0.5 sm:mt-1" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-5 md:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                Premium Amenities
              </h2>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                {[
                  { icon: Wifi, name: "Free WiFi", premium: false },
                  { icon: Tv, name: "Smart TV", premium: false },
                  { icon: Wind, name: "AC", premium: false },
                  { icon: Coffee, name: "Coffee Maker", premium: true },
                  { icon: Bath, name: "Jacuzzi", premium: true },
                  { icon: Utensils, name: "24/7 Room Service", premium: true },
                  { icon: Car, name: "Free Parking", premium: false },
                  { icon: Users, name: "Concierge", premium: true },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg"
                  >
                    <item.icon
                      className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${item.premium ? "text-amber-500" : "text-gray-600"}`}
                    />
                    <div className="min-w-0">
                      <span className="text-xs sm:text-sm">{item.name}</span>
                      {item.premium && (
                        <span className="ml-1 sm:ml-2 text-[9px] sm:text-xs bg-amber-100 text-amber-700 px-1 py-0.5 rounded whitespace-nowrap">
                          Premium
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-5 md:p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400" />
                  Guest Reviews
                </h2>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {["all", 5, 4, 3, 2, 1].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setSelectedRating(rating)}
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                        selectedRating === rating
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {rating === "all" ? "All" : `${rating}★`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rating Summary */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 p-3 sm:p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
                <div className="text-center sm:text-left">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-600">
                    {averageRating}
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-0.5 sm:gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${star <= averageRating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">
                    Based on {reviews.length} reviews
                  </div>
                </div>
                <div className="flex-1 space-y-1.5 sm:space-y-2">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <div
                      key={star}
                      className="flex items-center gap-1.5 sm:gap-2"
                    >
                      <span className="text-xs sm:text-sm w-6 sm:w-8">
                        {star}★
                      </span>
                      <div className="flex-1 h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-amber-500 rounded-full"
                          style={{
                            width: `${(ratingDistribution[star] / reviews.length) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-[10px] sm:text-xs text-gray-500 w-5 sm:w-8 text-right">
                        {ratingDistribution[star]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews List */}
              <div className="space-y-4 sm:space-y-6">
                {filteredReviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b border-gray-100 pb-4 sm:pb-6 last:border-0"
                  >
                    <div className="flex items-start gap-2 sm:gap-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2">
                          <div>
                            <div className="font-semibold text-sm sm:text-base">
                              {review.name}
                            </div>
                            <div className="flex items-center gap-0.5 sm:gap-1 mt-0.5 sm:mt-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="text-[10px] sm:text-xs text-gray-400">
                            {review.date}
                          </div>
                        </div>
                        <p className="text-gray-600 mt-1.5 sm:mt-2 text-xs sm:text-sm">
                          {review.comment}
                        </p>
                        <div className="flex items-center gap-3 sm:gap-4 mt-2 sm:mt-3">
                          <button className="flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs text-gray-400 hover:text-indigo-600">
                            <ThumbsUp className="w-2.5 h-2.5 sm:w-3 sm:h-3" />{" "}
                            Helpful
                          </button>
                          <button className="flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs text-gray-400 hover:text-indigo-600">
                            <MessageCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3" />{" "}
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 sm:top-6 md:top-8 bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-5 md:p-6 border border-gray-100">
              <div className="text-center mb-4 sm:mb-6">
                <div className="text-2xl sm:text-3xl font-bold text-indigo-600">
                  ${totalPrice}
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  /night + taxes & fees
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex justify-between py-1.5 sm:py-2 border-b text-sm sm:text-base">
                  <span>Room Rate</span>
                  <span className="font-semibold">${room.price}</span>
                </div>
                {selectedBed?.price > 0 && (
                  <div className="flex justify-between py-1.5 sm:py-2 border-b text-sm sm:text-base">
                    <span>{selectedBed.type} Upgrade</span>
                    <span className="font-semibold">+${selectedBed.price}</span>
                  </div>
                )}
                <div className="flex justify-between py-1.5 sm:py-2 border-b text-sm sm:text-base">
                  <span>Taxes & Fees</span>
                  <span>${Math.round(totalPrice * 0.12)}</span>
                </div>
                <div className="flex justify-between py-1.5 sm:py-2 text-base sm:text-lg font-bold">
                  <span>Total</span>
                  <span className="text-indigo-600">${totalWithTax}</span>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <button
                  onClick={handleBookNow}
                  className="w-full bg-indigo-600 text-white py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  Book Now
                </button>
                <button
                  onClick={handleWishlist}
                  className={`w-full border-2 py-2.5 sm:py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base ${
                    wishlistStatus
                      ? "bg-pink-50 border-pink-300 text-pink-600"
                      : "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 text-gray-700"
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${wishlistStatus ? "fill-pink-600 text-pink-600" : ""}`}
                  />
                  <span className="hidden xs:inline">
                    {wishlistStatus ? "Saved to Wishlist" : "Save to Wishlist"}
                  </span>
                  <span className="xs:hidden">
                    {wishlistStatus ? "Saved" : "Save"}
                  </span>
                </button>
                <button
                  onClick={handleShare}
                  className="w-full text-gray-500 py-1.5 sm:py-2 text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  Share this room
                </button>
              </div>

              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t text-center">
                <div className="flex items-center justify-center gap-1 text-green-600 text-[10px] sm:text-xs">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                  Free cancellation up to 7 days
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wishlist Feedback */}
      {showWishlistFeedback && (
        <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl shadow-lg flex items-center gap-1.5 sm:gap-2 z-50 text-xs sm:text-sm">
          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
          {wishlistStatus ? "Added to wishlist!" : "Removed from wishlist"}
        </div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && bookingDetails && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-3 sm:px-4">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setShowSuccessPopup(false)}
          />
          <div className="relative bg-white rounded-xl sm:rounded-2xl max-w-md w-full p-4 sm:p-6 shadow-2xl mx-3 sm:mx-4">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                Booking Confirmed! 🎉
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                Thank you {bookingDetails.name}! Your booking has been
                confirmed.
              </p>
              <div className="bg-gray-50 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 text-left">
                <p className="text-xs sm:text-sm font-semibold text-gray-800 break-all">
                  Booking ID: {bookingDetails.bookingId}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1.5 sm:mt-2 break-words">
                  A confirmation email has been sent to{" "}
                  <strong className="break-all">{bookingDetails.email}</strong>
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-1.5 sm:mt-2">
                  Check-in: {bookingDetails.checkIn} | Check-out:{" "}
                  {bookingDetails.checkOut}
                </p>
              </div>
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="w-full bg-indigo-600 text-white py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all cursor-pointer text-sm sm:text-base"
              >
                Great!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Booking Popup */}
      {isPopupOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsPopupOpen(false)}
          />
          <div
            className={`fixed z-50 bg-white shadow-2xl transition-all duration-300 ease-out ${
              popupPosition === "side"
                ? "right-0 top-0 h-full w-full max-w-md rounded-l-2xl"
                : "top-0 left-0 right-0 w-full rounded-b-2xl"
            }`}
          >
            <div className="flex justify-between items-center p-4 sm:p-6 border-b">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                Complete Your Booking
              </h2>
              <button
                onClick={() => setIsPopupOpen(false)}
                className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
              </button>
            </div>
            <div
              className="p-4 sm:p-6 overflow-y-auto"
              style={{ maxHeight: "calc(100% - 80px)" }}
            >
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-indigo-50 rounded-xl">
                <p className="text-indigo-800 font-semibold text-sm sm:text-base">
                  {room.name}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">
                  {selectedBed?.type} • {room.address}
                </p>
                <p className="text-xl sm:text-2xl font-bold text-indigo-600 mt-1.5 sm:mt-2">
                  ${totalPrice}{" "}
                  <span className="text-xs sm:text-sm font-normal text-gray-600">
                    / night
                  </span>
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-3 sm:space-y-4 md:space-y-5"
              >
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Check-in *
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      required
                      min={today}
                      className="w-full px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Check-out *
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      required
                      min={formData.checkIn || today}
                      className="w-full px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Number of Guests *
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} Guest{num > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    placeholder="Any special requests or preferences?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSendingEmail}
                  className="w-full bg-indigo-600 text-white py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all mt-2 sm:mt-4 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSendingEmail
                    ? "Sending Confirmation..."
                    : `Confirm Booking — $${totalWithTax}`}
                </button>
              </form>
              <p className="text-center text-gray-400 text-[10px] sm:text-xs mt-4 sm:mt-6">
                Free cancellation within 24 hours • Best price guaranteed
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Room;
