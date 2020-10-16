//Reducer phục vụ cho việc quản lý các thông tin trong form login khách hàng

const defaultState = {
    tenDangNhap:'',
    matKhau:'',
    tenTaiKhoanDK:'',
    emailDK:'',
    hoTenDK:'',
    sdtDK:'',
    matKhauDK:'',
    matKhauDK2:'',
    emailQuenMK:''
};
const thongTinLoginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_TK_LOGIN': {
            return {
                ...state,
                tenDangNhap: action.tenDangNhap,
            };
        }
        case 'SET_MK_LOGIN': {
            return {
                ...state,
                matKhau: action.matKhau
            };
        }
        case 'SET_TENTK_DANGKY': {
            return {
                ...state,
                tenTaiKhoanDK: action.tenTaiKhoan
            };
        }
        case 'SET_EMAIL_DANGKY': {
            return {
                ...state,
                emailDK: action.email
            };
        }
        case 'SET_HOTEN_DANGKY': {
            return {
                ...state,
                hoTenDK: action.hoTen
            };
        }
        case 'SET_SDT_DANGKY': {
            return {
                ...state,
                sdtDK: action.sdt
            };
        }
        case 'SET_MK_DANGKY': {
            return {
                ...state,
                matKhauDK: action.matKhau
            };
        }
        case 'SET_MK_DANGKY2': {
            return {
                ...state,
                matKhauDK2: action.matKhau
            };
        }
        case 'SET_EMAIL_QUENMK': {
            return {
                ...state,
                emailQuenMK: action.email
            };
        }
        case 'RESET_THONGTIN_LOGIN': {
            return {
                tenDangNhap:'',
                matKhau:'',
                tenTaiKhoanDK:'',
                emailDK:'',
                matKhauDK:'',
                emailQuenMK:''
            };
        }
        default:
            return state
    }
}

export default thongTinLoginReducer;