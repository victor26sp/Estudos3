const catalogElement = document.getElementById('catalog');
const addButton = document.getElementById('addButton');
const modelFormContainer = document.getElementById('modelFormContainer');
const modelForm = document.getElementById('modelForm');

let models = [];

// Fetch models data from JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    models = data;
    displayModels();
  });

// Display models in the catalog
function displayModels() {
  catalogElement.innerHTML = '';
  models.forEach(item => {
    const catalogItem = document.createElement('div');
    catalogItem.className = 'catalog-item';

    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.name;

    const name = document.createElement('h3');
    name.textContent = item.name;

    const description = document.createElement('p');
    description.textContent = item.description;

    catalogItem.appendChild(image);
    catalogItem.appendChild(name);
    catalogItem.appendChild(description);

    catalogElement.appendChild(catalogItem);
  });
}

// Show/hide the model form
addButton.addEventListener('click', () => {
  modelFormContainer.classList.toggle('hidden');
});

// Handle form submission
modelForm.addEventListener('submit', event => {
  event.preventDefault();

  const modelName = document.getElementById('modelName').value;
  const modelDescription = document.getElementById('modelDescription').value;
  const modelImage = document.getElementById('modelImage').value;

  const newModel = {
    name: modelName,
    description: modelDescription,
    image: modelImage
  };

  models.push(newModel);
  displayModels();

  // Clear form fields
  modelForm.reset();
  modelFormContainer.classList.add('hidden');
});
