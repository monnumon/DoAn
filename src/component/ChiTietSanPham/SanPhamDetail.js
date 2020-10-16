import React, { Fragment, useState, useEffect } from 'react';
import { axios } from '../../config/constant';
import { useCookies } from 'react-cookie';
import { Col, Row } from 'reactstrap';
import { Carousel, CarouselItem } from 'react-bootstrap';
import 'antd/dist/antd.css';
import { Breadcrumb, Descriptions, Input, Button } from 'antd';
import { HomeOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
export default function SanPhamDetail(props) {
    const SPID = props.SPID; //lay id cua san pham
    const [cookies, setCookie, removeCookie] = useCookies();
    const [arrao, setarrao] = useState([]); // khai bao fix loi carousel
    const [GioHangMua, setGioHangMua] = useState(false);
    const [sanpham, setSanPham] = useState({
        ten: '',
        gia: '',
        hinh: '',
        mota: ''
    });
    const [giohang, setGioHang] = useState({
        ten: '',
        gia: '',
        hinh: '',
        soluong: '',
        trangthai: false,
        idUser: cookies.userID
    });
    async function LaySanPhamTheoID() {
        let res = await axios.get('/SanPham-detail?id3=' + SPID);
        if (res.data.status === 'thanhcong') {
            setSanPham({ //lay ve san pham de hien thi 
                ten: res.data.data.ten,
                gia: res.data.data.gia,
                hinh: res.data.data.hinh,
                mota: res.data.data.mota
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
    async function ThemSanPhamGioHang() {
        let res = await axios.post('/giohang-them', {
            ten: giohang.ten,
            gia: giohang.gia,
            hinh: giohang.hinh,
            soluong: giohang.soluong,
            trangthai: giohang.trangthai,
            idUser: cookies.userID
        });
        if (res.data.status === 'thanhcong') {
            alert('thêm giỏ hàng thành công');
            setGioHangMua(false);
        } else {
            console.log('thêm giỏ hàng không thành công');
        }
    }
    useEffect(() => {
        LaySanPhamTheoID();
    }, []);
    return (
        <Fragment>
            <div className="container">
                <Row>
                    <Breadcrumb>
                        <Breadcrumb.Item >
                            <HomeOutlined />
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <UserOutlined />
                            <span>Chi tiet san pham</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>{sanpham.ten}</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <Row gutter={[20, 20]}>
                    <Col xs={10} sm={7} md={4} lg={6} >
                        <div class="dropdown">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={sanpham.hinh}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>{sanpham.ten}</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                            <div class="dropdown-content">
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={sanpham.hinh}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                                <div class="desc">{sanpham.ten}</div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={14} lg={16} style={{ marginTop: '30px', marginLeft: '10px' }}>
                        <Row>
                            <Col>
                                <Row>
                                    <div
                                        className={'h3 font-weight-bold text-dark'}>{sanpham.ten}</div>
                                </Row>
                                <Row>
                                    <div
                                        className={'h3  text-dark'}>Giá : {sanpham.gia} VND</div>
                                </Row>
                                <Row>
                                    <div
                                        className={'h3  text-dark'}>Mô tả : {sanpham.mota} </div>
                                </Row>
                                <Row>
                                    <div
                                        className={'h3  text-dark'}>Số lượng :  <Input
                                            placeholder=""
                                            style={{ width: '100px', marginLeft: '10px' }}
                                            onChange={(e) => {
                                                setGioHang({
                                                    ...giohang,
                                                    soluong: e.target.value
                                                })
                                            }}
                                        ></Input></div>
                                </Row>
                                <Row>
                                    <Button
                                    
                                        icon={<ShoppingCartOutlined />}
                                        style={{ justifyContent: 'center' }}
                                        onClick={ThemSanPhamGioHang}
                                    >Mua ngay</Button>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
}

