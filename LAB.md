Class 26: To Done Notes
===

Create a notes app
 
## Feature Tasks 

Create the following components and structure them according to the following diagram.  

``` 
App
  Landing
  Dashboard Container
      NoteForm
      NoteList
        Note
          NoteDisplay
          NoteForm
```

## Components

### `App`

* The App component should manage the frontend routes and have a navbar (`Header` optional)
* the `/` route should display the `Landing` component
* the `/dashboard` route should display the `Dashboard` component

### `Landing`

* The Landing component should display a brief description of the notes app

### `DashboardContainer` 

* The Dashboard Container component should manage the entire **notes application state**
* The state should contain a notes array
* It should have a `addNote(note)` method that calls the server and then adds the id to note, and the note to `state.notes`
  * each note that gets added should have the following data
    * `completed`: false by default
    * `content`: user provided content
    * `title`: user provided title
* It should have a bound `updateNote(note)` method that updates that note on server, then in `state.notes` based on its `id`
* BONUS: It should have a bound `removeNote(note)` method that removes the note from server, then `state.notes` based on its `id`
* Test: no tests

### `Dashboard`

* The Dashboard component contains the presentation around the NoteCreateForm and NoteList

### `NoteForm`

* `onComplete` the NoteForm should call this with new note
* Optional takes a 'note` prop, in which case it should present as editing
    * Fill the form state from the props
    * Show a Cancel button
* `onCancel` called when the cancel button is clicked
* Test:
    * Snapshot Add State
    * Snapshot Edit State
    * Add: Test filling inputs and submitting calls `onComplete` with correct data
    * Edit: Test filling one or two inputs and submitting calls `onComplete` with correct data
    * Edit: Test clicking cancel calls `onCancel` _and_ test that object was not modified

### `NoteList` 

* should display an unordered list of Note components
* Test: Snapshot

### `Note`

* Displays either NoteDisplay or NoteForm
* Has local `state.editing` which defaults to true
* Has a button to switch to edit mode
* Conditionally displays either the NoteDisplay or NoteForm based on value of `state.editing`
* BONUS: should display a delete button
    * `onDelete` the note id should be passed to be removed
* Test:
    * Snapshot display mode
    * Simulate edit cick and Snapshot edit mode
    * Simulate delete click fires `onDelete`
  
### NoteDisplay

* Displays read-only info about the note
* Test: Snapshot

## Documentation

Write a description of the project in your README.md

## Rubric

* Functionaly Correct **4pts**
    * Display List 
    * Add a Note
    * Edit a Note
* Tests **4pts**
* Idiomatic props, callback props, React components **2pts**