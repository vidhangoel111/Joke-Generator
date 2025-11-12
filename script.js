let jokeDisplay = document.querySelector("#jokeDisplay");
let jokeButton = document.getElementById('jokeButton');
jokeButton.addEventListener('click', fetchJoke);
function fetchJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            jokeDisplay.innerText = `${data.setup} - ${data.punchline}😂`;
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            jokeDisplay.innerText = 'Failed to fetch a joke. Please try again later.';
        });
}