const defaultState = null;
const LayoutKhachHangReducer =(state=defaultState,action)=>{
    switch(action.type){
        case 'Layout_Khachhang':
            return true;
        case 'An_Layout_Khachhang':
            return false;
        default:
            return state
    }
}
export default LayoutKhachHangReducer;