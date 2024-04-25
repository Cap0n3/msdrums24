import { createTheme } from '@mui/material/styles';
import dark_palette from './palette';

export const darktheme = createTheme({
    palette: {
        primary: {
            main: dark_palette.primary.main
        },
        secondary: {
            main: dark_palette.secondary.main
        },
    },

    // Change text input outline color
    components: {
        // CTRL + SPACE to find the component you would like to override.
        // For most of them you will need to adjust just the root...
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& label': {
                        color: '#FFFFFF', // Color of placeholder
                    },
                    '& label.Mui-focused': {
                        color: dark_palette.secondary.main, // Color of placeholder when focused
                    },
                    '& .MuiInput-underline:after': {
                        borderBottomColor: '#3E68A8', // don't know ...
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: dark_palette.secondary.main, // Color of the border
                        },
                        '&:hover fieldset': {
                            borderColor: 'red', // Color of the border when hovered
                            borderWidth: '0.15rem',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'red',
                        },
                        '& input': {
                            color: dark_palette.secondary.main,
                        },
                    },
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    textTransform: 'initial',
                    fontSize: '1rem',
                },
            },
        },
    },

});