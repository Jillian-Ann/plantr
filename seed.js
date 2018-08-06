let db = require('./models');
let vegetable 

db.sync({force:true})
.then(()=>{
    console.log('database connected!')})
.catch(()=>{
    console.log(error)
})
