module.exports = class UserModel {
    constructor(name, room = null, id = 0){
      this.name = name;
      this.room = room;
      this.id = id;
  }
}