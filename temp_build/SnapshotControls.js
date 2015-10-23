var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var React = require('react');
var react_redux_1 = require('react-redux');
var actions_1 = require('./../../actions/actions');
var GenerateSnapshots_1 = require('./GenerateSnapshots/GenerateSnapshots');
var ManageVersions_1 = require('./ManageVersions/ManageVersions');
var SnapshotControls = (function (_super) {
    __extends(SnapshotControls, _super);
    function SnapshotControls(props) {
        _super.call(this, props);
    }
    SnapshotControls.prototype.render = function () {
        var _a = this.props, dispatch = _a.dispatch, started = _a.started, versions = _a.versions;
        return (React.createElement("div", null, React.createElement(GenerateSnapshots_1.GenerateSnapshots, {"started": started, "startSnapshotGeneration": function () { return dispatch(actions_1.startSnapshotGeneration()); }, "endSnapshotGeneration": function () { return dispatch(actions_1.endSnapshotGeneration()); }}), React.createElement(ManageVersions_1.ManageVersions, {"versions": versions})));
    };
    SnapshotControls.propTypes = {
        started: React.PropTypes.bool,
        dispatch: React.PropTypes.func,
        versions: React.PropTypes.arrayOf(React.PropTypes.shape({
            name: React.PropTypes.string,
            active: React.PropTypes.bool
        }))
    };
    SnapshotControls = __decorate([
        react_redux_1.connect(function (state) { return state; }), 
        __metadata('design:paramtypes', [Object])
    ], SnapshotControls);
    return SnapshotControls;
})(React.Component);
exports.SnapshotControls = SnapshotControls;
//# sourceMappingURL=SnapshotControls.js.map