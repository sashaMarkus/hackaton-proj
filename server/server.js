const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const users = require('./routes/users');

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/user', users);

const PORT = process.env.PORT || 5050;

mongoose.connect("mongodb+srv://admin:admin123@cluster0.o6ypj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
 .then(() => {
     app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
 })
 .catch((err) => console.log(err));

 mongoose.set('useFindAndModify', false);
