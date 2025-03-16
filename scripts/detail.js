const params = new URLSearchParams(window.location.search);
const sectionId = params.get('id');

fetch('data/sections.json')
  .then(response => response.json())
  .then(data => {
    const section = data.sections[sectionId];
    if (section) {
      const detailContainer = document.getElementById('section-detail');
      detailContainer.innerHTML = `
        <h2>${section.title}</h2>
        <p>${section.content}</p>
      `;
    } else {
      document.getElementById('section-detail').innerHTML = '<p>Section not found.</p>';
    }
  })
  .catch(error => console.error('Error loading section details:', error));