# Smart System Builder

## Live Demo

🔗 **Production Deployment:**
https://smart-system-builder.vercel.app/

---

## Overview

A responsive multi-step security system bundle builder built with **React**, **TypeScript**, and **Tailwind CSS**.

This project was developed as part of the **EcomExperts Frontend Developer React Coding Exercise** and recreates the provided Figma design while focusing on scalability, maintainability, and production-quality frontend architecture.

---

## Features

### Multi-Step Bundle Builder

The application guides users through a four-step configuration process:

1. Choose Cameras
2. Choose a Subscription Plan
3. Choose Sensors
4. Add Extra Protection

Each step includes:

* Expand/collapse accordion behavior
* Selected item counters
* Progress navigation
* Step-to-step transitions

---

### Product Configuration

Each product card supports:

* Dynamic pricing
* Compare-at pricing
* Discount badges
* Quantity selection
* Variant selection
* Product descriptions
* Optional color or model variations

Cards automatically enter a selected state when their quantity becomes greater than zero.

---

### Variant Quantity Management

Products with variants maintain independent quantities for each variant.

Example:

* Add 2 Red Cameras
* Switch to Blue Camera
* Blue quantity starts from 0
* Red Cameras remain selected and appear in the review panel

Each selected variant appears as an independent item inside the review panel.

---

### Live Review Panel

The review panel updates in real time and includes:

* Cameras
* Sensors
* Accessories
* Plans

For each item the panel displays:

* Product thumbnail
* Quantity controls
* Pricing
* Variant information

The review panel also contains:

* Shipping information
* Satisfaction guarantee section
* Financing information
* Savings information
* Checkout section
* Total calculations

---

### Persistent Configuration

Users can save their configured system for later.

The application stores the current bundle configuration using **redux-persist** allowing the user to:

* Leave the page
* Refresh the browser
* Return later

and continue from exactly where they left off.

---

## Responsive Design

The application was designed to remain fully functional across multiple screen sizes:

* Mobile devices
* Tablets
* Desktop screens

Desktop layouts closely follow the original Figma design while smaller viewports adapt to provide a usable experience.

---

## Tech Stack

* React 19
* TypeScript
* Tailwind CSS
* Redux Toolkit
* React Redux
* Redux Persist
* React Toastify
* Vite

---

## Project Structure

```text
src
│
├── assets
├── data
├── features
├── hooks
├── styles
├── types
├── ui
│   ├── accordion
│   ├── components   
│   ├── layout
│   ├── reviewPanel
│   └── shared
│
└── types
```

---

## Architecture Decisions

### Data Driven UI

The entire interface is rendered from structured product data rather than hardcoded components, making the application easily scalable and maintainable.

### Path Aliases

The project uses path aliases to avoid deep relative imports.

Example:

```ts
import ReviewPanel from "@/ui/reviewPanel/ReviewPanel";
```

instead of:

```ts
import ReviewPanel from "../../../../ui/reviewPanel/ReviewPanel";
```

### State Persistence

Application state persistence is handled using **redux-persist**, providing a clean and scalable persistence layer without requiring manual localStorage synchronization.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/MousaSalib/Smart-System-Builder.git
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the production version:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Trade-offs

* Product data is currently provided through local JSON objects instead of a backend API.
* Checkout functionality is intentionally mocked as the focus of the exercise is the bundle builder experience.
* Some visual micro-interactions were simplified in favor of maintainability and readability.

---

## Future Improvements

* Backend API integration
* User authentication
* Saved bundle history
* Animation improvements
* Unit and integration tests
* Server-side persistence

---

## Author

**Mousa Salib**

Frontend Developer specializing in React, TypeScript, and modern frontend architecture.
