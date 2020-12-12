window.addEventListener('load', (event) => 
{
    //sessionStorage.setItem('key', 'value');
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
            let blogpostLink = blogpost.getElementsByTagName("a");
            blogpostLink[0].addEventListener('click',function()
            {
                overridePostActive = true;
                postActive = i;
            })
            JsonApplyData(blogpost,jsonFile[i]);
        }
    }
}

