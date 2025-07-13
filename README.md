# 🎧 PaceBeats — Adaptive Music Recommender for Runners

<img src="https://img.shields.io/badge/React%20Native-Expo-blue?style=flat-square" alt="Expo" /> <img src="https://img.shields.io/badge/License-MIT-lightgrey?style=flat-square" alt="MIT License" />

Welcome to **PaceBeats**, a mobile application built using **React Native (Expo)** that dynamically recommends music based on your running pace and heartbeat. Powered by real-time IoT integration and hybrid recommendation algorithms, PaceBeats enhances your workout experience by syncing the perfect beat to your stride. 🏃‍♂️❤️🎶

---


### Prerequisites
- **Visual Studio Code/ Webstorm** for IDEs
- **Expo CLI** (`npm install -g expo-cli`)
- Android Studio or Xcode (for emulators)
- Galaxy Watch 5, 6, 7 or Smartwatch with HealthConnect

---


## 🎧 What Is PaceBeats and How It Works

PaceBeats is a React Native app that reads your steps, GPS and heart rate in real time and uses a hybrid AI-inspired algorithm to pick the perfect tracks for your run:

1. Calibration
   - Run a fixed distance (eg. 20 m) to compute your stride length.

2. Sensor Input
   - Every interval, read step count delta, GPS distance delta and current heart rate.

3. Pace Computation
   - raw_pace = seconds elapsed ÷ (meters covered ÷ 1000) → sec/km
   - if GPS jump <10 m, fall back on steps × stride_length.

4. Smoothing
   - Feed raw_pace into a 1D Kalman filter to remove jitter and get smooth_pace.

5. Bucket Mapping
   - Convert smooth_pace to minutes/km
   - Assign to one of six buckets: easy_walk, recovery, cruise, tempo, interval, sprint.

6. Nearest-BPM Recommendation
   - For current bucket, compute |track.bpm − bucket_center| for all tracks
   - Sort by bpm_diff and pick top 5.

7. Playback & Logging
   - Show titles, BPM, duration; let runner select or auto-play best match
   - Log timestamp, raw and smooth pace, bucket, heart rate, track info to CSV.

That’s it. No fluff, just your pace feeding straight into your playlist. Download, clone, install and let PaceBeats handle the rest.


---

## 📥 How to Clone This Project

Follow the steps below to get a local copy of the app running on your machine.

### 1. Clone the Repository

```bash
git clone https://github.com/KpG782/Pacebeats.git
cd Pacebeats
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npx expo start
```

You can then launch the app via:
- 📱 **Expo Go** (scan the QR code)
- 🤖 **Android Emulator**
- 🍎 **iOS Simulator**
- 🔧 **Development build** (for full native access)

---

## 📂 Project Structure

```
PaceBeats/
├── app/                    # 📱 Main app screens (uses Expo Router)
├── assets/                 # 🎵 Music samples, icons, images
├── components/             # 🧩 Reusable UI components
├── constants/              # 📌 Static values (colors, fonts, etc.)
├── hooks/                  # 🧠 Custom React hooks
├── utils/                  # 🧪 Helper functions and logic
├── services/               # 🔗 APIs and data communication (e.g., Health Connect)
├── App.js                  # 🧠 App entry point
├── package.json            # 📃 Project metadata
├── vite.config.js          # ⚙️ Vite/Expo configuration
└── README.md               # 📘 You're here!
```

---

## 💡 Key Features

- 🏃‍♂️ **Real-Time Heart Rate Monitoring** (IoT-Integrated)
- 🎶 **Music Recommendations Based on BPM/Pace**
- 🧠 **Hybrid Filtering Algorithm** (Rule-Based + Content-Based)
- 🌙 **Dark Mode Design** with Custom UI
- 🔌 **Health Connect API Integration** for Android

---

## 📦 Reset Project (Optional)

To reset the app to a clean state:

```bash
npm run reset-project
```

This moves the starter code to `app-example/` and creates a fresh `app/` directory.

---

## 📚 Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/)
- [Health Connect Integration](https://developer.android.com/health-and-fitness/guides/health-connect)

---

## 🌐 Connect with Us

- 🔗 GitHub Repo: [https://github.com/KpG782/Pacebeats](https://github.com/KpG782/Pacebeats)
- 💼 LinkedIn: [Ken Patrick Garcia](https://www.linkedin.com/in/ken-patrick-garcia-ba5430285/)
- 👥 Contributors: Ken Garcia, Timothy Forte, Lanz Corpuz, Brian Ashley


---


👥 Team Members
- 🦸‍♂️ Ken Patrick Garcia — Project Leader / Full Stack Developer
- 🎨 Timothy Forte — Frontend UI
- 💻 Lanz Corpuz — Frontend Developer
- 🔧 Brian Papa — Backend Developer

---

---

## 🧠 License

MIT License. Feel free to fork, contribute, or remix this project for your own research and passion projects!

---

> Built with ❤️ by passionate runners and developers from the University of Makati.
