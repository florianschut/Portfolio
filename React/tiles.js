var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectTile = function (_React$Component) {
    _inherits(ProjectTile, _React$Component);

    function ProjectTile() {
        _classCallCheck(this, ProjectTile);

        return _possibleConstructorReturn(this, (ProjectTile.__proto__ || Object.getPrototypeOf(ProjectTile)).apply(this, arguments));
    }

    _createClass(ProjectTile, [{
        key: "buildLinks",
        value: function buildLinks() {
            var retval = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.props.links[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var link = _step.value;

                    retval.push(React.createElement(
                        "a",
                        { href: link },
                        React.createElement("i", { className: "fas fa-info-circle" })
                    ));
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "tile" },
                React.createElement(
                    "a",
                    { href: this.props.pageHref },
                    React.createElement("img", { src: this.props.bannerSrc,
                        alt: this.props.projectName })
                ),
                React.createElement(
                    "a",
                    { href: this.props.pageHref },
                    React.createElement(
                        "h1",
                        null,
                        this.props.projectName
                    )
                ),
                React.createElement(
                    "p",
                    null,
                    this.props.desc
                ),
                React.createElement(
                    "ul",
                    null,
                    this.props.list
                ),
                React.createElement("hr", null),
                React.createElement(
                    "button-container",
                    null,
                    React.createElement(
                        "a",
                        { href: "../Cradle.html", title: "More Info..." },
                        React.createElement("i", { className: "fas fa-info-circle" })
                    )
                )
            );
        }
    }]);

    return ProjectTile;
}(React.Component);

