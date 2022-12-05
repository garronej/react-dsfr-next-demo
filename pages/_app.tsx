import type { AppProps } from "next/app";
import { createNextDsfrIntegrationApi } from "@codegouvfr/react-dsfr/next";
import { createEmotionSsrAdvancedApproach } from "tss-react/next";
import { Header } from "@codegouvfr/react-dsfr/Header";
import { fr } from "@codegouvfr/react-dsfr";
import { createMuiDsfrThemeProvider } from "@codegouvfr/react-dsfr/mui";

import type { LinkProps as NextLinkProps } from "next/link";

declare module "@codegouvfr/react-dsfr" {
    export interface LinkProps extends NextLinkProps { }
}

const { withDsfr, dsfrDocumentApi } = createNextDsfrIntegrationApi({
	"defaultColorScheme": "light",
	"preloadFonts": [
		//"Marianne-Light",
		//"Marianne-Light_Italic",
		"Marianne-Regular",
		//"Marianne-Regular_Italic",
		"Marianne-Medium",
		//"Marianne-Medium_Italic",
		"Marianne-Bold",
		//"Marianne-Bold_Italic",
		//"Spectral-Regular",
		//"Spectral-ExtraBold"
	]
});

export { dsfrDocumentApi };

const { withAppEmotionCache, augmentDocumentWithEmotionCache } = createEmotionSsrAdvancedApproach({
	"key": "css"
});

export { augmentDocumentWithEmotionCache };

const { MuiDsfrThemeProvider } = createMuiDsfrThemeProvider();

function App({ Component, pageProps }: AppProps) {

	return (
		<MuiDsfrThemeProvider>
			<Header
				intituléOfficiel="Intitulé officiel"
				baselinePrécisionsSurLorganisation="baseline - Précision sur l'organisation"
				nomDuSiteSlashService="Nom du site / service"
				links={[
					{
						"text": "home",
						"iconId": "fr-icon-home-4-fill",
						"linkProps": {
							"href": "/"
						}
					},
					{
						"text": "Playground",
						"iconId": "fr-icon-play-circle-fill",
						"linkProps": {
							"href": "/playground"
						}
					}
				]}
			/>
			<div style={{
				"margin": "auto",
				"maxWidth": 1000,
				...fr.spacing("padding", {
					"topBottom": "10v"
				})
			}}>
				<Component {...pageProps} />
			</div>
		</MuiDsfrThemeProvider>

	);

}

export default withDsfr(withAppEmotionCache(App));
