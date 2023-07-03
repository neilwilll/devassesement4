const complimentBtn = document.getElementById("complimentButton");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/")
    .then(res => {
      const data = res.data;
      alert(data);
    });
};

const quoteBtn = document.getElementById('getQuoteBtn');
const quoteText = document.getElementById('quote');

quoteBtn.addEventListener('click', fetchQuote);

function fetchQuote() {
  fetch('https://api.example.com/quotes') // Replace with the actual API endpoint
    .then(response => response.json())
    .then(data => {
      quoteText.textContent = data.quote;
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

const goalInput = document.getElementById('goalInput');
const addGoalBtn = document.getElementById('addGoalBtn');
const goalList = document.getElementById('goalList');

addGoalBtn.addEventListener('click', addGoal);

function addGoal() {
  const goal = goalInput.value;

  fetch('https://api.example.com/goals', {
    method: 'POST',
    body: JSON.stringify({ goal }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      const goalItem = document.createElement('li');
      goalItem.textContent = data.goal;
      goalList.appendChild(goalItem);
      goalInput.value = '';
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

const imgBtn = document.getElementById('getMotivationalImgBtn');
const imgElement = document.getElementById('motivationalImg');

imgBtn.addEventListener('click', fetchMotivationalImage);

function fetchMotivationalImage() {
  fetch('https://api.example.com/motivational-images') // Replace with the actual API endpoint
    .then(response => response.json())
    .then(data => {
      imgElement.src = data.imageURL;
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

complimentBtn.addEventListener('click', getCompliment);

const nameInput = document.getElementById('nameInput');
const affirmationButton = document.getElementById('affirmationButton');
const affirmationResult = document.getElementById('affirmationResult');

affirmationButton.addEventListener('click', getDailyAffirmation);

function getDailyAffirmation() {
  const name = nameInput.value;
  const affirmations = [
    `You, ${name}, are capable of achieving greatness every day!`,
    `Believe in yourself, ${name}, for you have the power to overcome any challenge!`,
    `Stay positive, ${name}, and watch how your life transforms for the better!`
    // Add more affirmations as desired
  ];
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  const affirmation = affirmations[randomIndex];
  affirmationResult.textContent = affirmation;
}

const imageUpload = document.getElementById('imageUpload');
const imageDescription = document.getElementById('imageDescription');
const addToVisionBoardButton = document.getElementById('addToVisionBoardButton');
const visionBoard = document.getElementById('visionBoard');

addToVisionBoardButton.addEventListener('click', addToVisionBoard);

function addToVisionBoard() {
  const file = imageUpload.files[0];
  const description = imageDescription.value;
  const imageURL = URL.createObjectURL(file);
  const imageElement = document.createElement('img');
  imageElement.src = imageURL;
  imageElement.alt = description;
  const captionElement = document.createElement('p');
  captionElement.textContent = description;
  visionBoard.appendChild(imageElement);
  visionBoard.appendChild(captionElement);
  imageDescription.value = '';
}

const createPost = () => {
  const titleInput = document.getElementById('titleInput');
  const bodyInput = document.getElementById('bodyInput');

  const post = {
    title: titleInput.value,
    body: bodyInput.value
  };

  fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
    .then(response => response.json())
    .then(data => {
      console.log('New post created:', data);
      // Do something with the response data
    })
    .catch(error => {
      console.error('Error:', error);
    });
};


