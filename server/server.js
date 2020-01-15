
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
    console.log("CREATE_ROOM");
    if(ROOMS.some(r => r.name === name)){ cb(1); return };
    socket.room = addRoom(name, isPublic, allowSpec, username);
    socket.user = addUser(username, name);
    cb({status: 0, room : socket.room});
  })

  socket.on("GET_AVAILABLE_ROOMS", (cb) => {
    console.log("GET_AVAILABLE_ROOMS");
    let res = ROOMS.filter(r => r.isPublic);
    cb({status: 0, rooms: res});
  })

  socket.on("JOIN_ROOM", ({username, name}, cb) => {
    console.log("JOIN_ROOM");
    let room = ROOMS.filter(r => r.name === name)[0];
    try {
      let isPlayer = room.addPlayer(username);
      if(isPlayer === "BUSY") throw new Error();
      addUser(username, room.name);
      cb({status : 0, isPlayer, room});
    }
    catch{
      console.table({username: username, roomname: name, room: room});
      cb({status: 2});
    } 
  });

  socket.on("disconnect", () => {
    if(socket.user){
      USERS.filter(user => user !== socket.user);
      ROOMS.filter(room => room.host !== socket.user.name);
      socket.leaveAll();
    }
    else {
      console.log(`Socket disconnected. (id: ${socket.id})`);
    }
  });
});



http.listen(3001, function(){
  console.log('listening on *:3001');
});
