import React, { useState, useEffect, Fragment } from 'react';
import { Tabs, Pagination, Select, Input, message, Popconfirm, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Row, Col, Table, Image, Spinner } from 'react-bootstrap';
import { axios } from '../../config/constant';
import { useCookies } from 'react-cookie';
import { CheckOutlined, EditOutlined, DeleteOutlined, LockOutlined, UnlockOutlined } from '@ant-design/icons';

export default function BanHang_DanhSachSanPham() {
    const [cookies, setCookie] = useCookies();
    const [shopID, setShopID] = useState(cookies.shopID);
    const { TabPane } = Tabs;
    const { Option } = Select;
    const setSpinnerReducer = useSelector(state => state.setSpinner);
    const reloadDatabaseReducer = useSelector(state => state.reloadDatabase);
    const [reloadDatabase, setReloadDatabase] = useState(false);
    const dispatch = useDispatch();
    const [dataSanPham, setDataSanPham] = useState([]);
    const [tongSoTrang, setTongSoTrang] = useState(0);
    const [dataSearch, setDataSearch] = useState('');
    const [trangThaiOption, setTrangThaiOption] = useState(0);
    const [pageNow, setPageNow] = useState(1);
    function hamChuyenDoiNgay(date) {
        var strDate = '';
        var ngay = date.getDate().toString();
        var thang = (date.getMonth() + 1).toString();
        var nam = date.getFullYear().toString();

        strDate = ngay + '/' + thang + '/' + nam;
        return strDate;
    }
    const [dataSuaSP, setDataSuaSP] = useState({
        _id: '',
        ten: '',
        hinh: '',
        gia: '',   
        mota: '',
        idCategory: '',
        idShop: '',
        isDelete: false,
        isAccept: false

    });
    let history = useHistory();

    async function XoaSanPham(id) {
        console.log(id);
        let res = await axios.delete('/sanpham-xoa?id=' + id);
        if (res.data.status === 'thanhcong') {
            alert('Xóa thành công')
            setReloadDatabase(true);
        } else {
            alert('Xóa thất bại')
            setReloadDatabase(false);
        }
    }






//////////////////////////
    async function LayDataProductTheoIDShop_TheoTrang(page, idShop) {
        dispatch({ type: 'SPINNER_DATABASE' });
      
        let resData = await axios.get('/sanpham-shop/' + page + '?idShop=' + idShop);
        if (resData.data.status === 'success') {
            setDataSanPham(resData.data.data);
            console.log(setDataSanPham);
            setTongSoTrang(resData.data.soTrang);
            dispatch({ type: 'NO_SPINNER_DATABASE' });
        } else {
            message.error("Lấy data sản phẩm thất bại");
        }
    }

    async function LayDataProductTheoIDShop_ChuaDuyet_TheoTrang(page, idShop) {
        dispatch({ type: 'SPINNER_DATABASE' });
        let resData = await axios.get('hethong/products-shop-chuaduyet/' + page + '?idShop=' + idShop);
        if (resData.data.status === 'success') {
            setDataSanPham(resData.data.data);
            setTongSoTrang(resData.data.soTrang);
            dispatch({ type: 'NO_SPINNER_DATABASE' });
        } else {
            message.error("Lấy data sản phẩm chưa duyệt thất bại");
        }
    }

    async function LayDataProductTheoIDShop_DaDuyet_TheoTrang(page, idShop) {
        dispatch({ type: 'SPINNER_DATABASE' });
        let resData = await axios.get('hethong/products-shop-daduyet/' + page + '?idShop=' + idShop);
        if (resData.data.status === 'success') {
            setDataSanPham(resData.data.data);
            setTongSoTrang(resData.data.soTrang);
            dispatch({ type: 'NO_SPINNER_DATABASE' });
        } else {
            message.error("Lấy data sản phẩm đã duyệt thất bại");
        }
    }

    async function LayDataProductTheoIDShop_DaKhoa_TheoTrang(page, idShop) {
        dispatch({ type: 'SPINNER_DATABASE' });
        let resData = await axios.get('hethong/products-shop-dakhoa/' + page + '?idShop=' + idShop);
        if (resData.data.status === 'success') {
            setDataSanPham(resData.data.data);
            setTongSoTrang(resData.data.soTrang);
            dispatch({ type: 'NO_SPINNER_DATABASE' });
        } else {
            message.error("Lấy data sản phẩm đã khóa thất bại");
        }
    }

    async function LayDataProductTheoIDShop_ChuaKhoa_TheoTrang(page, idShop) {
        dispatch({ type: 'SPINNER_DATABASE' });
        let resData = await axios.get('hethong/products-shop-chuakhoa/' + page + '?idShop=' + idShop);
        if (resData.data.status === 'success') {
            setDataSanPham(resData.data.data);
            setTongSoTrang(resData.data.soTrang);
            dispatch({ type: 'NO_SPINNER_DATABASE' });
        } else {
            message.error("Lấy data sản phẩm chưa khóa thất bại");
        }
    }

    async function LayDataProductSearch(dataSearch, page, shopID) {
        dispatch({ type: 'SPINNER_DATABASE' });
        let resData = await axios.get('hethong/products-search/' + page + '?search=' + dataSearch + '&shopID=' + shopID);
        if (resData.data.status === 'success') {
            setDataSanPham(resData.data.data);
            setTongSoTrang(resData.data.soTrang);
            dispatch({ type: 'NO_SPINNER_DATABASE' });
        } else {
            message.error("Lấy data sản phẩm theo search thất bại");
        }
    }



    async function KhoaProduct(productID) {
        let resData = await axios.put('hethong/products-khoasanpham', {
            id: productID
        });

        if (resData.data.status === 'success') {
            dispatch({ type: 'RELOAD_DATABASE' });
            message.success("Khóa thành công");
        } else {
            dispatch({ type: 'NO_RELOAD_DATABASE' });
            message.error("Khóa thất bại");
        }
    }

    async function MoKhoaProduct(productID) {
        let resData = await axios.put('hethong/products-mokhoasanpham', {
            id: productID
        });

        if (resData.data.status === 'success') {
            dispatch({ type: 'RELOAD_DATABASE' });
            message.success("Mở khóa thành công");
        } else {
            dispatch({ type: 'NO_RELOAD_DATABASE' });
            message.error("Mở khóa thất bại");
        }
    }

    useEffect(() => {
        LayDataProductTheoIDShop_TheoTrang(pageNow - 1, shopID);
    }, [shopID])

    useEffect(() => {   
            LayDataProductTheoIDShop_TheoTrang(pageNow - 1, shopID);         
        },
     [dataSanPham]);

    useEffect(() => {
        if (trangThaiOption === 0) {
            LayDataProductTheoIDShop_TheoTrang(pageNow - 1, shopID);
        }
        if (trangThaiOption === 1) {
            LayDataProductTheoIDShop_DaDuyet_TheoTrang(pageNow - 1, shopID);
        }
        if (trangThaiOption === 2) {
            LayDataProductTheoIDShop_ChuaDuyet_TheoTrang(pageNow - 1, shopID);
        }
        if (trangThaiOption === 3) {
            LayDataProductTheoIDShop_DaKhoa_TheoTrang(pageNow - 1, shopID);
        }
        if (trangThaiOption === 4) {
            LayDataProductTheoIDShop_ChuaKhoa_TheoTrang(pageNow - 1, shopID);
        }
    }, [trangThaiOption])

    return (
        <Fragment>
            <Tabs size='large' style={{ width: '100%' }}>
                <TabPane key={1} tab="Danh sách sản phẩm">
                    <div className="col" style={{ padding: 20 }}>
                        <div className="col" style={{ width: '100%' }}>
                            <Form>
                                <Row>
                                    <Col>
                                        <Input size='large' placeholder='ID,Tên sản phẩm' onChange={(e) => {
                                            setDataSearch(e.target.value);
                                        }}></Input>
                                    </Col>
                                    <Col>
                                        <Button type="primary" style={{ width: 200, height: 40 }} onClick={() => {
                                            LayDataProductSearch(dataSearch, 0, shopID);
                                            setPageNow(1);
                                        }}>
                                            <i className="fa fa-search"></i> &nbsp; Tìm kiếm
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Select style={{ width: 300 }} size='large' defaultValue={0} onChange={(value) => {
                                            setTrangThaiOption(value);
                                        }}>
                                            <Option value={0}>Tất cả</Option>
                                            <Option value={1}>Đã duyệt</Option>
                                            <Option value={2}>Chưa duyệt</Option>
                                            <Option value={3}>Đã khóa</Option>
                                            <Option value={4}>Chưa khóa</Option>
                                        </Select>
                                    </Col>
                                    <Col>
                                        <Button type="primary" style={{ width: 200, height: 40 }} onClick={() => {
                                            history.push('/ShopCuaBan/themsanpham');
                                        }}>
                                            Tạo mới +
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <div className="col" style={{ width: '100%', marginTop: 20 }}>
                            <Table bordered hover responsive>
                            <thead>
                                        <tr>
                                            <th> Tên sản phẩm </th>
                                            <th> Gía </th>
                                            <th> Ảnh </th>
                                            <th> Số lượng </th>
                                            <th> Ngày tạo </th>
                                            <th> Thao tác </th>
                                        </tr>
                                    </thead>
                                    {
                                        dataSanPham.map((item, index) => {
                                            return <tbody>
                                                <tr>
                                                    <td>{item.ten}</td>
                                                    <td>{item.gia}</td>
                                                
                                                    <td><img className="img-responsive" src={item.hinh} style={{ height: '10%', width: '10%', maxWidth: '100%', objectFit: 'cover' }}></img></td>
                                                    <td>{item.soluong}</td>
                                                    <td>{hamChuyenDoiNgay(new Date(item.ngaytao))}</td>
                                                    <td>
                                                        <Button
                                                            style={{ marginLeft: '20px', maxWidth:'50px' }}
                                                            onClick={() => {
                                                               XoaSanPham(item._id);
                                                            }}>
                                                                   <i class="fa fa-trash"></i>

                                                        </Button> 
                                                        <Button
                                                            style={{ marginLeft: '20px', maxWidth:'50px' }}
                                                            data-toggle="modal"
                                                            data-target="#exampleModalLong2"
                                                            onClick={() => {
                                                             
                                                            }}>
                                                           <i class="fas fa-wrench"></i>
                                                        </Button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        })
                                    }
                                </Table>
                           
                            {
                                setSpinnerReducer === 1 && (
                                    <Spinner animation="border" role="status" style={{ marginLeft: 700 }}>
                                        <span className="sr-only">Loading...</span>
                                    </Spinner>
                                )
                            }
                            <Pagination defaultPageSize={1} current={pageNow} total={tongSoTrang} onChange={(page) => {
                                dispatch({ type: 'SPINNER_DATABASE' });
                                setPageNow(page)
                                if (dataSearch === '') {
                                    if (trangThaiOption === 0) {
                                        LayDataProductTheoIDShop_TheoTrang(page - 1, shopID);
                                    }
                                    if (trangThaiOption === 1) {
                                        LayDataProductTheoIDShop_DaDuyet_TheoTrang(page - 1, shopID);
                                    }
                                    if (trangThaiOption === 2) {
                                        LayDataProductTheoIDShop_ChuaDuyet_TheoTrang(page - 1, shopID);
                                    }
                                    if (trangThaiOption === 3) {
                                        LayDataProductTheoIDShop_DaKhoa_TheoTrang(page - 1, shopID);
                                    }
                                    if (trangThaiOption === 4) {
                                        LayDataProductTheoIDShop_ChuaKhoa_TheoTrang(page - 1, shopID);
                                    }
                                } else {
                                    LayDataProductSearch(dataSearch, page - 1, shopID);
                                }

                            }}>
                            </Pagination>
                        </div>
                    </div>
                </TabPane>
            </Tabs>
        </Fragment>
    )
}
