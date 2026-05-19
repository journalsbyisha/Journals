const articles = [

{
    title:"Starting of the silent feminist of this age",

    description:"A personal journal about thoughts, feminism, chaos and emotional honesty.",

    image:"https://www.instagram.com/p/DVnupdagv0t/?utm_source=Pinterest&utm_medium=organic&epik=dj0yJnU9RUxManpuYlcwRC1MQ2FnRHFzdHRnNUNSUjNBZFktamQmcD0wJm49YlBYVnZfWmNuMHFneGh0NFBKVjVMUSZ0PUFBQUFBR29NSjg4",

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
