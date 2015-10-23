///<reference path="../typings/tsd.d.ts"/>
var React = require('react');
var react_redux_1 = require('react-redux');
var SnapshotControls_1 = require('./components/SnapshotControls/SnapshotControls');
var SnapshotList_1 = require('./components/SnapshotList/SnapshotList');
var store_1 = require('./store');
var rootElement = document.getElementById('root');
React.render(React.createElement("div", null, React.createElement(react_redux_1.Provider, {"store": store_1.store}, function () { return React.createElement(SnapshotControls_1.SnapshotControls, null); }), React.createElement(react_redux_1.Provider, {"store": store_1.store}, function () { return React.createElement(SnapshotList_1.SnapshotList, null); })), rootElement);
//# sourceMappingURL=index.js.map