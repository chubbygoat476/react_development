# Development

### Link to Deployed Website
If you used the stencil code, this is `https://chubbygoat476.github.io/react_development

### Goal and Value of the Application
  A list of ice cold drinks, pick out your favorites!

### Usability Principles Considered
  Filters and the list of favorites are up top where they are easy to see, and similar functionality is all grouped together.
  Big buttons for users to easily understand and press.

### Organization of Components
  The filters and sorting are rendered in a "toolbar" component
  The faves section is its own, and so are each drink card thing
  All the state management/"heavy" compute/logic is done in App.js.  The only job of the 
  components is to call functions and render themselves.

### How Data is Passed Down Through Components
  State variables are passed to the components and they call back to functions

### How the User Triggers State Changes
  Clicks on the buttons and toolbar circles trigger functions that change the state
