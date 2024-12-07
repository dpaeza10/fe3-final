export const reducer = (state, action) => {
    switch (action.type) {
        case "GET_DOCS":
            return {...state, docs: action.payload};
        case "TOOGLE_FAV":
            return {...state, favs: state.favs.some((doc) => doc.id === action.payload.id) ? state.favs.filter((doc) => doc.id !== action.payload.id) : [...state.favs, action.payload]};
        case "CHANGE_THEME":
            return {...state, theme: state.theme === "light" ? "dark" : "light"};
        default:
            return state;
    }
};