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
                        this.name
                    )
                ),
                React.createElement("img", { src: this.src, alt: this.props.name })
            );
        }
    }]);

    return CompetencyIcon;
}(React.Component);

var CppCompetency = function (_CompetencyIcon) {
    _inherits(CppCompetency, _CompetencyIcon);

    function CppCompetency() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, CppCompetency);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = CppCompetency.__proto__ || Object.getPrototypeOf(CppCompetency)).call.apply(_ref, [this].concat(args))), _this2), _this2.name = "C++", _this2.src = "resources/images/competencies/Cpp.png", _temp), _possibleConstructorReturn(_this2, _ret);
    }

    return CppCompetency;
}(CompetencyIcon);

var UE4Competency = function (_CompetencyIcon2) {
    _inherits(UE4Competency, _CompetencyIcon2);

    function UE4Competency() {
        var _ref2;

        var _temp2, _this3, _ret2;

        _classCallCheck(this, UE4Competency);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref2 = UE4Competency.__proto__ || Object.getPrototypeOf(UE4Competency)).call.apply(_ref2, [this].concat(args))), _this3), _this3.name = "Unreal Engine 4", _this3.src = "resources/images/competencies/UE4.png", _temp2), _possibleConstructorReturn(_this3, _ret2);
    }

    return UE4Competency;
}(CompetencyIcon);

var SteamVRCompetency = function (_CompetencyIcon3) {
    _inherits(SteamVRCompetency, _CompetencyIcon3);

    function SteamVRCompetency() {
        var _ref3;

        var _temp3, _this4, _ret3;

        _classCallCheck(this, SteamVRCompetency);

        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
        }

        return _ret3 = (_temp3 = (_this4 = _possibleConstructorReturn(this, (_ref3 = SteamVRCompetency.__proto__ || Object.getPrototypeOf(SteamVRCompetency)).call.apply(_ref3, [this].concat(args))), _this4), _this4.name = "Steam VR", _this4.src = "resources/images/competencies/SteamVR.png", _temp3), _possibleConstructorReturn(_this4, _ret3);
    }

    return SteamVRCompetency;
}(CompetencyIcon);

var MSVSCompetency = function (_CompetencyIcon4) {
    _inherits(MSVSCompetency, _CompetencyIcon4);

    function MSVSCompetency() {
        var _ref4;

        var _temp4, _this5, _ret4;

        _classCallCheck(this, MSVSCompetency);

        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
        }

        return _ret4 = (_temp4 = (_this5 = _possibleConstructorReturn(this, (_ref4 = MSVSCompetency.__proto__ || Object.getPrototypeOf(MSVSCompetency)).call.apply(_ref4, [this].concat(args))), _this5), _this5.name = "Microsoft Visual Studio", _this5.src = "resources/images/competencies/VisualStudio.png", _temp4), _possibleConstructorReturn(_this5, _ret4);
    }

    return MSVSCompetency;
}(CompetencyIcon);

var DX12Competency = function (_CompetencyIcon5) {
    _inherits(DX12Competency, _CompetencyIcon5);

    function DX12Competency() {
        var _ref5;

        var _temp5, _this6, _ret5;

        _classCallCheck(this, DX12Competency);

        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
        }

        return _ret5 = (_temp5 = (_this6 = _possibleConstructorReturn(this, (_ref5 = DX12Competency.__proto__ || Object.getPrototypeOf(DX12Competency)).call.apply(_ref5, [this].concat(args))), _this6), _this6.name = "DirectX 12", _this6.src = "resources/images/competencies/DX12.png", _temp5), _possibleConstructorReturn(_this6, _ret5);
    }

    return DX12Competency;
}(CompetencyIcon);

var DXRCompetency = function (_CompetencyIcon6) {
    _inherits(DXRCompetency, _CompetencyIcon6);

    function DXRCompetency() {
        var _ref6;

        var _temp6, _this7, _ret6;

        _classCallCheck(this, DXRCompetency);

        for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
        }

        return _ret6 = (_temp6 = (_this7 = _possibleConstructorReturn(this, (_ref6 = DXRCompetency.__proto__ || Object.getPrototypeOf(DXRCompetency)).call.apply(_ref6, [this].concat(args))), _this7), _this7.name = "DirectX Raytracing", _this7.src = "resources/images/competencies/DXR.png", _temp6), _possibleConstructorReturn(_this7, _ret6);
    }

    return DXRCompetency;
}(CompetencyIcon);

var HLSLCompetency = function (_CompetencyIcon7) {
    _inherits(HLSLCompetency, _CompetencyIcon7);

    function HLSLCompetency() {
        var _ref7;

        var _temp7, _this8, _ret7;

        _classCallCheck(this, HLSLCompetency);

        for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
        }

        return _ret7 = (_temp7 = (_this8 = _possibleConstructorReturn(this, (_ref7 = HLSLCompetency.__proto__ || Object.getPrototypeOf(HLSLCompetency)).call.apply(_ref7, [this].concat(args))), _this8), _this8.name = "HLSL", _this8.src = "resources/images/competencies/HLSL.png", _temp7), _possibleConstructorReturn(_this8, _ret7);
    }

    return HLSLCompetency;
}(CompetencyIcon);

