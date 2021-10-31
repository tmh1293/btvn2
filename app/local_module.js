const addUser = require('./add_user');
const readUsers = require('./read_users');
const readUser = require('./read_user');
const deleteUser = require('./delete_user');
const updateUser = require('./update_user');

addUser({username:"newuser",password:"12345"}) // Add User

//readUsers(); // Read All

//readUser(2); // read by id

//deleteUser(1) // delete by id

//updateUser(2,{"id":2,"username":"testupdate","password":"1223456"});