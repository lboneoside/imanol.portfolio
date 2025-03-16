fetch("data/sections.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector(".grid-container");
    data.sections.forEach((section, index) => {
      const sectionElement = document.createElement("section");
      sectionElement.innerHTML = `
        <h2>${section.title}</h2>
        <img src="${section.image}" alt="${section.title}" class="section-image" />
        <p>${section.content}</p>
        <a href="detail.html?id=${index}" class="details-link">View Details</a>
      `;
      container.appendChild(sectionElement);
    });
  })
  .catch((error) => console.error("Error loading sections:", error));
