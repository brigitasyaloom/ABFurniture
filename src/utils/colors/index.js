const mainColors = {
    yellow1: '#E1AC23',
    dark1: '#112340',
    white: '#ffffff',
    black: '#000000',
    grey1: '#7D8797',
    grey2: '#E9E9E9',
    black1:'#000000',
    black2: 'rgba(0, 0, 0, 0.5)',
    red1: '#E06379',
};

export const colors = {
    primary : mainColors.yellow1,
    secondary : mainColors.dark1,
    white : 'white',
    black : 'black',
    text : {
        primary : mainColors.dark1,
        secondary: mainColors.grey1,
        menuInactive: mainColors.black,
        menuActive: mainColors.white,
    },
    
    

    button:{
        primary:{
            background: mainColors.yellow1,
            text: 'white',
        },
        secondary:{
            background: 'white',
            text: mainColors.dark1,
        },
        disable :{
            background: mainColors.grey1,
        }
    },
    border : mainColors.grey2,
    loadingBackground: mainColors.black2,
    error: mainColors.red1,

};