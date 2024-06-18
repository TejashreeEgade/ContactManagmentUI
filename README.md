# ContactManagmentUI
UI for CRUD Operation - Contact Management System

This is the frontend application built using Angular 14 and Bootstrap.

## Table of Contents

- [Setup Instructions](#setup-instructions)
- [How to Run the Application](#how-to-run-the-application)
- [Design Decisions and Application Structure](#design-decisions-and-application-structure)

## Setup Instructions

### Prerequisites

- [Node.js (v14.x or later)](https://nodejs.org/en/)
- [Angular CLI 14.2.1](https://angular.io/cli)
- [Bootstrap 5.3](https://getbootstrap.com/) (already included in the project)

### Steps

1. Clone the repository:
    ```sh
    git clone https://github.com/TejashreeEgade/ContactManagementUI.git
    cd ContactManagementUI/ContactManagementUI
    ```

2. Install the npm packages:
    ```sh
    npm install
    ```

3. Install Bootstrap (if not already included in `package.json`):
    ```sh
    npm install bootstrap
    ```

4. Ensure Bootstrap is included in your `angular.json` file under `styles` and `scripts`:
    ```json
    "styles": [
      "node_modules/bootstrap/dist/css/bootstrap.min.css",
      "src/styles.css"
    ],
    "scripts": [
      "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
    ]
    ```

### How to Run the Application

1. Navigate to the project directory:https://github.com/TejashreeEgade/ContactManagementUI.git
    ```sh
    cd ContactManagementUI/ContactManagementUI
    ```

2. Run the Angular development server:
    ```sh
    ng serve
    ```

3. Open your browser and navigate to `http://localhost:4200`.


4. Note: Please run this application using NO CORS Browser.


### Design Decisions

- **Framework:** Chose Angular 14 for its robust features, strong community support, and enterprise-level capabilities.
- **Styling:** Integrated Bootstrap 5.3 for responsive and modern UI components.
- **State Management:** Used Angular services for managing state and communicating with the backend API.


