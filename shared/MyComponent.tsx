
import { useState } from "react";
import { makeStyles } from "tss-react/dsfr";
import { fr } from "@codegouvfr/react-dsfr";

export type Props = {
	className?: string;
};

export function MyComponent(props: Props) {

	const { className } = props;

	const [clickCount, setClickCount] = useState(0);

	const { classes, cx } = useStyles({
		isBigger: clickCount > 3
	});


	return (
		<div
			className={cx(classes.root, className)}
			onClick={() => setClickCount(clickCount + 1)}
		>
			<span className={classes.text}>Hello {clickCount}</span>
		</div>
	);

}

const useStyles = makeStyles<{ isBigger: boolean; }>()((theme, { isBigger})=> ({
	root: {
		width: 100,
		height: isBigger? 500 : 100,
		backgroundColor: theme.decisions.background.active.redMarianne.default,
		"&:hover": {
			backgroundColor: theme.decisions.background.active.redMarianne.hover,
		},
		[fr.breakpoints.down("md")]: {
			border: "2px solid pink"
		}
	},
	text: {
		backgroundColor: "red"
	}
}));