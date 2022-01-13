
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const cors = require('cors');
const io = require('socket.io')(server);
const upload = require('express-fileupload');
const fs = require('fs').promises;


app.use(cors());
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));
app.use('/', express.static("public"));
app.use(upload());

app.use((req, res, next) => {
  const startTime = Date.now();
  req.on("end", () => {
    const endTime = Date.now();
    const vals = {
      method: req.method,
      path: req.path,
      time: endTime - startTime,
    };
    console.log(vals);
  });
  next();
})

let emit_socket;

io.on('connection', (socket) => {
  console.log('User connected');
  emit_socket = socket;
})

app.post('/upload-img', async (req, res) => {
  try {
    let { data } = req.body;
    // req.files.scrn_img.mv('public/scrn_img.jpg');
    // let data = await fs.readFile('public/scrn_img.jpg', { encoding: 'base64' });
    io.emit('IMAGE', { image: true, buffer: data });
    res.status(200).send({ message: "Screen image uploaded..." })
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
})

server.listen(3000, (err) => {
  console.log('Running on http://localhost:3000/');
})