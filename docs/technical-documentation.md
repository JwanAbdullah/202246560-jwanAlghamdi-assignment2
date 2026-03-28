# Technical Documentation – Assignment 2

## 1. Overview

This project is an enhanced version of the personal portfolio developed in Assignment 1.
It is built using React and Vite, with a focus on improving interactivity, user experience, and modern web practices.

The application showcases my background, experience, projects, and skills through modular components, while introducing dynamic features, improved styling, and better user interaction.

Compared to Assignment 1, this version includes:

Interactive UI elements
Dynamic content rendering
Theme persistence using localStorage


---

## 2. Technologies Used

- React (Functional Components)
- Vite (Build tool and development server)
- JavaScript (ES6+)
- CSS (Flexbox and transitions)
- LocalStorage (for theme persistence)

---

## 3. Project Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
│
├── assets/
│   └── images/
│       ├── aic.png
│       ├── kfupm-gpt.png
│       └── kommute.png
│
├── App.jsx
├── App.css
└── main.jsx
```

- `main.jsx` initializes and renders the React application.
- `App.jsx` serves as the root component and renders all sections.
- `components/` contains reusable UI sections.
- `assets/images/` stores project images.
- `App.css` contains global styles, theme-related styles, and hover animations.

Each section of the portfolio is implemented as a separate React component for modularity and maintainability


---

## 4. Components Architecture

- **Navbar** – Navigation between page sections.
- **About** – Introduction and personal summary.
- **Experience** – Displays experience cards using dynamic rendering.
- **Projects** – Displays project cards with images and descriptions.
- **Skills** – Presents skills in a structured and visual format.
- **Contact** – Includes a front-end contact form.
- **Footer** – Contains closing information and links.

Dynamic rendering is implemented using `.map()` to avoid repetitive code and improve scalability

---

## 5. Styling Approach

The project primarily uses inline styling within React components 
Global styles and hover effects are defined in `App.css`

Flexbox is used for layout alignment:

- `display: flex`
- `justify-content: center`
- `flex-wrap: wrap`
- `gap`

Hover effects are implemented using CSS transitions and transforms:

- `transform`
- `transition`
- `box-shadow`

These animations improve user interaction and the overall visuals

---

## 6. Interactivity (Assignment 2 Requirement)


The application includes several interactive features:

### Navbar Navigation
- The Navbar allows users to navigate between different sections of the page using anchor links.
- Smooth scrolling enhances the navigation experience.


### Theme Toggle (Dynamic Content + localStorage)
- Users can switch between dark and light mode using a button in the Navbar.
- The selected theme is stored in `localStorage` and persists across sessions.

### Contact Form Interaction
- The contact form prevents default submission behavior.
- Displays a success message after submission.
- Automatically clears the form and hides the message after a few seconds.

### Dynamic Rendering
- Skills, projects, and experience sections are generated dynamically using `.map()`.

These features improve usability and make the website more interactive.


---

## 7. Data Handling

Basic data handling is implemented using:

### LocalStorage
- Stores user theme preference (`light` or `dark`)
- Ensures consistency across page reloads

### Form Handling
- The contact form validates required fields using HTML attributes
- Displays a confirmation message upon submission

User feedback is provided through visible success messages.

---

## 8. Animation and Transitions

The application includes lightweight animations to improve UX:

- Hover animations on cards using `transform` and `box-shadow`
- Smooth transitions for interactive elements
- Animated UI elements such as skill progress lines

Animations are subtle and designed to enhance usability without distraction.

---

## 9. Error Handling and User Feedback

Basic user feedback is implemented:

- Required fields prevent empty form submission
- Success message confirms form submission
- Visual feedback through hover effects

This ensures users understand system responses clearly.

---

## 10. Improvements from Assignment 1

- Added theme toggle with persistence (localStorage)
- Improved skills section with progress visualization
- Enhanced UI with animations and transitions
- Improved component structure and readability
- Added better user feedback in the contact form

---

## 11. Limitations

- Contact form is front-end only and not connected to a backend
- No API integration is implemented
- Validation is limited to basic HTML requirements

---

## 12. Future Improvements

- Integrate backend service for contact form
- Add filtering or search functionality
- Fetch data from external APIs
- Improve accessibility (ARIA, keyboard navigation)
- Add routing for multi-page navigation
