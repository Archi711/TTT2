module.exports = class UserModel {
    constructor(name, room = null, id = 0, status = "LOGGED"){
      this.name = name;
      this.room = room;
      this.id = id;
      this.status = status;
  }
}