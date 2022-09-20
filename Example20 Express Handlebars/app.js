//====================================Declaration================================================//
const express = require('express');
const app = express();

const exphbs = require('express-handlebars');
const path = require('path');

//Configure PORT
const PORT = process.env.PORT || 48080;

// Set handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', './handlebars/views'); //This is optional unless you dont want to change views folder path.

//======================================================================================//
// Set handlebar template routes, by default since / is mentioned below config will look for views folder in /

// Homepage
app.get('/', function (req, res) {        // Here '/' is the path of webpage https://localhost:8080/ i.e. "/"
    res.render(
                'homepage',               // same name should be used for file under views i.e. homepage.handlebars file.
                 {author_name: "sudhir"}  // This author_name is a variable of homepage.handlebars file, will replace {{author_name}} placehoder in homepage.handlebars file.
    );     
});

// About me page
app.get('/aboutme', function (req, res) {        // Here '/aboutme' is the path of webpage https://localhost:8080/aboutme
    res.render(
                'aboutme',               // same name should be used for file under views i.e. homepage.handlebars file.
                 {author_name: "sudhir",company: "Salesforce"}  // This author_name & company are variables of homepage.handlebars file, will replace {{author_name}} & {{company}} placehoders in homepage.handlebars file.
    );     
});

// Load all static html files in the directory, here index.html file open as default at http://localhost:58080/ but to load html like Resume.html we should call complete http://localhost:58080/Resume.html
//app.use(express.static(path.join(__dirname)));

// Load all static html files in specific directory.
//app.use(express.static(path.join(__dirname, '.')));

// Express access available html pages from Pages folder.
app.use(express.static(path.join(__dirname, '/Pages')));

// Configure Port
app.listen(PORT, () => console.log("Server listening on port " + PORT));