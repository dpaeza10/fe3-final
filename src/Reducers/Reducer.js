export const reducer = (state, action) => {
    switch (action.type) {
        case "GET_DOCS":
        return {...state, docs: action.payload};
        case "ADD_FAV":
        return {...state, favs: [...state.favs, action.payload]};
        case "REMOVE_FAV":
        return {...state, favs: state.favs.filter((doc) => doc.id !== action.payload)};
        case "CHANGE_THEME":
        return {...state, theme: state.theme === "light" ? "dark" : "light"};
        default:
        return state;
    }
};