import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Cult of the Lamb Modsite</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<a href="https://cult-of-the-lamb.thunderstore.io/" target="_blank" rel="noreferrer">Mods</a>
			<Link activeClassName={style.active} href="/profile/john">Tutorials</Link>
			<Link activeClassName={style.active} href="/profile/bruh">Tools</Link>
			<a href="https://discord.gg/MUjww9ndx2" target="_blank" rel="noreferrer">Discord</a>
			
		</nav>
	</header>
);

export default Header;
