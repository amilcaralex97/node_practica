if(process.env.NODE_ENV==='production')
    module.exports=require('./prod')
else
    module.exports=require('./dev')
/* mongodb+srv://amilcaralex97:12345@cluster0-owbxk.mongodb.net/g6-node?retryWrites=true */