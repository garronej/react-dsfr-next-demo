import type { ReactNode } from 'react';

type NextraSearchProps = {
    className?: string;
    overlayClassName?: string;
    value: string;
    onChange: (newValue: string) => void;
    onActive?: (active: boolean) => void;
    loading?: boolean;
    error?: boolean;
    results: {
        children: ReactNode;
        id: string;
        prefix?: ReactNode;
        route: string;
    }[];
    nativeInputProps: {
        className: string;
        id: string;
        placeholder?: string;
        type: "search";
    };
};

export function NextraSearch(props: NextraSearchProps) {

    const { nativeInputProps } = props;

    return (
        <input 
            className={nativeInputProps.className}
            id={nativeInputProps.id}
            placeholder={nativeInputProps.placeholder}
            type={nativeInputProps.type}
        />
    );

    /*
    return (
        <SearchInput
            debounceDelay={0}
            getOptions={async ()=> {



            }}
            value={field.value}
            onValueChange={field.onChange}
            getOptionLabel={wikidataEntry => wikidataEntry.wikidataLabel}
            renderOption={(liProps, wikidataEntity) => (
                <li {...liProps} key={wikidataEntity.wikidataId}>
                    <div>
                        <span>{wikidataEntity.wikidataLabel}</span>
                        <br />
                        <span className={fr.cx("fr-text--xs")}>
                            {wikidataEntity.wikidataDescription}
                        </span>
                    </div>
                </li>
            )}
            noOptionText={"no result"}
            loadingText={"loading"}
            dsfrInputProps={{
                "label": "Label",
                "hintText": "Hint text",
                "nativeInputProps": {
                    className,
                    type,
                    id
                }
            }}

        />
    );
    */
}