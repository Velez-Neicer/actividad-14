
const mongoose = require('mongoose');
const uri = 'mongodb://127.0.0.1:27017/laptop';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
});

mongoose.connection.on('open', _ =>{
    console.log('La base de datos ha sido conectada exitosamente',uri)
})

mongoose.connection.on('error', err =>{
    console.log(err)
})