var postAmount;
var postActive = 0;
var postsSource = "https://raw.githubusercontent.com/RanDByyp/Github-Hosted-Blog/master/posts.json"
var latestPostFirst = false;

window.addEventListener('load', (event) => 
{
    blogPostToggle();
});

function blogPostToggle()
{
    console.log('fetching data');
    fetch(postsSource)
    .then(response => response.json())
    .then(json => JsonApplyData(json[postActive],false)
    );
}

function JsonApplyData(post, applyTxt)
{
    let title = document.getElementById('title');
    let date = document.getElementById('date');
    let description = document.getElementById('description');

    title.innerText = post.title;
    date.innerText = post.date;
    description.innerText = post.description;
    if (applyTxt)
    {
        JsonApplyTxt(post.file);  
    }
}

function JsonApplyTxt(link)
{
    fetch(link)
    .then(response => response.text())
    .then(text =>
    {
        let textDiv = document.getElementById('text');
        textDiv.innerHTML = text;
    }
    );        
}