const modelForm = document.getElementById('modelForm');

modelForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const modelName = document.getElementById('modelName').value;
  const modelDescription = document.getElementById('modelDescription').value;
  const modelImage = document.getElementById('modelImage').value;

  const newItem = { name: modelName, description: modelDescription, image: modelImage };
  items.push(newItem);

  // Redirecionar de volta ao catálogo após o cadastro
  window.location.href = 'index.html';
});
