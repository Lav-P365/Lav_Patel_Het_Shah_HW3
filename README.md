# Lav_Patel_Het_Shah_HW3
This project is a simple web application that connects a Vue.js frontend with a custom Lumen API. The API serves a collection of unique content and the frontend displays a sorted list of entries retrieved from the API. Users can click on an entry to view more detailed information without navigating away from the page

# 🏏 IPL Teams & Owner Info — Vue.js + Lumen API Project

## 📚 Overview

This project is a part of the Web Development course assignment, where we developed a responsive Vue.js application connected to a custom Lumen REST API. The application fetches and displays data about IPL (Indian Premier League) cricket teams and their owners.

> 🔗 The goal is to demonstrate API integration, AJAX requests using Vue, error handling, and UI enhancement using GSAP animations.

## 🔗 API Routes

## 💡 Features

- ✅ **Custom MySQL Database** with `teams` and `owners` tables (with foreign key relationship).
- ✅ **Vue 3 Frontend** (single-page, single-file architecture).
- ✅ **Lumen Backend API**:
  - `/api/teams` – Get a list of all IPL teams (with team image).
  - `/api/owner/{id}` – Get details about the selected team’s owner.
- ✅ **AJAX Integration** via `fetch()`.
- ✅ **GSAP animations** for fade-in, scroll-to, and hover effects.
- ✅ **Responsive Design** (works on mobile, tablet, desktop).
- ✅ **Image Display**: Team logos are shown as images in the first data dump.
- ✅ **Error Handling & Loading Indicators** for both API calls.

---

## 🔧 Technologies Used

- **Frontend**: HTML, CSS, Vue.js 3 (CDN)
- **Backend**: Lumen (Laravel Micro-Framework)
- **Database**: MySQL
- **Animation**: GSAP (GreenSock Animation Platform)

---

👨‍💻 Authors

Lav Pate
Het Shah

