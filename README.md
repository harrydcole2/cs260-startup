# cs260-startup
**Programming Pair: Kyer Harris and Harrison Cole**

For our project, we are going to create a Blackjack simulator. Blackjack is one of the most popular betting games at the casino. In the game, the players play against the dealer, trying to get cards that equal 21 without going over. It is a relatively simple game but one surprisingly replete with strategy. We will simplify the rules a little bit and add a cheating mode to the game, that will cause the dealer to cheat when possible. We hope to teach people the follies of gambling while also giving them a run for their money (haha). So who's ready to invest?

We're aren't the best artists, but here is a depiction of what the final product will look like. There will be a dealer and up to three players gathered around a table and dealt cards that will be handled for determining who wins and who loses.

![blackjackRough](blackjackRough.jpg)




2/8/23 HTML Simon Project
- Button elements can have SVG or IMG children, which gives the button an interesting design
- tr and td elements are table row and column elements, which give more control when using tables
- hr and br are useful tools for adding horizontal line divisions and line breaks respectively
- Text spacing is based on width, not on line breaks in VS code

3/10/23 JS Simon Project
- we can access local storage to save things about our website on a particular browser so that the facts are remembered, and access it later (keys values)
- document marks the top of our html DOM tree, from which we can select and manipulate elements
- this keyword returns the actual item, which in Simon tends to be an element of the DOM to manipulate
- await keyword which delays something before running it
- JSON is an important way to store data in local storage but removes functions

3/25/23 Simon DB
- Environment variables must be changed in the development and production environment. Use sudo in production, and advanced setting in windows
- Various databases exist online that can be used for a website, tailored to different needs
- All databases support a kind of object based querires. In Mongo they are of the form database.collection.find(*regex or other method*)
- export in js signifies a public function required elsewhere
- We must get and update database data asyncronously

3/27/23 Simon Login
- A login takes an email, password, and other necessary information and returns a cookie with an authorization token
- Different endpoints for different HTTP requests to do different authentication functions
- We must encrypt whatever passwords of users we have using a package like bcrypt

3/29/23 Simon WebSocket
- For communication to happen between users, websockets can allot a server for multiple users to communicate with (an upgraded http connection of sorts)
- ping/pong every once and awhile to see if a connection is still alive
- in messaging, WebSockets can use connection, message, and close pattern to forward messages appropriately: connection adds to list of connections where messages are forwarded until closed
