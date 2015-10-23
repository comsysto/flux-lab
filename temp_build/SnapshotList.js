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
var SnapshotList = (function (_super) {
    __extends(SnapshotList, _super);
    function SnapshotList(props) {
        _super.call(this, props);
    }
    SnapshotList.prototype.render = function () {
        return (React.createElement("p", null, "Here is the list"));
    };
    SnapshotList = __decorate([
        react_redux_1.connect(), 
        __metadata('design:paramtypes', [Object])
    ], SnapshotList);
    return SnapshotList;
})(React.Component);
exports.SnapshotList = SnapshotList;
//# sourceMappingURL=SnapshotList.js.map