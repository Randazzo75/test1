console.log('Starting notes.js')

module.exports.age = 25;
module.exports.addNote = function(){
    console.log("addNote");
    return 'New note';
}

module.exports.add = (a,b) => {
    console.log(`${a} + ${b}`);
    return a+b;
}