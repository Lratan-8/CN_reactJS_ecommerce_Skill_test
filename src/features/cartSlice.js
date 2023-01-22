const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {         // adding to my cart 
            state.push(action.payload);
            localStorage.setItem("cartitems", JSON.stringify(state));
        },
        remove(state, action) {
            // removing from cart 
            let data = JSON.parse(localStorage.getItem("cartitems"));
            const raw = data.filter((item) => item.id !== action.payload);
            console.log(raw)
            localStorage.setItem("cartitems", JSON.stringify(raw));
            return state.filter((item) => item.id !== action.payload);

        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;