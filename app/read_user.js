const fs = require('fs');

const readUser = (id) => {
    fs.readFile('users.json','utf-8',(err,data)=>{
        if(err) throw err;
        const result = JSON.parse(data);
        const user = result.filter(user => user.id == id )
        console.log(user)   
    })
}

module.exports = readUser;