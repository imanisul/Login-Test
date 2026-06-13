require("dotenv").config();
const app = require('./app.js');


const PORT = process.env.PORT || 5050;



app.get('/', (req,res) => {
    res.send("Running")
})

app.listen(PORT, () => {
         console.log(`Server is running in ${PORT}`);
         
})



