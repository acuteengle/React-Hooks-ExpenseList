This app has 4 main components

ExpenseApp
ExpenseForm
ExpenseItem
ExpenseList
Notification

ExpenseApp contains the source of truth state and all the state handling methods.

Notification is a Stateless Functional Component that receives its state data from ExpenseApp and renders if there a text to display.

ExpenseList (SFC) will render the multiple ExpenseItem components with data from state.

ExpenseItem (SFC) uses state data to manage its own display and to callback to ExpenseApp to update the state data

ExpenseForm (SFC) will update state data to store the name and amount of a new/edited expense
