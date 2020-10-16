const initialState = true;

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_HEADER':
            return true;
        
        case 'CLOSE_HEADER':
            return false;

        default:
            return state;
    }
}