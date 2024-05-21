# Paint "Quick Reference" Training Aid
## Built for Scenario Labs LLC. by Shannon Palumbo

- This app is designed as a flow-chart style "quick reference guide" for preparing various substrates for finish paint in the Scenario Labs paint department, based on the company's specific product library and work-flow. 

- It is intended to be used with the assumption that the painter has already received essential training and is not meant to be a stand-alone training tool. 

- The database is designed to be scalable, so that materials, steps, and products can be continuously updated. 

## Tech Specs / Stack 

- The flowchart is built on a MySQL database with a "description" for the substrate, and an option of three "TEXT" branches with descriptions of variables the user may encounter, and three corresponding "NEXT" options which point to the IDs of the next appropriate step.

 - The back-end tools used are Node.js and Express.

 - The front end is developed with React and styled using TailwindCSS.


## SETUP

### Dependencies:

- Run `npm install` in the project directory to install server dependencies. 
- `cd client` and run `npm install` to install client dependencies.

### Database

- Access your MySQL interface by running `mysql -u root -p` in your terminal. 

- Create a `.env` file to your project folder. The name of the database is `mvp` 

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=mvp
  DB_PASS=YOURPASSWORD
```

- run `npm migrate` which will import the table called `steps` and all of the currently existing data. 

- The `"model"` folder contains an `init_db.sql` file which contains the information for the table as well as in insert statement in case it's needed as backup or there's a problem importing the database. 

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






