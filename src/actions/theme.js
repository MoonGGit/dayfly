export const SET_THEME_NAME = 'SET_THEME_NAME';

export function setThemeName(themeName) {
    return {
        type: SET_THEME_NAME,
        themeName: themeName,
    };
}
