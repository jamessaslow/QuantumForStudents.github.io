// Video data for each unit
const videoData = {
    'linear-algebra': {
        title: "Linear Algebra",
        videos: [
            { title: 'Eigenvalues and Eigenvectors', url: 'https://www.youtube.com/watch?v=VideoID1' },
            { title: 'Hermitian Matrices', url: 'https://www.youtube.com/watch?v=VideoID2' },
            { title: 'Unitary Matrices', url: 'https://www.youtube.com/watch?v=VideoID3' },
            { title: 'Matrix Multiplication', url: 'https://www.youtube.com/watch?v=VideoID4' },
            { title: 'The Tensor Product', url: 'https://www.youtube.com/watch?v=VideoID5' },
            { title: 'Diagonalization', url: 'https://www.youtube.com/watch?v=VideoID6' },
            { title: 'The Matrix Exponential', url: 'https://www.youtube.com/watch?v=VideoID7' }
        ]
    },
    'quantum-mechanics': {
        title: "Quantum Mechanics",
        videos: [
            { title: 'The Wavefunction', url: 'https://www.youtube.com/watch?v=VideoID8' },
            { title: 'Measurement', url: 'https://www.youtube.com/watch?v=VideoID9' },
            { title: 'Time-Evolution', url: 'https://www.youtube.com/watch?v=VideoID10' },
            { title: 'Entangled States', url: 'https://www.youtube.com/watch?v=VideoID11' }
        ]
    },
    'quantum-algorithms': {
        title: "Quantum Algorithms",
        videos: [
            { title: 'Shor’s Algorithm', url: 'https://www.youtube.com/watch?v=VideoID12' },
            { title: 'Grover’s Algorithm', url: 'https://www.youtube.com/watch?v=VideoID13' },
            { title: 'Quantum Fourier Transform', url: 'https://www.youtube.com/watch?v=VideoID14' }
        ]
    },
    'quantum-hardware': {
        title: "Quantum Hardware",
        videos: [
            { title: 'Superconducting Qubits', url: 'https://www.youtube.com/watch?v=VideoID15' },
            { title: 'Trapped Ions', url: 'https://www.youtube.com/watch?v=VideoID16' },
            { title: 'Quantum Dots', url: 'https://www.youtube.com/watch?v=VideoID17' }
        ]
    }
};

// Function to load videos based on selected unit
function loadVideos(unit) {
    const videoList = document.getElementById('video-list');
    const topicTitle = document.getElementById('topic-title');

    // Clear current video list
    videoList.innerHTML = '';

    // Get the selected unit data
    const unitData = videoData[unit];
    topicTitle.textContent = unitData.title;

    // Populate video list
    unitData.videos.forEach(video => {
        const videoItem = document.createElement('li');
        videoItem.textContent = video.title;
        videoItem.onclick = () => window.open(video.url, '_blank');
        videoList.appendChild(videoItem);
    });
}
