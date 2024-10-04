# Green Planet Nursery Server

The **Green Planet Nursery Server** allows users to buy plants with ease and provides admins the ability to manage these plant products and orders. Users can buy plants online with ease! Enjoy simple online shopping and fast delivery right to your door.

---

### [Live Server](https://green-planet-nursery-server.vercel.app)

```console
https://green-planet-nursery-server.vercel.app
```

## Used Technologies:

- TypeScript
- Node.js
- Express.js
- Mongoose
- MongoDB
- Zod

## Features

- **Shopping Cart System:**
  Users can add plants to their cart and check out securely. The system calculates the total cost based on selected items.

- **Product Availability Checking:**
  Users can check the availability of plants and items before placing an order.

- **Order Cancellation:**
  Users have the option to cancel their orders if needed.

- **View Orders:**
  Admins can view all customer orders, while users can see their own order history for easy tracking.

- **Product Management:**
  Admins can create, update, and delete products. Each item includes details like name, description, price, and care instructions.

- **Error Handling:**
  The system includes comprehensive error handling to provide clear messages for issues like invalid entries or unavailable products.

- **Security:**
  A robust security system is implemented to protect user data and ensure that only authorized users can access sensitive information.

- **Maintainable Codebase:**
  The codebase is clean, well-organized, and well-documented, following industry standards to ensure easy maintenance and future updates.

## How to setup in local computer:

### Clone the Repository:

```plain
git clone https://green-planet-nursery-server.vercel.app.git
```

### Install Dependencies:

```markdown
npm install
```

### Environment Variables:

- Create a `.env` file in the root directory.
- Add the following environment variables:

```markdown
PORT=5000
DATABASE_URL=your_database_url
```

### Run the Application:

```markdown
npm run start:dev
```

### Error Handling

The application handles errors such as validation errors, duplicate entries, and not found routes with appropriate error messages and status codes.

By following these steps and using the endpoints provided, you can efficiently manage users, products and bookings in the online nursery platform.

## Happy Coding 😎
