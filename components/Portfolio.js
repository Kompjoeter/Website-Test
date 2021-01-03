class Portfolio extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            projectCategory: 'all',
            overlayEnabled: false
        }
    }

    categorySet = (e) =>
    {
        this.setState( 
        {
            projectCategory: e.target.value
        });
    }

    onClickEvent = (title) =>
    {

        this.setState( 
        {
            overlayEnabled: true
        });
        console.log(title);
        document.getElementById("overlay-project-title").innerText = title;
    }

        
    disableOverlay = () =>
    {
        this.setState( 
        {
            overlayEnabled: false
        });
    }


    render()
    {
        return(
            <>

                <div className={[true && 'project-overlay', this.state.overlayEnabled && 'active', ]
                    .filter(c => c != false)
                    .join(' ')}>
                    <button onClick={this.disableOverlay} class="project-overlay-exit">X</button>
                    <div class="project-overlay-content-container">
                        <div class="project-overlay-content">
                        <h2 id="overlay-project-title">Project Name</h2>
                        <p id="overlay-project-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem doloribus omnis quod voluptatum. Cum, distinctio. Accusamus ea saepe fugit amet tenetur nesciunt cupiditate deserunt sit placeat reiciendis quaerat eum voluptate labore, suscipit, veniam adipisci! Minus laudantium consectetur excepturi deleniti! Sit.</p>
                        </div>
                    </div>
                </div>
                <div class="portfolio-menu">
                    <button onClick={this.categorySet} value="all">All</button>
                    <button onClick={this.categorySet} value="html">HTML</button>
                    <button onClick={this.categorySet} value="css">CSS</button>
                    <button onClick={this.categorySet} value="javascript">Javascript</button>
                    <button onClick={this.categorySet} value="react">React</button>
                    <button onClick={this.categorySet} value="angular">Angular</button>
                    <button onClick={this.categorySet} value="json">JSON</button>
                </div>
                <div class="portfolio-content">
                    <Project title={'Project Alpha'} tags={"html css"} onSelect={this.onClickEvent} filterBy={this.state.projectCategory}  />
                    <Project title={'Project Bravo'} tags={"html css javascript"} onSelect={this.onClickEvent} filterBy={this.state.projectCategory} />
                    <Project title={'Project Charlie'} tags={"html css javascript react"} onSelect={this.onClickEvent} filterBy={this.state.projectCategory}/>
                    <Project title={'Project Dingo'} tags={"javascript"} onSelect={this.onClickEvent} filterBy={this.state.projectCategory}/>
                    <Project title={'Project Echo'} tags={"html"} onSelect={this.onClickEvent} filterBy={this.state.projectCategory} />
                    <Project title={'Project Foxtrot'} tags={"html css javascript angular"} onSelect={this.onClickEvent} filterBy={this.state.projectCategory}/>
                    <Project title={'Project Golf'} tags={"html css javascript json"} onSelect={this.onClickEvent} filterBy={this.state.projectCategory}/>
                    <Project title={'Project Hotel'} tags={"html css"} onSelect={this.onClickEvent} filterBy={this.state.projectCategory} />
                    <Project  title={'Project India'} tags={"html css javascript json"} onSelect={this.onClickEvent} filterBy={this.state.projectCategory}/>
                </div>
            </>
        )
    }
}