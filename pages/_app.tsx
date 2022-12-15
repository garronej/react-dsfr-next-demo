import type { AppProps } from "next/app";
import { createDsfrLinkProvider } from "@codegouvfr/react-dsfr";
import { createNextDsfrIntegrationApi } from "@codegouvfr/react-dsfr/next";
import { Header } from "@codegouvfr/react-dsfr/Header";
import { Footer } from "@codegouvfr/react-dsfr/Footer";
import { Display, headerFooterDisplayItem } from "@codegouvfr/react-dsfr/Display";
import { createEmotionSsrAdvancedApproach } from "tss-react/next";
import { fr } from "@codegouvfr/react-dsfr";
import { createMuiDsfrThemeProvider } from "@codegouvfr/react-dsfr/mui";
import Link from "next/link";
import { useRouter } from "next/router";

const { DsfrLinkProvider } = createDsfrLinkProvider({ Link });

declare module "@codegouvfr/react-dsfr" {
	interface RegisterLink {
		Link: typeof Link;
	}
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

const brandTop = <>INTITULE<br />OFFICIEL</>;

const homeLinkProps = {
	"href": '/',
	"title": 'Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)'
};


function App({ Component, pageProps }: AppProps) {

	const router = useRouter();

	return (
		<DsfrLinkProvider>

			<MuiDsfrThemeProvider>
				<Header
					brandTop={brandTop}
					homeLinkProps={homeLinkProps}
					quickAccessItems={[
						{
							iconId: 'fr-icon-add-circle-line',
							linkProps: {
								href: '#',
							},
							text: 'Créer un espace'
						},
						{
							iconId: 'fr-icon-lock-line',
							linkProps: {
								href: '#'
							},
							text: 'Se connecter'
						},
						{
							iconId: 'fr-icon-account-line',
							linkProps: {
								href: '#'
							},
							text: 'S’enregistrer'
						},
						headerFooterDisplayItem
					]}
					navItems={[
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
				<div style={{
					"margin": "auto",
					"maxWidth": 1000,
					"minHeight": "calc(100vh - 208px - 231px - 5px)",
					...fr.spacing("padding", {
						"topBottom": "10v"
					})
				}}>
					<Component {...pageProps} />
				</div>

				<Footer
					brandTop={brandTop}
					homeLinkProps={homeLinkProps}
					accessibility="non compliant"
					bottomItems={[headerFooterDisplayItem]}
					contentDescription={`
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
					labore et dolore magna aliqua. 
					`}
				/>
				<Display />
			</MuiDsfrThemeProvider>
		</DsfrLinkProvider>
	);

}

export default withDsfr(withAppEmotionCache(App));
