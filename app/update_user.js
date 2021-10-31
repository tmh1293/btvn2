const fs = require('fs');
const updateUser = async(id,dataUpdate) => {
    let getId = 0;
    fs.readFile('users.json','utf-8',(err,data)=>{
        if(err) throw err;
        const result = JSON.parse(data);
        
        result.find((element,index) => {
            if(element.id == id)
            getId = index;
        })  
        result[getId] = dataUpdate;
        console.log(result);
        fs.promises.writeFile('users.json',JSON.stringify(result));
        
    })
    // const getOtherUser = await fs.promises.readFile('users.json','utf-8',(err,data)=>{
    //     if(err) throw err;
    //     const result = JSON.parse(data);
    //     result.filter(user => user.id != id )
           
    // })
    // console.log(getOtherUser)
}

updateUser(2,{"id":2,"username":"testupdate","password":"1223456"});