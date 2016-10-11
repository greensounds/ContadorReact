var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

//Cargar Foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//Cargar estílos
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={Main}>
  	</Route>
  </Router>,
  document.getElementById('app')
);
