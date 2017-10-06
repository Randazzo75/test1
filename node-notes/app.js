console.log("Iniziamo");

const fs = require('fs');
const os = require('os');

var user = os.userInfo();
console.log(user);


fs.appendFile('testo.txt','Hello ' + user.username,function(err)
{
    if (err)
        console.log(err.message);
})