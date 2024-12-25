# KSRTC Bus Service Management System

The KSRTC Bus Service Management System is designed to streamline the bus booking process and manage detailed records of bus schedules, routes, passengers, and staff. This system centralizes data for efficient management of bus services and provides a user-friendly interface for passengers, staff, and administrative users.

---

## System Overview

This system includes:
- **Bus Information Management**: Centralized details for each bus, such as bus number, type, seating capacity, and ownership.
- **Dynamic Route Scheduling**: Flexibility for routes that can vary by day or season, with adaptable sources, destinations, and stops.
- **Passenger and Ticketing Management**: Real-time seat availability and ticket booking records, with the option for advance and on-the-spot bookings.
- **Staff Assignments and Logs**: Detailed logs for drivers, conductors, and KSRTC administrators.
- **Basic Financial Transactions**: Fare records for each booking.
- **Maintenance Tracking**: Basic status tracking of bus maintenance.

---

## Modelling Scope

**Included Components**:
- Bus Information: Stores bus details, including bus number, type, seat capacity, and ownership.
- Dynamic Route Schedules: Support for flexible scheduling with different sources, destinations, and intermediate stops.
- Passenger and Ticketing Information: Booking records, seat availability tracking, and ticket history.
- Real-Time Seat Availability Tracking: Automatically updates seat availability in real-time.
- Staff and Admin Records: Logs for drivers, conductors, and KSRTC administrators.
- Financial Transactions: Basic fare records without comprehensive financial management.
- Maintenance Tracking: High-level maintenance status monitoring.

---

## Technology Stack

The following tools and technologies are used in this project:

| **Category**         | **Technology**      | **Icon** |
|----------------------|---------------------|----------|
| Frontend             | JavaScript          | <img height="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"> |
| Frontend             | React               | <img height="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"> |
| Frontend             | HTML                | <img height="50" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"> |
| Frontend             | CSS                 | <img height="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"> |
| Frontend Framework   | Bootstrap           | <img height="50" src="https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png"> |
| Backend              | PostgreSQL          | <img height="50" src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png"> |
| Version Control      | Git                 | <img height="50" src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png"> |

---

## Key Features

- **Centralized Database**: Efficient management of buses, routes, schedules, and passenger information.
- **Dynamic Routing**: Adapts to varying travel demands with flexible source, destination, and stop configurations.
- **Real-Time Seat Tracking**: Ensures accurate seat availability for bookings.
- **Passenger and Ticketing Records**: Comprehensive booking records and ticket history.
- **Responsive Interface**: Developed with React and Bootstrap for accessibility across devices.
  
---

## Getting Started

1. **Frontend Setup**:
   - Install dependencies with `npm install`.
   - Start the frontend server using `npm start`.
   
2. **Backend Setup**:
   - Set up PostgreSQL database and configure connection details.
   - Run database migrations and seed data as necessary.
   - Start the backend server.

---

**Developed with:** React, CSS, Bootstrap, and PostgreSQL.
