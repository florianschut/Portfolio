class CompetencyIcon extends React.Component {
    render() {
        return (
            <div className="competency">
                <div> <p>{this.name}</p></div>
                <img src={this.src} alt={this.props.name}></img>
            </div>
        );
    }
}
class CppCompetency extends CompetencyIcon {
    name = "C++";
    src = "resources/images/competencies/Cpp.png"
}
class UE4Competency extends CompetencyIcon {
    name = "Unreal Engine 4"
    src = "resources/images/competencies/UE4.png"
}
class SteamVRCompetency extends CompetencyIcon {
    name = "Steam VR"
    src = "resources/images/competencies/SteamVR.png"
}
class MSVSCompetency extends CompetencyIcon {
    name = "Microsoft Visual Studio"
    src = "resources/images/competencies/VisualStudio.png"
}
class DX12Competency extends CompetencyIcon {
    name = "DirectX 12"
    src = "resources/images/competencies/DX12.png"
}
class DXRCompetency extends CompetencyIcon {
    name = "DirectX Raytracing"
    src = "resources/images/competencies/DXR.png"
}
class HLSLCompetency extends CompetencyIcon {
    name = "HLSL"
    src = "resources/images/competencies/HLSL.png"
}
class GitCompetency extends CompetencyIcon {
    name = "Git"
    src = "resources/images/competencies/Git.png"
}
class P4Competency extends CompetencyIcon {
    name = "Perforce"
    src = "resources/images/competencies/P4.png"
}
class ImGuiCompetency extends CompetencyIcon {
    name = "Dear ImGui"
    src = "resources/images/competencies/ImGui.png"
}
class JiraCompetency extends CompetencyIcon {
    name = "Jira"
    src = "resources/images/competencies/Jira.png"
}
class PSVitaCompetency extends CompetencyIcon {
    name = "PlayStation Vita Dev Tools"
    src = "resources/images/competencies/PSVita.png"
}
class SwiftCompetency extends CompetencyIcon {
    name = "Swift"
    src = "resources/images/competencies/Swift.png"
}
class XCodeCompetency extends CompetencyIcon {
    name = "xCode"
    src = "resources/images/competencies/xCode.png"
}
class Competencies extends React.Component {
    render() {
        return (
            <div className="competencies-container">
                {this.props.competenciesArray}
            </div>
        );
    };
};

const indexDomContainer = document.getElementById('competencies-container');
if (indexDomContainer) {
    const indexRoot = ReactDOM.createRoot(indexDomContainer);
    let id = 0;
    indexRoot.render(<Competencies competenciesArray={[
        <CppCompetency key={id++} />,
        <UE4Competency key={id++} />,
        <SteamVRCompetency key={id++} />,
        <MSVSCompetency key={id++} />,
        <DX12Competency key={id++} />,
        <DXRCompetency key={id++} />,
        <HLSLCompetency key={id++} />,
        <GitCompetency key={id++} />,
        <P4Competency key={id++} />,
        <ImGuiCompetency key={id++} />,
        <JiraCompetency key={id++} />,
        <PSVitaCompetency key={id++} />,
        <SwiftCompetency key={id++} />,
        <XCodeCompetency key={id++} />]}
    />);
}

const cradleDomContainer = document.getElementById('cradle-competencies-container');
if (cradleDomContainer) {
    const cradleRoot = ReactDOM.createRoot(cradleDomContainer);
    let id = 0;
    cradleRoot.render(<Competencies competenciesArray={[
        <UE4Competency key={id++} />,
        <CppCompetency key={id++} />,
        <SteamVRCompetency key={id++} />,
        <MSVSCompetency key={id++} />]}
    />);
}


const weekendRaytracerDomContainer = document.getElementById('weekend-raytracer-competencies-container');
if (weekendRaytracerDomContainer) {
    const weekendRaytracerRoot = ReactDOM.createRoot(weekendRaytracerDomContainer);
    let id = 0;
    weekendRaytracerRoot.render(<Competencies competenciesArray={[
        <CppCompetency key={id++} />,
        <MSVSCompetency key={id++} />,
        <GitCompetency key={id++} />,
        <ImGuiCompetency key={id++} />]}
    />);
}

const wispDomContainer = document.getElementById('wisp-competencies-container');
if (wispDomContainer) {
    const wispRoot = ReactDOM.createRoot(wispDomContainer);
    let id = 0;
    wispRoot.render(<Competencies competenciesArray={[
        <CppCompetency key={id++} />,
        <DX12Competency key={id++} />,
        <DXRCompetency key={id++} />,
        <HLSLCompetency key={id++} />,
        <MSVSCompetency key={id++} />,
        <GitCompetency key={id++} />,
        <ImGuiCompetency key={id++} />,
        <JiraCompetency key={id++} />
    ]}
    />);
}

const madoiDomContainer = document.getElementById('madoi-competencies-container');
if (madoiDomContainer) {
    const madoiRoot = ReactDOM.createRoot(madoiDomContainer);
    let id = 0;
    madoiRoot.render(<Competencies competenciesArray={[
        <CppCompetency key={id++} />,
        <PSVitaCompetency key={id++} />,
        <MSVSCompetency key={id++} />,
        <P4Competency key={id++} />,
        <JiraCompetency key={id++} />
    ]}
    />);
}

const fluxDomContainer = document.getElementById('flux-competencies-container');
if (fluxDomContainer) {
    const fluxRoot = ReactDOM.createRoot(fluxDomContainer);
    let id = 0;
    fluxRoot.render(<Competencies competenciesArray={[
        <CppCompetency key={id++} />,
        <JiraCompetency key={id++} />,
        <MSVSCompetency key={id++} />,
        <UE4Competency key={id++} />,
    ]}
    />);
}
