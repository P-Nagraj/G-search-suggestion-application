# Google Search Suggestions

## Overview

Google Search Suggestions is a React application that displays a list of search suggestions and allows users to filter them by typing in the search box. Users can also click on a suggestion to automatically fill the search input.

## Features

* Display a list of search suggestions.
* Search suggestions dynamically as the user types.
* Filter suggestions in real time.
* Select a suggestion with a single click.
* Responsive and user-friendly interface.

## Technologies Used

* React.js
* JavaScript (ES6)
* HTML5
* CSS3

## Project Structure

```text
src/
├── components/
│   ├── SuggestionItem/
│   └── GoogleSuggestions/
├── App.js
├── index.js
└── index.css
```

## Components

### GoogleSuggestions

* Maintains the application state.
* Stores the search input value.
* Filters the suggestions based on user input.
* Passes data and functions to child components.

### SuggestionItem

* Displays each suggestion item.
* Receives suggestion details as props.
* Updates the search input when the user clicks on a suggestion.

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project folder:

```bash
cd google-search-suggestions
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

## How It Works

1. The application displays a list of suggestions.
2. Users enter text in the search field.
3. The app filters suggestions based on the entered text.
4. Clicking a suggestion updates the search input.

## Learning Outcomes

* Understanding React components.
* Managing state using class components.
* Passing data through props.
* Handling user events.
* Rendering lists using `map()`.
* Updating the UI using `setState()`.

## Future Enhancements

* Add API integration for live search suggestions.
* Highlight matching search text.
* Add dark mode support.
* Improve accessibility.


