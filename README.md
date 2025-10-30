# LocalJobs

A React Native mobile application built with Expo for browsing and managing local job listings. The app provides a seamless experience for job seekers to discover, view, and bookmark job opportunities in their area.

## 🚀 Features

- **Job Listings**: Browse through a curated list of local job opportunities
- **Job Details**: View comprehensive information about each job posting
- **Bookmarks**: Save interesting job listings for later reference
- **Dark/Light Theme**: Supports both light and dark mode for comfortable viewing
- **Native Experience**: Built with React Native for smooth performance on both iOS and Android
- **Offline Support**: Store bookmarked jobs for offline access

## 🛠️ Tech Stack

- [Expo](https://expo.dev/) - Development framework
- [React Native](https://reactnative.dev/) - Mobile application framework
- [Expo Router](https://docs.expo.dev/routing/introduction/) - File-based routing
- [TypeScript](https://www.typescriptlang.org/) - Type safety and better development experience
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) - Local data persistence
- [Expo Haptics](https://docs.expo.dev/versions/latest/sdk/haptics/) - Native haptic feedback
- [React Navigation](https://reactnavigation.org/) - Navigation system

## 🏗️ Project Structure

```
├── app/                   # Main application routes
├── assets/               # Static assets (images, fonts)
├── components/           # Reusable UI components
├── constants/            # App-wide constants and themes
├── hooks/               # Custom React hooks
├── src/
│   ├── api/            # API integration
│   ├── components/     # Screen-specific components
│   ├── context/        # React Context providers
│   ├── navigation/     # Navigation configuration
│   ├── screens/        # Main app screens
│   ├── services/       # Business logic and services
│   └── utils/          # Utility functions
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Expo CLI
- iOS Simulator (Mac only) or Android Studio (for Android emulator)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sm6746/lokalJobs.git
   cd lokalJobs
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Run on your desired platform:
   ```bash
   # For iOS
   npm run ios
   
   # For Android
   npm run android
   
   # For web
   npm run web
   ```

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 📱 Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run in web browser
- `npm test` - Run test suite
- `npm run lint` - Run linting
- `npm run reset-project` - Reset project cache and dependencies

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Made with ❤️ by [sm6746](https://github.com/sm6746)
