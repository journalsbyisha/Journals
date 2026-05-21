const articles = [

{
    title:"Starting of the silent feminist of this age",

    description:"A personal journal about thoughts, feminism, chaos and emotional honesty.",

    image:"https://images.pexels.com/photos/10032500/pexels-photo-10032500.jpeg",

    link:"article.html?file=first.txt"
}

];

const articlesDiv = document.getElementById("articles");

articles.forEach(article => {

articlesDiv.innerHTML += `

<div class="article">

    <div class="article-image">

        <img src="${article.image}" alt="${article.title}">

    </div>

    <div class="article-content">

        <h2>${article.title}</h2>

        <p>${article.description}</p>

        <a href="${article.link}" class="read-btn">

            Read Full Article

        </a>

    </div>

</div>

`;

});
