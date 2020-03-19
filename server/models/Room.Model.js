

module.exports = class RoomModel {
  constructor(name, isPublic, allowSpec, id){
    this.name = name;
    this.isPublic = isPublic;
    this.allowSpectators = allowSpec;
    this.players = [];
    this.spectators = this.allowSpectators ? [] : null;
    this.fieldStatus = [0,0,0,0,0,0,0,0,0];
    this.id = id;
  }
  addPlayer(user){
    if(this.players.length < 2){
      this.players.push(user);
      return true;
    }
    else if(this.allowSpectators){
      this.spectators.push(user);
      return false;
    }
    else throw new Error("Room is unavailable");
  }
  leave(userid){
    this.players = this.players.filter(user => user.id !== userid);
    return this.players.length === 0;
  }
}

