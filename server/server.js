
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const User = require('./models/User.Model');
const Room = require('./models/Room.Model');

let USERS = [new User("SERVER", null, 0)];
const addUser = (name, room) => {
  let user = new User (name, room, USERS.length);
  USERS.push(user);
  return user;
}
let ROOMS = [];
const addRoom = (name, isPublic, allowSpec) => {
  let room = new Room(name, isPublic, allowSpec, +ROOMS.length);
  ROOMS.push(room);
  return room;
}

io.on('connection', socket => {
  console.log(`Socket connected. (id: ${socket.id})`);

  socket.on("CREATE_ROOM", ({name, roomname, isPublic, allowSpec}, cb) => {
    console.log("CREATE_ROOM");

    if(ROOMS.some(r => r.name === roomname)){
      cb({status: 1}); return;
    };

    socket.room = addRoom(roomname, isPublic, allowSpec);
    socket.user = addUser(name, roomname);
    socket.room.addPlayer(socket.user);
    socket.join(socket.room.name);

    cb({status: 0, room : {...socket.room}});
  })

  socket.on("GET_AVAILABLE_ROOMS", (cb) => {
    console.log("GET_AVAILABLE_ROOMS");
    let res = ROOMS.filter(r => r.isPublic);
    cb({status: 0, rooms: res});
  })

  socket.on("JOIN_ROOM", ({name, roomname}, cb) => {
    console.log("JOIN_ROOM");
    let room = ROOMS.filter(r => r.name === roomname)[0];
    if(room === undefined) cb({status: 3});
    try {
      let player = addUser(name, room.name);
      socket.user = player;
      socket.room = room;
      room.addPlayer(player);
      socket.join(room.name);
      cb({status : 0, room: {...room}});
    }
    catch (e){
      cb({status: 2});
    } 
  });

  socket.on("UPDATE_DATA_PING", data => {
    console.log("UPDATE_DATA_PING");
    socket.broadcast.to(socket.room.name).emit("UPDATE_DATA_PING", data);
  });


  socket.on("disconnect", () => {
    if(socket.user){
      socket.leaveAll();
      let isRoomEmpty = socket.room.leave(socket.user.id);
      if(isRoomEmpty) ROOMS = ROOMS.filter(room => room.id !== socket.room.id);
      else socket.broadcast.to(socket.room.name).emit("UPDATE_DATA_PING", socket.room);
      
      USERS = USERS.filter(user => user.id !== socket.user.id);

      console.log(`User ${socket.user.name} leaving...`);
      if(isRoomEmpty) console.log(`Room ${socket.room.name} has been deleted`);
    }
    else {
      console.log(`Socket disconnected. (id: ${socket.id})`);
    }
  });
});



http.listen(3001, function(){
  console.log('listening on *:3001');
});
