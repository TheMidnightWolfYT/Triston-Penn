// Example portfolio data
const portfolioData = [
    {
        title: "Much Ado About Nothing",
        year: "2023",
        role: "Dogberry, and Gaspar",
        description: "Much Ado About Nothing is a comedy by William Shakespeare thought to have been written in 1598 and 1599. The play was included in the First Folio, published in 1623. The play is set in Messina and revolves around two romantic pairings that emerge when a group of soldiers arrive in the town.",
        image: "url-to-image.jpg"
    },
    // Add more projects here
];

// Example blog data
const blogData = [
    {
        date: "2023-12-18",
        title: "Blog Title",
        content: "Blog content goes here...",
        image: "url-to-blog-image.jpg"
    },
    // Add more blog posts here
];

// Function to load portfolio items
function loadPortfolio() {
    const container = document.getElementById('portfolio-container');
    portfolioData.forEach(item => {
        container.innerHTML += `
            <div class="col-md-4 mb-3">
                <div class="card">
                    <img src="${item.image}" class="card-img-top" alt="${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="card-text"><small class="text-muted">${item.year} - ${item.role}</small></p>
                    </div>
                </div>
            </div>`;
    });
}

// Function to load blog posts
function loadBlog() {
    const container = document.getElementById('blog-container');
    blogData.forEach(post => {
        container.innerHTML += `
            <div class="card mb-3">
                <img src="${post.image}" class="card-img-top" alt="${post.title}">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.content}</p>
                    <p class="card-text"><small class="text-muted">Posted on ${post.date}</small></p>
                </div>
            </div>`;
    });
}

// Load content on window load
window.onload = function() {
    loadPortfolio();
    loadBlog();
};
