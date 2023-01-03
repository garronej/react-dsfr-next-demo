import type { AppProps } from "next/app";
import Script from "next/script";
import dsfrJsUrl from "./dsfr.module.min.js";

export default function App({ Component, pageProps }: AppProps) {

	return (
		<>
			<Script type="module" src={dsfrJsUrl} />
			<Component {...pageProps} />
		</>
	);

}
