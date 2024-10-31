const express = require("express");
const app = express();
const todosRoutes = require('./routes/todos.js');
const port = 3000;


app.use(express.json());


app.use('/todos', todosRoutes);


app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
