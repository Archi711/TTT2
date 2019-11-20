
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', socket => {
  console.log('A user connected!');
  
  socket.on('AUTHORIZE_REQ', function(data, callback){
    console.log('req received');
    socket.name = data.name;
    io.of('/').in(data.room).clients(function(error,clients){
      console.log(`Active clients in room ${data.room} : ${clients.length}`);
      
      if(clients.length > 1){
        callback("AUTHORIZE_FAILURE");
        console.log(`User with id: ${socket.id} tried to enter busy room!`);
      }
      else{
        socket.room = data.room;
        socket.join(data.room);
        callback('AUTHORIZE_SUCCESS');
        console.log(`A user: ${socket.name} logged in! Room: ${socket.room}`);
      }
    });

   
    
    
  })

  socket.on("disconnect", s => {
    socket.leaveAll();
    if(socket.name){
      console.log(`A user: ${socket.name} logged out and disconnected from server.`)
    }
    else {
      console.log(`A user with id: ${socket.id} disconnected from server.`)
    }
  });
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});