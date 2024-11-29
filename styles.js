/* Custom styles to complement Tailwind */
.news-card {
    @apply bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:shadow-md hover:-translate-y-1;
}

.news-card img {
    @apply w-full h-48 object-cover;
}

.news-card-content {
    @apply p-4;
}

.news-card h3 {
    @apply text-lg font-semibold text-gray-800 mb-2;
}

.news-card .category {
    @apply text-xs text-primary font-medium mb-2;
}

.news-card p {
    @apply text-sm text-gray-600 mb-4;
}

.news-card button {
    @apply bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-600 transition-colors duration-300;
}

/* Gradual overlay for the hero section */
.hero-overlay {
    background: linear-gradient(to bottom, rgba(255,0,0,0) 0%, rgba(255,0,0,0.6) 70%, rgba(255,0,0,1) 100%);
}
