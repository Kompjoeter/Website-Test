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

    overlayEnable = (title) =>
    {

        this.setState( 
        {
            overlayEnabled: true
        });
        console.log(title);
        document.getElementById("project-overlay-title").innerText = title;
        document.body.style.overflowY = 'hidden';
    }

        
    overlayDisable = () =>
    {
        this.setState( 
        {
            overlayEnabled: false
        });
        document.body.style.overflowY = 'auto';
    }


    render()
    {
        return(
            <>
                {/* Always add class 'project-overlay'
                - add class 'active' only when an individual project is selected (aka overlay is true). */}
                <div className={[true && 'project-overlay', this.state.overlayEnabled && 'active', ]
                .filter(c => c != false)
                .join(' ')}>
                    <button onClick={this.overlayDisable} class="project-overlay-exit">X</button>
                    <div class="project-overlay-content-container">
                        <div class="project-overlay-content">
                            <h2 id="project-overlay-title">Project Name</h2>
                            <p id="project-overlay-description">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem doloribus omnis quod voluptatum. Cum, distinctio. Accusamus ea saepe fugit amet tenetur nesciunt cupiditate deserunt sit placeat reiciendis quaerat eum voluptate labore, suscipit, veniam adipisci! Minus laudantium consectetur excepturi deleniti! Sit.
                                <br></br>
                                <br></br>
                                Ipsum dolor sit amet consectetur adipisicing elit. Dolorem doloribus omnis quod voluptatum. Cum, distinctio. Accusamus ea saepe fugit amet tenetur nesciunt cupiditate deserunt sit placeat reiciendis quaerat eum voluptate labore, suscipit, veniam adipisci!
                                <br></br>
                                <br></br>
                                Dolor sit amet consectetur adipisicing elit. Dolorem doloribus omnis quod voluptatum. Cum, distinctio. Accusamus ea saepe fugit amet tenetur nesciunt cupiditate deserunt sit placeat reiciendis quaerat eum voluptate labore.
                            </p>
                            <div class="project-overlay-menu">
                                <button>Repo</button>
                                <button>Deployed</button>
                            </div>
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
                    <Project title={'Project Alpha'} tags={"html css"} filterBy={this.state.projectCategory} onSelect={this.overlayEnable}/>
                    <Project title={'Project Bravo'} tags={"html css javascript"} filterBy={this.state.projectCategory} onSelect={this.overlayEnable}/>
                    <Project title={'Project Charlie'} tags={"html css javascript react"} filterBy={this.state.projectCategory} onSelect={this.overlayEnable}/>
                    <Project title={'Project Dingo'} tags={"javascript"} filterBy={this.state.projectCategory} onSelect={this.overlayEnable}/>
                    <Project title={'Project Echo'} tags={"html"} filterBy={this.state.projectCategory} onSelect={this.overlayEnable}/>
                    <Project title={'Project Foxtrot'} tags={"html css javascript angular"} filterBy={this.state.projectCategory} onSelect={this.overlayEnable}/>
                    <Project title={'Project Golf'} tags={"html css javascript json"} filterBy={this.state.projectCategory} onSelect={this.overlayEnable}/>
                    <Project title={'Project Hotel'} tags={"html css"} filterBy={this.state.projectCategory} onSelect={this.overlayEnable}/>
                    <Project title={'Project India'} tags={"html css javascript json"} filterBy={this.state.projectCategory} onSelect={this.overlayEnable}/>
                </div>
            </>
        )
    }
}