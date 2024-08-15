document.getElementById('searchButton').addEventListener('click', function() {
    const movieName = document.getElementById('searchInput').value;
    const apiKey = 'your_api_key_here'; // Replace with your OMDB API key
    const url = `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                document.getElementById('movieDetails').innerHTML = `
                    <img src="${data.Poster}" alt="${data.Title} poster">
                    <h2>${data.Title}</h2>
                    <p><strong>Year:</strong> ${data.Year}</p>
                    <p><strong>Genre:</strong> ${data.Genre}</p>
                    <p><strong>Plot:</strong> ${data.Plot}</p>
                `;
            } else {
                document.getElementById('movieDetails').innerHTML = `<p>Movie not found!</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('movieDetails').innerHTML = `<p>Something went wrong. Please try again later.</p>`;
        });
});
