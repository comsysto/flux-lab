var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var GenerateSnapshots = (function (_super) {
    __extends(GenerateSnapshots, _super);
    function GenerateSnapshots(props) {
        var _this = this;
        _super.call(this, props);
        this.getButton = function () {
            return !_this.props.started ?
                React.createElement("button", {"onClick": function (e) { return _this.props.startSnapshotGeneration(); }}, "Start snapshot generation")
                :
                    React.createElement("button", {"onClick": function (e) { return _this.props.endSnapshotGeneration(); }}, "Stop snapshot generation");
        };
    }
    GenerateSnapshots.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("h2", null, "Generate Snapshots"), this.getButton()));
    };
    return GenerateSnapshots;
})(React.Component);
exports.GenerateSnapshots = GenerateSnapshots;
//# sourceMappingURL=GenerateSnapshots.js.map