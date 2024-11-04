document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.querySelector('.video-container');

    const videos = [
      { id: "video1", title: "What is a Qubit?", url: "https://www.youtube.com/embed/YourVideoID1" },
      { id: "video2", title: "Heisenberg’s Uncertainty Principle", url: "https://www.youtube.com/embed/YourVideoID2" },
      { id: "video3", title: "Double-Slit Experiment", url: "https://www.youtube.com/embed/YourVideoID3" },
      // Add more videos as needed
    ];

    videos.forEach(video => {
      const videoCard = document.createElement('div');
      videoCard.classList.add('video-card', 'fade-in');
      videoCard.setAttribute('id', video.id);

      videoCard.innerHTML = `
        <iframe src="${video.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h3>${video.title}</h3>
      `;

      videoContainer.appendChild(videoCard);
    });
});
