import { NavLink } from "react-router-dom";

function Navbar(){

	let activeStyle = {
		/* textDecoration: 'underline', */
		/* backgroundColor: 'rgb(49 46 129)', */
		borderBottom: '3px solid rgb(29 78 216)'
	};

	return (
			<nav className="nav border-console bg-slate-900">
				<NavLink 
				to="/" 
				className="site-title">
					Site Name
				</NavLink>
				<ul>
					<li>
						<NavLink 
						to="/algo" 
						className="hover:bg-indigo-700 hover:text-white"
						style={ ({ isActive }) => isActive ? activeStyle : undefined }>
							Algo
						</NavLink>
					</li>
					<li>
						<NavLink 
						to="/otro" 
						className="hover:bg-indigo-700 hover:text-white"
						style={ ({ isActive }) => isActive ? activeStyle : undefined }>
							Otro
						</NavLink>
					</li>
				</ul>
			</nav>
		);
}

export default Navbar;