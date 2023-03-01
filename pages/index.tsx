import * as React from 'react';
//import { Alert } from "@codegouvfr/react-dsfr/Alert";
import { MyComponent } from "../shared/MyComponent";
import { fr } from "@codegouvfr/react-dsfr";
import { useStyles } from "tss-react/dsfr";

export default function Home() {

    const { css } = useStyles();

    return (
        <>
            <h1>Hello World</h1>
            <MyComponent
                className={css({
                    ...fr.spacing("margin", { topBottom: "10v", left: "12v"}),
                    width: 200
                })}
            />
        </>
    );
}