var Projects = function (_React$Component2) {
    _inherits(Projects, _React$Component2);

    function Projects() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, Projects);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Projects.__proto__ || Object.getPrototypeOf(Projects)).call.apply(_ref, [this].concat(args))), _this2), _this2.cradleLinks = ["../Cradle.html", "../Cradle.html"], _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(Projects, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "tile-container" },
                React.createElement(ProjectTile, {
                    projectName: "Cradle Research",
                    pageHref: "../Cradle.html",
                    bannerSrc: "../resources/images/CradleHeader.png",
                    desc: "Internship at Cradle Research working on virtual productions and virtual humans",
                    list: React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "li",
                            null,
                            "Full time professional work placement"
                        ),
                        React.createElement("hr", null),
                        React.createElement(
                            "li",
                            null,
                            "Durration: 9 Months"
                        ),
                        React.createElement("hr", null),
                        React.createElement(
                            "li",
                            null,
                            "Projects:",
                            React.createElement("hr", null),
                            React.createElement(
                                "ul",
                                null,
                                React.createElement(
                                    "li",
                                    null,
                                    "Real time virtual productions"
                                ),
                                React.createElement("hr", null),
                                React.createElement(
                                    "li",
                                    null,
                                    "Virtual Humans in Breda Economy"
                                ),
                                React.createElement("hr", null)
                            )
                        )
                    ),
                    links: ["../Cradle.html", "../Cradle.html"]

                }),
                React.createElement(
                    "div",
                    { className: "tile" },
                    React.createElement(
                        "a",
                        { href: "WeekendRaytracer.html" },
                        React.createElement("img", { src: "../resources/images/RaytracerHeader.png",
                            alt: "A pathtracing research project" })
                    ),
                    React.createElement(
                        "a",
                        { href: "WeekendRaytracer.html" },
                        React.createElement(
                            "h1",
                            null,
                            "Weekend Raytracer"
                        )
                    ),
                    React.createElement(
                        "p",
                        null,
                        "An educational project exploring CPU pathtracing"
                    ),
                    React.createElement(
                        "ul",
                        null,
                        React.createElement(
                            "li",
                            null,
                            "Solo Research Project"
                        ),
                        React.createElement("hr", null),
                        React.createElement(
                            "li",
                            null,
                            "Part-Time"
                        ),
                        React.createElement("hr", null),
                        React.createElement(
                            "li",
                            null,
                            "Features",
                            React.createElement("hr", null),
                            React.createElement(
                                "ul",
                                null,
                                React.createElement(
                                    "li",
                                    null,
                                    "Accumulating Path Tracer"
                                ),
                                React.createElement("hr", null),
                                React.createElement(
                                    "li",
                                    null,
                                    "Multithreaded Rrendering"
                                ),
                                React.createElement("hr", null),
                                React.createElement(
                                    "li",
                                    null,
                                    "Model Loading"
                                ),
                                React.createElement("hr", null)
                            )
                        )
                    ),
                    React.createElement("hr", null),
                    React.createElement(
                        "button-container",
                        null,
                        React.createElement(
                            "a",
                            { href: "https://github.com/florianschut/RaytracingInAWeekend", title: "Project GitHub Page" },
                            React.createElement("i", {
                                className: "fab fa-github-square" })
                        ),
                        React.createElement(
                            "a",
                            { href: "WeekendRaytracer.html", title: "More Info..." },
                            React.createElement("i", { className: "fas fa-info-circle" })
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "tile" },
                    React.createElement(
                        "a",
                        { href: "../WispRenderer.html" },
                        React.createElement("img", { src: "../resources/images/WispDragonHeader.png",
                            alt: "Wisp renderer. A real time raytracing plugin for Autodesk Maya" })
                    ),
                    React.createElement(
                        "a",
                        { href: "../WispRenderer.html" },
                        React.createElement(
                            "h1",
                            null,
                            "Wisp Renderer"
                        )
                    ),
                    React.createElement(
                        "p",
                        null,
                        "A real time raytracing plugin for Autodesk Maya"
                    ),
                    React.createElement(
                        "ul",
                        null,
                        React.createElement(
                            "li",
                            null,
                            "Role: Graphics Programmer"
                        ),
                        React.createElement("hr", null),
                        React.createElement(
                            "li",
                            null,
                            "Project Length: 32 Weeks"
                        ),
                        React.createElement("hr", null),
                        React.createElement(
                            "li",
                            null,
                            "Team members: 9"
                        ),
                        React.createElement("hr", null),
                        React.createElement(
                            "li",
                            null,
                            "Responsibilities",
                            React.createElement("hr", null),
                            React.createElement(
                                "ul",
                                null,
                                React.createElement(
                                    "li",
                                    null,
                                    "Raytraced Ambient Occlusion"
                                ),
                                React.createElement("hr", null),
                                React.createElement(
                                    "li",
                                    null,
                                    "Graphics Settings"
                                ),
                                React.createElement("hr", null)
                            )
                        )
                    ),
                    React.createElement("hr", null),
                    React.createElement(
                        "button-container",
                        null,
                        React.createElement(
                            "a",
                            { href: "https://github.com/TeamWisp", title: "Project GitHub Page" },
                            React.createElement("i", {
                                className: "fab fa-github-square" })
                        ),
                        React.createElement(
                            "a",
                            { href: "https://twitter.com/WispRenderer", title: "Project Twitter Page" },
                            React.createElement("i", {
                                className: "fab fa-twitter-square" })
                        ),
                        React.createElement(
                            "a",
                            { href: "https://discord.gg/qYBHq85", title: "Project Discord Server" },
                            React.createElement("i", {
                                className: "fab fa-discord" })
                        ),
                        React.createElement(
                            "a",
                            { href: "../WispRenderer.html", title: "More Info..." },
                            React.createElement("i", { className: "fas fa-info-circle" })
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "tile" },
                    React.createElement(
                        "a",
                        { href: "../Madoi.html" },
                        React.createElement("img", { src: "../resources/images/MahdoiHeader.png",
                            alt: "MAHDOI. A 2D platformer game made using custom tech for PSVita and Windows 10" })
                    ),
                    React.createElement(
                        "a",
                        { href: "../Madoi.html" },
                        React.createElement(
                            "h1",
                            null,
                            "Ma \u0110\xD3I"
                        )
                    ),
                    React.createElement(
                        "p",
                        null,
                        "A cross platform 2D platformer game made using a custom engine for PSVita & Windows 10"
                    ),
                    React.createElement(
                        "ul",
                        null,
                        React.createElement(
                            "li",
                            null,
                            "Role: PSVita Graphics Programmer"
                        ),
                        React.createElement("hr", null),
                        React.createElement(
                            "li",
                            null,
                            "Project Length: 16 Weeks"
                        ),
                        React.createElement("hr", null),
                        React.createElement(
                            "li",
                            null,
                            "Team members: 17"
                        ),
                        React.createElement("hr", null),
                        React.createElement(
                            "li",
                            null,
                            "Responsibilities",
                            React.createElement("hr", null),
                            React.createElement(
                                "ul",
                                null,
                                React.createElement(
                                    "li",
                                    null,
                                    "PlayStation Vita rendering"
                                ),
                                React.createElement("hr", null)
                            )
                        )
                    ),
                    React.createElement("hr", null),
                    React.createElement(
                        "button-container",
                        null,
                        React.createElement(
                            "a",
                            { href: "https://igad.itch.io/ma-doi", title: "Itch.io" },
                            React.createElement("i", { className: "fab fa-itch-io" })
                        ),
                        React.createElement(
                            "a",
                            { href: "../Madoi.html", title: "More Info..." },
                            React.createElement("i", { className: "fas fa-info-circle" })
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "tile" },
                    React.createElement(
                        "a",
                        { href: "../Flux.html" },
                        React.createElement("img", { src: "../resources/images/FluxHeader.png",
                            alt: "Flux. A Physics based party game made during GGJ 2018" })
                    ),
                    React.createElement(
                        "a",
                        { href: "../Flux.html" },
                        React.createElement(
                            "h1",
                            null,
                            "Flux"
                        )
                    ),
                    React.createElement(
                        "p",
                        null,
                        "A Physics based party game made for GGJ 2018"
                    ),
                    React.createElement(
                        "ul",
                        null,
                        React.createElement(
                            "li",
                            null,
                            "Role: Gameplay Programmer"
                        ),
                        React.createElement("hr", null),
                        React.createElement(
                            "li",
                            null,
                            "Project Length: 48 Hours"
                        ),
                        React.createElement("hr", null),
                        React.createElement(
                            "li",
                            null,
                            "Team members: 18"
                        ),
                        React.createElement("hr", null),
                        React.createElement(
                            "li",
                            null,
                            "Responsibilities"
                        ),
                        React.createElement("hr", null),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Character movement"
                            ),
                            React.createElement("hr", null),
                            React.createElement(
                                "li",
                                null,
                                "Generalist tasks"
                            ),
                            React.createElement("hr", null)
                        )
                    ),
                    React.createElement("hr", null),
                    React.createElement(
                        "button-container",
                        null,
                        React.createElement(
                            "a",
                            { href: "https://github.com/TeamHowdini/GlobalGameJam2018_V2", title: "Project GitHub Page" },
                            React.createElement("i", {
                                className: "fab fa-github-square" })
                        ),
                        React.createElement(
                            "a",
                            { href: "https://igad.itch.io/flux", title: "Itch.io" },
                            React.createElement("i", {
                                className: "fab fa-itch-io" })
                        ),
                        React.createElement(
                            "a",
                            { href: "https://globalgamejam.org/2018/games/f-l-u-x", title: "Global Game Jame Website" },
                            React.createElement("i", {
                                className: "fas fa-pager" })
                        ),
                        React.createElement(
                            "a",
                            { href: "../Flux.html", title: "More Info..." },
                            React.createElement("i", { className: "fas fa-info-circle" })
                        )
                    )
                )
            );
        }
    }]);

    return Projects;
}(React.Component);

var domContainer = document.getElementById('project-tiles-container');
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(Projects, null));