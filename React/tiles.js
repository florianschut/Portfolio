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
            var retval = new Array();
            if (this.props.githubLink) {
                retval.push(React.createElement(
                    "a",
                    { href: this.props.infoLink, title: "Project GitHub Page" },
                    React.createElement("i", { className: "fab fa-github-square" })
                ));
            }
            if (this.props.twitterLink) {
                retval.push(React.createElement(
                    "a",
                    { href: this.props.infoLink, title: "Project Twitter Page" },
                    React.createElement("i", { className: "fab fa-twitter-square" })
                ));
            }
            if (this.props.discordLink) {
                retval.push(React.createElement(
                    "a",
                    { href: this.props.infoLink, title: "Project Discord Server" },
                    React.createElement("i", { className: "fab fa-discord" })
                ));
            }
            if (this.props.itchLink) {
                retval.push(React.createElement(
                    "a",
                    { href: this.props.infoLink, title: "Itch.io" },
                    React.createElement("i", { className: "fab fa-itch-io" })
                ));
            }
            if (this.props.ggjLink) {
                retval.push(React.createElement(
                    "a",
                    { href: this.props.infoLink, title: "Global Game Jame Website" },
                    React.createElement("i", { className: "fas fa-pager" })
                ));
            }
            retval.push(React.createElement(
                "a",
                { href: this.props.pageHref, title: "More Info..." },
                React.createElement("i", { className: "fas fa-info-circle" })
            ));
            return React.createElement(
                "button-container",
                null,
                retval
            );
        }
    }, {
        key: "buildList",
        value: function buildList(aList) {
            var retval = new Array();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = aList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var listItem = _step.value;

                    if (Array.isArray(listItem)) {
                        var sublist = new Array();
                        retval.push(React.createElement(
                            "li",
                            null,
                            listItem[0]
                        ), React.createElement("hr", null));
                        listItem.shift();
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = listItem[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var subListItem = _step2.value;

                                sublist.push(React.createElement(
                                    "li",
                                    null,
                                    subListItem
                                ), React.createElement("hr", null));
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }

                        ;
                        retval.push(React.createElement(
                            "ul",
                            null,
                            sublist
                        ));
                    } else {
                        retval.push(React.createElement(
                            "li",
                            null,
                            listItem
                        ), React.createElement("hr", null));
                    }
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

            ;

            return React.createElement(
                "ul",
                null,
                retval
            );
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
                this.buildList(this.props.list),
                React.createElement("hr", null),
                this.buildLinks()
            );
        }
    }]);

    return ProjectTile;
}(React.Component);

var Projects = function (_React$Component2) {
    _inherits(Projects, _React$Component2);

    function Projects() {
        _classCallCheck(this, Projects);

        return _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).apply(this, arguments));
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
                    list: ["Full time professional work placement", "Durration: 9 Months", ["Projects:", "Real time virtual productions", "Virtual Humans in Breda Economy"]]
                }),
                React.createElement(ProjectTile, {
                    projectName: "Weekend Raytracer",
                    pageHref: "WeekendRaytracer.html",
                    bannerSrc: "../resources/images/RaytracerHeader.png",
                    desc: "An educational project exploring CPU pathtracing ",
                    list: ["Solo Research Project", "Part-Time", ["Features:", "Accumulating Path Tracer", "Multithreaded Rendering", "Model Loading"]],
                    githubLink: "https://github.com/florianschut/RaytracingInAWeekend"
                }),
                React.createElement(ProjectTile, {
                    projectName: "Wisp Renderer",
                    pageHref: "WispRenderer.html",
                    bannerSrc: "../resources/images/WispDragonHeader.png",
                    desc: "A real time raytracing plugin for Autodesk Maya ",
                    list: ["Role: Graphics Programmer", "Project Length: 32 Weeks", "Team members: 9", ["Responsibilities:", "Raytraced Ambient Occlusion", "Graphics Settings"]],
                    githubLink: "https://github.com/TeamWisp",
                    twitterLink: "https://twitter.com/WispRenderer",
                    discordLink: "https://discord.gg/qYBHq85"
                }),
                React.createElement(ProjectTile, {
                    projectName: "MA \u0110\xD3I",
                    pageHref: "Madoi.html",
                    bannerSrc: "../resources/images/MahdoiHeader.png",
                    desc: "A cross platform 2D platformer game made using a custom engine for PSVita & Windows 10",
                    list: ["Role: PSVita Graphics Programmer", "Project Length: 16 Weeks", "Team members: 17", ["Responsibilities:", "PlayStation Vita rendering"]],
                    itchLink: "https://igad.itch.io/ma-doi"
                }),
                React.createElement(ProjectTile, {
                    projectName: "Flux",
                    pageHref: "Flux.html",
                    bannerSrc: "../resources/images/FluxHeader.png",
                    desc: "A Physics based party game made for GGJ 2018",
                    list: ["Role: Gameplay Programmer", "Project Length: 48 Hours", "Team members: 18", ["Responsibilities:", "Character movement", "Generalist tasks"]],
                    githubLink: "https://github.com/TeamHowdini/GlobalGameJam2018_V2",
                    itchLink: "https://igad.itch.io/ma-doi",
                    ggjLink: "https://globalgamejam.org/2018/games/f-l-u-x"
                })
            );
        }
    }]);

    return Projects;
}(React.Component);

var domContainer = document.getElementById('project-tiles-container');
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(Projects, null));