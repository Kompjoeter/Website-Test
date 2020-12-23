window.addEventListener('load', (event) => 
{
    sessionStorage.setItem('keyPostActive', 0);
    sessionStorage.setItem('keyOverridePostActive', false);
    fetchJson(applyBlogSummaries);
});

function applyBlogSummaries(jsonFile)
{
    applyTxt = false;
    postAmount = jsonFile.length;
    for(let i = postAmount - 1; i > postAmount -4; i--)
    {
        if (i >= 0)
        {
            let postCounter = i-1 - (postAmount - 4);
            let blogpost = document.getElementById('post0'+postCounter);
            let blogpostLink = blogpost.getElementsByTagName("BUTTON");
            blogpostLink[0].addEventListener('click',function()
            {
                sessionStorage.setItem('keyOverridePostActive', false);
                sessionStorage.setItem('keyPostActive', i);
                window.location.href="blog.html";
            })
            JsonApplyData(blogpost,jsonFile[i]);
        }
    }
}

