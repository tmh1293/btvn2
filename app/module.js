const fs = require('fs'); // xử lý file


const users = [
    {id: 1, username:"tmh1293" ,password:"123456"}
]

fs.writeFile('users.txt',
JSON.stringify(users),
{
    flag:'a'
},
    (err) => {
        console.log(err)
    }
)





