import { OutlinedInput, Typography, useFormControl } from "@mui/material";
import { ColorStyles } from "@theme/Designs";
import _ from "lodash";
import { useMemo, useState } from "react";
import { validate } from "../../configs/Vaildate";


export const CarInput = ( { label, minRows, important, multiline, rules, note, Adornment, ...props } ) => {
    const { focused, filled, required } = useFormControl() || {};
    const [ focus, setFocus ] = useState( false );

    let message = "";
    if ( required ) message = validate.empty.msg;

    if ( rules === undefined ) rules = false;

    if ( rules && required ) {
        if ( rules.empty !== undefined ) {
            if ( rules.empty !== true ) message = _.get( rules, "empty", message );
            _.unset( rules, "empty" );
        }
    }

    const helperText = useMemo( () => {
        if ( !required ) {
            return "";
        }

        if ( focused ) {
            if ( !focus ) {
                setFocus( true );
            }
        } else {
            if ( !rules && filled ) {
                return "";
            }
        }

        if ( focus ) {
            if ( !filled ) return message;

            if ( !_.isEmpty( rules ) ) {
                const msg = _.filter(
                    _.map( rules, function ( v, k ) {
                        if ( k === "empty" ) return;

                        const valid = _.get( validate, `${ k }` );
                        let isValid = false;

                        switch ( k ) {
                            case "minLength":
                                isValid = valid.rule(
                                    props.value,
                                    v.value === undefined ? valid.length : v.value
                                );
                                break;
                            case "compare":
                                isValid = valid.rule(
                                    props.value,
                                    v.value === undefined ? "" : v.value
                                );
                                break;
                            default:
                                isValid = valid.rule( props.value );
                                break;
                        }

                        if ( isValid ) {
                            const key = _.isObject( v ) ? `${ k }.msg` : `${ k }`;
                            const getMsg = _.get( rules, `${ key }`, valid.msg );

                            return getMsg === true ? valid.msg : getMsg;
                        }

                        return;
                    } )
                );

                if ( msg.length > 0 ) return msg.toString();
            }
        }

        return "";
    }, [ focused, focus, filled, message, rules, required, props.value ] );

    return (
        <>
            <Typography variant="heading" mb="6px" paragraph>
                { label } { required ? <span style={ { color: ColorStyles.Foundation.Danger[ 600 ] } }>{ important !== undefined ? important : "" }</span> : "" }
            </Typography>
            <OutlinedInput { ...props } error={ Boolean( helperText ) } multiline />
            { helperText ? (
                <Typography
                    variant="description"
                    color={ ColorStyles.Foundation.Danger[ 600 ] }
                    mt={ 0.5 }
                    mb={ 0 }
                    paragraph
                >
                    { helperText }
                </Typography>
            ) : note !== undefined ? (
                <Typography variant="description" mt={ 0.5 } mb={ 0 } paragraph>
                    { note }
                </Typography>
            ) : (
                ""
            ) }
        </>
    );
};
