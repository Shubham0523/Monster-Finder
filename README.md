# Monster-Finder

This is a JavaScript code that creates a web page that displays a list of monsters and allows the user to search for a specific monster. Here is a breakdown of what the code does:

It imports a JavaScript module called monsters from a file called monster.js.

It loops through each object in the monsters array and calls the showMonster function to display the monster on the page.

It adds an event listener to the search field that listens for a keyup event and then performs a search based on the text entered in the search field.

The search function loops through each monster displayed on the page and checks if the monster's name or email matches the search keyword. If a match is found, the monster is displayed, otherwise it is hidden.

If no monsters are found matching the search keyword, a "Not Found" message is displayed on the page.

There are two helper functions - showMonster and notFoundBox - that create HTML elements and add them to the page.

Overall, the code creates an interactive web page that allows the user to search for a specific monster by name or email.

<img width="1247" alt="Screenshot 2023-04-05 at 11 51 48 PM" src="https://user-images.githubusercontent.com/95907789/230171271-303c2050-56da-4398-919b-eaa25e43c51b.png">
