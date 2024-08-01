const games = [
    {
        name: "Batman: Return to Arkham - Arkham Asylum",
        rating: 7.5,
        review: "Solid game graphics are decent, not the best. Gameplay is great and it is a very thrilling scary game.",
        image: "https://via.placeholder.com/800x450.png?text=Batman:+Return+to+Arkham+-+Arkham+Asylum"
    },
    {
        name: "F1 23",
        rating: 7,
        review: "Good game with very realistic driving and simulation, does get a bit boring and repetitive at times.",
        image: "https://via.placeholder.com/800x450.png?text=F1+23"
    },
    {
        name: "Assassin’s Creed Unity",
        rating: 9,
        review: "Love the game, amazing storyline with character development, one of the best graphics and open map games I’ve played. Love the gameplay and found it to be really fun.",
        image: "https://via.placeholder.com/800x450.png?text=Assassin's+Creed+Unity"
    },
    {
        name: "Fortnite",
        rating: 7,
        review: "Only like the game when playing with friends, otherwise I find it gets boring.",
        image: "https://via.placeholder.com/800x450.png?text=Fortnite"
    },
    {
        name: "XDefiant",
        rating: 8,
        review: "Great game to play with friends, kind of fun solo but not my first choice. Graphics are good, some kids are too sweaty.",
        image: "https://via.placeholder.com/800x450.png?text=XDefiant"
    },
    {
        name: "Shadow of the Tomb Raider",
        rating: 7.5,
        review: "Solid game, really fun, I had higher expectations as I had already played Rise of the Tomb Raider which I loved.",
        image: "https://via.placeholder.com/800x450.png?text=Shadow+of+the+Tomb+Raider"
    },
    {
        name: "Assassin’s Creed Valhalla",
        rating: 8,
        review: "I love the AC games I’ve played but this one was a disappointment compared to the rest. Characters were decent and the mythology was good but sometimes the game felt like it was dragging out too long. Also hated that there was no clear good end. Didn’t satisfy me. After spending 56 hours on it.",
        image: "https://via.placeholder.com/800x450.png?text=Assassin's+Creed+Valhalla"
    },
    {
        name: "FIFA 23",
        rating: 7,
        review: "Good game with good graphics, fun for local multiplayer, not a fan of sports games unless with friends.",
        image: "https://via.placeholder.com/800x450.png?text=FIFA+23"
    },
    {
        name: "Rise of the Tomb Raider",
        rating: 9,
        review: "First Tomb Raider I played, loved the game so much. One of the funnest quick games I’ve played, finished it in less that 4 days.",
        image: "https://via.placeholder.com/800x450.png?text=Rise+of+the+Tomb+Raider"
    },
    {
        name: "F1 22",
        rating: 7,
        review: "Good game, exact same review as F1 23.",
        image: "https://via.placeholder.com/800x450.png?text=F1+22"
    },
    {
        name: "Hitman 1-3",
        rating: 8.5,
        review: "Loved the game so much, really fun and cool, plan to replay the game at a higher difficulty.",
        image: "https://via.placeholder.com/800x450.png?text=Hitman+1-3"
    },
    {
        name: "GRID Legends",
        rating: 7.5,
        review: "Solid racing game, went well with my steering wheel but was pretty fun.",
        image: "https://via.placeholder.com/800x450.png?text=GRID+Legends"
    },
    {
        name: "FIFA 22",
        rating: "N/A",
        review: "I played the game once and its not fair to give a review.",
        image: "https://via.placeholder.com/800x450.png?text=FIFA+22"
    },
    {
        name: "Madden NFL 23",
        rating: 8.5,
        review: "I love football and it is a great game to play with friends and family while playing solo too.",
        image: "https://via.placeholder.com/800x450.png?text=Madden+NFL+23"
    },
    {
        name: "GTA V",
        rating: 10,
        review: "Favorite game I’ve ever played, loved the environment, graphics, story, everything. Best game ever.",
        image: "https://via.placeholder.com/800x450.png?text=GTA+V"
    },
    {
        name: "Watch Dogs 2",
        rating: 9,
        review: "Loved the hacking aspect, I had really low expectations and it blew my mind.",
        image: "https://via.placeholder.com/800x450.png?text=Watch+Dogs+2"
    },
    {
        name: "Assassin's Creed Odyssey",
        rating: 9.5,
        review: "One of my favorite games ever, probably number three of games I’ve played. It was so good and so well written and made. I love greek mythology and it was really cool to try and play in the greek era.",
        image: "https://via.placeholder.com/800x450.png?text=Assassin's+Creed+Odyssey"
    },
    {
        name: "Assassin’s Creed Origins",
        rating: 10,
        review: "Second favorite game, nearly less than GTA. I loved the story and meeting Cleopatra and living in the end of the Egyptian empire. I hated to stop playing and considered replaying the second after beating the game. I wish it was longer.",
        image: "https://via.placeholder.com/800x450.png?text=Assassin's+Creed+Origins"
    },
    {
        name: "Batman Arkham Knight",
        rating: 9,
        review: "Amazing scary game, I loved it so much and it got me hooked to Batman. I read some of the old DC comics after. One of my favorite games.",
        image: "https://via.placeholder.com/800x450.png?text=Batman+Arkham+Knight"
    },
    {
        name: "Forza Horizon 5",
        rating: 6,
        review: "Hot take, driving was decent but game was pretty boring in my opinion. I’ve played better racing games.",
        image: "https://via.placeholder.com/800x450.png?text=Forza+Horizon+5"
    },
    {
        name: "Microsoft Flight Simulator",
        rating: 7,
        review: "I tried the game and it was fun for like 15 minutes until you feel that you are just watching a sky for 10 minutes straight barely doing anything.",
        image: "https://via.placeholder.com/800x450.png?text=Microsoft+Flight+Simulator"
    }
];

const gameList = document.getElementById('game-list');
const gameDetails = document.getElementById('game-details');

games.forEach((game, index) => {
    const gameItem = document.createElement('li');
    gameItem.textContent = game.name;
    gameItem.addEventListener('click', () => displayGameDetails(index));
    gameList.appendChild(gameItem);
});

function displayGameDetails(index) {
    const game = games[index];
    gameDetails.innerHTML = `
        <h2>${game.name}</h2>
        <div class="rating">Rating: ${game.rating}/10</div>
        <p>${game.review}</p>
    `;
}
