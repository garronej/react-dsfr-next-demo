import { type ReactNode, Fragment } from 'react';
import Autocomplete from "@mui/material/Autocomplete";
import { assert } from "tsafe/assert";
import { useStyles } from "tss-react/dsfr";
import { fr } from "@codegouvfr/react-dsfr";
import { useRouter } from 'next/navigation'
import Popper from "@mui/material/Popper";

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
        placeholder: string;
        type: "search";
    };
};

export function NextraSearch(props: NextraSearchProps) {

    const {
        className,
        overlayClassName,
        value,
        onChange,
        onActive,
        loading,
        error,
        results,
        nativeInputProps
    } = props;

    const { css, cx, theme } = useStyles();

    const router = useRouter()

    const getResult = (id: string) => {
        const result = results.find(result => result.id === id);
        assert(result !== undefined);
        return result;
    }

    return (
        <Autocomplete
            PopperComponent={(props)=>
                <Popper
                    {...props}
                    style={{
                        ...props.style,
                        "width": undefined
                    }}
                    className={cx(props.className, css({
                        "zIndex": 100000,
                        "width": "40em",
                        [fr.breakpoints.down("lg")]: {
                            "width": "calc(100vw - 3rem)"
                        }

                    }))}
                    placement="bottom-start"
                />
            }
            className={className}
            fullWidth
            onInputChange={(...[, newValue]) => onChange(newValue)}
            blurOnSelect
            onChange={(...[,id]) => { 
                if( id === null ){
                    return;
                }
                router.push(getResult(id).route);
            }}
            value={null}
            options={results.map(result => result.id)}
            filterOptions={ids => ids} // No filtering
            getOptionLabel={() => ""}
            // @ts-expect-error: We return a ReactNode instead of a string
            // but it's okay as long as we always return the same object reference
            // for a given group.
            groupBy={id=> {

                const index= results.findIndex(result => result.id === id);

                const getPrefix = (index: number): ReactNode => {

                    const result = results[index];

                    if (result.prefix !== undefined) {
                        return result.prefix;
                    }

                    if (index === 0) {
                        return "";
                    }

                    return getPrefix(index - 1);

                };

                return getPrefix(index);
                
            }}
            renderOption={(liProps, id) =>
                <li
                    {...liProps}
                    id={id}
                >
                    {getResult(id).children}
                </li>
            }
            noOptionsText={"no result"}
            loadingText={"loading"}
            loading={loading}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            isOptionEqualToValue={() => false}
            renderInput={params =>
                <div ref={params.InputProps.ref}>
                    <input
                        {...params.inputProps}
                        className={cx(params.inputProps.className, nativeInputProps.className)}
                        id={nativeInputProps.id}
                        placeholder={nativeInputProps.placeholder}
                        type={nativeInputProps.type}
                    />
                </div>
            }
            onOpen={() => onActive?.(true)}
            onClose={() => onActive?.(false)}
        />
    );

}