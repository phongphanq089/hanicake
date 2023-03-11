export const settingFont = {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    percentToPx: 0.16,
};

const LetterSpacing = ( percent ) => {
    return `${ percent * settingFont.percentToPx }px`;
};

export const TextStyles = {
    JosefinSans: {
        "subBody:20px": {
            Regular: {
                fontFamily: "'Josefin Sans'",
                fontWeight: settingFont.regular,
                fontSize: 20,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Bold: {
                fontFamily: "'Josefin Sans'",
                fontWeight: settingFont.bold,
                fontSize: 20,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 )
            },
            Light: {
                fontFamily: "'Josefin Sans'",
                fontWeight: settingFont.light,
                fontSize: 20,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 )
            }
        }
    },
    Domine: {
        "H1:65px": {
            Regular: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.regular,
                fontSize: 65,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Bold: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.bold,
                fontSize: 65,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            }
        },
        "H2:40px": {
            Regular: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.regular,
                fontSize: 40,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Bold: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.bold,
                fontSize: 40,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            }
        },
        "H3:25px": {
            Regular: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.regular,
                fontSize: 25,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Bold: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.bold,
                fontSize: 25,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            }
        },
        "H4:23px": {
            Regular: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.regular,
                fontSize: 23,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Bold: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.bold,
                fontSize: 23,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            }
        },
        "H5:20px": {
            Regular: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.regular,
                fontSize: 20,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Bold: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.bold,
                fontSize: 20,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            }
        },
        "H6:14px": {
            Regular: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.regular,
                fontSize: 14,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Bold: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.bold,
                fontSize: 14,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
        },
    },
    Poppins: {
        "Body01:30px": {
            Bold: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.bold,
                fontSize: 30,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            SemiBold: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.semiBold,
                fontSize: 30,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Medium: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.medium,
                fontSize: 30,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Regular: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.regular,
                fontSize: 30,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Light: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.light,
                fontSize: 30,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            }
        },
        "Body02:20px": {
            Bold: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.bold,
                fontSize: 20,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            SemiBold: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.semiBold,
                fontSize: 20,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Medium: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.medium,
                fontSize: 20,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Regular: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.regular,
                fontSize: 20,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Light: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.light,
                fontSize: 20,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            }
        },
        "Body03:18px": {
            Bold: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.bold,
                fontSize: 18,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            SemiBold: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.semiBold,
                fontSize: 18,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Medium: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.medium,
                fontSize: 18,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Regular: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.regular,
                fontSize: 18,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Light: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.light,
                fontSize: 18,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            }
        },
        "Body04:14px": {
            Bold: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.bold,
                fontSize: 14,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            SemiBold: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.semiBold,
                fontSize: 14,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Medium: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.medium,
                fontSize: 14,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Regular: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.regular,
                fontSize: 14,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Light: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.light,
                fontSize: 14,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            }
        },
    }
};