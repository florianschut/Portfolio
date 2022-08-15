var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CompetencyIcon = function (_React$Component) {
    _inherits(CompetencyIcon, _React$Component);

    function CompetencyIcon() {
        _classCallCheck(this, CompetencyIcon);

        return _possibleConstructorReturn(this, (CompetencyIcon.__proto__ || Object.getPrototypeOf(CompetencyIcon)).apply(this, arguments));
    }

    _createClass(CompetencyIcon, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "competency" },
                React.createElement(
                    "div",
                    null,
                    " ",
                    React.createElement(
                        "p",
                        null,
                        this.props.name
                    )
                ),
                React.createElement("img", { src: this.props.src, alt: this.props.name })
            );
        }
    }]);

    return CompetencyIcon;
}(React.Component);

var Competencies = function (_React$Component2) {
    _inherits(Competencies, _React$Component2);

    function Competencies() {
        _classCallCheck(this, Competencies);

        return _possibleConstructorReturn(this, (Competencies.__proto__ || Object.getPrototypeOf(Competencies)).apply(this, arguments));
    }

    _createClass(Competencies, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "competencies-container" },
                React.createElement(CompetencyIcon, {
                    name: "C++",
                    src: "resources/images/competencies/Cpp.png"
                }),
                React.createElement(CompetencyIcon, {
                    name: "Unreal Engine 4",
                    src: "resources/images/competencies/UE4.png"
                }),
                React.createElement(CompetencyIcon, {
                    name: "Steam VR",
                    src: "resources/images/competencies/SteamVR.png"
                }),
                React.createElement(CompetencyIcon, {
                    name: "Microsoft Visual Studio",
                    src: "resources/images/competencies/VisualStudio.png"
                }),
                React.createElement(CompetencyIcon, {
                    name: "DirectX 12",
                    src: "resources/images/competencies/DX12.png"
                }),
                React.createElement(CompetencyIcon, {
                    name: "DirectX Raytracing",
                    src: "resources/images/competencies/DXR.png"
                }),
                React.createElement(CompetencyIcon, {
                    name: "HLSL",
                    src: "resources/images/competencies/HLSL.png"
                }),
                React.createElement(CompetencyIcon, {
                    name: "Git",
                    src: "resources/images/competencies/Git.png"
                }),
                React.createElement(CompetencyIcon, {
                    name: "Perforce",
                    src: "resources/images/competencies/P4.png"
                }),
                React.createElement(CompetencyIcon, {
                    name: "Dear ImGui",
                    src: "resources/images/competencies/ImGui.png"
                }),
                React.createElement(CompetencyIcon, {
                    name: "Jira",
                    src: "resources/images/competencies/Jira.png"
                }),
                React.createElement(CompetencyIcon, {
                    name: "PlayStation Vita Dev Tools",
                    src: "resources/images/competencies/PSVita.png"
                }),
                React.createElement(CompetencyIcon, {
                    name: "Swift",
                    src: "resources/images/competencies/Swift.png"
                }),
                React.createElement(CompetencyIcon, {
                    name: "xCode",
                    src: "resources/images/competencies/xCode.png"
                })
            );
        }
    }]);

    return Competencies;
}(React.Component);

;

var domContainer = document.getElementById('competencies-container');
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(Competencies, null));