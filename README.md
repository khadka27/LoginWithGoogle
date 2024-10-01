
# Login With Google

This project demonstrates how to implement Google OAuth authentication using Passport.js in an Express application.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Google Client ID and Secret](#google-client-id-and-secret)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Features

- Google OAuth 2.0 authentication
- Session management
- EJS as the templating engine
- Static file serving

## Technologies Used

- **Node.js**: JavaScript runtime
- **Express**: Web application framework
- **Passport.js**: Authentication middleware for Node.js
- **EJS**: Templating engine
- **dotenv**: Environment variable management

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (version 14 or higher)
- npm or yarn (for package management)

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/khadka27/LoginWithGoogle.git
   cd LoginWithGoogle
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file:**

   Copy the `.env.example` file and rename it to `.env`. Then, fill in your Google Client ID, Client Secret, and Session Secret.

   ```plaintext
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   SESSION_SECRET=your_session_secret
   ```

### Google Client ID and Secret

To obtain your Google Client ID and Client Secret, follow these steps:

1. **Go to the Google Cloud Console:**
   - Visit [Google Cloud Console](https://console.cloud.google.com/).

2. **Create a new project:**
   - Click on the project dropdown at the top of the page and select "New Project."
   - Enter a name for your project and click "Create."

3. **Enable the Google People API:**
   - In the navigation menu, go to **APIs & Services > Library**.
   - Search for "Google People API" and click on it.
   - Click "Enable."

4. **Create OAuth 2.0 credentials:**
   - Go to **APIs & Services > Credentials**.
   - Click on "Create Credentials" and select "OAuth client ID."
   - Configure the consent screen (if prompted).
   - Select "Web application" as the application type.
   - Add your authorized redirect URI. This should be:
     ```
     http://localhost:3000/auth/google/callback
     ```

5. **Copy your credentials:**
   - After creating the credentials, you will see your **Client ID** and **Client Secret**. Copy these values and paste them into your `.env` file.

## Usage

1. **Start the server:**

   ```bash
   npm start
   ```

2. **Open your browser:**
   - Go to `http://localhost:3000/` to see the application.

3. **Login with Google:**
   - Click the "Login with Google" button to initiate the authentication process.

4. **Check success or failure:**
   - If the login is successful, you will be redirected to the Home page.
   - If the login fails, you will be redirected to the failure page.

## Troubleshooting

- **Error: Unknown authentication strategy "google":**
  - Make sure you have defined the Google authentication strategy in your Passport setup correctly.
  - Ensure that the `passport-google-oauth20` package is installed.
  - Verify that the Google Client ID and Client Secret are set up properly in the `.env` file.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

Feel free to copy and paste this into your `README.md` file!
