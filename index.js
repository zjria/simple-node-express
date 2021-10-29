const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;


const user = [ 
    {id: 0, name: 'shakila-alomgir', email: 'shabnur@gmail.com', address: 'dhaka-rangpur'},
    {id: 1, name: 'shabnur', email: 'shabnur@gmail.com', address: 'dhaka'},
    {id: 2, name: 'sutorita', email: 'shabnur@gmail.com', address: 'dhaka'},
    {id: 3, name: 'sabnaj', email: 'shabnur@gmail.com', address: 'dhaka'},
    {id: 4, name: 'samia', email: 'shabnur@gmail.com', address: 'dhaka'},
    {id: 5, name: 'shahara', email: 'shabnur@gmail.com', address: 'dhaka'},
    {id: 6, name: 'sabana', email: 'shabnur@gmail.com', address: 'dhaka'}
];

app.get('/user', (req, res)=>{
    res.send(user);
});

// search query problem

// app.get('/user', (req, res) =>{
//     const search = req.query.search;
//     if(search){
//         const searchResult = user.filter(user => user.name.toLocaleLowerCase().includes(search));
//     }
//     else{res.send(user)
//     }
// })

// app. METHOD
app.post('/user', (req, res)=>{
    const newUser = req.body;
    newUser.id = user.length;
    user.push(newUser);

    console.log('hitting the post', req.body)    
    // res.send('inside post');
    res.json(newUser);
})

app.get('/user/:id', (req, res)=>{
    const id = req.params.id;
    const users = user[id];
    res.send(users);
});

app.get('/', (req, res)=>{
    res.send('Hello form my second node server change');
})

app.listen(port, ()=> {
    console.log('listening to port', port);
})