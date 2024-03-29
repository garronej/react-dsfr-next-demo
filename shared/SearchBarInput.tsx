import React, { useState } from 'react';
import { NextraSearch } from "./NextraSearch";

export type SearchBarInputProps = {
    className: string;
    id: string;
    placeholder: string;
    type: "search";
};

export function SearchBarInput(props: SearchBarInputProps) {

    const {
        className,
        id,
        placeholder,
        type
    } = props;

    const [ value, setValue ] = useState<string>("");

    return (
        <NextraSearch
            value={value}
            onChange={value => setValue(value)}
            loading={false}
            error={false}
            results={[
                {
                    "id": "1",
                    "route": "/",
                    "prefix": <>First <b>section</b></>,
                    "children": (
                        <div>
                            <h4>Result 1</h4>
                            <span>Result 1 description</span>
                        </div>
                    ),
                },
                {
                    "id": "2",
                    "route": "/b",
                    "children": (
                        <div>
                            <h4>Result 2</h4>
                            <span>Result 2 description</span>
                        </div>
                    ),
                },
                {
                    "id": "3",
                    "route": "/2",
                    "prefix": "Second section",
                    "children": (
                        <div>
                            <h4>Result 1</h4>
                            <span>Result 1 description</span>
                        </div>
                    ),
                },
                {
                    "id": "4",
                    "route": "/2/b",
                    "children": (
                        <div>
                            <h4>Result 2</h4>
                            <span>Result 2 description</span>
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