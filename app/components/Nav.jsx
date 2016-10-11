var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
	render: function() {
		return(
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">ContadorReact</li>
						<li>
						<IndexLink to="/" activeClassName = "active" activeStyle = {{fontWeight: 'bold'}}>Cronómetro</IndexLink>
						</li>
						<li>
						<Link to="/countdown" activeClassName = "active" activeStyle = {{fontWeight: 'bold'}}>Cuenta Regresiva</Link>
						</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<ul className = "menu">
						<li className="menu-text" target="_blank">Creado por: <a href="#">Jesús Díaz</a></li>
					</ul>
				</div>
			</div>
		)
	}
});

module.exports = Nav;