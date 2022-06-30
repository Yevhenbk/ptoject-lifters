# Los Tercios

Los Tercios is a fullstack project developed for people getting familiar with weighlifting and are intersted in lifting in Madrid.

(Currently under construction)

Home(work in progress):

![This is an image](https://github.com/Yevhenbk/ptoject-lifters/blob/main/src/front/img/Group%2049.png)

Login:

![This is an image](https://github.com/Yevhenbk/ptoject-lifters/blob/main/src/front/img/image%2035.png)

### Pending works:
	
	Frontend: Home page(Incomplete), Classes page(Incomplete), Competitors page, Products page, Admin mode(Incomplete);
	
	Backend: Cloudinary image upload;
	
### Technologies

Frontend:

	- HTML
	- SCSS
	- React.js
	- React Bootstrap
	- React Icons
	- React Router
Backend:

	- Python
	- PostgreSQL
	- SQLAlchemy
	- Flask
	- JWT Authentication
	- Cloudinary
	
### Back-End Manual Installation:

It is recomended to install the backend first, make sure you have Python 3.8, Pipenv and a database engine (Posgress recomended)

1. Install the python packages: `$ pipenv install`
2. Create a .env file based on the .env.example: `$ cp .env.example .env`
3. Install your database engine and create your database, depending on your database you have to create a DATABASE_URL variable with one of the possible values, make sure yo replace the valudes with your database information:

| Engine	| DATABASE_URL 						|
| ------------- | ----------------------------------------------------- |
| SQLite	| sqlite:////test.db	 				|
| MySQL		| mysql://username:password@localhost:port/example	|
| Postgress	| postgres://username:password@localhost:5432/example 	|

4. Migrate the migrations: `$ pipenv run migrate` (skip if you have not made changes to the models on the `./src/api/models.py`)
5. Run the migrations: `$ pipenv run upgrade`
6. Run the application: `$ pipenv run start`


### Front-End Manual Installation:

- Make sure you are using node version 14+ and that you have already successfully installed and runned the backend.

1. Install the packages: `$ npm install`
2. Start the webpack dev server `$ npm run start`
