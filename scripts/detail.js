const params = new URLSearchParams(window.location.search);
const detailId = params.get("id");

// Charger le fichier JSON correspondant
fetch(`data/details/detail${detailId}.json`)
  .then((response) => response.json())
  .then((data) => {
    const detailContainer = document.getElementById("section-detail");
    detailContainer.innerHTML = `
      <h2>${data.titre}</h2>
      <p><strong>Synopsis:</strong> ${data.synopsis}</p>
      <div class="videos">
        ${[data.video1, data.video2, data.video3, data.video4]
          .map((video) => {
            if (video.includes("youtube.com/embed")) {
              return `<iframe src="${video}" frameborder="0" allowfullscreen class="video-iframe"></iframe>`;
            } else {
              return `<video src="${video}" controls></video>`;
            }
          })
          .join("")}
      </div>
      <h3>Details:</h3>
      <ul>
        ${data.details
          .map((d) => `<li><strong>${d.titre}:</strong> ${d.detail}</li>`)
          .join("")}
      </ul>
    `;
  })
  .catch((error) => console.error("Error loading detail:", error));
