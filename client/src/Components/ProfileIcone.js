import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import icon from "../assets/Icon.png";
const ProfileIcone = ({ user }) => {
	const [show, setShow] = useState(false);

	const logout = () => {
		window.open("http://localhost:3000/api/auth/logout", "_self");
	};

	return (
		<>
			<Button
				onClick={() => setShow(true)}
				style={{ background: "transparent", border: "none" }}
			>
				<img
					src={user ? user.avatar : icon}
					alt="Icon"
					style={{ width: "35px", height: "35px", borderRadius: "100%" }}
				/>
			</Button>

			<Modal
				size="sm"
				show={show}
				onHide={() => setShow(false)}
				dialogClassName="modal-90w"
				aria-labelledby="example-custom-modal-styling-title"
			>
				<Modal.Header closeButton>
					<Modal.Title id="example-custom-modal-styling-title">
						{user ? user.username : "Profile"}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{user ? (
						<Button type="submit" onClick={logout}>
							Sign Out
						</Button>
					) : null}
				</Modal.Body>
			</Modal>
		</>
	);
};

export default ProfileIcone;