
import { Alert } from "@codegouvfr/react-dsfr/Alert";
import { fr } from "@codegouvfr/react-dsfr";

export default function Playground() {

	return (
		<Alert
			className={fr.cx("fr-m-10v")}
			severity="success"
			isClosable
			description="Everything went well"
			title="Message successfully sent"
		/>
	)
}