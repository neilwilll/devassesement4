const express = require('express');
const app = express();

const fortunes = [
  "You will find success in unexpected places.",
  "A thrilling adventure awaits you in the near future.",
  "Good fortune will smile upon you today.",
  "Your hard work will pay off and lead to great achievements.",
  "Love and happiness will surround you in the coming days."
];

app.get('/fortune', (req, res) => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const fortune = fortunes[randomIndex];
  res.json({ fortune });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const express = require('express');
const go = express();
app.use(express.json());

let posts = [];

app.post('/posts', (req, res) => {
  const { title, body } = req.body;
  const newPost = { id: Date.now(), title, body };
  posts.push(newPost);
  res.json(newPost);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


