"use strict";
const hotels = [
    {
        id: 1,
        name: "Luxury Inn",
        location: "City Center",
        roomTypes: ["Single", "Double", "Suite"],
        no_of_available_room: 4,
    },
    {
        id: 2,
        name: "Seaside Resort",
        location: "Beachfront",
        roomTypes: ["Standard", "Ocean View", "Penthouse"],
        no_of_available_room: 5,
    },
    {
        id: 3,
        name: "Clarks Inn",
        location: "Bangalore",
        roomTypes: ["Single", "Double"],
        no_of_available_room: 5,
    },
    {
        id: 4,
        name: "Hotel Court",
        location: "Hydrabad",
        roomTypes: ["Single", "Double", "Dulex"],
        no_of_available_room: 7,
    },
    {
        id: 5,
        name: "Hotel Rajadhani",
        location: "Badami",
        roomTypes: ["Single", "Double", "Dulex"],
        no_of_available_room: 8,
    },
];
function bookHotel(hotelId, bookingDate, roomType, no_of_available_room) {
    const selectedHotel = hotels.find((hotel) => hotel.id === hotelId);
    if (!selectedHotel) {
        console.log("Hotel not found. Please choose a valid hotel ID.");
        return;
    }
    console.log(`Booking confirmed at ${selectedHotel.name} on ${bookingDate.toDateString()} for a ${roomType} room and ${no_of_available_room}.`);
}
const hotelId = 6;
const bookingDate = new Date("2024-08-10");
const roomType = "Standard";
const no_of_available_room = 5;
bookHotel(hotelId, bookingDate, roomType, no_of_available_room);
