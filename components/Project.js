class Project extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            active: true
        }
    }

    toggleActive()
    {
        this.setState({active: !this.state.active});
        console.log(this.state.active);
        console.log("oeooeoeo");
    }

    render()
    {
        var isActive = this.props.filterBy == 'all' || this.props.tags.includes(this.props.filterBy);

        return(
            <div className={[true && 'Project', isActive && 'active', ]
            .filter(c => c != false)
            .join(' ')}>
                <h2 className="project-title">{this.props.title}</h2>
                <div className="project-card">
                    <div className="project-description">
                        <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit voluptas facere voluptates consequatur, atque porro!
                        </p>
                    </div>
                    <div className="project-image-container">
                        <img className="project-image"src="https://via.placeholder.com/150"></img>
                    </div>
                    <button className="project-button">▶</button>
                </div>
            </div>
        )
    }



}