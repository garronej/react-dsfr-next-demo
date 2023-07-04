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
                                <span className={cx(fr.cx("fr-text--lg"), css({
                                    "color": theme.decisions.text.title.grey.default
                                }))}
                                    
                                >{prefix}</span>
                        </div>)}
                        <li 
                            {...liProps}
                        >
                            {children}
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