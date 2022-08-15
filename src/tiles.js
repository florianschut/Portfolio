class ProjectTile extends React.Component {
    buildLinks(){
        let id = 0;
        let retval = new Array;
        if(this.props.githubLink){
            retval.push(<a href={this.props.infoLink}title="Project GitHub Page" key={id++}><i className="fab fa-github-square"></i></a>);
        }
        if(this.props.twitterLink){
            retval.push(<a href={this.props.infoLink}title="Project Twitter Page" key={id++}><i className="fab fa-twitter-square"></i></a>);
        }
        if(this.props.discordLink){
            retval.push(<a href={this.props.infoLink}title="Project Discord Server" key={id++}><i className="fab fa-discord"></i></a>);
        }
        if(this.props.itchLink){
            retval.push(<a href={this.props.infoLink}title="Itch.io" key={id++}><i className="fab fa-itch-io"></i></a>);
        }
        if(this.props.ggjLink){
            retval.push(<a href={this.props.infoLink}title="Global Game Jame Website" key={id++}><i className="fas fa-pager"></i></a>);
        }
        retval.push(<a href={this.props.pageHref}title="More Info..." key={id++}><i className="fas fa-info-circle"></i></a>);
        return <button-container>{retval}</button-container>;
    }
    buildList(aList)
    {
        let retval = new Array;
        let id = 0;
        for (const listItem of aList)
        {
            if(Array.isArray(listItem))
            {
                let sublist= new Array;
                retval.push(<li key={id++}>{listItem[0]}</li>,<hr key={id++}/>);
                listItem.shift();
                for (const subListItem of listItem)
                {
                    sublist.push(<li key={id++}>{subListItem}</li>, <hr key={id++}/>);
                };
                retval.push(<ul key={id++}>{sublist}</ul>);
            } else
            {
                retval.push(<li key={id++}>{listItem}</li>, <hr key={id++}/>);
            }
        };
    
        return(<ul>{retval}</ul>);
    }

    render(){
        return(
            <div className="tile">
                <a href={this.props.pageHref}><img src={this.props.bannerSrc}
                        alt={this.props.projectName} /></a>
                <a href={this.props.pageHref}>
                <h1>{this.props.projectName}</h1></a>
                <p>{this.props.desc}</p>
                {this.buildList(this.props.list)}
                <hr />
                {this.buildLinks()}
            </div>
        )
    }
}

class Projects extends React.Component {
    render(){
        return(
            <div className="tile-container">
                <ProjectTile 
                    projectName="Cradle Research" 
                    pageHref="../Cradle.html"
                    bannerSrc="../resources/images/CradleHeader.png"
                    desc="Internship at Cradle Research working on virtual productions and virtual humans"
                    list= {["Full time professional work placement", "Durration: 9 Months", ["Projects:", "Real time virtual productions", "Virtual Humans in Breda Economy"]]}
                />
                <ProjectTile
                    projectName="Weekend Raytracer"
                    pageHref="WeekendRaytracer.html"
                    bannerSrc="../resources/images/RaytracerHeader.png"
                    desc="An educational project exploring CPU pathtracing "
                    list = {["Solo Research Project","Part-Time", ["Features:", "Accumulating Path Tracer", "Multithreaded Rendering", "Model Loading" ] ]}
                    githubLink="https://github.com/florianschut/RaytracingInAWeekend"
                />
                <ProjectTile
                    projectName="Wisp Renderer"
                    pageHref="WispRenderer.html"
                    bannerSrc="../resources/images/WispDragonHeader.png"
                    desc="A real time raytracing plugin for Autodesk Maya "
                    list = {["Role: Graphics Programmer","Project Length: 32 Weeks","Team members: 9", ["Responsibilities:", "Raytraced Ambient Occlusion", "Graphics Settings"] ]}
                    githubLink="https://github.com/TeamWisp"
                    twitterLink="https://twitter.com/WispRenderer"
                    discordLink="https://discord.gg/qYBHq85"
                />
                <ProjectTile
                    projectName="MA ĐÓI"
                    pageHref="Madoi.html"
                    bannerSrc="../resources/images/MahdoiHeader.png"
                    desc="A cross platform 2D platformer game made using a custom engine for PSVita & Windows 10"
                    list = {["Role: PSVita Graphics Programmer","Project Length: 16 Weeks","Team members: 17", ["Responsibilities:", "PlayStation Vita rendering"] ]}
                    itchLink="https://igad.itch.io/ma-doi"
                />
                <ProjectTile
                    projectName="Flux"
                    pageHref="Flux.html"
                    bannerSrc="../resources/images/FluxHeader.png"
                    desc="A Physics based party game made for GGJ 2018"
                    list = {["Role: Gameplay Programmer","Project Length: 48 Hours","Team members: 18", ["Responsibilities:", "Character movement", "Generalist tasks"] ]}
                    githubLink="https://github.com/TeamHowdini/GlobalGameJam2018_V2"
                    itchLink="https://igad.itch.io/ma-doi"
                    ggjLink="https://globalgamejam.org/2018/games/f-l-u-x"
                />
            </div>
        )
    }
}
const domContainer = document.getElementById('project-tiles-container');
const root = ReactDOM.createRoot(domContainer);
root.render(<Projects/>);