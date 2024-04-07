document.addEventListener("DOMContentLoaded", function() {
    setupCourtColorChange();
    setupBasketballClick();
    updatePlayerStats();
});


function setupCourtColorChange() {
    const courtRect = document.getElementById("courtRect");
    const colors = ["#AED6F1", "#FAD7A0", "#D5F5E3", "#FFC0CB", "#90EE90", "#FFA07A", "#87CEEB", "#FFD700", "#F08080", "#6495ED", "#FFDAB9", "#ADFF2F", "#4682B4", "#FF69B4", "#FFE4C4", "#20B2AA"];

    courtRect.addEventListener("click", function() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        courtRect.setAttribute('fill', randomColor);
    });
}

function setupBasketballClick() {
        // Assuming your basketball SVG has the class 'basketball'
    const basketball = document.querySelector('.basketball');

    basketball.addEventListener('click', function() {
        this.classList.toggle('paused');
    });
}


const playerData = {
    blockers: [
        { name: "V. POIRIER", stat: "1.5 blks/game", imageUrl: "imgs/players/poirier.webp", teamImageUrl: "imgs/teams/real.png" },
        { name: "W.TAVARES", stat: "1.4 blks/game", imageUrl: "imgs/players/tavares.webp", teamImageUrl: "imgs/teams/real.png" },
        { name: "M. FALL", stat: "1.3 blks/game", imageUrl: "imgs/players/fall.webp", teamImageUrl: "imgs/teams/olympiacos.png" },
        { name: "S. IBAKA", stat: "1.2 blks/game", imageUrl: "imgs/players/ibaka.webp", teamImageUrl: "imgs/teams/bayern.png" },
        { name: "D. OTURU", stat: "1 blks/game", imageUrl: "imgs/players/oturu.webp", teamImageUrl: "imgs/teams/efes.png" },
        { name: "M. NDIAYE", stat: "1 blks/game", imageUrl: "imgs/players/ndiaye.webp", teamImageUrl: "imgs/teams/real.png" },
        { name: "M. COSTELLO", stat: "0.9 blks/game", imageUrl: "imgs/players/costello.webp", teamImageUrl: "imgs/teams/baskonia.png" },
    ],
    scorers: [
        { name: "M. HOWARD", stat: "19 pts/game", imageUrl: "imgs/players/howard.webp", teamImageUrl: "imgs/teams/baskonia.png" },
        { name: "M. JAMES", stat: "18.7 pts/game", imageUrl: "imgs/players/james.webp", teamImageUrl: "imgs/teams/monaco.png" },
        { name: "W. BALDWIN IV", stat: "17.7 pts/game", imageUrl: "imgs/players/baldwin.webp", teamImageUrl: "imgs/teams/maccabi.png" },
        { name: "K. EVANS", stat: "17.4 pts/game", imageUrl: "imgs/players/evans.webp", teamImageUrl: "imgs/teams/zalgiris.png" },
        { name: "N. MIROTIC", stat: "17.2 pts/game", imageUrl: "imgs/players/mirotic.webp", teamImageUrl: "imgs/teams/armani.png" },
        { name: "S. LARKIN", stat: "17.2 pts/game", imageUrl: "imgs/players/larkin.webp", teamImageUrl: "imgs/teams/efes.png" },
        { name: "S. SHIELDS", stat: "15.9 pts/game", imageUrl: "imgs/players/shields.webp", teamImageUrl: "imgs/teams/armani.png" },
    ],
    threepts: [
        { name: "M. HOWARD", stat: "3.6 3-pts/game", imageUrl: "imgs/players/howard.webp", teamImageUrl: "imgs/teams/baskonia.png" },
        { name: "S. WILBEKIN", stat: "3 3-pts/game", imageUrl: "imgs/players/wilbekin.webp", teamImageUrl: "imgs/teams/fener.png" },
        { name: "M. BELINELLI", stat: "2.7 3-pts/game", imageUrl: "imgs/players/belinelli.webp", teamImageUrl: "imgs/teams/virtus.png" },
        { name: "S. LARKIN", stat: "2.6 3-pts/game", imageUrl: "imgs/players/larkin.webp", teamImageUrl: "imgs/teams/efes.png" },
        { name: "S. SHIELDS", stat: "2.6 3-pts/game", imageUrl: "imgs/players/shields.webp", teamImageUrl: "imgs/teams/armani.png" },
        { name: "N. LAPROVITOLLA", stat: "2.5", imageUrl: "imgs/players/laprovitolla.webp", teamImageUrl: "imgs/teams/barcelona.png" },
        { name: "K. EVANS", stat: "2.5 3-pts/game", imageUrl: "imgs/players/evans.webp", teamImageUrl: "imgs/teams/zalgiris.png" },
    ],
};

function updatePlayerStats() {
    const category = document.getElementById('statCategory').value;
    const players = playerData[category].slice(0, 5);

    const playerStatsContainer = document.getElementById('playerStats');
    playerStatsContainer.innerHTML = '';

    players.forEach(player => {
        const card = document.createElement('div');
        card.className = 'playerStatCard';

        card.innerHTML = `
            <div class="cardInner">
                <div class="cardFront">
                    <img src="${player.imageUrl}" alt="${player.name}" style="max-width: 100%; height: auto;">
                    <p>${player.name}</p>
                    <p>${player.stat}</p>
                </div>
                <div class="cardBack">
                    <img src="${player.teamImageUrl}" alt="Team" style="max-width: 100%; height: auto;">
                </div>
            </div>
        `;

        card.querySelector('.cardInner').addEventListener('click', function() {
            this.classList.toggle('is-flipped');
        });

        playerStatsContainer.appendChild(card);
    });
}
