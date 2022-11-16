type HangmanWordProps = {
	gussedLetters: string[];
	wordToguess: string;
	reveal?: boolean;
};

export const HangmanWord = ({
	gussedLetters,
	wordToguess,
	reveal = false,
}: HangmanWordProps) => {
	return (
		<div
			style={{
				display: "flex",
				gap: ".25em",
				fontWeight: "bold",
				fontSize: "5rem",
				fontFamily: "monospace",
				textTransform: "uppercase",
			}}
		>
			{wordToguess.split("").map((letter, i) => (
				<span key={i} style={{ borderBottom: "10px solid black" }}>
					<span
						style={{
							visibility:
								gussedLetters.includes(letter) || reveal ? "visible" : "hidden",
							color:
								!gussedLetters.includes(letter) && reveal ? "red" : "black",
						}}
					>
						{letter}
					</span>
				</span>
			))}
		</div>
	);
};
