const articleFiles = [
    "article1.txt"
];

const articlesDiv = document.getElementById("articles");

articleFiles.forEach(file => {

    fetch("articles/" + file)
    .then(response => response.text())
    .then(text => {

        const lines = text.split("\n");

        const title = lines[0];

        lines.shift();

        const content = lines.join("<br>");

        articlesDiv.innerHTML += `
            <div class="article">
                <h2>${title}</h2>
                <p>${content}</p>
            </div>
        `;
    });

});