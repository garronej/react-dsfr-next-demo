import DefaultApp from "next/app";
import { createNextDsfrIntegrationApi } from "@codegouvfr/react-dsfr/next";
import { createEmotionSsrAdvancedApproach } from "tss-react/next";
import "@codegouvfr/react-dsfr/dsfr/dsfr.css";
import "@codegouvfr/react-dsfr/dsfr/utility/icons/icons.css";

const { withAppDsfr, dsfrDocumentApi } = createNextDsfrIntegrationApi({
		"defaultColorScheme": "system",
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

const { 
	augmentDocumentWithEmotionCache, 
	withAppEmotionCache 
} = createEmotionSsrAdvancedApproach({ "key": "css" });

export { augmentDocumentWithEmotionCache };

export default withAppDsfr(withAppEmotionCache(DefaultApp));
