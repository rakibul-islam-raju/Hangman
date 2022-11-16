const HEAD = (
	<div
		style={{
			width: "50px",
			height: "50px",
			border: "10px solid black",
			borderRadius: "100%",
			position: "absolute",
			top: "50px",
			right: "-30px",
		}}
	/>
);

const BODY = (
	<div
		style={{
			position: "absolute",
			top: "120px",
			right: 0,
			width: "10px",
			height: "100px",
			backgroundColor: "black",
		}}
	/>
);

const RIGHT_ARM = (
	<div
		style={{
			position: "absolute",
			top: "150px",
			right: "-100px",
			width: "100px",
			height: "10px",
			backgroundColor: "black",
			rotate: "-30deg",
			transformOrigin: "left bottom",
		}}
	/>
);

const LEFT_ARM = (
	<div
		style={{
			position: "absolute",
			top: "150px",
			right: "10px",
			width: "100px",
			height: "10px",
			backgroundColor: "black",
			rotate: "30deg",
			transformOrigin: "right bottom",
		}}
	/>
);

const RIGHT_LEG = (
	<div
		style={{
			position: "absolute",
			top: "210px",
			right: "-100px",
			width: "100px",
			height: "10px",
			backgroundColor: "black",
			rotate: "60deg",
			transformOrigin: "left top",
		}}
	/>
);

const LEFT_LEG = (
	<div
		style={{
			position: "absolute",
			top: "210px",
			right: "10px",
			width: "100px",
			height: "10px",
			backgroundColor: "black",
			rotate: "-60deg",
			transformOrigin: "right top",
		}}
	/>
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
	numOfGuesses: number;
};

export const HangmanDrawing = ({ numOfGuesses }: HangmanDrawingProps) => {
	return (
		<div style={{ position: "relative" }}>
			{BODY_PARTS.slice(0, numOfGuesses)}
			<div
				style={{
					position: "absolute",
					top: 0,
					right: 0,
					width: "10px",
					height: "50px",
					backgroundColor: "black",
				}}
			/>
			<div
				style={{
					width: "180px",
					height: "10px",
					marginLeft: "120px",
					backgroundColor: "black",
				}}
			/>
			<div
				style={{
					height: "450px",
					width: "10px",
					backgroundColor: "black",
					marginLeft: "120px",
				}}
			/>
			<div
				style={{ width: "250px", height: "10px", backgroundColor: "black" }}
			/>
		</div>
	);
};
