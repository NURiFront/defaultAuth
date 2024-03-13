import { Link, useNavigate } from "react-router-dom";
import scss from "./Header.module.scss";
const Header = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className={scss.Header}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.logo}>
							<h1>NURi</h1>
						</div>
						<nav>
							<ul>
								<li>
									<Link to="/">Home</Link>
								</li>
							</ul>
						</nav>
						<div className={scss.buttons}>
							<button onClick={() => navigate("/login")}>login</button>
							<button onClick={() => navigate("/registration")}>
								registration
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