var GitCompetency = function (_CompetencyIcon8) {
    _inherits(GitCompetency, _CompetencyIcon8);

    function GitCompetency() {
        var _ref8;

        var _temp8, _this9, _ret8;

        _classCallCheck(this, GitCompetency);

        for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
            args[_key8] = arguments[_key8];
        }

        return _ret8 = (_temp8 = (_this9 = _possibleConstructorReturn(this, (_ref8 = GitCompetency.__proto__ || Object.getPrototypeOf(GitCompetency)).call.apply(_ref8, [this].concat(args))), _this9), _this9.name = "Git", _this9.src = "resources/images/competencies/Git.png", _temp8), _possibleConstructorReturn(_this9, _ret8);
    }

    return GitCompetency;
}(CompetencyIcon);

var P4Competency = function (_CompetencyIcon9) {
    _inherits(P4Competency, _CompetencyIcon9);

    function P4Competency() {
        var _ref9;

        var _temp9, _this10, _ret9;

        _classCallCheck(this, P4Competency);

        for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            args[_key9] = arguments[_key9];
        }

        return _ret9 = (_temp9 = (_this10 = _possibleConstructorReturn(this, (_ref9 = P4Competency.__proto__ || Object.getPrototypeOf(P4Competency)).call.apply(_ref9, [this].concat(args))), _this10), _this10.name = "Perforce", _this10.src = "resources/images/competencies/P4.png", _temp9), _possibleConstructorReturn(_this10, _ret9);
    }

    return P4Competency;
}(CompetencyIcon);

var ImGuiCompetency = function (_CompetencyIcon10) {
    _inherits(ImGuiCompetency, _CompetencyIcon10);

    function ImGuiCompetency() {
        var _ref10;

        var _temp10, _this11, _ret10;

        _classCallCheck(this, ImGuiCompetency);

        for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
            args[_key10] = arguments[_key10];
        }

        return _ret10 = (_temp10 = (_this11 = _possibleConstructorReturn(this, (_ref10 = ImGuiCompetency.__proto__ || Object.getPrototypeOf(ImGuiCompetency)).call.apply(_ref10, [this].concat(args))), _this11), _this11.name = "Dear ImGui", _this11.src = "resources/images/competencies/ImGui.png", _temp10), _possibleConstructorReturn(_this11, _ret10);
    }

    return ImGuiCompetency;
}(CompetencyIcon);

var JiraCompetency = function (_CompetencyIcon11) {
    _inherits(JiraCompetency, _CompetencyIcon11);

    function JiraCompetency() {
        var _ref11;

        var _temp11, _this12, _ret11;

        _classCallCheck(this, JiraCompetency);

        for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
            args[_key11] = arguments[_key11];
        }

        return _ret11 = (_temp11 = (_this12 = _possibleConstructorReturn(this, (_ref11 = JiraCompetency.__proto__ || Object.getPrototypeOf(JiraCompetency)).call.apply(_ref11, [this].concat(args))), _this12), _this12.name = "Jira", _this12.src = "resources/images/competencies/Jira.png", _temp11), _possibleConstructorReturn(_this12, _ret11);
    }

    return JiraCompetency;
}(CompetencyIcon);

var PSVitaCompetency = function (_CompetencyIcon12) {
    _inherits(PSVitaCompetency, _CompetencyIcon12);

    function PSVitaCompetency() {
        var _ref12;

        var _temp12, _this13, _ret12;

        _classCallCheck(this, PSVitaCompetency);

        for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
            args[_key12] = arguments[_key12];
        }

        return _ret12 = (_temp12 = (_this13 = _possibleConstructorReturn(this, (_ref12 = PSVitaCompetency.__proto__ || Object.getPrototypeOf(PSVitaCompetency)).call.apply(_ref12, [this].concat(args))), _this13), _this13.name = "PlayStation Vita Dev Tools", _this13.src = "resources/images/competencies/PSVita.png", _temp12), _possibleConstructorReturn(_this13, _ret12);
    }

    return PSVitaCompetency;
}(CompetencyIcon);

var SwiftCompetency = function (_CompetencyIcon13) {
    _inherits(SwiftCompetency, _CompetencyIcon13);

    function SwiftCompetency() {
        var _ref13;

        var _temp13, _this14, _ret13;

        _classCallCheck(this, SwiftCompetency);

        for (var _len13 = arguments.length, args = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
            args[_key13] = arguments[_key13];
        }

        return _ret13 = (_temp13 = (_this14 = _possibleConstructorReturn(this, (_ref13 = SwiftCompetency.__proto__ || Object.getPrototypeOf(SwiftCompetency)).call.apply(_ref13, [this].concat(args))), _this14), _this14.name = "Swift", _this14.src = "resources/images/competencies/Swift.png", _temp13), _possibleConstructorReturn(_this14, _ret13);
    }

    return SwiftCompetency;
}(CompetencyIcon);

