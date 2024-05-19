# Happy Pay

#### Basic payment app where multiple users can come and transact their money.

### Pre-Requisites
- **NodeJS**
- **ReactJS**
- **MongoDB**
- **Git**

### Installation and setup

- **Cloning the project.**

```
$ git clone https://github.com/ayanSCYY/paymentApp-

```

- **Installation guide for running project.**
```
$cd backend
$npm install
$cd ..
$cd frntend
$npm install
$npm run dev

```


### File Structure

```
paymentApp/
|
|- backend/
|  |- Routes/             // Contains routes for different functions.
|  |  |- account.js       // Users account-related work (transactions, balance of unique user).
|  |  |- index.js         // Sets up a router for handling multiple routes.
|  |  |- user.js          // User-related work like signup, login, search function, updating data.
|  |
|  |- config.js           // Configuration file for environment variables and settings.
|  |- db.js               // Contains schemas for various databases.
|  |- middleware.js       // Authentication based work.
|
|- frontend/
|  |- src/
|     |- components/
|     |  |- dashboard.JSX  // Code for the dashboard for multiple routes.
|     |  |- dashboard2.JSX
|     |  |- dashboard3.JSX
|     |  |- header1.JSX    // Code for header in the login page.
|     |  |- header2.JSX    // Code for header in the signup page routes.
|     |
|     |- pages/
|     |  |- firstpage.jsx  // Code for the first page.
|     |  |- signup.jsx     // Code for signup page.
|     |  |- transaction.jsx// Code for showing info about all the users.
|     |  |- dashboard.jsx  // Code for the main dashboard.
|     |  |- sendmoney.jsx  // Code for page where users can transact their capital.
|     |
|     |- App.jsx           // Code for routing system between various pages via React application.

```

