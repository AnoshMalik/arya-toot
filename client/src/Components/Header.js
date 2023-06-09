import React from "react";
import logo from "../assets/cyf_brand.png";
import { Navbar, Button, Col, Card } from "react-bootstrap";
import ProfileIcon from "./ProfileIcon";
//header component
const Header = ({ user, text, homebutton, historybutton }) => {
	return (
		<>
			<Navbar bg="light" expand="md" className="px-4">
				<Col xs={4} md={3} lg={3} xl={3} xxl={2}>
					<img src={logo} alt="logo" style={{ width: "100%" }} />
				</Col>
				<Col>
					<h2
						className="text-center fw-bold text-danger"
						style={{ fontFamily: "Lato" }}
					>
						TOOT
					</h2>
				</Col>
				<Col
					xs={4}
					md={3}
					lg={3}
					xl={3}
					xxl={2}
					className="ms-auto justify-content-end d-flex"
				>
					{user ? (
						<Card.Text
							className="navbar-github-username"
							style={{ marginTop: "12px" }}
						>
							{user.username}
						</Card.Text>
					) : null}
					{user ? <ProfileIcon user={user} /> : null}
				</Col>
			</Navbar>
			<div
				className="bg-danger py-3 text-center"
				style={{
					color: "white",
					display: "grid",
					gridTemplateColumns: "1fr 4fr 1fr",
				}}
			>
				<Col></Col>
				<Col>
					<h6 style={{ fontFamily: "Lato" }}>{text}</h6>
				</Col>
				<Col
					xs={4}
					md={3}
					lg={3}
					xl={3}
					xxl={2}
					className="justify-content d-flex"
				>
					<Button
						href="/"
						variant="danger"
						style={{ width: "100px", display: homebutton, fontFamily: "Lato" }}
					>
						Home
					</Button>
					<Button
						href="history"
						variant="danger"
						style={{
							width: "100px",
							display: historybutton,
							fontFamily: "Lato",
						}}
					>
						History
					</Button>
				</Col>
			</div>
		</>
	);
};
// Header.defaultProps={ text: "Hi there" };
export default Header;
