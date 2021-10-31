const fs = require('fs');

const addUser = async (username) => {
    try{
        const stringUsers = await fs.promises.readFile('users.json', { encoding: 'utf8'});
        const users = JSON.parse(stringUsers);
        const newUsers = [
            ...users,
            {id:users.length+1,...username}
        ];
        await fs.promises.writeFile('users.json',JSON.stringify(newUsers))
    }
    catch(err){
        console.log(err);
    }   
}

module.exports = addUser;