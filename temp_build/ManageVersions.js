var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ManageVersions = (function (_super) {
    __extends(ManageVersions, _super);
    function ManageVersions(props) {
        _super.call(this, props);
    }
    ManageVersions.prototype.render = function () {
        return React.createElement("p", null, "Versions halt");
    };
    return ManageVersions;
})(React.Component);
exports.ManageVersions = ManageVersions;
//# sourceMappingURL=ManageVersions.js.map