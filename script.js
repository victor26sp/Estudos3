const items = [
    { name: 'Modelo 1', description: 'Descrição do Modelo 1', image: 'imagem1.jpg' },
    // ... outros modelos de roupas
  ];
  
  const catalogElement = document.getElementById('catalog');
  
  items.forEach(item => {
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
  