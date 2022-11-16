import { useCallback, useEffect, useState } from "react";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import Keyboard from "./Keyboard";
import words from "./wordList.json";

const getWord = () => {
	return words[Math.floor(Math.random() * words.length)];
};

function App() {
	const [wordToguess, setWordToguess] = useState(getWord);
	const [gussedLetters, setGussedLetters] = useState<string[]>([]);

	const incorrectLetters = gussedLetters.filter(
		(letter) => !wordToguess.includes(letter)
	);

	const isLooser = incorrectLetters.length >= 6;
	const isWinner = wordToguess
		.split("")
		.every((letter) => gussedLetters.includes(letter));

	const addGuessedLetter = useCallback(
		(letter: string) => {
			if (gussedLetters.includes(letter) || isWinner || isLooser) return false;

			setGussedLetters((state) => [...state, letter]);
		},
		[gussedLetters, isWinner, isLooser]
	);

	useEffect(() => {
		console.log("PRESSED");

		const handler = (e: KeyboardEvent) => {
			const key = e.key;

			if (!key.match(/^[a-z]$/)) return false;

			e.preventDefault();
			addGuessedLetter(key);
		};

		document.addEventListener("keypress", handler);

		return () => {
			document.removeEventListener("keypress", handler);
		};
	}, [gussedLetters]);

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const key = e.key;

			if (key !== "Enter") return false;

			e.preventDefault();
			setGussedLetters([]);
			setWordToguess(getWord());
		};

		document.addEventListener("keypress", handler);

		return () => {
			document.removeEventListener("keypress", handler);
		};
	}, [gussedLetters]);

	return (
		<div
			style={{
				maxWidth: "800px",
				display: "flex",
				flexDirection: "column",
				gap: "2rem",
				margin: "0 auto",
				alignItems: "center",
			}}
		>
			<h1 style={{ fontFamily: "monospace" }}>
				{isWinner && "Winner!!! Refresh to try again."}
				{isLooser && "Nice Try!!! Refresh to try again."}
			</h1>
			<HangmanDrawing numOfGuesses={incorrectLetters.length} />
			<HangmanWord
				reveal={isLooser}
				gussedLetters={gussedLetters}
				wordToguess={wordToguess}
			/>
			<div style={{ alignSelf: "stretch" }}>
				<Keyboard
					disabled={isWinner || isLooser}
					activeLetters={gussedLetters.filter((letter) =>
						wordToguess.includes(letter)
					)}
					inactiveLetters={incorrectLetters}
					addGuessedLetter={addGuessedLetter}
				/>
			</div>
		</div>
	);
}

export default App;
