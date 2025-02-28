# Project Conventions

## Test Conventions

### Title Conventions for Unit Tests

When writing unit tests, use the following conventions for test titles:

- `should render`: Use this when testing if a component or element renders correctly.

  - Example: `should render login button`

- `should trigger`: Use this when testing if an event or action is triggered correctly.

  - Example: `should trigger the submit event on form submission`

- `should not`: Use this when testing if something does not happen.

  - Example: `should not display error message when input is valid`

- `should return`: Use this when testing if a function returns the expected result.

  - Example: `should return the correct user object`

- `should call`: Use this when testing if a function or method is called.

  - Example: `should call the API endpoint on button click`

- `should update`: Use this when testing if a state or value is updated correctly.

  - Example: `should update the state when input changes`

- `should handle`: Use this when testing if an error or exception is handled correctly.

  - Example: `should handle network errors gracefully`

- `should match`: Use this when testing if an output matches the expected pattern or value.

  - Example: `should match the expected output format`

- `should contain`: Use this when testing if a collection contains a specific item.

  - Example: `should contain the new item in the list`

- `should remove`: Use this when testing if an item is removed from a collection.
  - Example: `should remove the item from the list on delete action`

## Styling Conventions

### When to Use `px` vs. `rem`

- **Use `px` for fixed sizes** when precise control is needed, like borders, icons, and small UI elements.

  - Example: `border: 1px solid #ccc;`
  - Example: `icon width: 24px;`

- **Use `rem` for scalable sizes**, especially for typography, spacing (margin/padding), and layout dimensions.
  - Example: `font-size: 1.125rem;` (equals `18px` if root `font-size` is `16px`)
  - Example: `margin: 1.5rem;`

### Why Prefer `rem`?

- It **scales with user preferences**, making it more accessible.
- It avoids cascading issues from `em` (which depends on the parent element's font-size).
- It makes it easier to maintain a consistent, responsive design across different devices.

### When to Use `em`

- Use `em` only when you want an element to scale based on its parent's font size, like in buttons or nested components.
  - Example: `padding: 1em;` (depends on the font size of the button itself)
