const articles = [

{
    title:"Starting of the silent feminist of this age",

    description:"A personal journal about thoughts, feminism, chaos and emotional honesty.",

    image:"https://in.pinterest.com/pin/318629742406788247/visual-search/?x=0&y=33&w=520&h=889&cropSource=9&entrypoint=closeup_cta&rs=pin",

    link:"article.html?file=first.txt"
}

];

const articlesDiv = document.getElementById("articles");

articles.forEach(article => {

articlesDiv.innerHTML += `

<div class="article">

    <div class="article-image">

        <img src="${article.image}">

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
