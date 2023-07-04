
import React from 'react';
import { SearchBar } from "@codegouvfr/react-dsfr/SearchBar";
import { SearchBarInput } from "../shared/SearchBarInput";

export default function Page() {

    return (
        <>
            <h1>Experimenting with search bar</h1>
            <SearchBar
                renderInput={
                    ({ className, id, placeholder, type }) =>
                        <SearchBarInput
                            className={className}
                            id={id}
                            placeholder={placeholder}
                            type={type}
                        />
                }
            />
        </>
    );
}
