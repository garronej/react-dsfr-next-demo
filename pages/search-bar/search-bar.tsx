
import React, { useState } from 'react';
import { SearchBar } from "@codegouvfr/react-dsfr/SearchBar";
import { NextraSearch } from "./NextraSearch";

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

type SearchBarInputProps = {
    className: string;
    id: string;
    placeholder?: string;
    type: "search";
};

function SearchBarInput(props: SearchBarInputProps) {

    const {
        className,
        id,
        placeholder,
        type
    } = props;

    const [ value, setValue ] = useState<string>("");

    return (
        <NextraSearch
            overlayClassName={className}
            value={value}
            onChange={value => setValue(value)}
            onActive={() => { }}
            loading={false}
            error={false}
            results={[
                {
                    "id": "1",
                    "route": "/",
                    "prefix": <div>FIRST SECTION</div>,
                    "children": (
                        <div>
                            <h4>Result 1</h4>
                            <p>Result 1 description</p>
                        </div>
                    ),
                },
                {
                    "id": "2",
                    "route": "/b",
                    "children": (
                        <div>
                            <h4>Result 2</h4>
                            <p>Result 2 description</p>
                        </div>
                    ),
                },
                {
                    "id": "1",
                    "route": "/2",
                    "prefix": <div>SECOND SECTION</div>,
                    "children": (
                        <div>
                            <h4>Result 1</h4>
                            <p>Result 1 description</p>
                        </div>
                    ),
                },
                {
                    "id": "2",
                    "route": "/2/b",
                    "children": (
                        <div>
                            <h4>Result 2</h4>
                            <p>Result 2 description</p>
                        </div>
                    ),
                }
            ]}
            nativeInputProps={{
                className,
                id,
                placeholder,
                type
            }}
        />
    );

}
