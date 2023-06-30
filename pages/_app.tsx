import type { AppProps } from "next/app";
import { createNextDsfrIntegrationApi } from "@codegouvfr/react-dsfr/next-pagesdir";
import { Header } from "@codegouvfr/react-dsfr/Header";
import { Footer } from "@codegouvfr/react-dsfr/Footer";
import { headerFooterDisplayItem } from "@codegouvfr/react-dsfr/Display";
import { createEmotionSsrAdvancedApproach } from "tss-react/next/pagesDir";
import { fr } from "@codegouvfr/react-dsfr";
import { MuiDsfrThemeProvider } from "@codegouvfr/react-dsfr/mui";
import Link from "next/link";
import { useRouter } from "next/router";

declare module "@codegouvfr/react-dsfr/next-pagesdir" {
	interface RegisterLink {
		Link: typeof Link;
	}
}

const { withDsfr, dsfrDocumentApi } = createNextDsfrIntegrationApi({
	"defaultColorScheme": "system",
	Link,
	useLang: () => {
		const { locale = "fr" } = useRouter();
		return locale;
	},
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

function App({ Component, pageProps }: AppProps) {

	const router = useRouter();

	return (
		<div
			style={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column"
			}}
		>
			<Header
				brandTop={<>INTITULE<br />OFFICIEL</>}
				homeLinkProps={{
					"href": '/',
					"title": 'Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)'
				}}
				quickAccessItems={[
					{
						iconId: 'fr-icon-add-circle-line',
						linkProps: {
							href: '#',
						},
						text: 'Créer un espace'
					},
					{
						iconId: 'ri-account-circle-line',
						linkProps: {
							href: '#'
						},
						text: 'S’enregistrer'
					},
					headerFooterDisplayItem
				]}
				navigation={[
					{
						text: "home",
						linkProps: {
							href: "/"
						},
						isActive: router.asPath === "/"
					},
					{
						text: "mui",
						linkProps: {
							href: "/mui"
						},
						isActive: router.asPath === "/mui"
					}
				]}
				serviceTagline="baseline - précisions sur l'organisation"
				serviceTitle="Nom du site / service"
			/>
			<div
				className={fr.cx("fr-container")}
				style={{
					flex: 1,
					...fr.spacing("padding", {
						"topBottom": "10v"
					})
				}}
			>
				<MuiDsfrThemeProvider>
					<Component {...pageProps} />
				</MuiDsfrThemeProvider>
			</div>

			<Footer
				accessibility="non compliant"
				bottomItems={[headerFooterDisplayItem]}
				contentDescription={`
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
					labore et dolore magna aliqua. 
					`}
			/>
		</div>
	);

}

export default withDsfr(withAppEmotionCache(App));
