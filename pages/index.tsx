import * as React from 'react';
import { MyComponent } from "../shared/MyComponent";
import { fr } from "@codegouvfr/react-dsfr";
import CircularProgress from '@mui/material/CircularProgress';


export default function Home() {

    return (
        <>
            <h1>Hello World</h1>
            <MyComponent className={fr.cx("fr-ml-12w")}/>
            <CircularProgress />
        </>
    );
}
