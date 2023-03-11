import { ButtonStyles, ColorStyles } from './Designs';
import { MediaBreakpoints, Theme } from './MediaBreakpoints';
import { ShadowBakery } from './Shadows';

const components = {
    MuiCssBaseline: {
        styleOverrides: {
            '*': {
                boxSizing: 'border-box',
            },
            html: {
                height: '100%',
                width: '100%',
            },
            body: {
                height: '100%',
                margin: 0,
                padding: 0,
            },
            a: {
                textDecoration: 'none',
                listStyle: 'none',
                color: ColorStyles.Foundation.Black[900],
            },
            '#root': {
                height: '100%',
            },
            '.logo': {
                img: {
                    [MediaBreakpoints(Theme.down.sm)]: {
                        width: 70,
                        height: 70,
                    },
                }
            },

            /******************
             * element in block
             ******************/
            '.count-item-cart': {
                border: `1px solid ${ColorStyles.Foundation.baseColor.black}`,
                height: 40,
            },
            '.count-item-cart.count-item-cart-detail': {
                height: 56,
            },
            '.product-filter': {
                padding: '64px 0',
                [MediaBreakpoints(Theme.down.sm)]: {
                    padding: '32px 0',
                },
            },
            '.load-more': {
                textAlign: 'center',
                paddingTop: '64px',
                [MediaBreakpoints(Theme.down.sm)]: {
                    paddingTop: '32px',
                },
            },
            '.search-header': {
                width: 600,
                maxWidth: '100%',
                padding: "0px 14px",
                '.MuiFormControl-root': {
                    '.MuiInputBase-root': {
                        paddingRight: 0,
                        height: 48,
                        borderRadius: 'unset',
                        '.MuiInputAdornment-root': {
                            width: 72,
                            height: 48,
                            padding: '25px 19px',
                            backgroundColor: ColorStyles.Foundation.YellowBrown[500],
                            cursor: 'pointer'
                        },
                        '.MuiOutlinedInput-notchedOutline ': {
                            borderColor: ColorStyles.Foundation.YellowBrown[500],
                        },
                    },
                }
            },
            /**
             * customs Container page
             */
            '.muiContainer-page': {
                paddingTop: '64px',
                paddingBottom: '64px',
                [MediaBreakpoints(Theme.down.md)]: {
                    paddingTop: '32px',
                    paddingBottom: '32px',
                },
                '.block-item': {
                    height: '100%',
                }
            },
            /**==================
             * @BLOCK_PAGE_CONTENT
             * @CONTENT
             * @COMPONENT
             */
            /******************
             * page my shipment
             ******************/
            '.my-shipment': {
                '.breadcrumbs-my-shipment': {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 32,
                    gap: 10,
                },
                '.contact-information': {
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                    gap: 6,
                    padding: '24px 0px',
                    borderTop: `1px solid ${ColorStyles.Foundation.Neutral[700]}`,
                    borderBottom: `1px solid ${ColorStyles.Foundation.Neutral[700]}`
                },
                '.delivery-method': {
                    display: 'flex',
                    flexDirection: "column",
                    paddingTop: '32px',
                    '.delivery-method-services': {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 48,
                        paddingTop: 16,
                    }
                },
                '.Shipping-address': {
                    display: 'flex',
                    flexDirection: 'column',
                    '.Shipping-address-form': {
                        paddingBottom: 32,
                        '.MuiStepper-root': {
                            width: '80%',
                            paddingTop: 16,
                            paddingBottom: 32,
                            [MediaBreakpoints(Theme.down.md)]: {
                                flexDirection: 'column'
                            },
                            '.MuiStep-root': {
                                '.MuiStepConnector-root': {
                                    display: 'none'
                                },
                                '.MuiStepLabel-root': {
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: 10,
                                    justifyContent: 'around',
                                    '.MuiStepLabel-labelContainer': {
                                        width: 'unset',
                                        '.MuiStepLabel-label': {
                                            margin: 0,
                                        },
                                        '.MuiStepLabel-label.Mui-disabled': {
                                            color: ColorStyles.Foundation.Success[500]
                                        },
                                        '.MuiStepLabel-label.Mui-active': {
                                            color: ColorStyles.Foundation.Success[500],
                                            fontWeight: 'unset',
                                        },
                                        '.MuiStepLabel-label.Mui-completed': {
                                            color: ColorStyles.Foundation.Success[500],
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                '.payment-sumary': {
                    '.cart-list': {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 24,
                        '.mini-cart-list-item': {
                            border: `1px solid ${ColorStyles.Foundation.Neutral[700]}`,
                            borderRadius: 4,
                            padding: 16,
                            '.cart-detail': {
                                [MediaBreakpoints(Theme.down.md)]: {
                                    display: 'flex',
                                    gap: 20,
                                },
                            },
                            '.image-cart': {
                                width: 138,
                                height: '100%',
                                border: `1px solid ${ColorStyles.Foundation.Neutral[500]}`,
                                position: 'relative',
                                '.quantity-cart': {
                                    position: 'absolute',
                                    top: '-17%',
                                    right: '-16%',
                                    borderRadius: '50%',
                                    width: 24,
                                    height: 24,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    backgroundColor: ColorStyles.Foundation.Neutral[700]
                                },
                                img: {
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                },
                            },
                        },
                        '.cart-detail': {
                            display: 'flex',
                            [MediaBreakpoints(Theme.down.sm)]: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 10,
                            },
                            '.cart-detail-text': {
                                display: 'flex',
                                flexDirection: 'column',
                            },
                            '.cart-detail-total': {
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                [MediaBreakpoints(Theme.down.sm)]: {
                                    display: 'flex',
                                    flexDirection: 'row',
                                },
                            }
                        },
                    },
                    '.checkout': {
                        padding: '24px',
                        width: '100%',
                        height: '100%',
                        marginTop: 32,
                        backgroundColor: ColorStyles.Foundation.Neutral[500],
                        '.MuiTypography-title2': {
                            paddingBottom: 24,
                            borderBottom: `1px solid ${ColorStyles.Foundation.Neutral[700]}`,
                            display: 'block',
                            width: '100%'
                        },
                        '.total-price': {
                            paddingBottom: '24px',

                            '.total-price-item': {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '24px',
                            }
                        }
                    },
                }
            },
            /*********************
             * page forgot-password
             **********************/
            '.forgot-reset-password': {
                margin: '64px 0px',
                backgroundColor: ColorStyles.Foundation.Neutral[200],
                '.MuiTypography-heading': {
                    paddingLeft: 16,
                    paddingBottom: 12,
                },
                '.forgot-reset-password-content': {
                    padding: '44px 32px',
                    maxWidth: 788,
                    margin: 'auto',
                    [MediaBreakpoints(Theme.down.md)]: {
                        padding: '24px 0px',
                    },
                    form: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 16,
                        '.MuiFormControl-root': {
                            backgroundColor: ColorStyles.Foundation.brown[50],
                            padding: '10px 16px',
                            '.MuiInputBase-root': {
                                border: `1px solid ${ColorStyles.Foundation.Neutral[500]}`,
                                height: 42,
                                '.MuiOutlinedInput-notchedOutline': {
                                    borderWidth: '0px',
                                },
                            }
                        },
                        '.MuiButton-btn-shopcart-1': {
                            margin: ' 24px 0px',
                            height: 40,
                            width: 217,
                        }
                    }
                }
            },
            /***********
             * mini-cart
             ***********/
            '.content-mini-cart': {
                padding: "28px 32px 60px 32px",
                width: 564,
                [MediaBreakpoints(Theme.down.sm)]: {
                    width: '100%',
                    padding: "10px 16px",
                    minHeight: '150vh',
                },
                '.Notification-header': {
                    backgroundColor: ColorStyles.Foundation.YellowBrown[500],
                    width: '100%',
                    height: 80,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingLeft: 10,
                    paddingRight: 20,
                    [MediaBreakpoints(Theme.down.sm)]: {
                        height: 56,
                    },
                    span: {
                        fontSize: 20,
                    },
                    svg: {
                        cursor: 'pointer',
                        [MediaBreakpoints(Theme.down.sm)]: {
                            width: 32,
                            height: 32,
                        },
                    }
                },

            },
            '.mini-cart-list': {
                padding: '32px 0px',
                borderBottom: `1px solid ${ColorStyles.Foundation.Neutral[700]}`,
                '.mini-cart-list-item': {
                    '.image-cart': {
                        width: 138,
                        height: '100%',
                        border: `1px solid ${ColorStyles.Foundation.Neutral[500]}`,
                        img: {
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        },
                    },
                    '.cart-detail': {
                        display: 'flex',
                        gap: 130,
                        [MediaBreakpoints(Theme.down.sm)]: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 10,
                        },
                        '.cart-detail-text': {
                            display: 'flex',
                            flexDirection: 'column',
                        },
                        '.cart-detail-total': {
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            [MediaBreakpoints(Theme.down.sm)]: {
                                display: 'flex',
                                flexDirection: 'row',
                            },
                        }
                    },
                    button: {
                        width: '100%',
                        marginTop: 12,
                        marginBottom: 24,
                    },
                }
            },
            '.checkout': {
                '.total-price': {
                    padding: '24px 0px',
                    '.total-price-item': {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 24,
                    },
                },
                button: {
                    width: '100%',
                    height: 56,
                },
                a: {
                    display: 'contents',
                }
            },
            /***************
             * page-work-shop
             ***************/
            '.page-work-shop': {
                padding: '64px 0px',
                '.page-work-shop-news': {
                    paddingTop: 45,
                    paddingBottom: 64,
                    '.page-work-shop-item': {
                        width: 276,
                        minHeight: 256,
                        width: '100%',
                        '.page-work-shop-item-image': {
                            height: '100%',
                            width: '100%',
                            marginBottom: 16,
                            img: {
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }
                        }
                    }
                },
                '.panigation': {
                    display: 'flex',
                    justifyContent: 'center',
                    '.MuiPagination-root': {
                        '.MuiPagination-ul': {
                            gap: 32,
                            [MediaBreakpoints(Theme.down.md)]: {
                                gap: 10,
                            },
                            '.MuiButtonBase-root': {
                                '&.Mui-selected': {
                                    backgroundColor: ColorStyles.Foundation.brown[500],
                                },
                                '&.Mui-disabled': {
                                    display: 'none',
                                },
                                minWidth: 48,
                                minHeight: 48,
                                borderRadius: 0,
                                backgroundColor: ColorStyles.Foundation.Neutral[200],
                                borderWidth: 0,
                            }
                        }
                    }
                },
            },
            '.content-work-shop': {
                '.banner-image': {
                    height: 341,
                    width: '100%',
                    img: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }
                },
                '.content-work-shop-text': {
                    padding: '64px 0'
                },
                '.content-work-shop-social': {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    marginBottom: 64,
                    [MediaBreakpoints(Theme.down.sm)]: {
                        flexDirection: 'column',
                        alignItems: 'start',
                        gap: 32,
                    },
                    button: {
                        width: 210,
                        height: 48,
                    }
                }
            },
            /**************
             * page-about-us
             ***************/
            '.about-us': {
                padding: '64px 0px',
                '.about-us-vision': {
                    paddingTop: 45,
                    paddingBottom: 64,
                    maxWidth: 581,
                    margin: 'auto',
                    '.about-us-vision-item': {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        gap: 20,
                    },
                },
                '.about-us-image': {
                    '.slick-about-us': {
                        '.slick-list': {
                            '.slick-track': {
                                display: 'flex',
                                gap: 24,
                                [MediaBreakpoints(Theme.down.sm)]: {
                                    display: 'flex',
                                    gap: 0,
                                },
                                '.slick-slide': {
                                    img: {
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }
                                }
                            }
                        }
                    }
                },
            },

            /**************
           * Contact
           **************/
            '.contact': {
                padding: '64px 0',
                '.contact-banner-map': {
                    marginBottom: 48,
                    height: 310,
                    img: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'

                    }
                },
                '.form-contact': {
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 132,
                    alignItems: 'center',
                    '.form-contact-title': {
                        width: 350,
                        [MediaBreakpoints(Theme.down.md)]: {
                            width: '100%',
                        },
                    },
                    [MediaBreakpoints(Theme.down.md)]: {
                        flexDirection: 'column',
                        gap: 32,
                    },
                    width: '100%',
                    '.cake-contact': {
                        marginTop: 40,
                    },
                    form: {
                        width: '100%',
                        '.form-item': {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 32,
                            marginBottom: 32,
                            [MediaBreakpoints(Theme.down.sm)]: {
                                flexDirection: 'column',
                                gap: 32,
                            },
                        },
                    },
                    button: {
                        width: 206,
                        height: 56,
                        marginTop: 32,
                    }
                }
            },
            /******************
            * FAQ
            ******************/
            '.faq': {
                padding: '64px 0',
                [MediaBreakpoints(Theme.down.sm)]: {
                    paddingTop: '32px',
                    paddingBottom: '135px',
                },
                '.faq-content': {
                    maxWidth: 735,
                    margin: 'auto',
                    '.faq-title': {
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 16,
                    },
                    '.faq-content-questions': {
                        padding: '32px 0px',
                        [MediaBreakpoints(Theme.down.sm)]: {
                            padding: 0,
                        },
                        '.MuiPaper-root': {
                            borderBottom: `1px solid ${ColorStyles.Foundation.Black[600]}`,
                            margin: 0,
                            paddingTop: 24,
                            paddingBottom: 32,
                            boxShadow: 'none',
                            ':last-of-type': {
                                borderRadius: '0px'
                            },
                            '.MuiButtonBase-root': {
                                margin: 0,
                                padding: 0,
                                '.MuiAccordionSummary-content': {
                                    margin: 0,
                                }
                            },
                            '.MuiCollapse-root': {
                                '.MuiAccordionDetails-root': {
                                    padding: 0,
                                }
                            }
                        },

                    }
                },
            },
            '.faq-content-botom': {
                textAlign: 'center',
                backgroundColor: ColorStyles.Foundation.Neutral[200],
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '32px 0px',
                [MediaBreakpoints(Theme.down.sm)]: {
                    margin: '32px 16px',
                },
                button: {
                    width: 121,
                    height: 40,
                    marginTop: 32,
                    padding: '9px 12px',
                    [MediaBreakpoints(Theme.down.sm)]: {
                        marginTop: 16,
                    },
                }
            },
            /***********************
             * my shipment
             ***********************/
            '.myshipment': {
                '.myshipment-container': {
                    padding: '64px 0',
                    width: 646,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: 'auto',
                    [MediaBreakpoints(Theme.down.sm)]: {
                        width: '100%',
                    },
                    '.myshipment-confirmation': {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        padding: '24px 0',
                        backgroundColor: ColorStyles.Foundation.Neutral[200],
                        width: '100%',
                        '.MuiTypography-body8': {
                            margin: '20px 0px 16px 0px'
                        }
                    },
                    '.myshipment-confirmed': {
                        padding: '47px 50px',
                        display: 'flex',
                        textAlign: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 24,
                        '.MuiButton-btn-shop-2 ': {
                            width: 197,
                            height: 48,
                        },
                        '.MuiTypography-heading': {
                            padding: '0px 20px'
                        }
                    },
                    '.myshipment-customer-information': {
                        border: `1px solid ${ColorStyles.Foundation.Neutral[700]}`,
                        borderRadius: 2,
                        width: '100%',
                        marginBottom: 47,
                        '.customer-information-header': {
                            borderBottom: `1px solid ${ColorStyles.Foundation.Neutral[700]}`,
                            height: 48,
                            width: '100%',
                            backgroundColor: ColorStyles.Foundation.Neutral[200],
                            padding: '10px 16px',
                        },
                        '.myshipment-customer-information-visa': {
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'start',
                            padding: '16px 18px',
                            gap: 36,
                            [MediaBreakpoints(Theme.down.sm)]: {
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 20,
                            },
                            '.myshipment-customer-information-visa-item': {
                                display: 'flex',
                                flexDirection: 'row',
                                gap: 36,
                                minWidth: '100%',
                                gap: 136,
                                [MediaBreakpoints(Theme.down.sm)]: {
                                    margin: 0,
                                    gap: 14,
                                    flexDirection: 'column',
                                },
                                '.visa': {
                                    border: `1px solid ${ColorStyles.Foundation.Neutral[500]}`,
                                    color: '#142688',
                                    borderRadius: 3,
                                    width: 36,
                                    height: 22,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: 10,
                                    fontWeight: 900,
                                }
                            },
                        },
                    },
                    '.MuiButton-btn_black': {
                        borderRadius: 'unset',
                        padding: '13px 0',
                        width: 255,
                        height: 48,
                    }
                }
            },

            /***************
             * privacy-policy
             ***************/
            '.privacy-policy': {
                paddingTop: 96,
                paddingBottom: 130,
                [MediaBreakpoints(Theme.down.sm)]: {
                    padding: '64px 0px',
                },
                '.privacy-policy-content': {
                    maxWidth: 800,
                    margin: 'auto',
                    '.privacy-policy-content-heading': {
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '.MuiTypography-root.MuiTypography-description10': {
                            marginTop: 24,
                            display: 'block',
                        }
                    }
                }
            },
            /**********
             * page 404
             **********/
            '.page-404': {
                padding: '64px 0px',
                '.image-404': {
                    margin: 'auto',
                    maxWidth: 450,
                    img: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }
                },
                '.btn-404': {
                    [MediaBreakpoints(Theme.down.sm)]: {
                        flexDirection: 'column',
                        gap: 16,
                    },
                    marginTop: 48,
                    '.btn-back': {
                        width: 210,
                        height: 48,
                    },
                    '.btn-home': {
                        width: 210,
                        height: 48,
                        [MediaBreakpoints(Theme.down.sm)]: {
                            margin: 0,
                        },
                    },
                }
            },

            /****************
             * popup-checkout-guest && login && sigin in && check code email
             ****************/
            '.form-login': {
                button: {
                    width: '100%',
                    height: 48,
                },
                '.btn-checkout-sign-up': {
                    padding: '32px 0px 64px',
                },
                '.text-forgot-password': {
                    margin: '16px 0',
                    display: 'flex',
                    justifyContent: 'flex-end',
                },
                '.checkout-guest': {
                    height: '100%',
                    button: {
                        width: 158,
                        height: 48,
                        marginTop: 32,
                    }
                }
            },
            '.form-sigin-in': {
                button: {
                    width: '100%',
                    height: 48,
                },
                '.check-conditions': {
                    paddingTop: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                    '.check-conditions-item': {
                        '.MuiButtonBase-root.MuiCheckbox-root': {
                            padding: 0,
                            color: ColorStyles.Foundation.YellowBrown[500],
                        }
                    }
                },
                '.btn-create-acount': {
                    padding: '32px 0px'
                },
            },
            '.check-code-verify-input': {
                '.MuiTypography-root.MuiTypography-description8': {
                    [MediaBreakpoints(Theme.up.sm)]: {
                        display: 'block',
                        width: '60%',
                    },
                },
                '.check-code-input': {
                    padding: '32px 0',
                    '.react-code-input.check-code-verify': {
                        display: 'flex !important',
                        gap: 16,
                        marginBottom: 32,
                        input: {
                            width: 60,
                            height: 60,
                            fontFamily: "'Domine'",
                            fontWeight: 400,
                            fontSize: 25,
                            lineHeight: '155%',
                            letterSpacing: '1.8%',
                            margin: 'auto',
                            textAlign: 'center',
                            border: `1px solid ${ColorStyles.Foundation.YellowBrown[500]}`,
                            color: ColorStyles.Foundation.YellowBrown[500],
                            borderRadius: '4px',
                            boxShadow: ShadowBakery.Small,
                            [MediaBreakpoints(Theme.down.sm)]: {
                                width: '100%',
                                height: '100%',
                            },
                        }
                    }
                },
                '.button-next-prev': {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    '.MuiButton-btn-shopcart-1': {
                        width: 173,
                        height: 48,
                        [MediaBreakpoints(Theme.down.sm)]: {
                            width: '100%',
                            margin: '0px 10px'
                        },
                    },
                    '.MuiButton-default': {
                        width: 173,
                        height: 48,
                        [MediaBreakpoints(Theme.down.sm)]: {
                            width: '100%',
                            margin: '0px 10px',
                        },
                    }
                }
            },
            /*************************
            * popup add cart succsess 
            *************************/
            '.popup-add-cart': {
                padding: '64px 32px 0px 32px',
                '.add-cart-succsess': {
                    width: '100%',
                    height: 80,
                    borderBottom: `1px solid ${ColorStyles.Foundation.Neutral[500]}`,
                    borderTop: `1px solid ${ColorStyles.Foundation.Neutral[500]}`,
                    display: 'flex',
                    [MediaBreakpoints(Theme.down.sm)]: {
                        height: 60,
                    },
                },
                '.add-cart-item': {
                    marginTop: '32px',
                    border: `1px solid ${ColorStyles.Foundation.Neutral[500]}`,
                    maxWidth: 260,
                    [MediaBreakpoints(Theme.down.md)]: {
                        width: '100%',
                        maxWidth: '100%',
                    },
                    '.add-cart-image': {
                        width: '100%',
                        minHeight: 128,
                        position: 'relative',
                        '.count': {
                            position: 'absolute',
                            width: '50px',
                            height: '50px',
                            background: ColorStyles.Foundation.Danger[500],
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center'
                        },
                        img: {
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }
                    }
                },
                '.MuiButton-btn-shopcart-1': {
                    width: 260,
                    height: 48,
                    float: 'right',
                    marginBottom: 64,
                    [MediaBreakpoints(Theme.down.sm)]: {
                        margin: 'auto',
                        float: 'unset',
                        marginBottom: 64,
                        display: 'flex'
                    },
                },
                '.slick-add-cart-popup': {
                    '.slick-list': {
                        '.slick-track': {
                            display: 'flex',
                            gap: 32,
                            [MediaBreakpoints(Theme.down.sm)]: {
                                gap: 0,
                            },
                        }
                    },
                    '.slick-dots': {
                        bottom: '-70px',
                    }
                },
            },
            /***********************
             * popup - time - message
             ***********************/
            '.popup-time': {
                minHeight: 547,
                padding: '64px 0px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                '.popup-title-date-select': {
                    marginBottom: 32,
                },
                '.popup-checked-time': {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 48,
                    margin: '64px 0',
                    [MediaBreakpoints(Theme.down.md)]: {
                        flexDirection: 'column',
                        margin: '32px 0',
                    },
                    '.popup-checked-time-item': {
                        height: '56px',
                        padding: '12px 24px',
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 24,
                        border: `1px solid  ${ColorStyles.Foundation.Neutral[500]}`,
                        '.MuiButtonBase-root.MuiCheckbox-root': {
                            padding: 0,
                        },
                    },
                },
                '.popup-select-date-time': {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 48,
                    marginBottom: 64,
                    [MediaBreakpoints(Theme.down.md)]: {
                        flexDirection: 'column',
                        marginBottom: 32,
                    },
                    '.MuiFormControl-root': {
                        width: 228,
                        height: 56,
                        '.MuiInputBase-root': {
                            height: 56,
                            border: `1px solid  ${ColorStyles.Foundation.Neutral[500]}`,
                            '.MuiSelect-select': {
                                paddingRight: 114
                            },
                            '.MuiOutlinedInput-notchedOutline': {
                                borderWidth: 0,
                            }
                        }
                    },
                },
            },
            '.popup-message': {
                minHeight: 636,
                padding: '64px 0px',
                [MediaBreakpoints(Theme.down.sm)]: {
                    padding: '101px 0px',
                },
                '.popup-message-item': {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    height: '100%',
                    '.popup-content-message': {
                        marginBottom: 32,
                        marginTop: 64,
                        [MediaBreakpoints(Theme.down.md)]: {
                            marginTop: 32,
                        },
                        [MediaBreakpoints(Theme.down.sm)]: {
                            padding: ' 0px 15px'
                        },
                        '.popup-content-message-checkbox': {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 64,
                            marginBottom: 32,
                            [MediaBreakpoints(Theme.down.md)]: {
                                flexDirection: 'column',
                            },
                            [MediaBreakpoints(Theme.down.sm)]: {
                                gap: 32
                            },
                            '.popup-content-message-checkbox-item': {
                                border: `1px solid ${ColorStyles.Foundation.Neutral[500]}`,
                                display: 'flex',
                                width: '100%',
                                alignItems: 'start',
                                flexDirection: 'row',
                                gap: 24,
                                padding: '12px 24px',
                                '.checkbox-item-text': {
                                    textAlign: 'left',
                                    span: {
                                        whiteSpace: 'nowrap',
                                        [MediaBreakpoints(Theme.down.sm)]: {
                                            whiteSpace: 'unset',
                                        },
                                    }
                                },
                            }
                        },
                        '.MuiFormControl-root': {
                            width: '100%',
                            border: `1px solid ${ColorStyles.Foundation.Neutral[500]}`,
                            '.MuiInputBase-root': {
                                fontFamily: "'Poppins'",
                                fontWeight: 300,
                                fontSize: 20,
                                lineHeight: "155%",
                                letterSpacing: "1.8%",
                                color: ColorStyles.Foundation.Neutral[700],
                                padding: '20px 14px',
                            },
                            '.MuiOutlinedInput-notchedOutline': {
                                borderWidth: 0,
                            }
                        },
                    },
                    button: {
                        width: 215,
                        height: 56,
                        borderRadius: 0,
                    }
                },
            },
            /**************
             *cart shoping
             **************/
            '.cart-shopping': {
                paddingBottom: 32,
                '.cart-item': {
                    [MediaBreakpoints(Theme.down.md)]: {
                        position: 'relative'
                    },
                    [MediaBreakpoints(Theme.down.sm)]: {
                        border: 'unset',
                    },
                    img: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    },
                    padding: '32px 14px',
                    border: `1px solid ${ColorStyles.Foundation.Neutral[500]}`,
                    '.cart-item-image': {
                        [MediaBreakpoints(Theme.down.sm)]: {
                            border: `1px solid ${ColorStyles.Foundation.Neutral[500]}`,
                        },
                        marginBottom: 24,
                    },
                    '.cart-shopping-info': {
                        paddingBottom: 12,
                        '.cart-shopping-info-item': {
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            [MediaBreakpoints(Theme.down.md)]: {
                                flexDirection: 'column',
                                alignItems: 'start'
                            },
                            '.price-cart': {
                                [MediaBreakpoints(Theme.down.md)]: {
                                    position: 'absolute',
                                    bottom: '4%',
                                    left: '4%',
                                },
                            }
                        }
                    },
                    '.cart-service': {
                        '.border-cart-service-bottom': {
                            borderBottom: `1px solid ${ColorStyles.Foundation.Neutral[500]}`
                        },
                        '.border-cart-service-top': {
                            borderTop: `1px solid ${ColorStyles.Foundation.Neutral[500]}`
                        }
                    },
                    '.setting-count-shopping': {
                        [MediaBreakpoints(Theme.down.md)]: {
                            flexDirection: 'column',
                            gap: 24,
                            alignItems: 'start',
                        },
                        '.setting-count-shopping-extra': {
                            [MediaBreakpoints(Theme.down.md)]: {
                                flexDirection: 'column',
                                gap: 24,
                                alignItems: 'start',
                                width: '100%',
                            },
                            '.count-item-cart': {
                                [MediaBreakpoints(Theme.down.md)]: {
                                    margin: 0,
                                    width: '100%',
                                    justifyContent: 'center'
                                },
                                button: {
                                    width: 'unset',
                                }
                            }
                        },
                        '.delete-item': {
                            cursor: 'pointer',
                            [MediaBreakpoints(Theme.down.md)]: {
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-end',
                            },
                        }
                    }
                },
                '.checkout': {
                    padding: '24px',
                    width: '100%',
                    height: '100%',
                    backgroundColor: ColorStyles.Foundation.Neutral[500],
                    '.total-price': {
                        padding: '24px 0px',
                        '.total-price-item': {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                        }
                    },
                    button: {
                        width: '100%',
                    },
                },
                '.enter-code': {
                    padding: '24px',
                    width: '100%',
                    minHeight: 139,
                    backgroundColor: ColorStyles.Foundation.Neutral[500],
                    '.MuiFormControl-root': {
                        '&.enter-code-form': {
                            width: '100%',
                            margin: 0,
                            paddingTop: 24,
                            border: 'unset',
                            '.MuiInputBase-root': {
                                fontFamily: 'Poppins',
                                fontstyle: 'normal',
                                fontSize: '14px',
                                lineHeight: '155%',
                                paddingBottom: '14px',
                                '&:after': {
                                    borderBottom: 'none'
                                },
                                '.MuiInputAdornment-root': {
                                    cursor: 'pointer'
                                }
                            },
                        }
                    }
                },
            },
            '.continue-shoping': {
                width: 379,
                height: 48,
                display: 'flex',
                justifyContent: 'center',
                border: `1px solid ${ColorStyles.Foundation.YellowBrown[500]}`,
                [MediaBreakpoints(Theme.down.md)]: {
                    margin: 'auto',
                },
                [MediaBreakpoints(Theme.down.sm)]: {
                    width: '100%',
                },
            },
            /****************
             *product detail && slick product detail
             *****************/
            '.slick-detail': {
                '.slick-list': {
                    height: '100%',
                    '.slick-track': {
                        height: '100%',
                        '.slick-slide': {
                            height: '100%',
                            '.product-detail-slick': {
                                width: '100%',
                                height: "400px !important",
                                position: 'relative',
                                border: `1px solid ${ColorStyles.Foundation.Neutral[500]}`,
                                img: {
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: '100%',
                                }
                            },
                        },
                    }
                },
                '.slick-dots': {
                    bottom: '-71px',
                }
            },
            '.product-detail ': {
                '.slick-slide.slick-active.slick-current': {
                    '.product-detail-image': {
                        border: `3px solid ${ColorStyles.Foundation.YellowBrown[500]}`,
                    },
                },
                '.slider-slick': {
                    position: 'relative',
                    '.arows-items-white': {
                        padding: 0,
                        '.arrow-left': {
                            position: 'absolute',
                            top: '40%',
                            left: '-3%',
                        },
                        '.arrow-right': {
                            position: 'absolute',
                            top: '40%',
                            right: '-6%',
                        }
                    },
                    '.slick-image-item': {
                        paddingTop: '32px',
                        '.slick-list': {
                            '.slick-track': {
                                display: 'flex',
                                gap: 32,
                            }
                        }
                    },
                },
                '.product-detail-image': {
                    width: '100%',
                    border: `1px solid ${ColorStyles.Foundation.Neutral[500]}`,
                    img: {
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                        margin: 'auto',
                    }
                },
                '.social-item-link': {
                    paddingTop: 64,
                    [MediaBreakpoints(Theme.down.sm)]: {
                        position: 'absolute',
                        top: '41%',
                        left: '8%',
                        paddingTop: 0,
                    },
                    [MediaBreakpoints(Theme.down.downMobileSm)]: {
                        position: 'relative',
                        top: '-470px',
                        left: '8%',
                        paddingTop: 0,
                    },
                },
                '.list-item-service-detail': {
                    display: 'flex',
                    gap: 34,
                    alignItems: 'center',
                    paddingTop: 32,
                    [MediaBreakpoints(Theme.down.md)]: {
                        flexDirection: 'column',
                        alignItems: 'start',
                    },
                    '.MuiBox-root': {
                        backgroundColor: ColorStyles.Foundation.Neutral[200],
                        borderRadius: '50%',
                        width: 48,
                        height: 48,
                        display: 'flex',
                        justifyContent: ' center',
                        alignItems: 'center',
                    }
                },
                '.rating-points': {
                    width: 71,
                    height: 34,
                    borderRadius: 5,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: ColorStyles.Foundation.brown[500],
                    gap: 10,
                },
                '.price': {
                    borderBottomStyle: 'dashed',
                    borderTopStyle: 'dashed',
                    borderWidth: '2px',
                    borderColor: ColorStyles.Foundation.brown[500],
                    span: {
                        padding: '8px 0px',
                    }
                },
                '.product-select': {
                    '.MuiAutocomplete-root': {
                        '.MuiFormControl-root': {
                            '.MuiInputBase-root': {
                                borderRadius: 0,
                            }
                        }
                    },
                    [MediaBreakpoints(Theme.down.md)]: {
                        flexDirection: 'column',
                        alignItems: 'start',
                        gap: 32,
                    },
                    '.product-select-item': {
                        [MediaBreakpoints(Theme.down.md)]: {
                            margin: 0,
                        },
                    }
                },
                '.modal': {
                    '.modal-calendar': {
                        width: '100%',
                        justifyContent: 'start',
                        padding: '14px 0px',
                        cursor: 'pointer',
                    },
                    '.modal-letter': {
                        width: '100%',
                        borderTop: `1px solid ${ColorStyles.Foundation.Neutral[500]}`,
                        justifyContent: 'start',
                        padding: '14px 0px',
                        cursor: 'pointer',
                    },
                },
                '.add-to-cart': {
                    [MediaBreakpoints(Theme.down.md)]: {
                        flexDirection: 'column',
                        alignItems: 'start',
                        gap: 32,
                    },
                    button: {
                        [MediaBreakpoints(Theme.down.md)]: {
                            margin: 0,
                            width: "90%",
                        },
                    }
                },
                '.review-info': {
                    borderTop: `1px solid ${ColorStyles.Foundation.Black[600]}`,
                    '.MuiPaper-root': {
                        borderBottom: `1px solid ${ColorStyles.Foundation.Black[600]}`,
                        margin: 0,
                        padding: 0,
                        boxShadow: 'none',
                        ':last-of-type': {
                            borderRadius: '0px'
                        },
                        '.MuiButtonBase-root': {
                            minHeight: 50,
                            padding: 0,
                            '.MuiAccordionSummary-content': {
                                margin: 0,
                            }
                        },
                        '.MuiCollapse-root': {
                            '.MuiAccordionDetails-root': {
                                padding: '14px 0px',
                                '&.reviews-AccordionDetails': {
                                    padding: '0px',
                                    borderTop: `1px solid ${ColorStyles.Foundation.Neutral[700]}`,
                                    borderLeft: `1px solid ${ColorStyles.Foundation.Neutral[700]}`,
                                    borderRight: `1px solid ${ColorStyles.Foundation.Neutral[700]}`,
                                    '.reviews-acount': {
                                        padding: '16px 14px',
                                        borderBottom: `1px solid ${ColorStyles.Foundation.Neutral[700]}`,
                                        backgroundColor: ColorStyles.Foundation.Neutral[200]
                                    },
                                    '.write-reviews': {
                                        padding: '23px 14px',
                                        '.write-reviews-submitt-form': {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'start',
                                            gap: 16,
                                            margin: '32px 0px',
                                            span: {
                                                display: 'flex',
                                                marginBottom: 8,
                                            },
                                            '.MuiFormControl-root': {
                                                border: `1px solid ${ColorStyles.Foundation.Neutral[700]}`,
                                                '.MuiInputBase-root': {
                                                    backgroundColor: ColorStyles.Foundation.Neutral[100],
                                                    fieldset: {
                                                        border: 'unset',
                                                    }
                                                }
                                            }
                                        },
                                        button: {
                                            marginTop: 32,
                                            width: 167,
                                            height: 40,
                                        }
                                    },
                                }
                            }
                        }
                    }
                },
            },
            '.Popup-item-image-detail': {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: "60%",
                height: '80%',
                backgroundColor: ColorStyles.Foundation.baseColor.white,
                boxShadow: ShadowBakery.Medium,
                p: 4,
                '.popup-content': {
                    width: '100%',
                    height: '100%',
                    padding: "20px",
                    position: 'relative',
                    img: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    },

                    '.popup-content-btn-prev': {
                        position: 'absolute',
                        top: '50%',
                        left: '5%',
                        transform: 'translateY(-50%)',
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        minWidth: 0,
                    },
                    '.popup-content-btn-next': {
                        position: 'absolute',
                        top: '50%',
                        right: '5%',
                        transform: 'translateY(-50%)',
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        minWidth: 0,
                    }
                }
            },
            /****************
           *components product-list-cake
           *****************/
            '.product-list-cake': {
                '.MuiGrid-root.MuiGrid-container': {
                    '.MuiGrid-root.MuiGrid-item': {
                        '.product-item': {
                            [MediaBreakpoints(Theme.down.md)]: {
                                flexDirection: 'column '
                            },
                            [MediaBreakpoints(Theme.down.sm)]: {
                                flexDirection: 'unset'
                            },
                        }
                    },
                }
            },
            /****************
            *components block-title
            *****************/
            '.block-title': {
                margin: "auto",
                textAlign: "center",
                paddingBottom: '64px',
                '.MuiTypography-root': {
                    position: 'relative',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '120px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderBottom: `2px solid ${ColorStyles.Foundation.baseColor.black}`,
                        bottom: '-15px',
                    },
                }
            },
            /*************
             * banner hero
             *************/
            '.banner': {
                width: '100%',
                height: "564px",
                position: 'relative',
                img: {
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                },
                '.banner-text': {
                    position: 'relative',
                    margin: 'auto',
                    top: '-50%',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    [MediaBreakpoints(Theme.down.lg)]: {
                        left: '5%',
                    },
                    button: {
                        marginTop: 40,
                    }
                },
                '.banner-textProduct': {
                    backgroundColor: ColorStyles.Foundation.brown[100],
                    position: 'absolute',
                    textAlign: 'center',
                    width: '90%',
                    height: 'fit-content',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    margin: 'auto',
                    bottom: '-46px',
                    padding: '64px 183px',
                    [MediaBreakpoints(Theme.down.md)]: {
                        padding: '32px 10px',
                    },
                },
            },
            /****************
            * slick special && component special
            *****************/
            '.slick-products-cake': {
                height: '100%',
                '.slick-slider': {
                    height: '100%',
                    '.slick-list': {
                        height: '100%',
                        '.slick-track': {
                            height: '100%',
                            '.slick-products-cake-item': {
                                display: 'flex !important',
                                alignItems: 'start',
                                flexDirection: 'column',
                                gap: 16,
                                width: "100%",
                                height: '600px',
                                [MediaBreakpoints(Theme.down.sm)]: {
                                    paddingBottom: '15px',
                                },
                                '.link-cake': {
                                    width: '100%',
                                    height: '100%',
                                }
                            },
                            button: {
                                padding: '6px 0px',
                                minWidth: '0px'
                            }
                        },
                        '.slick-slide .slick-center': {
                            height: '100%',
                        },
                    },
                    '.slick-dots': {
                        bottom: '-71px',
                    },
                },
            },
            '.product-cake': {
                '.product-cake-item': {
                    display: 'flex',
                    alignItems: 'start',
                    flexDirection: 'column',
                    gap: 12,
                    width: '100%',
                    button: {
                        padding: '6px 0px'
                    }
                },
                '.link-cake': {
                    width: '100%'
                },
            },
            /****************
            *SlickProductItem && components product-item && title-customer
            *****************/
            '.title-customer': {
                margin: "auto",
                textAlign: "center",
                paddingBottom: '45px',
                '.MuiTypography-root': {
                    position: 'relative',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '120px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderBottom: `2px solid ${ColorStyles.Foundation.baseColor.black}`,
                        bottom: '-15px',
                    },
                }
            },
            '.slick-product': {
                height: '100%',
                '.slick-product-item': {
                    height: '100%',
                    '.slick-list': {
                        height: '100%',
                        '.slick-track': {
                            height: '100%',
                        },
                        [MediaBreakpoints(Theme.down.md)]: {
                            '.slick-slide': {
                                padding: ' 0 20px',
                            },
                        },
                        [MediaBreakpoints(Theme.up.md)]: {
                            '.slick-slide.slick-active.slick-current': {
                                paddingLeft: '32px',
                            },
                        },
                    }
                },
            },
            '.product-item': {
                width: '100%',
                padding: '32px 14px',
                border: `1px solid ${ColorStyles.Foundation.Neutral[500]}`,
                zIndex: 100,
                '.product-item-image': {
                    '.MuiBox-root': {
                        img: {
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                        },
                        position: "relative",
                        padding: "10px 5px",
                        '.product-item-discount': {
                            width: 49,
                            height: 49,
                            padding: 26,
                            borderRadius: "50%",
                            backgroundColor: ColorStyles.Foundation.Danger[500],
                            textAlign: 'center',
                            position: 'absolute',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            left: 6,
                            top: 15,
                        },
                    }
                },
                '.product-item-infos': {
                    paddingLeft: '15px',
                    '.product-item-info': {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: 10,
                        paddingBottom: "16px",
                    },
                    '.product-item-services': {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: 20,
                        padding: "26px 0px",
                        borderTop: `1px solid ${ColorStyles.Foundation.Neutral[500]}`
                    }
                },
            },
            /**
             * slick-product-cake && components slider-item
             */
            '.slick-product-cake': {
                margin: 'auto',
                height: '100%',
                '.slick-product-cake-item': {
                    height: '100%',
                    '.slick-list': {
                        height: '100%',
                        '.slick-track': {
                            height: '100%',
                            display: 'flex',
                            gap: 32,
                            [MediaBreakpoints(Theme.down.sm)]: {
                                gap: 0,
                            },
                        },
                    }
                },
            },
            '.slider-item': {
                backgroundColor: ColorStyles.Foundation.baseColor.white,
                textAlign: 'center',
                width: '100%',
                minHeight: '536px',
                display: 'flex',
                flexDirection: 'column',
                gap: 32,
                [MediaBreakpoints(Theme.down.sm)]: {
                    height: '100%',
                    paddingBottom: 20,
                },
                img: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                },
                span: {
                    padding: '0px 44px'
                }
            },

            /******************
             *components Reviews && slick-reviews
             *****************/
            '.reviews': {
                backgroundColor: ColorStyles.Foundation.YellowBrown[100],
                padding: '41px',
                maxWidth: 790,
                minHeight: 387,
                borderRadius: 10,
                '.reviews-content': {
                    position: 'relative',
                    width: '100%',
                    minHeight: '305px',
                    textAlign: 'center',
                    padding: '23px 0px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 61,
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        height: '80px',
                        width: '80px',
                        borderBottom: `1px solid ${ColorStyles.Foundation.YellowBrown[500]}`,
                        borderRight: `1px solid ${ColorStyles.Foundation.YellowBrown[500]}`,
                        right: '0px',
                        bottom: '0px',
                    },
                    ' &::before': {
                        content: '""',
                        position: 'absolute',
                        height: '80px',
                        width: '80px',
                        borderTop: `1px solid ${ColorStyles.Foundation.YellowBrown[500]}`,
                        borderLeft: `1px solid ${ColorStyles.Foundation.YellowBrown[500]}`,
                        left: '0px',
                        top: '0px',
                    },
                    '.reviews-content-boder': {
                        borderTop: `2px solid ${ColorStyles.Foundation.YellowBrown[500]}`,
                        padding: '8px'
                    },
                },
            },
            '.slick-reviews': {
                height: '100%',
                '.slick-reviews-item': {
                    height: '100%',
                    '.slick-list': {
                        height: '100%',
                        '.slick-slide.slick-active.slick-current': {
                            padding: '0 32px',
                        },
                        [MediaBreakpoints(Theme.up.lg)]: {
                            '.slick-slide.slick-active.slick-current': {
                                '.reviews': {
                                    '.reviews-content': {
                                        padding: '40px 0px'
                                    }
                                },
                                width: 'fit-content !important'
                            },
                        },
                        '.slick-slide: not(.slick-current)': {
                            opacity: 0.4,
                        },
                        '.slick-track': {
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                        }
                    },
                    '.slick-dots.MuiBox-root': {
                        bottom: '-102px',
                    },
                },
            },
            /****************
            *blog && components blog && slick Block
            *****************/
            '.Blog': {
                display: 'flex',
                alignItems: 'center',
                gap: 32,
            },
            ".blog-item": {
                maxWidth: 583,
                ".blog-item-image": {
                    width: "100%",
                    height: '100%',
                    objectFit: "cover",
                },
                ".blog-item-content": {
                    textAlign: "center",
                    maxWidth: "422px",
                    minHeight: 122,
                    position: "relative",
                    backgroundColor: ColorStyles.Foundation.baseColor.white,
                    left: "50%",
                    transform: "translateX( -50%)",
                    boxShadow: ShadowBakery.Small,
                    top: "-64px",
                    padding: "16px 44px",
                    zIndex: 999,
                }
            },
            '.slick-blog': {
                height: '100%',
                '.slick-blog-item': {
                    height: '100%',
                    '.slick-list': {
                        height: '100%',
                        '.slick-track': {
                            height: '100%',
                        }
                    }
                },
                '.slick-dots': {
                    bottom: '-71px',
                },
            },
            /****************
               *find us on instagam && slick on instagam
               *****************/
            '.on-instagram': {
                '.on-instagram-image': {
                    display: 'flex',
                    gap: 10,
                    [MediaBreakpoints(Theme.down.sm)]: {
                        flexDirection: 'column'
                    },
                    [MediaBreakpoints(Theme.down.md)]: {
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                    },

                    '.on-instagram-item': {
                        width: '100%',
                        margin: 'auto',
                        height: '400px',
                        img: {
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        },
                    }
                },
            },
            '.slick-on-instagram': {
                height: '100%',
                padding: '0px 16px',
                '.slick-slider': {
                    '.slick-list': {
                        height: '100%',
                        '.slick-track': {
                            height: '100%',
                            '.slick-on-instagram-item': {
                                width: '100%',
                                margin: 'auto',
                                height: '100%',
                                img: {
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                },
                            }
                        }
                    }
                },
                '.slick-dots': {
                    bottom: '-71px',
                },
            },
            /****************
           * BOX ICON
           *****************/
            '.box-icon': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 32,
                cursor: 'pointer',
                paddingBottom: '64px',
                [MediaBreakpoints(Theme.down.md)]: {
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                },
                [MediaBreakpoints(Theme.down.sm)]: {
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                },
                '.box-icon-item': {
                    width: 276,
                    minHeight: 256,
                    backgroundColor: ColorStyles.Foundation.YellowBrown[50],
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 16,
                    [MediaBreakpoints(Theme.down.md)]: {
                        margin: 'auto',
                    },
                    [MediaBreakpoints(Theme.down.sm)]: {
                        width: "100%",
                        height: 400,
                    },
                }
            },
            /******************
           *keep-browsing
           *****************/
            '.keep-browsing': {
                [MediaBreakpoints(Theme.down.sm)]: {
                    paddingBottom: 8,
                },
                '.keep-browsing-item': {
                    display: 'flex',
                    alignItems: 'start',
                    flexDirection: 'column',
                    '.MuiTypography-blog-title': {
                        paddingTop: 24,
                    },
                    button: {
                        padding: '6px 0px'
                    }
                }
            },
            '.slick-keep-browsing': {
                '.slick-dots ': {
                    bottom: '-71px'
                }
            },
            /******************
         *cake-items
         *****************/
            '.link-cake': {
                textDecoration: 'none',
                width: '100%',
                '.cake-item': {
                    width: '100%',
                    position: 'relative',
                    [MediaBreakpoints(Theme.down.md)]: {
                        height: '100%',
                    },
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        height: '90%',
                        width: '90%',
                        border: `1px solid ${ColorStyles.Foundation.baseColor.white}`,
                        top: '5%',
                        left: '5%',
                    },
                    img: {
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                    },
                },

            },
            '.title-cake-item': {
                paddingTop: 15,
            },
            /******************
            *components Social Item
            *****************/
            '.social-item': {
                border: '1px solid',
                color: ColorStyles.Foundation.Black[900],
                width: 52,
                minWidth: 52,
                height: 52,
                borderRadius: '50%',
                display: 'block',
                textAlign: 'center',
                svg: {
                    marginTop: '25%',
                },
                '&:hover': {
                    background: ColorStyles.Foundation.YellowBrown[50],
                }
            },
            /**
            * @COMPONENTS
            * @CUSTOM_SLICK
            */
            /****************
            * components customs dots
            *****************/
            '.slick-slider': {
                '.slick-dots': {
                    '& li.slick-active button::before': {
                        color: ColorStyles.Foundation.brown[500],
                        fontSize: '23px',
                    },
                    li: {
                        zIndex: 999,
                        button: {
                            width: '100%',
                            height: '100%',
                            border: `1px solid ${ColorStyles.Foundation.Neutral[600]}`,
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }
                    },
                    '& li.slick-active': {
                        button: {
                            border: 'unset'
                        }
                    },
                    '& li': {
                        '& button::before': {
                            // fontSize: "20px",
                            color: ColorStyles.Foundation.baseColor.white,
                            opacity: 1,
                            borderRadius: "50%",
                            top: '2px',
                            left: '-1px',
                        }
                    }
                },
            },
            /****************
            *CUSTOM DOTS AROWS
            *****************/
            '.arows-items-default': {
                display: "flex",
                justifyContent: "center",
                paddingTop: '32px',
                gap: 32,
                zIndex: 99,
                [MediaBreakpoints(Theme.up.lg)]: {
                    paddingLeft: '30px',
                },
            },
            '.arows-items-default.padding-top': {
                paddingTop: '64px',
            },
            '.arows-items-white.padding-top': {
                paddingTop: '64px',
            },
            '.arows-items-white.arows-items-gap': {
                gap: 32,
            },
            '.arows-items-white': {
                display: "flex",
                justifyContent: "center",
                paddingTop: '32px',
                gap: 100,
            },
            /****************
           * HEADER 
           *****************/
            '#header': {
                '.page-title': {
                    textAlign: 'center',
                    margin: 'auto',
                    height: 48,
                    maxWidth: '100%',
                    backgroundColor: ColorStyles.Foundation.brown[500],
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                '.sub-menu-item': {
                    display: 'none !important'
                },
                '.content-header': {
                    margin: "auto",
                },
                '.menu-navbar': {
                    borderTop: `1px solid ${ColorStyles.Foundation.Neutral[500]}`,
                    margin: 'auto',
                    height: 56,
                    [MediaBreakpoints(Theme.down.lg)]: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderTop: 'unset',
                        marginBottom: 26,
                    },
                    '.list-menu-navbar': {
                        margin: 'auto',
                        '.main-menu': {
                            '.main-menu-item': {
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                margin: 'auto',
                                li: {
                                    button: {
                                        gap: 12,
                                    }
                                }
                            },
                            position: 'unset !important',
                            backgroundColor: ColorStyles.Foundation.baseColor.white,
                            padding: '0px',
                            '.main-menu-toolbar': {
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '0px',
                                [MediaBreakpoints(Theme.down.lg)]: {
                                    overflowX: 'scroll',
                                    '::-webkit-scrollbar': {
                                        height: '1px',
                                    }
                                },
                                '.MuiList-root': {
                                    flexDirection: 'row',
                                    [MediaBreakpoints(Theme.down.md)]: {
                                        flexDirection: 'column',
                                    },
                                    '.MuiMenuItem-root': {
                                    }
                                },
                                ul: {
                                    padding: '0px',
                                    li: {
                                        padding: 0,
                                        button: {
                                            padding: '6px 16px',
                                        }
                                    }
                                }
                            },
                        },
                    },
                },
                '.header-bottom': {
                    margin: 'auto',
                    height: 'fit-content',
                    padding: '15px',
                    maxWidth: '100%',
                    backgroundColor: ColorStyles.Foundation.Black[600],
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '.MuiBox-root': {
                        display: 'flex',
                        alignItems: 'center',
                        width: 'fit-content',
                        backgroundColor: "transparent",
                        '& svg': {
                            margin: 4,
                        },
                        '& hr': {
                            margin: " 0 1rem",
                            borderColor: ColorStyles.Foundation.baseColor.white
                        },
                    },
                    '.list-header-bottom': {
                        [MediaBreakpoints(Theme.down.sm)]: {
                            display: "flex",
                            overflowX: 'scroll',
                            a: {
                                padding: '7px 0',
                                whiteSpace: 'nowrap',
                            }
                        },
                        a: {
                            'p:hover': {
                                color: ColorStyles.Foundation.YellowBrown[200]
                            }
                        },
                    },
                    '.list-header-bottom::-webkit-scrollbar': {
                        [MediaBreakpoints(Theme.down.sm)]: {
                            height: '1px'
                        },
                    },
                },
            },
            /****************
             * FOOTER
             ****************/
            '#footer': {
                '.footer-header': {
                    padding: '64px 24px',
                    width: '100%',
                    backgroundColor: ColorStyles.Foundation.YellowBrown[100],
                    '.MuiFormControl-root': {
                        maxWidth: '280px',
                        minWidth: '280px',
                        width: '280px',
                        margin: '0px',
                        '.MuiInputBase-root': {
                            input: {
                                padding: '6px 0px 20px',
                            }
                        },
                        '.MuiInputAdornment-root': {
                            paddingBottom: '14px'
                        }
                    },
                    '.list-menu-footer': {
                        padding: '32px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        '.MuiButtonBase-root': {
                            '&:hover': {
                                background: 'transparent',
                            },
                            'span:hover': {
                                color: ColorStyles.Foundation.Danger[500]
                            },
                        },
                        button: {
                            padding: '6px 0px',
                            minWidth: '0px',
                        }
                    }
                },
                '.footer-bottom': {
                    backgroundColor: ColorStyles.Foundation.Black[900],
                    width: '100%',
                    height: 'fit-content',
                    padding: '17px 0px',
                    textAlign: 'center',
                    marginTop: '-15px'
                },
            },
        },
    },
    /**========================
     * @OVERRIDES_MUI_MATERIAL
     */
    MuiRating: {
        styleOverrides: {
            root: {
                color: ColorStyles.Foundation.YellowBrown[500]
            }
        }
    },
    MuiFab: {
        styleOverrides: {
            root: {
                textTransform: 'unset',
                '&.social-action': {
                    backgroundColor: ColorStyles.Foundation.baseColor.white,
                    boxShadow: 'none',
                    width: '50px !important',
                    height: '50px !important',
                    margin: '0px !important',
                },
                '&.action-click': {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    width: 'fit-content',
                    height: 'fit-content',
                    margin: '0px !important',
                    borderRadius: 'unset',
                    padding: '5px 7px'
                }
            }
        }
    },
    // custom select data input
    MuiPaper: {
        styleOverrides: {
            root: {
                '.MuiList-root': {
                    '.MuiButtonBase-root.list-item-select': {
                        '&:hover': {
                            backgroundColor: ColorStyles.Foundation.brown[500]
                        },
                        '&.Mui-selected': {
                            backgroundColor: ColorStyles.Foundation.brown[500]
                        }
                    }
                }
            }
        }
    },
    MuiFormControl: {
        styleOverrides: {
            root: {
                width: '100%',
                '&.custom-form-validate': {
                    border: 'unet',
                    '.MuiInputBase-root': {
                        border: `1px solid ${ColorStyles.Foundation.Neutral[700]}`,
                        height: 48,
                        backgroundColor: ColorStyles.Foundation.Neutral[200],
                        '.MuiOutlinedInput-notchedOutline': {
                            borderWidth: 0,
                        }
                    }
                },
                '&.custom-form-message-validate': {
                    '.MuiInputBase-root': {
                        border: `1px solid ${ColorStyles.Foundation.Neutral[700]}`,
                        backgroundColor: ColorStyles.Foundation.Neutral[200],
                        '.MuiInputBase-input': {
                            padding: '14.5px 14px'
                        },
                        '.MuiOutlinedInput-notchedOutline': {
                            borderWidth: 0,
                        }
                    }
                },
                '&.custom-form-checkout-aguest': {
                    borderRadius: 0,
                    svg: {
                        marginRight: 12,
                    },
                    borderBottom: `1px solid ${ColorStyles.Foundation.Neutral[700]}`,
                    '.MuiInputAdornment-root': {
                        cursor: 'pointer'
                    },
                    '.MuiOutlinedInput-notchedOutline': {
                        borderWidth: 0,
                        '&.Mui-focused': {
                            borderWidth: 0,
                        }
                    },
                    '.MuiInputBase-input': {
                        padding: '10px 0px'
                    }
                },
                '&.custome-select-input-data': {
                    borderRadius: 0,
                    '.MuiInputBase-root.select-input-data': {
                        border: `1px solid ${ColorStyles.Foundation.Neutral[700]}`,
                        height: 48,
                        backgroundColor: ColorStyles.Foundation.Neutral[200],
                        '.MuiSelect-select': {
                            padding: '13.5px 14px',
                        },
                        '.MuiOutlinedInput-notchedOutline': {
                            borderWidth: 0,
                        },
                        '.MuiSvgIcon-root': {
                            fontSize: '2.5rem',
                            borderLeft: `1px solid ${ColorStyles.Foundation.Neutral[700]}`,
                            width: 30,
                            height: 30,
                            top: '50%',
                            transform: 'translateY(-50%)',
                        }
                    }
                },
                borderRadius: '4px',
                '.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderWidth: 0,
                },
                '.MuiInputBase-input': {
                    fontFamily: 'Poppins',
                    fontSize: 14,
                    fontWeight: 300,
                    lineHeight: '155%',
                    letterSpacing: '0.06em',
                    color: ColorStyles.Foundation.Neutral[900]
                },
            }
        }
    },
    MuiContainer: {
        styleOverrides: {
            root: {
                [MediaBreakpoints(Theme.up.lg)]: {
                    paddingLeft: '0px',
                    paddingRight: '0px',
                },
            }
        }
    },
    // custom modal popup message && popup time
    MuiDialog: {
        styleOverrides: {
            root: {
                '&.Dialog-popup': {
                    '.MuiBackdrop-root': {
                        backgroundColor: 'rgba(0, 0, 0, 0.7 )'
                    },
                    '.MuiDialog-container': {
                        '.MuiPaper-root.MuiDialog-paper': {
                            overflow: 'unset',
                            width: 1200,
                            boxShadow: 'unset',
                            maxWidth: 1200,
                            margin: '0px 14px',
                            [MediaBreakpoints(Theme.down.lg)]: {
                                width: '95% !important',
                            },
                            [MediaBreakpoints(Theme.down.md)]: {
                                overflowY: 'scroll',
                                overflowX: 'clip'
                            },
                            '.popup': {
                                backgroundColor: ColorStyles.Foundation.baseColor.white,
                                border: 'unset',
                                width: '100%',
                                position: 'relative',
                                '.circle': {
                                    backgroundColor: ColorStyles.Foundation.brown[500],
                                    color: ColorStyles.Foundation.Black[900],
                                    borderRadius: '50%',
                                    height: 56,
                                    width: 56,
                                    position: 'absolute',
                                    top: '-5%',
                                    right: '-2%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    [MediaBreakpoints(Theme.down.md)]: {
                                        top: '1%',
                                        right: '2%'
                                    },
                                },
                                '.popup-content': {
                                    width: '100%',
                                }
                            }
                        },
                        '.MuiPaper-root.MuiDialog-paper::-webkit-scrollbar-thumb': {
                            backgroundColor: ColorStyles.Foundation.Success[500],
                            borderRadius: 6,
                        },
                        '.MuiPaper-root.MuiDialog-paper::-webkit-scrollbar': {
                            width: 4,
                        },
                    },

                },
            }
        }
    },
    // drawer mini cart 
    MuiDrawer: {
        styleOverrides: {
            root: {
                '&.drawer-slide-mini-cart': {
                    '.MuiPaper-root': {
                        border: "0 !important",
                        '.close-box-drawer': {
                            position: 'absolute',
                            top: '4%',
                            right: '8%',
                            width: 50,
                            height: 50,
                            cursor: 'pointer',
                            [MediaBreakpoints(Theme.down.sm)]: {
                                right: '-1%',
                            },
                        }
                    },
                }
            }
        }
    },
    // drawer checkout Guest login, sigin up, CheckCodeVerify
    MuiDrawer: {
        styleOverrides: {
            root: {
                '&.drawer-slide-hiden': {
                    '.MuiPaper-root': {
                        border: "0 !important",
                        padding: "100px 60px",
                        width: 570,
                        [MediaBreakpoints(Theme.down.sm)]: {
                            padding: "123px 16px",
                            width: '100%'
                        },
                        '.close-box-drawer': {
                            position: 'absolute',
                            top: '4%',
                            right: '8%',
                            width: 50,
                            height: 50,
                            cursor: 'pointer',
                            [MediaBreakpoints(Theme.down.sm)]: {
                                right: '-1%',
                            },
                        },
                        '.checkout-guest-content': {
                            width: 570,
                            padding: "100px 30px",
                            [MediaBreakpoints(Theme.down.sm)]: {
                                width: '100%',
                                padding: "123px 16px",
                            },
                        }
                    },
                }
            }
        }
    },
    // custom style menu navbar header
    MuiPopover: {
        styleOverrides: {
            root: {
                '&.list-menu-navbar': {
                    '.MuiPaper-root': {
                        width: "100% !important",
                        padding: "0 16px",
                        left: '0px !important',
                        maxWidth: 'unset !important',
                        '.MuiList-root': {
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            '.list-menu-navbar-item': {
                                button: {
                                    display: 'flex',
                                    flexDirection: 'row',
                                    width: '100%',
                                    justifyContent: 'space-between',
                                    alignItems: "center",
                                    gap: "12px",
                                }
                            }
                        }
                    },
                },
            }
        }
    },
    MuiBadge: {
        styleOverrides: {
            root: {
                span: {
                    backgroundColor: ColorStyles.Foundation.baseColor.black
                }
            }
        }
    },
    /******************
     *styles varial button  mui marterial
     *****************/
    MuiButton: {
        variants: [
            {
                props: {
                    variant: 'default',
                    variant: 'primary',
                    variant: 'ThirdButon',
                    variant: "btn-slick-style1",
                    variant: "btn-slick-style2",
                    variant: 'btn-slick-style3',
                    variant: 'btn-filter-style1',
                    variant: 'btn-loadmore-style2',
                    variant: "ButtonShop",
                    variant: 'btn-shopcart-1',
                    variant: "btn_white",
                    variant: "btn_black",
                    variant: 'btn-shop-2',
                    variant: 'btn-disable',
                    variant: 'btn-input',
                },
                style: {},
            },
        ],
        styleOverrides: {
            root: {
                textTransform: 'none',
                boxShadow: 'none',
                borderRadius: '4px',
                height: '48px',
                '&:hover': {
                    boxShadow: 'none',
                },
            },
            'btn-disable': {
                ...ButtonStyles.ButtonShop.style3
            },
            'btn-shop-2': {
                ...ButtonStyles.ButtonShop.style2,
            },
            'btn-shopcart-1': {
                ...ButtonStyles.ButtonShop.style1,
                ':hover': {
                    ...ButtonStyles.ButtonShop.style1.hover,
                    svg: {
                        color: ColorStyles.Foundation.baseColor.black,
                    }
                },
                '&:active': {
                    color: ColorStyles.Foundation.baseColor.white,
                    backgroundColor: ColorStyles.Foundation.Black[900],
                    svg: {
                        color: ColorStyles.Foundation.baseColor.white,
                    }
                },
            },
            ButtonShop: {
                ...ButtonStyles.ButtonShop.default,
                position: "relative",
                borderRadius: 'unset',
                ':hover': {
                    ...ButtonStyles.ButtonShop.hover,
                },
                '&:active': {
                    color: ColorStyles.Foundation.Black[900],
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    height: '2px',
                    width: '60%',
                    borderBottom: `1px solid ${ColorStyles.Foundation.YellowBrown[500]}`,
                    bottom: '-3px',
                },
            },
            ButtonShop_1: {
                ...ButtonStyles.ButtonShop.default,
                position: "relative",
                borderRadius: 'unset',
                ':hover': {
                    ...ButtonStyles.ButtonShop.hover,
                },
                '&:active': {
                    color: ColorStyles.Foundation.Black[900],
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    height: '2px',
                    width: '100%',
                    borderBottom: `1px solid ${ColorStyles.Foundation.YellowBrown[500]}`,
                    bottom: '-3px',
                },
            },
            default: {
                padding: '6px 0px',
                ...ButtonStyles.ButtonShop.default,
                '&:active': {
                    backgroundColor: ColorStyles.Foundation.baseColor.white
                },
            },
            primary: {
                ...ButtonStyles.primary.default,
                borderRadius: 'unset',
                ':hover': {
                    ...ButtonStyles.primary.hover,
                },
                ':disabled': {
                    ...ButtonStyles.primary.disabled,
                },
                '&:active': {
                    color: ColorStyles.Foundation.Black[900],
                },
            },
            ThirdButon: {
                ...ButtonStyles.ThirdButon.default,
                ':hover': {
                    ...ButtonStyles.ThirdButon.hover,
                },
                ':disabled': {
                    ...ButtonStyles.ThirdButon.disabled,
                },
                '&:active': {
                    backgroundColor: ColorStyles.Foundation.Neutral[500],
                },
            },
            'btn-slick-style1': {
                ...ButtonStyles.SlickButton.style1
            },
            'btn-slick-style2': {
                ...ButtonStyles.SlickButton.style2
            },
            'btn-slick-style3': {
                ...ButtonStyles.SlickButton.style3
            },
            'btn-filter-style1': {
                ...ButtonStyles.filterButton.style1
            },
            'btn-loadmore-style2': {
                ...ButtonStyles.filterButton.style2
            },
            btn_white: {
                ...ButtonStyles.btn_white.default,
                ':hover': {
                    ...ButtonStyles.btn_white.hover,
                },
                '&:active': {
                    color: ColorStyles.Foundation.Black[900],
                },
            },
            btn_black: {
                ...ButtonStyles.btn_black.default,
                ':hover': {
                    ...ButtonStyles.btn_black.hover,
                },
                '&:active': {
                    color: ColorStyles.Foundation.baseColor.white,
                    backgroundColor: ColorStyles.Foundation.Black[600],
                },
            },
            'btn-input': {
                ...ButtonStyles.btn_input.default,
                ':hover': {
                    ...ButtonStyles.btn_input.hover,
                },
                '&:active': {
                    ...ButtonStyles.btn_input.active
                },
            }
        },
    },
};

export default components;
