const API_URL = 'https://raw.githubusercontent.com/bibhuticoder/nepali-news-api/main/__daily_news/2024_11_28.json';

const newsGrid = document.getElementById('news-grid');
const trendingTopics = document.getElementById('trending-topics');

// Fetch news data
async function fetchNews() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data.slice(0, 8).map((item, index) => ({
            id: index + 1,
            title: item.title.replace(/ -.*$/, ''),
            description: item.summary || 'No Description',
            category: item.category || 'General',
            imageUrl: item.imageLink && item.imageLink.trim() !== '' ? item.imageLink : 'https://via.placeholder.com/400x200',
            content: item.content && item.content.length > 80 ? item.content.substring(0, 70) + '...' : item.content || 'No Content',
            size: index % 4 === 0 ? 'large' : index % 3 === 0 ? 'medium' : 'small',
        }));
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
}

// Create news card
function createNewsCard(article) {
    const card = document.createElement('div');
    card.className = `news-card ${article.size === 'large' ? 'md:col-span-2' : ''}`;
    card.innerHTML = `
        <img src="${article.imageUrl}" alt="${article.title}" class="w-full h-48 object-cover">
        <div class="p-4">
            <span class="category">${article.category}</span>
            <h3 class="text-lg font-semibold text-gray-800 mb-2">${article.title}</h3>
            <p class="text-sm text-gray-600 mb-4">${article.description}</p>
            <button onclick="showFullArticle(${article.id})" class="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-600 transition-colors duration-300">Read More</button>
        </div>
    `;
    return card;
}

// Show full article
function showFullArticle(id) {
    // This function would typically open a modal or navigate to a full article page
    console.log(`Showing full article for id: ${id}`);
    alert(`Full article content for id: ${id}`);
}

// Populate news grid
async function populateNewsGrid() {
    const articles = await fetchNews();
    articles.forEach(article => {
        const card = createNewsCard(article);
        newsGrid.appendChild(card);
    });
}

// Populate trending topics
function populateTrendingTopics() {
    const topics = [
        { id: 1, title: "Global Climate Change Impact", category: "Environment" },
        { id: 2, title: "How Nation Fails", category: "Philosophy" },
        { id: 3, title: "Economic Implications of Trade Wars", category: "Economics" },
        { id: 4, title: "Breakthrough in Cancer Research", category: "Health" },
        { id: 5, title: "Starlink in Nepal: Why Elon wants to Invest in Nepal", category: "Science" },
    ];

    topics.forEach(topic => {
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="/topic/${topic.id}" class="block hover:text-primary">
                <span class="font-medium">${topic.title}</span>
                <span class="block text-xs text-gray-500 mt-1">${topic.category}</span>
            </a>
        `;
        trendingTopics.appendChild(li);
    });
}

// Initialize the page
function init() {
    populateNewsGrid();
    populateTrendingTopics();
}

// Run initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
