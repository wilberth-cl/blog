
export default function Navbar(){

	const urlsn = {
		algo: 'http://localhost:3000/algo',
		otro: 'http://localhost:3000/otro',
	}

	const urls = {
		algo: 'https://wilberth-cl.github.io/blog/algo',
		otro: 'https://wilberth-cl.github.io/blog/otro',
	}


	return (

			<nav className="nav">
				<a href="/" className="site-title">Site Name</a>
				<ul>
					<li>
						<a href={urls.algo}>Algo</a>
					</li>
					<li>
						<a href={urls.otro}>Otro</a>
					</li>
				</ul>
			</nav>

		);
}