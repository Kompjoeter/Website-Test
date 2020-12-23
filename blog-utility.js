var postAmount;
var postActive = 0;
var overridePostActive = false;
var postsSource = "https://raw.githubusercontent.com/RanDByyp/Github-Hosted-Blog/master/posts.json"
var latestPostFirst = false;
var applyTxt = true;

function fetchJson(callback)
{
    fetch(postsSource)
    .then(response => response.json())
    .then(json => callback(json));
}

function JsonApplyData(element,post)
{
    let title = element.getElementsByClassName('blogpost-title');
    let date = element.getElementsByClassName('blogpost-date');
   
    title[0].innerText = post.title;
    date[0].innerText = post.date;

    if (applyTxt)
    {
        JsonApplyTxt(element,post.file);
    }
    else
    {
        let description = element.getElementsByClassName('blogpost-description');
        description[0].innerText = post.description;
    }
}

function JsonApplyTxt(element,file)
{
    fetch(file)
    .then(response => response.text())
    .then(txtContent =>
    {
        let text = element.getElementsByClassName('blogpost-text');
        text[0].innerHTML = txtContent;
    }
    );        
}
