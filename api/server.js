const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({ dest: '/uploads/'});

app.post('/upload', upload.single('file'), (req, res) => { 

	console.log("Incoming request for file object: ", req.file);
	
	if (!req.file) { 
		return res.status(400).send("No file uploaded.");
	}
	res.send(`File uploaded successfully, saved internally as: ${req.file.filename}\n`);
});

app.listen(5000, () => { 
	console.log('Express API listening internally on port 5000');
});
