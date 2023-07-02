import { type ReactNode, Fragment } from 'react';
import Autocomplete from "@mui/material/Autocomplete";
import { assert } from "tsafe/assert";
import Link from "next/link";
import { useStyles } from "tss-react/dsfr";
import { fr } from "@codegouvfr/react-dsfr";
import { useRouter } from 'next/navigation'


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
            className={cx(css({ "width": "100%" }), className)}
            onInputChange={(...[, newValue]) => onChange(newValue)}
            // NOTE: Just in case the user click outside of the Link
            onChange={(...[,id]) => { 
                if( id === null ){
                    return;
                }
                router.push(getResult(id).route);
            }}
            value={null}
            options={results.map(result => result.id)}
            filterOptions={ids => ids} // No filtering
            getOptionLabel={() => "NEVER DISPLAYED"}
            renderOption={(liProps, id) => {

                const { prefix, route, children } = getResult(id);

                return (
                    <Fragment key={id}>
                        {prefix && (
                        <div
                            style={{
                                ...fr.spacing("padding", {
                                    "topBottom": "2v",
                                    "rightLeft": "4v",
                                }),
                                "marginBottom": fr.spacing("2v"),
                                "borderBottom": `1px solid ${theme.decisions.border.actionHigh.grey.default}`
                            }}
                        >
                            {prefix}
                        </div>)}
                        <li 
                            {...liProps}
                        >
                            <Link
                                className={css({
                                    "backgroundImage": "unset",
                                    //"border": "1px solid red",
                                    "flex": 1,
                                    //disable the color when we click the link (active)
                                    "&&:active": {
                                        "backgroundColor": "unset !important",
                                    }


                                })}
                                href={route}
                                onClick={event => event.stopPropagation()}
                            >
                                {children}
                            </Link>
                        </li>
                    </Fragment>
                );
            }}
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