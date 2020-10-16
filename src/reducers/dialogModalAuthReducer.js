//Reducer phục vụ cho việc chuyển đổi các menu trong authen modal khách hàng

const defaultState = {
    hienthi:false,
    loaiform:0
};
const dialogModalAuthReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'DANGNHAP_MODAL_AUTH': {
            return {
                hienthi:true,
                loaiform:0
            };
        }
        case 'DANGKY_MODAL_AUTH': {
            return {
                hienthi:true,
                loaiform:1
            };
        }
        case 'QUENMK_MODAL_AUTH': {
            return {
                hienthi:true,
                loaiform:2
            };
        }
        case 'HOANTAT_DK_FACEBOOK': {
            return {
                hienthi:true,
                loaiform:3
            };
        }
        case 'CLOSE_MODAL_AUTH': {
            return {
                hienthi:false,
                loaiform:0
            };
        }
        default:
            return state
    }
}

export default dialogModalAuthReducer;