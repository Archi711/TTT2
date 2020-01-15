
class GameData{
  constructor(){
    this.fields = [0,0,0,0,0,0,0,0];
    this.status = "NOT_STARTED";
  }
}

module.exports = class RoomModel {
  constructor(name, isPublic, allowSpec, host){
    this.name = name;
    this.isPublic = isPublic;
    this.allowSpectators = allowSpec;
    this.players = [host];
    this.spectators = this.allowSpectators ? [] : null;
    this.gameData = new GameData()
  }
  addPlayer(name){
    if(this.players.length < 2){
      this.players.push(name);
      return true;
    }
    else if(this.allowSpectators){
      this.spectators.push(name);
      return false;
    }
    else return "BUSY";
  }
}