var XCodeCompetency = function (_CompetencyIcon14) {
    _inherits(XCodeCompetency, _CompetencyIcon14);

    function XCodeCompetency() {
        var _ref14;

        var _temp14, _this15, _ret14;

        _classCallCheck(this, XCodeCompetency);

        for (var _len14 = arguments.length, args = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
            args[_key14] = arguments[_key14];
        }

        return _ret14 = (_temp14 = (_this15 = _possibleConstructorReturn(this, (_ref14 = XCodeCompetency.__proto__ || Object.getPrototypeOf(XCodeCompetency)).call.apply(_ref14, [this].concat(args))), _this15), _this15.name = "xCode", _this15.src = "resources/images/competencies/xCode.png", _temp14), _possibleConstructorReturn(_this15, _ret14);
    }

    return XCodeCompetency;
}(CompetencyIcon);

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
                this.props.competenciesArray
            );
        }
    }]);

    return Competencies;
}(React.Component);

;

var indexDomContainer = document.getElementById('competencies-container');
if (indexDomContainer) {
    var indexRoot = ReactDOM.createRoot(indexDomContainer);
    var id = 0;
    indexRoot.render(React.createElement(Competencies, { competenciesArray: [React.createElement(CppCompetency, { key: id++ }), React.createElement(UE4Competency, { key: id++ }), React.createElement(SteamVRCompetency, { key: id++ }), React.createElement(MSVSCompetency, { key: id++ }), React.createElement(DX12Competency, { key: id++ }), React.createElement(DXRCompetency, { key: id++ }), React.createElement(HLSLCompetency, { key: id++ }), React.createElement(GitCompetency, { key: id++ }), React.createElement(P4Competency, { key: id++ }), React.createElement(ImGuiCompetency, { key: id++ }), React.createElement(JiraCompetency, { key: id++ }), React.createElement(PSVitaCompetency, { key: id++ }), React.createElement(SwiftCompetency, { key: id++ }), React.createElement(XCodeCompetency, { key: id++ })]
    }));
}

var cradleDomContainer = document.getElementById('cradle-competencies-container');
if (cradleDomContainer) {
    var cradleRoot = ReactDOM.createRoot(cradleDomContainer);
    var _id = 0;
    cradleRoot.render(React.createElement(Competencies, { competenciesArray: [React.createElement(UE4Competency, { key: _id++ }), React.createElement(CppCompetency, { key: _id++ }), React.createElement(SteamVRCompetency, { key: _id++ }), React.createElement(MSVSCompetency, { key: _id++ })]
    }));
}

var weekendRaytracerDomContainer = document.getElementById('weekend-raytracer-competencies-container');
if (weekendRaytracerDomContainer) {
    var weekendRaytracerRoot = ReactDOM.createRoot(weekendRaytracerDomContainer);
    var _id2 = 0;
    weekendRaytracerRoot.render(React.createElement(Competencies, { competenciesArray: [React.createElement(CppCompetency, { key: _id2++ }), React.createElement(MSVSCompetency, { key: _id2++ }), React.createElement(GitCompetency, { key: _id2++ }), React.createElement(ImGuiCompetency, { key: _id2++ })]
    }));
}

var wispDomContainer = document.getElementById('wisp-competencies-container');
if (wispDomContainer) {
    var wispRoot = ReactDOM.createRoot(wispDomContainer);
    var _id3 = 0;
    wispRoot.render(React.createElement(Competencies, { competenciesArray: [React.createElement(CppCompetency, { key: _id3++ }), React.createElement(DX12Competency, { key: _id3++ }), React.createElement(DXRCompetency, { key: _id3++ }), React.createElement(HLSLCompetency, { key: _id3++ }), React.createElement(MSVSCompetency, { key: _id3++ }), React.createElement(GitCompetency, { key: _id3++ }), React.createElement(ImGuiCompetency, { key: _id3++ }), React.createElement(JiraCompetency, { key: _id3++ })]
    }));
}

var madoiDomContainer = document.getElementById('madoi-competencies-container');
if (madoiDomContainer) {
    var madoiRoot = ReactDOM.createRoot(madoiDomContainer);
    var _id4 = 0;
    madoiRoot.render(React.createElement(Competencies, { competenciesArray: [React.createElement(CppCompetency, { key: _id4++ }), React.createElement(PSVitaCompetency, { key: _id4++ }), React.createElement(MSVSCompetency, { key: _id4++ }), React.createElement(P4Competency, { key: _id4++ }), React.createElement(JiraCompetency, { key: _id4++ })]
    }));
}

var fluxDomContainer = document.getElementById('flux-competencies-container');
if (fluxDomContainer) {
    var fluxRoot = ReactDOM.createRoot(fluxDomContainer);
    var _id5 = 0;
    fluxRoot.render(React.createElement(Competencies, { competenciesArray: [React.createElement(CppCompetency, { key: _id5++ }), React.createElement(JiraCompetency, { key: _id5++ }), React.createElement(MSVSCompetency, { key: _id5++ }), React.createElement(UE4Competency, { key: _id5++ })]
    }));
}