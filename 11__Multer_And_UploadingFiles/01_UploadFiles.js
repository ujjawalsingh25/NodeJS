
const path = require('path');
const express = require('express');
const multer = require('multer');

const app = express();
const PORT = 3000;

// const upload = multer({dest: "uploads/"});      // upload is a middleware that put all the uploaded file to the uploads folder.

const storage = multer.diskStorage({                    //file -> file user try to upload
    destination: function(req, file, cb){        // cb -> callback, having two parameter -> (error, folder/folderpath) 
        return cb(null, "./uploads");
    },       
    filename: function(req, file, cb){
        return cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({storage});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({extended: false}));     // help to parse our form-data

app.get("/", (req, res) => {
    return res.render("HomePage");
});

app.post('/upload', upload.single("profileImage"), (req, res) => { 
    // upload single file that is profileImage from views -> homepage.ejs
    // The uploaded can't be read as not in as format so need to change using "DISK STORAGE"
    console.log(req.body);
    console.log(req.file);
    return res.redirect("/");
})



app.listen(PORT, () => console.log(`Server started at PORT :: (http://localhost:${PORT}/) : `));
// (http://localhost:3000/) 