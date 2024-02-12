const express = require("express");
const multer = require("multer");
const app = express();
const port = 3001;

const storage = multer.memoryStorage();
const upload = multer({
    storage:storage
});

app.post('./api/upload', upload.single('image'), (req,res)=>{
    const fileBuffer = req.file.buffer;
    res.json({message:'image upload succesfully'});
});
app.listen(port, ()=>{
    console.log("server is run");
});
