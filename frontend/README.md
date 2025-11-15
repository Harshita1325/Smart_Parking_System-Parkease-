<div align="center">

  <h1>🚗 ParkEase – Smart Parking Management System</h1>

  <p>
    A modern and user-friendly web system that allows users to 
    <b>find, book, and pay</b> for parking slots easily. 
    It provides real-time slot availability, QR-based check-in, 
    and a smooth booking experience.
  </p>

  <hr/>

  <h2>✨ Features</h2>

  <h3>User Features</h3>
  <p align="center">
    ✔ Real-time parking availability <br/>
    ✔ Book and pay online <br/>
    ✔ QR code–based entry pass <br/>
    ✔ User authentication <br/>
    ✔ Location-based parking suggestions <br/>
  </p>

  <h3>Admin Features</h3>
  <p align="center">
    ✔ Add / update / delete parking slots <br/>
    ✔ Manage bookings <br/>
    ✔ Monitor total & available slots <br/>
  </p>

  <hr/>

  <h2>🧱 Tech Stack</h2>

  <p align="center">
    <b>Frontend:</b> React.js, Vite, Tailwind CSS <br/>
    <b>Backend:</b> Node.js, Express.js, MongoDB <br/>
    <b>Tools:</b> JWT Authentication, QR Generator, Razorpay API (future) <br/>
  </p>

  <hr/>

  <h2>🔄 System Workflow</h2>

  <p align="center">
    1️⃣ Select Location <br/>
    2️⃣ View Available Slots <br/>
    3️⃣ Book and Pay <br/>
    4️⃣ Get QR Code Pass <br/>
    5️⃣ Scan at Gate & Park <br/>
  </p>

  <hr/>

  <h2>🏛️ Project Architecture</h2>

  <pre align="center">
Frontend (React + Tailwind)
      ↓
Backend (Node + Express)
      ↓
Database (MongoDB)
      ↓
QR / Payment APIs (Future)
  </pre>

  <hr/>

  <h2>🛠 Installation & Setup</h2>

  <p align="left">

  <b>1️⃣ Clone Repository</b><br/>
  <code>git clone https://github.com/Harshita1325/Smart_Parking_System-Parkease.git</code><br/>
  <code>cd Smart_Parking_System-Parkease</code><br/><br/>

  <b>2️⃣ Setup Frontend</b><br/>
  <code>cd frontend</code><br/>
  <code>npm install</code><br/>
  <code>npm run dev</code><br/><br/>

  <b>3️⃣ Setup Backend</b><br/>
  <code>cd backend</code><br/>
  <code>npm install</code><br/>
  <code>npm start</code><br/>

  </p>

  <hr/>

  <h2>📡 API Endpoints</h2>

  <p align="center">
    <b>Auth</b> <br/>
    POST /api/auth/register – Register user <br/>
    POST /api/auth/login – Login user <br/><br/>

    <b>Parking Slots</b> <br/>
    GET /api/slots – Get all slots <br/>
    POST /api/slots – Add new slot (Admin) <br/><br/>

    <b>Bookings</b> <br/>
    POST /api/book – Book a slot <br/>
    GET /api/book/:id – Booking details <br/>
    DELETE /api/book/:id – Cancel booking <br/>
  </p>

  <hr/>

  <h2>📂 Folder Structure</h2>

  <pre align="center">
Smart_Parking_System-Parkease/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── server.js
│
└── README.md
  </pre>

  <hr/>

  <h2>🚀 Future Enhancements</h2>

  <p align="center">
    ⭐ IoT sensors for live vehicle detection <br/>
    ⭐ AI-based rush hour prediction <br/>
    ⭐ Dynamic pricing model <br/>
    ⭐ Mobile app (React Native) <br/>
    ⭐ Automated gate control <br/>
  </p>

  <hr/>

  <h2>👩‍💻 Developer</h2>

  <p><b>Harshita Bande</b></p>

</div>
