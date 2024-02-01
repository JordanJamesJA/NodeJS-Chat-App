# NodeJS Chat App
 
# Full-Stack Chat Application

Welcome to our Full-Stack Chat Application - a dynamic and feature-rich chat platform powered by Node.js for the backend and React.js for the frontend. Engage in real-time conversations with a sleek and modern interface.

## Features

- **Real-time Messaging:** Experience seamless communication with instant message updates.
- **User Authentication:** Securely register and log in with personalized user accounts.
- **Responsive Design:** Access the chat application from any device, ensuring a consistent user experience.
- **Emoji and GIF Integration:** Express yourself using a diverse range of emojis and GIFs.
- **Image Sharing:** Share images effortlessly within the chat interface.

## Technologies Used

- **Frontend:** React.js, Socket.io-client
- **Backend:** Node.js, Socket.io
- **Authentication:** JSON Web Tokens (JWT)
- **Styling:** CSS-in-JS (React)

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/FullStackChatApp.git
   ```

2. **Install Dependencies:**

   ```bash
   cd FullStackChatApp
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. **Configure the Backend:**

   - Create a `.env` file in the `backend` folder and add the following:

     ```env
     PORT=5000
     MONGODB_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     ```

4. **Run the Application:**

   ```bash
   # Start the backend server
   cd backend
   npm start

   # Start the frontend server
   cd ../frontend
   npm start
   ```

5. **Open your Browser:**

   Visit `http://localhost:3000` to start using the Full-Stack Chat Application.

## Screenshots

![Screenshot 1](screenshots/screenshot1.png)
![Screenshot 2](screenshots/screenshot2.png)

## Contributing

If you'd like to contribute to the Full-Stack Chat Application, please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Happy chatting! 🚀