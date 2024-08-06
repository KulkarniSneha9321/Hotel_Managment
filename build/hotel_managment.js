"use strict";
const hotels = [
    {
        id: 1,
        name: "Luxury Inn",
        location: "City Center",
        roomTypes: ["Single", "Double", "Suite"],
    },
    {
        id: 2,
        name: "Seaside Resort",
        location: "Beachfront",
        roomTypes: ["Standard", "Ocean View", "Penthouse"],
    },
    {
        id: 3,
        name: "Clarks Inn",
        location: "Bangalore",
        roomTypes: ["Single", "Double"],
    },
    {
        id: 4,
        name: "Hotel Court",
        location: "Hydrabad",
        roomTypes: ["Single", "Double", "Dulex"],
    },
    {
        id: 5,
        name: "Hotel Rajadhani",
        location: "Badami",
        roomTypes: ["Single", "Double", "Dulex"],
    },
];
function bookHotel(hotelId, bookingDate, roomType) {
    const selectedHotel = hotels.find((hotel) => hotel.id === hotelId);
    if (!selectedHotel) {
        console.log("Hotel not found. Please choose a valid hotel ID.");
        return;
    }
    console.log(`Booking confirmed at ${selectedHotel.name} on ${bookingDate.toDateString()} for a ${roomType} room.`);
}
const hotelId = 5;
const bookingDate = new Date("2024-08-10");
const roomType = "Standard";
bookHotel(hotelId, bookingDate, roomType);
