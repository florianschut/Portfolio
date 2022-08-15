class CompetencyIcon extends React.Component{
    render(){
        return(
        <div className="competency">
            <div> <p>{this.props.name}</p></div>
            <img src={this.props.src} alt={this.props.name}></img>
        </div>
        );
    }
}
class Competencies extends React.Component{
    render(){
        return(
        <div className="competencies-container">
            <CompetencyIcon
                name="C++"
                src="resources/images/competencies/Cpp.png"
            />
            <CompetencyIcon
                name="Unreal Engine 4"
                src="resources/images/competencies/UE4.png"
            />
            <CompetencyIcon
                name="Steam VR"
                src="resources/images/competencies/SteamVR.png"
            />
            <CompetencyIcon
                name="Microsoft Visual Studio"
                src="resources/images/competencies/VisualStudio.png"
            />
            <CompetencyIcon
                name="DirectX 12"
                src="resources/images/competencies/DX12.png"
            />
            <CompetencyIcon
                name="DirectX Raytracing"
                src="resources/images/competencies/DXR.png"
            />
            <CompetencyIcon
                name="HLSL"
                src="resources/images/competencies/HLSL.png"
            />
            <CompetencyIcon
                name="Git"
                src="resources/images/competencies/Git.png"
            />
            <CompetencyIcon
                name="Perforce"
                src="resources/images/competencies/P4.png"
            />
            <CompetencyIcon
                name="Dear ImGui"
                src="resources/images/competencies/ImGui.png"
            />
            <CompetencyIcon
                name="Jira"
                src="resources/images/competencies/Jira.png"
            />
            <CompetencyIcon
                name="PlayStation Vita Dev Tools"
                src="resources/images/competencies/PSVita.png"
            />
            <CompetencyIcon
                name="Swift"
                src="resources/images/competencies/Swift.png"
            />
            <CompetencyIcon
                name="xCode"
                src="resources/images/competencies/xCode.png"
            />
        </div>
        );
    };
};

const domContainer = document.getElementById('competencies-container');
const root = ReactDOM.createRoot(domContainer);
root.render(<Competencies/>);