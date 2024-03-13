import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import ProductPage from "../pages/ProductPage";

const Layout = () => {
	return (
		<div>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/registration" element={<RegistrationPage />} />
					<Route path="/product/:productId" element={<ProductPage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
