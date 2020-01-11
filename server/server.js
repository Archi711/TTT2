
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
//
const User = require('./models/User.Model');
const Room = require('./models/Room.Model');

const USERS = [new User("SERVER", null, 0)];
const addUser = (name, room) => {
  let user = new User (name, room, USERS.length);
  USERS.push(user);
  return user;
}
const ROOMS = [];
const addRoom = (name, isPublic, allowSpec, hostname) => {
  let room = new Room(name, isPublic, allowSpec, hostname);
  ROOMS.push(room);
  return room;
}

io.on('connection', socket => {
  console.log(`Socket connected. (id: ${socket.id})`);

  socket.on("CREATE_ROOM", ({username, name, isPublic, allowSpec}, cb) => {
    if(ROOMS.some(r => r.name === name)){ cb(1); return };
    socket.room = addRoom(name, isPublic, allowSpec, username);
    socket.user = addUser(username, name);
    cb({status: 0, data : socket.room});
  })

  socket.on("GET_AVAILABLE_ROOMS", () => {
    return ROOMS.filter(r => r.isPublic);
  })

  socket.on("JOIN_ROOM", ({username, roomname}, cb) => {
    let room = ROOMS.filter(r => r.name === roomname)[0];
    let isPlayer = room.addPlayer(username);
    if(room && isPlayer !== 'BUSY'){
      addUser(username, room.name);
      cb({status : 0, isPlayer, room});
    }
    else {
      cb({status: 2});
    }
  });

  socket.on("disconnect", () => {
    if(socket.user){

    }
    else {
      console.log(`Socket disconnected. (id: ${socket.id})`);
    }
  });
});



http.listen(3001, function(){
  console.log('listening on *:3001');
});
