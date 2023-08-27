export const sampleMovie = {
    "adult": false,
    "backdrop_path": "/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg",
    "belongs_to_collection": {
        "id": 10,
        "name": "Star Wars Collection",
        "poster_path": "/gq5Wi7i4SF3lo4HHkJasDV95xI9.jpg",
        "backdrop_path": "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
    },
    "budget": 11000000,
    "genres": [
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        }
    ],
    "homepage": "http://www.starwars.com/films/star-wars-episode-iv-a-new-hope",
    "id": 11,
    "imdb_id": "tt0076759",
    "original_language": "en",
    "original_title": "Star Wars",
    "overview": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
    "popularity": 90.364,
    "poster_path": "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    "production_companies": [
        {
            "id": 1,
            "logo_path": "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
            "name": "Lucasfilm Ltd.",
            "origin_country": "US"
        },
        {
            "id": 25,
            "logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
            "name": "20th Century Fox",
            "origin_country": "US"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "1977-05-25",
    "revenue": 775398007,
    "runtime": 121,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Released",
    "tagline": "A long time ago in a galaxy far, far away...",
    "title": "Star Wars",
    "video": false,
    "vote_average": 8.204,
    "vote_count": 19032
}


export const filterBtns = [
    { id: Math.random(), label: 'All', isActive: true },
    { id: Math.random(), label: '🤺 Action', isActive: false },
    { id: Math.random(), label: '🧙‍♂️ Adventure', isActive: false },
    { id: Math.random(), label: '🐲 Animation', isActive: false },
    { id: Math.random(), label: '😝 Comedy', isActive: false },
    { id: Math.random(), label: '📄 Documentary', isActive: false },
    { id: Math.random(), label: '🎭 Drama', isActive: false },
    { id: Math.random(), label: '💭 Fantasy', isActive: false },
    { id: Math.random(), label: '😱 Horror', isActive: false },
    { id: Math.random(), label: '🌹 Romance', isActive: false }
]

export const showCategories = [
    { id: Math.random(), label: 'All', isActive: true },
    { id: Math.random(), label: '🤺 Action', isActive: false },
    { id: Math.random(), label: '🧙‍♂️ Adventure', isActive: false },
    { id: Math.random(), label: '🐲 Animation', isActive: false },
    { id: Math.random(), label: '😝 Comedy', isActive: false },
    { id: Math.random(), label: '📄 Documentary', isActive: false },
    { id: Math.random(), label: '🎭 Drama', isActive: false },
    { id: Math.random(), label: '💭 Fantasy', isActive: false },
    { id: Math.random(), label: '😱 Horror', isActive: false },
    { id: Math.random(), label: '🌹 Romance', isActive: false }
]

export const dummyMovies = [
    sampleMovie,
    sampleMovie,
    sampleMovie,
    sampleMovie,
    sampleMovie,
    sampleMovie,
    sampleMovie,
    sampleMovie,
    sampleMovie,
    sampleMovie,
    sampleMovie,
    sampleMovie,
    sampleMovie,
    sampleMovie
]

export function formatDate(dateString) {
    const months = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    const [year, month, day] = dateString.split('-');
    const monthIndex = parseInt(month, 10) - 1;
    const formattedDate = `${parseInt(day, 10)} ${months[monthIndex]}, ${year}`;

    return formattedDate;
}

export const base_img_url = 'https://image.tmdb.org/t/p/original'