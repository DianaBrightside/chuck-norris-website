import {
    createMuiTheme
} from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: ['Raleway', 'Sans serif'].join(','),
        h1: {
            fontSize: '50px',
            fontWeight: 800,
            margin: '30px 0',
        },
        h3: {
            fontSize: '20px',
            fontWeight: 600,
            padding: '24px',
        },
        h6: {
            fontSize: '16px',
            fontWeight: 800,
            marginLeft: '10px'
        },
    },
    palette: {
        primary: {
            main: '#422ED4',
        },
        secondary: {
            main: '#1C1C39',
        }
    },
})


export default theme;