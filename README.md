This app has 4 main components

App
ExpenseForm
ExpenseItem
ExpenseList
Notification

App is the root Component which contains ExpenseForm and Notification. It also contains the source of truth state and all the state handling methods.

-   totalAmount

Notification is a Stateless Functional Component that receives its state data from App and renders if there a text to display.

ExpenseList (SFC) will render the multiple ExpenseItem components with data from state

-   Clear Expenses

ExpenseItem (SFC) uses state data to manage its own display and to callback to App to update the state data

-   Edit
-   ID
-   Delete

ExpenseForm (SFC) will update state data to store the name and amount of a new/edited expense

-   Name
-   Amount

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
