# ecommerce_node

## Description
 
 This is the backend server for an E-commerce Web Application . It is built using Node.js and utilizes various libraries and tools such as MySQL database, Sequelize ORM, migration, models, Nodemailer, crypto-js, jsonwebtoken, and JWT authorization.

 ## Features
* User authentication and authorization using JWT (JSON Web Tokens).
* Secure password hashing using crypto-js.
* User registration and login functionality with email verification.
* Category management: Create, Read, Update, and Delete (CRUD) operations for toy categories.
* Product management: Create, Read, Update, and Delete (CRUD) operations for toy products.
* Product images management: Upload and associate images with products.
* Payment card management: Add, Read, and Delete operations for user payment cards.
* Order placement and management: Create, Read operations for orders.
* Order items management: Associate products with orders and manage quantities.
* Basket management: Add products to the cart, update quantities, and remove products.
* MySQL database integration: Utilize MySQL as the backend database for storing application data.
* Migration: Use Sequelize ORM to handle database migrations, making it easier to evolve the database schema   over time.
* API endpoints management: Design and implement robust and secure API endpoints to handle various CRUD         operations and interactions with the database.


# Prerequisites

* Node.js - Make sure you have Node.js installed globally on your machine.
* MySQL database - Set up a MySQL database for storing the application data.

# Installing
1 Clone the repository:
https://github.com/VaheHarutyunyan21/ecommerce_node.git
2 Navigate to the project directory:
cd ecommerce_node
3 Install the dependencies:
npm install
4 Set up the database:
* Create a new MySQL database for the application.
* Update the database configuration in the config/config.js file to match your MySQL database settings.
5 Run database migrations:
* Run the following command to run the migrations:
 npx sequelize-cli db:migrate
*  Run the following command to seed the database with sample data:
 npx sequelize-cli db:seed:all
6 Start the server:
nodemon server.js
By default, the server will run on http://localhost:5000.

## User Endpoints

* POST /register- Register a new user.
* POST /login - Log in a user.
* DELETE /deleteUsers/:id - Delete a user.
* GET /users - Get data of all users.

## Category Endpoints

* GET /categorys - Get all categories.
* POST categorys - Create a new category.
* DELETE /deleteCategorys/:id - Delete a category.
* PUT /changCategorys/:id - Update a category.
 
## Product Endpoints

* GET /products - Get all products.
* GET /product/:id - Get a specific product by ID.
* GET /dataProducts/:id - Get all products in a specific category.
* POST /products - Create a new product.
* DELETE /deleteProducts/:id - Delete a product.
* PUT /changProducts/:id - Update a product.


##  Cart Endpoints

* GET /carts - Get all shipping addresses.
* GET /dataCarts/:id - Get a specific shipping address by ID.
* POST /carts - Add a new shipping address.
* DELETE /deleteCarts/:id - Delete a shipping address by ID.
* PUT /changCarts/:id - Update a shipping address by ID.


## Environment Variables

The server uses the following environment variables, which can be set in a .env file or configured in your deployment environment:

* SECRET - A secret key used for signing and verifying JWT tokens.
Make sure to configure these environment variables appropriately before running the server to ensure proper functionality and connectivity with the MySQL database.



# ecommerce_rect



## Description

This is an eCommerce web application built using React. It provides a user-friendly interface to browse and view products from the watch store. The application presents a time shop where users can view products without registration. Users can register and create an account to make purchases, while an admin can log in and make relevant updates.

### Features
* User registration and login functionality for personalized shopping experience.
* Browse and search products by category or keywords.
* View detailed product information including images, price, and description.
* Add products to the shopping basket for later purchase.
* Checkout process with order placement and payment integration.
* User profile management for viewing order history and updating personal details.
* Categories management for organizing and filtering products.
* Product and product image management for adding, updating, and deleting products.
* Shipping addresses management for easy delivery options.
* Payment card storage for convenient payment options.
* Order management for tracking orders and managing order items.
* Basket management for handling product selection during the shopping process.
* Admin panel for managing products, products images, categories, orders, and users.
* Access control to restrict unauthorized access to user functionalities.


## Admin Panel Features

Admin dashboard for overview and statistical insights.
Product management for adding, updating, and deleting products.
Product image management for adding, updating, and deleting product images.
Category management for organizing and filtering products.
Order management for viewing and managing customer orders.
User management for viewing and managing user accounts.
Access control to restrict unauthorized access to admin functionalities.

### Technologies

* React: A JavaScript library for building user interfaces
* Redux: A predictable state container for JavaScript apps
* React Router: A routing library for React applications
* CSS: Cascading Style Sheets for styling the application
* react-icons: A library for adding icons to the application
* fetch: A JavaScript API for making HTTP requests
* map: A JavaScript method for iterating over arrays
* Hooks: React hooks for managing state and side effects:
 * localStorage: A web API for storing data locally in the browser

### Installing

1. Clone the repository:
 https://github.com/VaheHarutyunyan21/ecommerce_rect.git
2. Navigate to the project directory:
 cd ecommerce_rect
3. Install the dependencies:
 npm install
4. Start the development server using:
 npm start

Open your web browser and access the application at: http://localhost:3000.
