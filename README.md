# Cuddly Posts

This is a fullstack microblogging application developed using AdonisJS 6, EdgeJS for the frontend, and MySQL as the database. Users can register, log in, and write posts.

## Features

- **User Registration**: New users can create an account.
- **User Authentication**: Registered users can log in and log out.
- **Post Creation**: Authenticated users can write and publish posts.
- **Post Viewing**: All users can view published posts.

## Tech Stack

- **Backend**: AdonisJS 6
- **Frontend**: EdgeJS
- **Database**: MySQL
- **Validation**: VineJS
- **ORM**: LucidORM

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/UdohLawrence/cuddly_posts.git
   cd cuddly_posts

2. Install Dependencies:
  ```sh
  npm install

3. Setup the Database:
  - Create a new MySQL database.
  - Update the .env file with your database credentials:
    ```sh
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_USER=your-db-username
    DB_PASSWORD=your-db-password
    DB_DATABASE=your-db-name

4. Run Migrations:
  ```sh
  node ace migration:run

5. Start the Application:
  ```sh
  node ace serve --hmr



