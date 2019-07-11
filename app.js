const title = document.getElementById('title');
const adjective1 = document.getElementById('adjective1')
const adjective2 = document.getElementById('adjective2')
const verb1 = document.getElementById('verb1')
const adjective3 = document.getElementById('adjective3')
const noun1 = document.getElementById('noun1')
const noun2 = document.getElementById('noun2')
const adjective4 = document.getElementById('adjective4')

const titleInput = document.getElementById('titleInput');
const adjective1Input = document.getElementById('adjective1Input')
const adjective2Input = document.getElementById('adjective2Input')
const verb1Input = document.getElementById('verb1Input')
const adjective3Input = document.getElementById('adjective3Input')
const noun1Input = document.getElementById('noun1Input')
const noun2Input = document.getElementById('noun2Input')
const adjective4Input = document.getElementById('adjective4Input')

function doThing() {
    title.textContent = titleInput.value;
    adjective1.textContent = adjective1Input.value;
    adjective2.textContent = adjective2Input.value;
    verb1.textContent = verb1Input.value;
    adjective3.textContent = adjective3Input.value;
    noun1.textContent = noun1Input.value;
    noun2.textContent = noun2Input.value;
    adjective4.textContent = adjective4Input.value;
}