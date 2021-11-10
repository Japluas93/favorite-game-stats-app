# Firebase: Read and Create

Due: Monday Nov 1, 2021<br>
Topics: Firebase<br>

---

## Setup

1. In your homework repo, create a `w07-homework` directory.
2. The next step will assume that you're in your `Desktop` (`cd ~/Desktop`) and that your curriculum and homework repos are directly on your desktop. If they are not, you'll need to adjust the paths in the following step's command, or manually copy the target folder into your `w07-homework` directory.
3. Copy what you've already started for the Firebase Read Create lab into your homework `w07-homework` directory by running:

   ```bash
   cp -R jsr-914-curriculum/14_crud_firebase/03_firebase_read_create_lab/ jsr-914-homework/w07-homework
   ```

4. Confirm that everything was copied over successfully by running `npm start`.

## Assignment

Finish the lab from class you started using the `03_firebase_read_create_lab` folder. You will be working on creating and reading firebase data on your own! You can either re-create the to do list activity from the previous walk-through, or if come up with your own idea for the lab. Maybe a list of blog titles, recipe items, grocery list items, book titles, game titles, and so on.

If you're not re-doing the todos app, you'll need to create a new collection in your jsr-914 database. In the deck, begin with the slide that says, "Back in your database dashboard, choose **Start collection**." You can go ahead and create a new document if you'd like, but it's not necessary since you'll be doing this using the form anyway.

**Note:** If your documents have, for example, a `name` field to begin with, but later you add other fields, you'll likely want to delete the old documents directly in the Firebase dashboard so that all your documents match.

Remember that, if you're not re-doing the todos app, when you connect to your collection, you'll need to use your new collection name as the second argument.

### Bonus

- Bonus 1: Can you add a description to each record and display it?
- Bonus 2: Can you add an image to each record and display it?
- Bonus 3: Can you display each record in a new Component?

### Extra Bonus

- [Can you delete a record from a firebase table?](https://firebase.google.com/docs/database/web/read-and-write)

## Homework submission

Use [these instructions](../../homework.md) to submit your homework.
