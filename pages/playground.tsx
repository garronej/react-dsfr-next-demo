
import { Alert } from "@codegouvfr/react-dsfr/Alert";

export default function Playground() {

	return (
		<Alert
			severity="success"
			isClosable
			description="Everything went well"
			title="Message successfully sent"
		/>
	)
}