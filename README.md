# Paint "Quick Reference" Training Aid
## Built for Scenario Labs LLC. by Shannon Palumbo

- This app is designed as a flow-chart style "quick reference guide" for preparing various substrates for finish paint in the Scenario Labs paint department, based on the company's specific product library and work-flow. 

- It is intended to be used with the assumption that the painter has already received essential training and is not meant to be a stand-alone training tool. 

- The database is designed to be scalable, so that materials, steps, and products can be continuously updated. 

## Tech Specs / Stack 

- The flowchart is built on a MySQL database with a "description" for the substrate, options for three "TEXT" branches with variables the user may encounter, and three corresponding "NEXT" options which point to the IDs of the next appropriate step.

 - The back-end tools used are Node.js and Express.

 - The front end is developed with React and styled using TailwindCSS.


## SETUP

### Prerequisites
- MySQL: Make sure MySQL is installed on your machine. This project was made with version 8.0.37. You can download it from https://dev.mysql.com/downloads/ 




### Dependencies:

- Run `npm install` in the project directory to install server dependencies. 
- `cd client` and run `npm install` to install client dependencies.

## Database Setup

1. **Access MySQL**:
   - Open the MySQL CLI
   - Enter your MySQL password when prompted.


2. **Create the Database**:
   - Once logged in, create a new database named `mvp`:
     ```sql
     CREATE DATABASE mvp;
     ```
   - You can check to see that the Database was successfully created with the command `show databases;`

3. **Set Up Environment Variables**:
   - Create a `.env` file in your project folder and add the following lines:
     ```bash
     DB_HOST=localhost
     DB_USER=root
     DB_NAME=mvp
     DB_PASS=YOURPASSWORD
     ```
   - Replace `YOURPASSWORD` with your actual MySQL password.

4. **Run Migrations**:
  - In MySQL run the command `use mvp`
   - In your terminal, run the following command in your project's root folder to import the `steps` table and all existing data:
     ```bash
     npm run migrate
     ```
   - You should see the message "Table creation `steps` was successful!"
      - **This command assumes you have a migration tool configured in your project that reads the database connection from your `.env` file and runs migration files located in a specific directory (like a `migrations` folder). Ensure that the migrations are correctly set up in your project.
  - With the following commands in the MySQL CLI you can ensure the data was imported into the MVP Database:
    - `describe steps;`
    - `select * from steps`
  - If you see a populated table, you have succeeded in migrating the data! Yay!

5. **Backup Option (Optional)**:
   - If there's an issue with the migration or you need to manually set up the database, you can use the `init_db.sql` file located in the `"model"` folder. This file contains the SQL statements needed to create the `steps` table and insert initial data.
   - To manually run the `init_db.sql` file:
     ```bash
     mysql -u root -p mvp < path_to_your_project/model/init_db.sql
     ```
   - Replace `path_to_your_project` with the actual path to your project.

### Summary

Following these steps will set up your database and import the necessary tables and data into your MySQL instance.


<!-- ### Database

- Access your MySQL interface by running `mysql -u root -p` in your terminal. 

- Create a `.env` file to your project folder. The name of the database is `mvp` 

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=mvp
  DB_PASS=YOURPASSWORD
```

- run `npm migrate` which will import the table called `steps` and all of the currently existing data. 

- The `"model"` folder contains an `init_db.sql` file which contains the information for the table as well as in insert statement in case it's needed as backup or there's a problem importing the database.  -->

## Development

- Run `npm start` in project directory to start the Express server on port 4000
- In another terminal, `cd client` and run `npm run dev` to start the client in development mode with on port 5173. 


## Resources for further development:

The Matthews Paint Company Website has "substrate preparation guide" with substantially in-depth guidance to pull from to add to the database. 

- [Matthews Paint Co](https://docs.matthewspaint.info/substrate-application-guide/)

I made a Google Sheets Doc to rough sketch the connections between steps and step IDS:

- [Hot Sheet!](https://docs.google.com/spreadsheets/d/18qHPxLuslChbhE2-MxCBWIff8pA0psEJTOK509IvZtU/edit?usp=sharing)

The TailwindCSS site has good documentation to continue with consistent styling:
- [TailwindCSS](https://tailwindcss.com/docs/utility-first)






