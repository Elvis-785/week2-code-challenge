# Interactive Shopping List

This shopping list web application allows users to add item to a list, mark items as purchased, clear the list.

# Features 

**Add Items**: Users can add new items to a shopping list using an input field button.
2. **Mark as Purchased**: Users can click on an item to mark it as purchased. Purchased items are visually distinguished by a strikethrough text and different background color.
3. **Clear List**: Users can clear the entire list with the "Clear List" button.

# the step-by-step guide

1. **Add Items**:
    - User enters text in the input field and clicks "Add Item".
    - The input text is trimmed and checked if it’s not empty.
    - The item is added to the `shoppingList` array.
    - The list is re-rendered to display the new item.

2. **Mark as Purchased**:
    - User clicks on a list item.
    - The item’s class is toggled to "checked" to apply strikethrough text and background color.

3. **Clear List**:
    - User clicks the "Clear List" button.
    - The `shoppingList` array is cleared.
    - The list is re-rendered to remove all items.
