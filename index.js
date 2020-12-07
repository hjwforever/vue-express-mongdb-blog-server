const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");
const Role = db.role;

const path = __dirname + '/views/';

const app = express();

app.use(express.static(path));

const corsOptions = {
    origin: "http://localhost:8081"
    // origin: "http://localhost:8084"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// connect db
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connected to the database!");
        initial();
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

// simple route
app.get("/", (req, res) => {
    // res.json({ message: "Welcome to hjw's blog." });
    res.sendFile(path + "index.html");
});

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require("./routes/post.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


// initial() function helps us to create 3 important rows in roles collection.
function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'user' to roles collection");
            });

            new Role({
                name: "moderator"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'moderator' to roles collection");
            });

            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'admin' to roles collection");
            });
        }
    });
}
