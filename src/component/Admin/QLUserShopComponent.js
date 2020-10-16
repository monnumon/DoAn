import React, { Fragment, useState, useEffect } from 'react';
import { axios } from '../../config/constant';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import { Header, Footer } from '../index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input, Row, Col, Button, Pagination,Form,Upload } from 'antd';
import { Table } from 'reactstrap';
import { storage } from '../../firebase/firebase'
import { UploadOutlined } from '@ant-design/icons';
import { LockOutlined, UnlockOutlined } from '@ant-design/icons';
function QLCategoryComponent() {
    const [dataDanhMuc, setDataDanhMuc] = useState([]);
    const [reloadDatabase, setReloadDatabase] = useState(false);
    const [show, setShow] = useState(false);
    const [dataTimKiem, setDataTimKiem] = useState('');
    const [tongSoTrang, setTongSoTrang] = useState(0);
    const [pageNow, setPageNow] = useState(1);
    const [spinnerThemCategory, setSpinnerThemCategory] = useState(-1);
    function hamChuyenDoiNgay(date) {
        var strDate = '';
        var ngay = date.getDate().toString();
        var thang = (date.getMonth() + 1).toString();
        var nam = date.getFullYear().toString();

        strDate = ngay + '/' + thang + '/' + nam;
        return strDate;
    }
   
  
    // ham them danh muc => post
  
    
   
   
    async function LayDanhSachDanhMucTheoPage(page) {
        let res = await axios.get('/allshop/'+page);
        if (res.data.status === 'success') {
            setDataDanhMuc(res.data.data);
            console.log(setDataDanhMuc);
            setTongSoTrang(res.data.soTrang);
        } else {
            alert('ket noi Api danh muc khong thanh cong');
        }
    }
   

    console.log(dataDanhMuc);
    console.log(tongSoTrang);

    async function MoKhoaShop(shopID) {
        let res = await axios.put('/shop-mokhoashop', {
            id: shopID
        })
        if (res.data.status === 'success') {
            alert('duyệt thành công');
            setReloadDatabase(true);
        } else {
            alert('duyệt thất bại');
        }
    }

    async function KhoaShop(shopID) {
        let res = await axios.put('/shop-khoashop', {
            id: shopID
        })

        if (res.data.status === 'success') {
            alert('khóa thành công');
            setReloadDatabase(true);
        } else {
            alert('duyệt thất bại');
        }
    }

  
   
    useEffect(() => {
        if (reloadDatabase) {
            LayDanhSachDanhMucTheoPage();
            setReloadDatabase(false);
        }
    }, [reloadDatabase])


        useEffect(() => {
        LayDanhSachDanhMucTheoPage(pageNow - 1);
    }, [dataDanhMuc]);
    //set giá trị default cho giá trị sửa
   
    return (
        <Fragment>
            <div class="container" style={{ marginBottom: '10px' }}>
                <div class="row">
                    <div class="col-sm">
                        <Row justify={'center'}>
                            <Col span={24}>
                                
                             
                               
                        
                                {/* form hien thi */}
                                <Table bordered style={{ marginTop: '10px' }}>
                                    <thead>
                                        <tr>
                                            <th> Tên Shop </th>
                                            <th> Tên chủ Shop </th>
                                            <th> Trạng thái </th>
                                            <th> Thao tác </th>
                                        </tr>
                                    </thead>
                                    {
                                        dataDanhMuc.map((item, index) => {
                                            return <tbody>
                                                <tr>
                                                    <td>{item.thongtinshop.ten}</td>
                                                    <td>{item.ten}</td>
                                                    <td style={{ width: 150 }}><span style={{ color: item.thongtinshop.isAllow === false ? 'red' : 'blue' }}><strong>{item.thongtinshop.isAllow === false ? 'Chưa duyệt' : 'Đã duyệt'}</strong></span></td>
                                                  
                                                    <td>
                                                         <center>
                                                    <Button size='large' type="primary" icon={item.thongtinshop.isAllow ? <UnlockOutlined /> : <LockOutlined />} onClick={() => {
                                                        if (item.thongtinshop.isAllow) {
                                                            KhoaShop(item.thongtinshop.idShop);
                                                        } else {
                                                           
                                                           MoKhoaShop(item.thongtinshop.idShop);
                                                        }
                                                    }} />
                                                </center>
                                                       
                                                    </td>
                                                </tr>
                                            </tbody>
                                        })
                                    }
                                </Table>

                            <Pagination defaultPageSize={1} current={pageNow} total={tongSoTrang} onChange={(page) => {
                                  setPageNow(page);
                                  LayDanhSachDanhMucTheoPage(page - 1);
                            }}></Pagination>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default QLCategoryComponent;
