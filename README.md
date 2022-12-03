## Documentation
Used in reference for our `server.js`, `model.js`, and files within our `pages/api` folder
https://itnext.io/using-mongoose-with-next-js-11-b2a08ff2dd3c

Auth0 used for User Login and to send User Information to MongoDB
https://auth0.com/

MongoDB used for creating a Database to store user data
https://www.mongodb.com/

MaterialUI for UI elements
https://mui.com/

NextJS
https://nextjs.org/

## Getting Started

First, run the development server:

```bash
npm install
# Then
npm run dev
```
Open http://localhost:3000 with your browser and you will see welcome page that allows you to login/signup.

## Within "Your Agenda"

Within the Welcome Page, click either "TO-DO LIST" to get started.

### TO-DO LIST

From here, you can add to-dos by entering a name in the "task" and "module" text boxes respectively. Then, select a date from the calendar and progress to typing the time your to-do is due with the left/right arrow keys. Now, you can create your to-do.

From here, you can either click the icons to the left or right of the to-do to send them to completed or deleted respectively.

### MODULES

Here, you can filter your tasks in your to-do list by module, to see what must be done with each module.

### COMPLETED TASKS / DELETED TASKS

Depending on which respective button was picked to add them in the "Completed Tasks" or "Deleted Tasks" tab, then will be added in here and are available for viewing and reverting back to the to-do list.