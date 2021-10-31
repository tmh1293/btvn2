const fs = require('fs');

const deleteUser = (id) => {
    fs.readFile('users.json','utf-8',(err,data)=>{
        if(err) throw err;
        const result = JSON.parse(data);
        const user = result.filter(user => user.id != id )
        console.log(user) 
        fs.promises.writeFile('users.json',JSON.stringify(user))
    })
}

module.exports = deleteUser;