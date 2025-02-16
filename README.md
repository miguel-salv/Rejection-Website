# Rejection Guidance Website

This website offers gentle support and actionable advice for anyone coping with job rejections. Whether it’s your first rejection, a loss from your dream job, or repeated rejections, you will find resources, tips, and steps to help you move forward.

## Table of Contents

- [Rejection Guidance Website](#rejection-guidance-website)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Deployment](#deployment)
  - [Acknowledgements](#acknowledgements)

## Features

- **Multiple Support Sections:**  
  Provides dedicated pages for first job rejections, dream job rejections, and multiple rejections.
  
- **Responsive Design:**  
  Uses CSS styles ([`src/styles/main.css`](src/styles/main.css) and [`src/styles/home.css`](src/styles/home.css)) for a responsive and visually appealing layout.

- **Dark Mode Support:**  
  Toggle between light and dark themes using the [`DarkModeToggle`](src/components/shared/DarkModeToggle.jsx) component.

- **Resource Cards:**  
  Dynamic resource cards on various pages, implemented in [`ResourceCard.jsx`](src/components/shared/ResourceCard.jsx), provide external links for further reading.

## Installation

1. **Clone the repository:**

   ```sh
   git clone <repository-url>
   cd instructions
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

## Usage

To start the development server and view the website locally:

```sh
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

The project uses [Create React App](https://github.com/facebook/create-react-app) as its base. You can review the entry point at index.jsx and the main application logic in App.jsx.

## Deployment

To build the project for production:

```sh
npm run build
```

For deploying via GitHub Pages, ensure you have set the correct homepage in your package.json and run:

```sh
npm run deploy
```

## Acknowledgements

- [Create React App](https://github.com/facebook/create-react-app)
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Font Awesome](https://fontawesome.com/)
- Additional resources referenced in the resource cards.

---

This website is designed to provide clear, accessible guidance during challenging times. Feedback and contributions are most welcome.