##HAPPY PAY
##Basic payment app where multiple users can come and transact their money.

#Pre-Requisites
<ul>
  <li>nodeJS</li>
  <li>ReactJS</li>
  <li>mongo</li>
  <li>git</li>
</ul>

#FILE STRUCTURE

<##paymentApp-
|
|-backend
|  |-Routes //contains routes for different functions.
|  |   |-account.js //users account-related work (transaction, balance of unique user).
|  |   |-index.js //sets up a router for handling multiple routes.
|  |   |-user.js //user-related work like signup, login, search function, updating data.
|  |
|  |-config.js
|  |-db.js //Contains schemas for various databases
|  |-middleware.js //Authentication based work..
|
|-frntend
   |-src
      |-components 
      |  |-dashboard.JSX,dashboard2,dashboard3 //code for dashboard for multiple routes.
      |  |-header1,header2 //code for a header in the login page, signup page routes.
      |
      |-pages
      |  |-firstpage.jsx 
      |  |-signwup.jsx
      |  |-transaction.jsx //code for showing info about all the users.
      |  |-dashboard.jsx 
      |  |-sendmoney.jsx //code for page where users can transact their capital.
      |
      |-App.jsx //code for routing system between various pages via react application.

    />



<h6>
  1.user can signup and search for other users to send money.<br>
  2.user can tranfer money authenticatically.
</h6>
