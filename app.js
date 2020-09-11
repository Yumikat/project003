const playlist = [
    {
        id: 1,
        title: "Always Be My Baby",
        singer: "Mariah Carey",
        genre: "pop"
    },
    {
        id: 2,
        title: "Zombie",
        singer: "Cranberries",
        genre: "alternative rock"
    },
    {
        id: 3,
        title: "Monster",
        singer: "Bigbang",
        genre: "kpop"
    },
    {
        id: 4,
        title: "Pressure",
        singer: "Milk & Bone",
        genre: "electronic"
    },
    {
        id: 5,
        title: "I Won't Say (I'm In Love)",
        singer: "Susan Egan, Cheryl Freeman, LaChanze, Vaneese Thomas, Lillias White",
        genre: "disney"
    },
    {
        id: 6,
        title: "Anaconda",
        singer: "Nicki Minaj",
        genre: "rap"
    },
    {
        id: 7,
        title: "Never Gonna Give You Up",
        singer: "Rick Astley",
        genre: "80s"
    },
    {
        id: 8,
        title: "Let It Go",
        singer: "Idina Mendzel",
        genre: "disney"
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
    for (i = 0; i < playlist.length; i++){
        $(".display").append(`<p>${playlist[i].title}</p>
        <p>${playlist[i].singer}</p>`);
        $(".display").append("<hr>");
    }
}
//console.log(playlist[0].title);
//$(".display").text(playlist[0].title);

function renderButtons() {
    for (i = 0; i < buttons.length; i++){
        $(".buttonSort").append(`<button>${buttons[i].text}</button>`).attr(`${buttons[i].id}`);
    }
}

renderButtons();
renderTable();