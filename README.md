# TTT2

a basic, too easy version of TicTacToe.

TicTacToe game built using:

* [react](https://www.npmjs.com/package/react)
* [create-react-app](https://www.npmjs.com/package/create-react-app)
* [socket.io](https://www.npmjs.com/package/socket.io)
* [react-router-dom](https://www.npmjs.com/package/react-router-dom)

Node server with socket and games management, frontend in React.

I want to make as simple as possible.
Later of course UPGRADE!

## TODOS

1. Better authentication when manually "typing" routes
2. saving and retrieving app state from local/sessionStorage

### COMPONENTS TO

1. MODAL
   1. in/out 'google style' animation
   2. closing button/X
   3. make more customizable
     * buttons etc WINDOWSlike MessageBox

### SERVER

1. Export event handlers to functions - make file more readable.
   * maybe make a wrapper class for events? (e.g. handler(io, socket, ?data) ?)

### Problems

### General TODO

1. Make server handle game, chat, spectators, showing available lobbys.
2. Collect data from games and make with TensorFlow TicTacToe champion AI.

#### Done

1. **DONE** ASYNC AUTHORIZATION/STATE UPDATE IN REDUCER
2. How to *properly* handle socket... **DONE** USE REDUCER
3. **DONE** export *styled* components make them more reusable?
4. **DONE** export validation to other file etc. make it more **proper** (error class, room validation, nick validation)
5. **DONE** switch
