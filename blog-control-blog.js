var blogpost;

window.addEventListener('load', (event) => 
{
    blogpost = document.getElementsByClassName('blogpost-content');
    fetchJson(applyBlog);

});

function applyBlog(jsonFile)
{
    applyTxt = true;
    postAmount = jsonFile.length;

    if (!sessionStorage.getItem('keyPostActive'))
    {
        if (latestPostFirst)
        {
            postActive = postAmount -1;
        }
        else
        {
            postActive = 0;
        }
    }
    else
    {
        postActive = sessionStorage.getItem('keyPostActive');
        sessionStorage.setItem('keyOverridePostActive', false);
    }

    initializeMenu(jsonFile);
    initializeNav(jsonFile);
    JsonApplyData(blogpost[0],jsonFile[postActive]);

}

//Add a Button to the Dropdown-Menu for every 'post' in the JSON file
function initializeMenu(json)
{
    let blogNavOptions = document.getElementById('blog-nav-options');

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

//Set and Apply first/previous/next/latest 'post' 
//when each of their respective buttons is clicked, if able.
function initializeNav(json)
{        
    let postFirst = document.getElementById('post-first');
    let postPrevious = document.getElementById('post-previous');
    let postNext = document.getElementById('post-next');
    let postLast = document.getElementById('post-last');

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
