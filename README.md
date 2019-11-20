# TTT2

a basic, too easy version of TicTacToe.

TicTacToe game built using React, Socket.io.

Node server with socket and games management, front end in React.

I want to make as simple as possible.
Later of course UPGRADE!

## TODOS

1. **ASYNC AUTHORIZATION/STATE UPDATE IN REDUCER**

### COMPONENTS TODO

1. LANDING
   * **DONE** export *styled* components make them more reusable?
   * **!!!** export validation to other file etc. make it more **proper** (error class, room validation, nick validation)
2. MODAL
   1. in/out 'google style' animation
   2. closing button/X
   3. make more customizable
     * buttons etc WINDOWSlike MessageBox

3. APP
   * make it work...

### SERVER

1. Export event handlers to functions - make file more readable.
   * maybe make a wrapper class for events? (e.g. handler(io, socket, ?data) ?)

### Problems

1. How to *properly* handle socket... **DONE** USE REDUCER !

### General TODO

1. Make server handle game, chat, spectators, showing available lobbys.
2. Collect data from games and make with TensorFlow TicTacToe champion AI.
