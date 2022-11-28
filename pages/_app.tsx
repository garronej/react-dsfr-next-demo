import type { AppProps } from "next/app";
import { createNextDsfrIntegrationApi } from "@codegouvfr/react-dsfr/next";
import { createEmotionSsrAdvancedApproach } from "tss-react/next";
import { Header } from "@codegouvfr/react-dsfr/Header";
import { fr } from "@codegouvfr/react-dsfr";
import { createMuiDsfrThemeProvider, noAugmentation } from "@codegouvfr/react-dsfr/mui";

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
	],
	"doPersistDarkModePreferenceWithCookie": true
});

export { dsfrDocumentApi };

const { withAppEmotionCache, augmentDocumentWithEmotionCache } = createEmotionSsrAdvancedApproach({
	"key": "css"
});

export { augmentDocumentWithEmotionCache };

const { MuiDsfrThemeProvider } = createMuiDsfrThemeProvider({
	"augmentMuiTheme": noAugmentation
});

function App({ Component, pageProps }: AppProps) {

	return (
		<MuiDsfrThemeProvider>
			<Header
				intituléOfficiel="Intitulé officiel"
				baselinePrécisionsSurLorganisation="baseline - Précision sur l'organisation"
				nomDuSiteSlashService="Nom du site / service"
				links={[
					{
						"text": "Créer un espace",
						"iconId": "fr-icon-add-circle-line",
						"href": "#"
					},
					{
						"text": "Se connecter",
						"iconId": "fr-icon-lock-line",
						"href": "#"
					},
					{
						"text": "S'enregistrer",
						"iconId": "fr-icon-account-line",
						"href": "#"
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
