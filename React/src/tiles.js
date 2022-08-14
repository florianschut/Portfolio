class ProjectTile extends React.Component {
    buildLinks(){
        var retval = [];
        for (const link of this.props.links) {
            retval.push(<a href={link}><i className="fas fa-info-circle"></i></a>);
        }
    }

    render(){
        return(
            <div className="tile">
                <a href={this.props.pageHref}><img src={this.props.bannerSrc}
                        alt={this.props.projectName} /></a>
                <a href={this.props.pageHref}>
                <h1>{this.props.projectName}</h1></a>
                <p>{this.props.desc}</p>
                <ul>{this.props.list}</ul>
                <hr />
                <button-container>
                
                    <a href="../Cradle.html" title="More Info..."><i className="fas fa-info-circle"></i></a>
                </button-container>

                </div>
        )
    }
}

class Projects extends React.Component {
    cradleLinks = ["../Cradle.html", "../Cradle.html"];
    render(){
        return(
            <div className="tile-container">
                <ProjectTile 
                    projectName="Cradle Research" 
                    pageHref="../Cradle.html"
                    bannerSrc="../resources/images/CradleHeader.png"
                    desc="Internship at Cradle Research working on virtual productions and virtual humans"
                    list= {<div><li>Full time professional work placement</li>
                    <hr />
                    <li>Durration: 9 Months</li>
                    <hr />
                    <li>
                        Projects:
                        <hr />
                        <ul>
                            <li>Real time virtual productions</li>
                            <hr />
                            <li>Virtual Humans in Breda Economy</li>
                            <hr />
                        </ul>
                    </li></div>}
                    links={["../Cradle.html", "../Cradle.html"]}

                    />
                <div className="tile">
                    <a href="WeekendRaytracer.html"><img src="../resources/images/RaytracerHeader.png"
                            alt="A pathtracing research project" /></a>
                    <a href="WeekendRaytracer.html">
                        <h1>Weekend Raytracer
                        </h1>
                    </a>
                    <p>
                        An educational project exploring CPU pathtracing
                    </p>
                    <ul>
                        <li>Solo Research Project</li>
                        <hr />
                        <li>Part-Time</li>
                        <hr />
                        <li>Features

                            <hr />
                            <ul>
                                <li>Accumulating Path Tracer</li>
                                <hr />
                                <li>Multithreaded Rrendering</li>
                                <hr />
                                <li>Model Loading</li>
                                <hr />
                            </ul>
                        </li>
                    </ul>
                    <hr />
                    <button-container>
                        <a href="https://github.com/florianschut/RaytracingInAWeekend" title="Project GitHub Page"><i
                                className="fab fa-github-square"></i></a>
                        <a href="WeekendRaytracer.html" title="More Info..."><i className="fas fa-info-circle"></i></a>
                    </button-container>

                </div>
                <div className="tile">
                    <a href="../WispRenderer.html"><img src="../resources/images/WispDragonHeader.png"
                            alt="Wisp renderer. A real time raytracing plugin for Autodesk Maya" /></a>
                    <a href="../WispRenderer.html">
                        <h1>Wisp Renderer</h1>
                    </a>
                    <p>
                        A real time raytracing plugin for Autodesk Maya
                    </p>
                    <ul>
                        <li>Role: Graphics Programmer</li>
                        <hr />
                        <li>Project Length: 32 Weeks</li>
                        <hr />
                        <li>Team members: 9</li>
                        <hr />
                        <li>Responsibilities
                            <hr />
                            <ul>
                                <li>Raytraced Ambient Occlusion</li>
                                <hr />
                                <li>Graphics Settings</li>
                                <hr />
                            </ul>
                        </li>
                    </ul>
                    <hr />
                    <button-container>
                        <a href="https://github.com/TeamWisp" title="Project GitHub Page"><i
                                className="fab fa-github-square"></i></a>
                        <a href="https://twitter.com/WispRenderer" title="Project Twitter Page"><i
                                className="fab fa-twitter-square"></i></a>
                        <a href="https://discord.gg/qYBHq85" title="Project Discord Server"><i
                                className="fab fa-discord"></i></a>
                        <a href="../WispRenderer.html" title="More Info..."><i className="fas fa-info-circle"></i></a>
                    </button-container>

                </div>

                <div className="tile">
                    <a href="../Madoi.html"><img src="../resources/images/MahdoiHeader.png"
                            alt="MAHDOI. A 2D platformer game made using custom tech for PSVita and Windows 10" /></a>
                    <a href="../Madoi.html">
                        <h1>Ma ĐÓI</h1>
                    </a>
                    <p>
                        A cross platform 2D platformer game made using a custom engine for PSVita & Windows 10
    </p>
                    <ul>
                        <li>Role: PSVita Graphics Programmer</li>
                        <hr />
                        <li>Project Length: 16 Weeks</li>
                        <hr />
                        <li>Team members: 17</li>
                        <hr />
                        <li>Responsibilities
                            <hr />
                            <ul>
                                <li>PlayStation Vita rendering</li>
                                <hr />
                            </ul>
                        </li>
                    </ul>
                    <hr />
                    <button-container>
                        <a href="https://igad.itch.io/ma-doi" title="Itch.io"><i className="fab fa-itch-io"></i></a>
                        <a href="../Madoi.html" title="More Info..."><i className="fas fa-info-circle"></i></a>
                    </button-container>
                </div>

                <div className="tile">
                    <a href="../Flux.html"><img src="../resources/images/FluxHeader.png"
                            alt="Flux. A Physics based party game made during GGJ 2018" /></a>
                    <a href="../Flux.html">
                        <h1>Flux</h1>
                    </a>
                    <p>
                        A Physics based party game made for GGJ 2018
                        </p>
                    <ul>
                        <li>Role: Gameplay Programmer</li>
                        <hr />
                        <li>Project Length: 48 Hours</li>
                        <hr />
                        <li>Team members: 18</li>
                        <hr />
                        <li>Responsibilities</li>
                        <hr />
                        <ul >
                            <li>Character movement</li>
                            <hr />
                            <li>Generalist tasks</li>
                            <hr />
                        </ul>
                    </ul>

                    <hr />
                    <button-container>
                        <a href="https://github.com/TeamHowdini/GlobalGameJam2018_V2" title="Project GitHub Page"><i
                                className="fab fa-github-square"></i></a>
                        <a href="https://igad.itch.io/flux" title="Itch.io"><i
                                className="fab fa-itch-io"></i></a>
                        <a href="https://globalgamejam.org/2018/games/f-l-u-x" title="Global Game Jame Website"><i
                                className="fas fa-pager"></i></a>
                        <a href="../Flux.html" title="More Info..."><i className="fas fa-info-circle"></i></a>
                    </button-container>
                </div>
            </div>
        )
    }
}
const domContainer = document.getElementById('project-tiles-container');
const root = ReactDOM.createRoot(domContainer);
root.render(<Projects/>);