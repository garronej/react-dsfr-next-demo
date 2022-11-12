import { Html, Head, Main, NextScript } from 'next/document'
import { getColorSchemeSsrUtils } from "@codegouvfr/react-dsfr/next";
import { augmentDocumentWithEmotionCache } from "./_app";

const {
	augmentDocumentByReadingColorSchemeFromCookie,
	getColorSchemeHtmlAttributes
} = getColorSchemeSsrUtils();

export default function Document() {
	return (
		<Html {...getColorSchemeHtmlAttributes()}>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

augmentDocumentByReadingColorSchemeFromCookie(Document);

augmentDocumentWithEmotionCache(Document);