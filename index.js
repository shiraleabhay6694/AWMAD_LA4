var express = require('express')
var mysql=require('mysql2')
var app = express()
var port = '3004'
var host = 'localhost'

var bodyParser = require('body-parser');
app.set('view engine','pug')
var urlencodedParser = bodyParser.urlencoded({ extended: false })  



  
  
app.get('/form.html', function (req, res) {  
    res.sendFile('form.html',{root:__dirname});   
})

app.get('/order.html', function (req, res) {  
    res.sendFile('order.html',{root:__dirname});   
})

app.get('/contact.html', function (req, res) {  
    res.sendFile('contact.html',{root:__dirname});   
})

app.post('/submit',urlencodedParser, function(req,res){
   
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'abhay',
        database: 'shop'
      })
    
      connection.connect((err)=>{
          if(err) throw err
          console.log('connected..')
      })
    

    var response = {  
       v_name:req.body.v_name,
       quantity:req.body.quantity,
       price:req.body.price
        
    };  
    console.log(response);  
    var sql="insert into vegetables values('"+ response.v_name +"','"+ response.quantity +"','"+ response.price +"')"

    connection.query(sql, function (err, rows, fields) {
        if (err) throw err
      
        console.log('inserted')
      })

      res.redirect('/')
      connection.end()
      
})

app.post('/submit2',urlencodedParser, function(req,res){
   
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'abhay',
        database: 'shop'
      })
    
      connection.connect((err)=>{
          if(err) throw err
          console.log('connected..')
      })
    

    var response = {  
       cname:req.body.cname,
       vname: req.body.vname,
       quantity:req.body.quantity
       
        
    };  
    console.log(response);  
    var sql="insert into orders values('"+ response.cname +"','"+ response.vname +"','"+ response.quantity +"')"

    connection.query(sql, function (err, rows, fields) {
        if (err) throw err
      
        console.log('inserted')
      })

      res.redirect('/')
      connection.end()
      
})

app.get('/vegetables',(req,res)=>{

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'abhay',
        database: 'shop'
      })
    
      connection.connect((err)=>{
          if(err) throw err
          console.log('connected..')
      })
    

    connection.query("SELECT * from vegetables", function (err, rows, fields) {
        if (err) throw err
      
         res.render('vegetables',{title:'Vegetable Details',
        items:rows})
      })

      connection.end()

})


app.get('/orders',(req,res)=>{

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'abhay',
        database: 'shop'
      })
    
      connection.connect((err)=>{
          if(err) throw err
          console.log('connected..')
      })
    

    connection.query("SELECT * from orders", function (err, rows, fields) {
        if (err) throw err
      
         res.render('orders',{title:'Order Details',
        items:rows})
      })

      connection.end()

})


app.get('/',(req,res)=>{
    res.sendFile('home.html',{root:__dirname});  
})




app.listen(port,host,(req,res)=>{
    console.log(`Listening on http://${host}:${port}`)
})
	