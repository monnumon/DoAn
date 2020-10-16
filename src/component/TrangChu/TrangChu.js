import React, { Fragment, useState, useEffect } from 'react';
import { axios } from '../../config/constant';
import { useCookies } from 'react-cookie';
import { Header, MarketingController, ProductController, CarouselComponent, Footer } from '../index';
import { Menu } from 'antd';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';

export default function TrangChu() {
    const [dataSanPham, setDataSanPham] = useState([]);
    const [dataDanhMuc, setDataDanhMuc] = useState([]);
    const [dataCarousel, setDataCarousel] = useState([]);
    const { SubMenu } = Menu;
    const [blogs, setBlogs] = useState([])
    const [cookies, setCookie, removeCookie] = useCookies();
    const [statusDangNhap, setStatusDangNhap] = useState(false);
    const [user, setUser] = useState({
        _id: '',
        ten: '',
        vaiTro: '',
        email: ''
    });
    const dispatch = useDispatch();
    /**
     * TODO : lay user theo id
     */
    // async function LayUserTheoID() {
    //     let res = await axios.get('/users-item?id=' + cookies.userID);

    //     if (res.data.status === 'thanhcong') {
    //         alert(res.data.message);
    //         setUser({
    //             _id: res.data.data._id,
    //             ten: res.data.data.ten,
    //             vaiTro: res.data.data.vaitro,
    //             email: res.data.data.taikhoan.email
    //         })
    //     } else {
    //         alert(res.data.message);
    //     }
    // }
    // ham lay danh sach san pham
    async function LayDanhSachSanPham() { // viet ham request dên api lay danh sach san pham 
        let res = await axios.get('/sanpham'); // ham pi
        if (res.data.status === 'success') { // 
            setDataSanPham(res.data.data2);

        } else {
            alert('ket noi Api san pham khong thanh cong');
        }
    }
    async function LayDanhSachDanhMuc() { // viet ham request dên api lay danh sach san pham 
        let res = await axios.get('/danhmuc_trangchu'); // ham pi
        if (res.data.status === 'success') { // 
            setDataDanhMuc(res.data.data);

        } else {
            alert('ket noi Api danh muc khong thanh cong');
        }
    }
    async function LayDanhSachBlog() {
        let res = await axios.get('/blog');
        if (res.data.status === 'thanhcong') {
            setBlogs(res.data.data);

        } else {
            alert('ket noi Api danh muc khong thanh cong');
        }
    }
    async function LayDanhSachCarousel() {
        let res = await axios.get('/Carousel');
        if (res.data.status === 'thanhcong') {
            setDataCarousel(res.data.data);
        } else {
            alert('lay danh sach carousel that bai');
        }
    }

    /**
     * TODO : Quản lí sự thay đổi sản phẩm , dùng useEffect
     * 
     */
    // useEffect(() => {
    //     if (cookies.userID !== undefined) {
    //         setStatusDangNhap(true);
    //         LayUserTheoID(cookies.userID) // lay theo cookie luu dê hien gmail
    //     } else {
    //         setStatusDangNhap(false);
    //     }
    // }, [cookies.userID])
    useEffect(() => {
        LayDanhSachSanPham();
        LayDanhSachDanhMuc();
        LayDanhSachBlog();
        LayDanhSachCarousel();
        window.scrollTo(0, 0);
        dispatch({ type: 'Layout_Khachhang' });
    }, [])
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
            if (!user) {
                console.log('chua dang nhap');
                setStatusDangNhap(false);
                return;
            }
            else {
                setStatusDangNhap(true);
                const email = await user.email;
                console.log('tai khoan dang nhap: ', email);
                return user;
            }
        });
        return () => unregisterAuthObserver();

    });
    return (
        <Fragment>
            <Header></Header>
            <div className="container" style={{ marginTop: '20px' }}>
                <CarouselComponent dataCarousel={dataCarousel} ></CarouselComponent>
                <MarketingController dataDanhMuc={dataDanhMuc} ></MarketingController>
                <ProductController dataSanPham={dataSanPham}></ProductController>
            </div>
            <Footer></Footer>
        </Fragment >
    );
}



