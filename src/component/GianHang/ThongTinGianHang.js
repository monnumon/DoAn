import React, { Fragment, useState, useEffect } from 'react'
import { axios } from '../../config/constant';
import { useCookies } from 'react-cookie'
import { Pagination, message } from 'antd';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
function ThongTinGianHang(props) {
    const shopID = props.match.params.id;
    const dispatch = useDispatch();
    const [dataProduct, setDataProduct] = useState([]);
    const [tongSoTrang, setTongSoTrang] = useState(0);
    const [datathongtinnguoidung, setdatathongtinnguoidung] = useState({
        _id: '',
        ten: '',
        vaiTro: '',
        thongtinshop: {
            idShop: '',
            ten: '',
            diachi: '',
            mota: '',
            logoShop: ''  
        },
        email: '',
        anh: ''
    });
    
    const [cookies, setCookie, removeCookie] = useCookies();
    function setLongString(str) {
        var stringNew = str;
        if (str.length > 54) {
            stringNew = str.substring(0, 54) + '...'
        }
        return stringNew;
    }
    function format_curency(a) {
        a = a.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        return a;
    }
    function tinh_tien(giaGoc, giaTriGiamGia) {
        var tien = 0;
        if (giaTriGiamGia > 100) {
            tien = giaGoc - giaTriGiamGia;
        } else {
            tien = giaGoc - (giaGoc * giaTriGiamGia / 100);
        }

        return tien.toString();
    }

   
    async function LayThongTinShopTheoID() {
        let res = await axios.get('/thongtinshop?id=' + cookies.userID);
        if (res.data.status === 'thanhcong') {
            setdatathongtinnguoidung({
                _id: res.data.data._id,
                ten: res.data.data.ten,
                vaiTro: res.data.data.vaitro,
                thongtinshop:{
                    idShop: res.data.data.thongtinshop.idShop,
                    ten: res.data.data.thongtinshop.ten,
                    diachi: res.data.data.thongtinshop.mota,
                    logoShop:res.data.data.thongtinshop.diachi
                    
                },
                email: res.data.data.taikhoan.email,
                anh: res.data.data.anh
            })
        } else {
            alert('lay thong tin shop khong thanh cong');
        }
    }

    async function LayTatCaSanPhamTheoIDShop(shopID, page) {
        let res = await axios.get('/products-shop-show/' + page + '?idShop=' + shopID);
        if (res.data.status === 'success') {
            setDataProduct(res.data.data);
            setTongSoTrang(res.data.soTrang);
        } else {
            message.error('Lấy data sản phẩm thất bại');
        }
    }
    console.log(datathongtinnguoidung);
    useEffect(() => {
        LayThongTinShopTheoID(shopID);
        LayTatCaSanPhamTheoIDShop(shopID,0);
        dispatch({type:'SHOW_HEADER'});
    }, [])
    useEffect(() => {
        setCookie('shopID', datathongtinnguoidung.thongtinshop.idShop);
    }, [datathongtinnguoidung])////// Lấy cookie IDShop ở đây
    return (
        <div className="container" style={{ marginTop: '50px' }}>
            <div className='row'>
                <div className='col-sm-3' style={{ padding: 10, margin: 0 }}>
                    <img alt='logo shop' src={datathongtinnguoidung.logoShop} width='200' height='200'></img><br></br><br></br>
                    <span>Cửa hàng: <Link to={'/shop/' + datathongtinnguoidung.idShop + '/' + (datathongtinnguoidung.thongtinshop.idShop)}><strong>{datathongtinnguoidung.thongtinshop.idShop}</strong></Link></span><br></br>
                </div>
                <div className='col-sm-9'>
                    <div className='col'>
                       
                       
                        <br></br>
                        <br></br>  
                        <div className="row maincontent">
                            <br></br>
                            <h3>DANH SÁCH SẢN PHẨM</h3>
                            <div className="row showitems-maincontent">
                                {
                                    dataProduct.map((item, i) => {
                                        if (item.giaTriGiamGia === 0) {
                                            return <div key={item._id} className="col-sm-3 item" style={{ backgroundColor: "white", height: 350, marginTop: 20, width: '95%' }}>
                                                <Link to={'/detail/' + item._id + '/' + (item.ten)} className="a_item">
                                                    <div className="row">
                                                        <Image style={{ width: '100%', height: 180 }} src={item.img.chinh} />
                                                    </div>  
                                                    <div className="row item-ten">
                                                        <span>{setLongString(item.ten)}</span>
                                                    </div>
                                                    <div className="row item-gia">
                                                        <h5><strong>{format_curency(item.gia.toString())} VNĐ</strong></h5>
                                                    </div>
                                                </Link>
                                            </div>
                                        } else {
                                            return <div key={item._id} className="col-sm-3 item" style={{ backgroundColor: "white", height: 350, marginTop: 20, width: '95%' }}>
                                                <Link to={'/detail/' + item._id + '/' + (item.ten)} className="a_item">
                                                    <div className="row">
                                                        <Image style={{ width: '100%', height: 180 }} src={item.img.chinh} />
                                                    </div>
                                                    <div className="row item-ten">
                                                        <span>{setLongString(item.ten)}</span>
                                                    </div>
                                                    <div className="row item-gia">
                                                        <h5><strong>{format_curency(tinh_tien(item.gia, item.giaTriGiamGia))} VNĐ</strong></h5>&nbsp;<span className="percent">{
                                                            item.giaTriGiamGia > 100 ? '-' + format_curency(item.giaTriGiamGia.toString()) + 'VNĐ' : '-' + item.giaTriGiamGia + '%'
                                                        }</span>
                                                    </div>
                                                    <div className="row item-giagoc">
                                                        <strike><span className="original">{format_curency(item.gia.toString())} VNĐ</span></strike>
                                                    </div>
                                                </Link>
                                            </div>
                                        }
                                    })
                                }
                            </div>
                            <div className="pagination-maincontent">
                                {
                                    dataProduct.length !== 0 && (
                                        <Pagination defaultPageSize={1} defaultCurrent={1} total={tongSoTrang} onChange={(page) => {
                                            LayTatCaSanPhamTheoIDShop(shopID, page - 1);
                                        }}>
                                        </Pagination>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThongTinGianHang
