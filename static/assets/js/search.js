document.addEventListener("DOMContentLoaded", function () {
    let searchInput = document.getElementById("search");
    let resultsContainer = document.getElementById("results");

    fetch("/index.json")
        .then(response => response.json())
        .then(pages => {
            searchInput.addEventListener("input", function () {
                let query = this.value.toLowerCase();
                let results = pages.filter(page =>
                    page.title.toLowerCase().includes(query) ||
                    page.excerpt.toLowerCase().includes(query)
                );

                resultsContainer.innerHTML = results.length
                    ? results.map(result =>
                        `<li><a href="${result.url}">${result.title}</a></li>`
                    ).join('')
                    : "<li>No results found</li>";
            });
        })
        .catch(error => console.error("Error loading search data:", error));
});
