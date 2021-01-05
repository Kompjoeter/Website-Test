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
    }

    render()
    {
        var isActive = this.props.filterBy == 'all' || this.props.tags.includes(this.props.filterBy);

        return(
            <div onClick={() => this.props.onSelect(this.props.title)} className={[true && 'Project', isActive && 'active', ]
            .filter(c => c != false)
            .join(' ')}>

    
                <h2 className="project-title">{this.props.title}</h2>
                <div className="project-card">
                    <div className="project-image-container">
                        <img className="project-image"src={"assets/projectplaceholder.png"}></img>
                    </div>
                </div>
            </div>
        )
    }



}