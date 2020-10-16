// import React, { Fragment, useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { axios } from '../../config/constant';
// import { useCookies } from 'react-cookie';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import firebase from 'firebase';
// import 'antd/dist/antd.css';
// import { Button, notification } from 'antd';
// export default function DangNhap() {
//     //tao bien doi tuong truyen di api
//     const [taikhoan, setTaiKhoan] = useState({
//         email: '',
//         password: ''
//     });
//     const [cookies, setCookie, removeCookie] = useCookies();
//     // Configure Firebase.
//     const uiConfig = {
//         // Popup signin flow rather than redirect flow.
//         signInFlow: 'redirect',
//         signInSuccessUrl: '/',
//         // We will display Google and Facebook as auth providers.
//         signInOptions: [
//             firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//             firebase.auth.FacebookAuthProvider.PROVIDER_ID
//         ],

//     };
//     /**
//      * TODO : dang nhap
//      */
//     async function KiemTraAccount() {
//         let res = await axios.post('/dangnhap', {
//             email: taikhoan.email,
//             password: taikhoan.password
//         })
//         if (res.data.status === 'thanhcong') {
//             // kiem tra và chuyển vể giao dien tuong ung
//             if (res.data.data.vaiTro === 0) {
//                 window.location.pathname = '/Admin';
//             } else {
                
//                 window.location.pathname = '/';
               
//             }
//             setCookie('userID', res.data.data.userID); // truyen du lieu nguoi dung cho cookie ,dat tên là 'userID'
//         } else {
//             alert('dang nhap that bai');
//         }
//     }
//     //quản lý vòng đời của auth
//     useEffect(() => {
//         const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
//             if (!user) {
//                 console.log('chua dang nhap');
//                 return;
//             }
//             const token = await user.getIdToken();
//             console.log('log in user', user);

//         });
//         return () => unregisterAuthObserver();
//     }, []);
//     //hàm thông báo
//     const openNotification = () => {
//         notification.open({
//             message: 'Thông báo',
//             description:
//                 'Đăng nhập thành công ^^',
//             onClick: () => {
//                 console.log('Notification Clicked!');
//             },
//         });
//     };

//     return (
//         <Fragment>
//             {/* <div className="container">
//                 <h1 className="text-center"> ĐĂNG NHẬP</h1>
//                 <div className="row">
//                     <div className="col-xs-12 col-sm-12 col-md-4 well well-sm col-md-offset-4">

//                         <form>
//                             <div className="row">

//                             </div> <input className="form-control" name="youremail" placeholder="Email" type="email" onChange={(e) => {
//                                 setTaiKhoan({
//                                     ...taikhoan,//giu lai giu lieu truoc do 
//                                     email: e.target.value
//                                 })
//                             }} />
//                             <input className="form-control" name="password" placeholder="Mật khẩu" type="password" onChange={(e) => {
//                                 setTaiKhoan({
//                                     ...taikhoan,
//                                     password: e.target.value
//                                 })
//                             }} />

//                             <br />
//                             <br />
//                             <button className="btn btn-lg btn-primary btn-block" onClick={(e) => {
//                                 e.preventDefault();
//                                 KiemTraAccount()
//                             }}> Đăng Nhập</button>
//                         </form>
//                     </div>
//                 </div>
//             </div> */}
            
//             <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />

             
            



//         </Fragment>
//     );
// }

