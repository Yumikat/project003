
const playlist = [
    {
        id: 1,
        title: "Always Be My Baby",
        singer: "Mariah Carey",
        genre: "pop",
        gender: "female",
        sang: false
    },
    {
        id: 2,
        title: "Zombie",
        singer: "Cranberries",
        genre: "alternative rock",
        gender: "female",
        sang: false
    },
    {
        id: 3,
        title: "Monster",
        singer: "Bigbang",
        genre: "kpop",
        gender: "male",
        sang: false
    },
    {
        id: 4,
        title: "Pressure",
        singer: "Milk & Bone",
        genre: "electronic",
        gender: "female",
        sang: false
    },
    {
        id: 5,
        title: "I Won't Say (I'm In Love)",
        singer: "Susan Egan, Cheryl Freeman, LaChanze, Vaneese Thomas, Lillias White",
        genre: "disney",
        gender: "female",
        sang: false
    },
    {
        id: 6,
        title: "Anaconda",
        singer: "Nicki Minaj",
        genre: "rap",
        gender: "female",
        sang: false
    },
    {
        id: 7,
        title: "Never Gonna Give You Up",
        singer: "Rick Astley",
        genre: "80s",
        gender: "male",
        sang: false
    },
    {
        id: 8,
        title: "Let It Go",
        singer: "Idina Mendzel",
        genre: "disney",
        gender: "female",
        sang: false
    }
]

const buttons = [
    {
        id: 1,
        text: "Singer",
    },
    {
        id: 2,
        text: "Male"
    },
    {
        id: 3,
        text: "Female"
    },
    {
        id: 4,
        text: "Genre"
    }
]

function renderTable() {
    playlist.forEach(function (list) {
        $(".display").append(`<p>Song: ${list.title}</p>
        <p>Singer: ${list.singer}</p><hr>`);
    });
}

function renderNewtable(x, y) {
    $(".display").empty();
    x.forEach(function (list) {
        $(".display").append(`<p>Song: ${list.title}</p>
        <p>Singer: ${list.singer}</p>
        <p>Genre: ${list.genre}</p><hr>`);
    });
}

function renderButtons() {
    for (i = 0; i < buttons.length; i++) {
        var button = $("<button>").addClass("buttons")
            .attr("data-id", `${buttons[i].id}`)
            .attr("data-button", `${buttons[i].text}`);
        button.text(`${buttons[i].text}`);
        $(".buttonSort").append(button);
    }
}
function sortClick(x) {
    var newPlaylist;
    switch (x) {
        case "Female":
            newPlaylist = playlist.filter((song) => song.gender == "female");
            console.log(newPlaylist);
            renderNewtable(newPlaylist);
            break;
        case "Male":
            newPlaylist = playlist.filter((song) => song.gender == "male");
            console.log(newPlaylist);
            renderNewtable(newPlaylist);
            break;
        case "Singer":
            newPlaylist = playlist.sort((a, b) => a.singer.toLowerCase() < b.singer.toLowerCase());
            renderNewtable(newPlaylist);
            console.log("Sort by singer");
            console.log(newPlaylist);
            break;
        case "Genre":
            console.log("Sort by genre");
            newPlaylist = playlist.sort((a, b) => a.genre.toLowerCase() < b.genre.toLowerCase());
            renderNewtable(newPlaylist, genre);
            console.log(newPlaylist);
            break;
        default:
            renderTable();
    }
}

renderButtons();
renderTable();

$(".buttons").on("click", function () {
    var textClick = $(this).attr("data-button");
    sortClick(textClick);
});
