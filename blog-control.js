var postAmount;
var postActive = 0;
var postsSource = "https://raw.githubusercontent.com/RanDByyp/Github-Hosted-Blog/master/posts.json"
var latestPostFirst = true;

window.addEventListener('load', (event) => 
{
    fetchJson();
});

//NEW

function fetchJson()
{
    fetch(postsSource)
    .then(response => response.json())
    .then(json => prepJson(json));
}

//NEWEND

function prepJson(jsonFile)
{

    for(let i = jsonFile.length - 1; i > jsonFile.length -4; i--)
    {
        if (i >= 0)
        {
            let postCounter = i-1 - (jsonFile.length - 4);
            blogPostToggle(false,jsonFile[i],postCounter);
        }
    }
}

function blogPostToggle(applyTxt,post,postCounter)
{
    JsonApplyData(post,applyTxt,postCounter)
}

function JsonApplyData(post, applyTxt,postCounter)
{
    blogpost = document.getElementById('post0'+postCounter);

    let title = blogpost.getElementsByClassName('blogpost-title');
    let date = blogpost.getElementsByClassName('blogpost-date');
    let description = blogpost.getElementsByClassName('blogpost-description');

    title[0].innerText = post.title;
    date[0].innerText = post.date;
    description[0].innerText = post.description;

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