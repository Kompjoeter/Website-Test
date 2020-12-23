class Portfolio extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            projectCategory: 'all'
        }
    }

    categorySet = (e) =>
    {
        this.setState( 
        {
            projectCategory: e.target.value
        });
        
    }

    render()
    {
        return(
            <>
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
                    <Project filterBy={this.state.projectCategory} title={'Project Alpha'} tags={"html css"}/>
                    <Project filterBy={this.state.projectCategory} title={'Project Beta'} tags={"html css javascript"}/>
                    <Project filterBy={this.state.projectCategory} title={'Project Charlie'} tags={"html css javascript react"}/>
                    <Project filterBy={this.state.projectCategory} title={'Project Dingo'} tags={"javascript"}/>
                    <Project filterBy={this.state.projectCategory} title={'Project Eagle'} tags={"html"}/>
                    <Project filterBy={this.state.projectCategory} title={'Project Foxtrot'} tags={"html css javascript angular"}/>
                    <Project filterBy={this.state.projectCategory} title={'Project Garage'} tags={"html css javascript json"}/>
                    <Project filterBy={this.state.projectCategory} title={'Project Houndog'} tags={"html css"}/>
                    <Project filterBy={this.state.projectCategory} title={'Project Ingrid'} tags={"html css javascript json"}/>
                </div>
            </>
        )
    }
}