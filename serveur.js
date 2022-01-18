const express= require('express')
const app= express()
var date_ob = new Date();
// var mois = date_ob.getMonth() + 1;
var jour= date_ob.getDay()
var heurs=date_ob.getHours()
const middleware=(req,res,next)=>{

    if(jour>0 && jour<7 && heurs<17 && heurs>9){next()}
    else{res.send('<h1>Horaire : du lundi au vendredi, de 9h à 17h</h1>')} 

  
}

app.use(middleware);
app.use(express.static("public"));


// app.get('/home',(req,res)=>{
//     res.sendFile(__dirname+'/public/index.html')
// });
// app.get('/contact',(req,res)=>{
//     res.sendFile(__dirname+'/public/contact.html')
// });

// app.get('/service',(req,res)=>{
//     res.sendFile(__dirname+'/public/service.html')
// });









const port = 5000
app.listen(port,()=>console.log('port is runing on port${port}'));