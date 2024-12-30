# ChatApp

ChatApp is a modern, end-to-end encrypted messaging platform designed to offer secure communication between users. Built with a combination of advanced encryption protocols (SHA256 + AES + Salting) and a powerful intrusion detection system, it ensures that all messages are kept private and safe from unauthorized access. The app leverages Firebase for user authentication and data storage, making it highly scalable and reliable for real-time messaging.

## Features

- **End-to-End Encryption**: All messages sent through ChatApp are encrypted to ensure the highest level of privacy and security.
- **Intrusion Detection**: ChatApp incorporates intrusion detection mechanisms to detect and prevent unauthorized access and suspicious activity.
- **User Authentication**: Secure user authentication is managed using Firebase Authentication.
- **Real-Time Messaging**: Messages are sent and received in real time, providing a seamless and responsive chat experience.
- **Secure Message Storage**: All messages are securely stored in Firebase, and users can safely access their chat history, knowing that all data is protected through encryption.
- **Firebase Backend**: The application's backend is powered by Firebase, offering a scalable and reliable cloud infrastructure.
- **User-Friendly Interface**: ChatApp is designed with a clean and intuitive user interface for an exceptional user experience.
- **Cross-Platform Support**: ChatApp is accessible on multiple platforms including web, iOS, and Android.
- **Group Chats**: Users can create and join group chats to communicate with multiple people at once.
- **Media Sharing**: Users can share images, videos, and other media files securely.
- **Offline Messaging**: Messages sent while offline are stored and delivered once the user is back online.
- **Message Archiving and Search**: Store important messages and search through conversations quickly with an integrated message archive system.
- **Customizable Push Notifications**: Users can customize their notification settings to suit their preferences.

## Technologies Used

- **Frontend**: HTML, CSS, SCSS, JavaScript, React.js, Vite.js
- **Backend**: Node.js, Python, Flask
- **Security**: CryptoJS (SHA256+AES+Salting)
- **Database**: Firebase
- **Cloud Infrastructure**: Google Cloud Platform (GCP)
- **APIs**: JSON, REST APIs, WebSockets

## Screenshots

![Screenshot 1](Screenshots/loginChatApp.png)
![Screenshot 2](Screenshots/RegisterChatApp.png)
![Screenshot 3](Screenshots/page0.png)
![Screenshot 4](Screenshots/page1.png)
![Screenshot 5](Screenshots/page2.png)
![Screenshot 6](Screenshots/page3.png)

## Directory Structure

```
kushagra3204-ChatApp/
├── Screenshots/
├── public/
│   └── index.html
├── package.json
├── README.md
└── src/
    ├── context/
    │   ├── ChatContext.js
    │   └── AuthContext.js
    ├── components/
    │   ├── Decrypt.jsx
    │   ├── Chat.jsx
    │   ├── Chats.jsx
    │   ├── Input.jsx
    │   ├── Messages.jsx
    │   ├── Encrypt.jsx
    │   ├── Sidebar.jsx
    │   ├── Message.jsx
    │   ├── Navbar.jsx
    │   ├── IDSql.jsx
    │   └── Search.jsx
    ├── App.js
    ├── firebase.js
    ├── style.scss
    ├── img/
    ├── pages/
    │   ├── Register.jsx
    │   ├── Login.jsx
    │   └── Home.jsx
    └── index.js
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/kushagra3204/ChatApp.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the application
   ```sh
   npm run dev
   ```

## Contributing

We welcome contributions to make ChatApp even more secure and feature-rich. Whether you are fixing bugs, enhancing the user interface, or adding new functionalities, your input is invaluable. Here’s how you can contribute:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit and push your changes
5. Create a pull request

## Security Notice

The security of your data is our top priority. This application uses state-of-the-art encryption techniques and intrusion detection systems to safeguard your communications. However, always ensure that you are using the app in a secure environment.

## Future Enhancements

- **Voice and Video Chat**: Add support for real-time voice and video calls.
- **File Sharing**: Enable secure file sharing between users.
- **Better Intrusion Detection**: Enhance the detection algorithm for identifying suspicious activities and block threats in real time.
- **Push Notifications**: Implement notifications for new messages or important updates.
