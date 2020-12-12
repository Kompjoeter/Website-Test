var blogpost;

window.addEventListener('load', (event) => 
{
    blogpost = document.getElementsByClassName('blog-post-content');
    fetchJson(applyBlog);

});

function applyBlog(jsonFile)
{
    applyTxt = true;
    postAmount = jsonFile.length;

    if (latestPostFirst && !overridePostActive)
    {
        postActive = postAmount -1;
    }
    else
    {
        postActive = 0;
    }

    initializeMenu(jsonFile);
    initializeNav(jsonFile);
    JsonApplyData(blogpost[0],jsonFile[postActive]);
    overridePostActive = false;
}

function initializeMenu(json)
{
    let blogNavOptions = document.getElementById('blog-nav-options');

    //Grab JSON-Content and do:
    //Add a Button to the Dropdown-Menu for every 'post' in the JSON file

    for(let i = 0; i < json.length; i++)
    {
        var btn = document.createElement("BUTTON");
        btn.innerHTML = json[i].title;
        btn.id = [i];
        btn.addEventListener('click',function()
        {
            postActive = i;
            JsonApplyData(blogpost[0],json[postActive]);
        })
        blogNavOptions.appendChild(btn);
    }
}

function initializeNav(json)
{        
    let postFirst = document.getElementById('post-first');
    let postPrevious = document.getElementById('post-previous');
    let postNext = document.getElementById('post-next');
    let postLast = document.getElementById('post-last');

    //Set and Apply first/previous/next/latest 'post' 
    //when each of their respective buttons is clicked, if able.
    postFirst.addEventListener('click',function()
    {
        postActive = 0;
        JsonApplyData(blogpost[0],json[postActive]);
    })

    postPrevious.addEventListener('click',function()
    {
        if (postActive > 0)
        {
            postActive -= 1;
            JsonApplyData(blogpost[0],json[postActive]);
        }
    })

    postNext.addEventListener('click',function()
    {
        if (postActive < postAmount-1)
        {
            postActive += 1;
            JsonApplyData(blogpost[0],json[postActive]);
        }
    })

    postLast.addEventListener('click',function()
    {
        postActive = postAmount-1;
        JsonApplyData(blogpost[0],json[postActive]);
    })
}
