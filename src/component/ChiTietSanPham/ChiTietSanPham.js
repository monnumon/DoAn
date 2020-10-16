import React, { Fragment, useState, useEffect } from 'react';
import { axios } from '../../config/constant';
import { CommentKhachhang, Header, } from '../index';
import { useCookies } from 'react-cookie';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { SanPhamDetail, BodyChitietsanpham, Footer } from '../index'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
export default function ChiTietSanPham(props) {
    const SPID = props.match.params.id; //lay id cua san pham
  
    const [cookies, setCookie, removeCookie] = useCookies();
    const [date, setDate] = useState(null);
    const dispatch = useDispatch();

    const [thongTinShop, setThongTinShop] = useState({
        idShop: '',
        ten: ''
    });

    const [thongTinProduct, setthongTinProduct] = useState({
        _id: '',
        idShow: '',
        ten: '',
        hinh: '',
        gia: 0,   
        mota: '',
        soSao:0,
        soluong:0,
        idCategory: '',
        idShop: '',
      
    });
    const [giohang, setGioHang] = useState({
        ten: '',
        gia: '',
        hinh: '',
        soluong: '',
        trangthai: false,
        idUser: cookies.userID
    });
    /**
     * TODO : Lay san pham hien thi theo id
     */
    async function LaySanPhamTheoID() {
        let res = await axios.get('/SanPham-detail?id3=' + SPID);
        if (res.data.status === 'thanhcong') {
            setthongTinProduct({ //lay ve san pham de hien thi 
                _id: res.data.data._id,
                idShow: res.data.data.idShow,
                ten: res.data.data.ten,
                gia: res.data.data.gia,
                hinh: res.data.data.hinh,
                soSao: res.data.data.soSao
                
            });
            setGioHang({ // luu lai thuoc tinh gio hang 
                ...giohang,
                ten: res.data.data.ten,
                gia: res.data.data.gia,
                hinh: res.data.data.hinh
            })
        } else {
            console.log('ket noi chi tiet san pham khong thanh cong');
        }
    }
    useEffect(() => {
        LaySanPhamTheoID();
    }, []);
    return (
        <Fragment>
            <Header></Header>
            <div className="container" style={{ marginTop: '20px' }}>
               
                <SanPhamDetail SPID={SPID}></SanPhamDetail>
                <BodyChitietsanpham  thongTinProduct={thongTinProduct}></BodyChitietsanpham>
                <CommentKhachhang thongTinShop={thongTinShop} thongTinProduct={thongTinProduct}></CommentKhachhang>
            </div>
            <Footer></Footer>
        </Fragment>
    );
}

