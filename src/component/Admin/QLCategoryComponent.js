import React, { Fragment, useState, useEffect } from 'react';
import { axios } from '../../config/constant';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import { Header, Footer } from '../index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input, Row, Col, Button, Pagination,Form,Upload } from 'antd';
import { Table } from 'reactstrap';
import { storage } from '../../firebase/firebase'
import { UploadOutlined } from '@ant-design/icons';
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
    const [dataThem, setThemDanhMuc] = useState({
        ten: '',
        img : '',
        ngayTao: ''
    });
    const [dataSua, setDataSua] = useState({
        _id: '',
        ten: '',
        img: ''
      
    });
    const [dataDanhMucDuocChon, setDataDanhMucDuocChon] = useState({
        _id: '',
        ten: '',
        img: '',
      
    });
  
    // ham them danh muc => post
    async function ThemCategory() { 
        setSpinnerThemCategory(1);
        let res = await axios.post('/danhmuc-them', {
            ten: dataThem.ten,
            icon: dataThem.icon,
            img: dataThem.img
        });

        if (res.data.status === 'success') {
            alert("Thêm thành công");
            setReloadDatabase(true);
        } else {
            alert("Thêm thất bại");
            setReloadDatabase(false);
        }
    }
    async function SuaCategory() {

        let res = await axios.put('/danhmuc-sua', {
            _id: dataSua._id,
            ten: dataSua.ten,
            img: dataSua.img
           
        });
        if (res.data.status === 'success') {
            alert("Sửa thành công");
            setReloadDatabase(true);
        } else {
            alert("Sửa thất bại");
            setReloadDatabase(false);
        }
    }
    async function XoaDanhMuc(id) {
        console.log(id);
        let res = await axios.delete('/danhmuc-xoa?id=' + id);
        if (res.data.status === 'thanhcong') {
            alert('Xóa thành công')
            setReloadDatabase(true);
        } else {
            alert('Xóa thất bại')
            setReloadDatabase(false);
        }
    }
    async function TimKiemSanPham() {
        let res = await axios.get('/danhmuc-timkiem?timkiem=' + dataTimKiem);
        if (res.data.status === 'thanhcong') {
            setDataDanhMuc(res.data.data);
        } else {
            alert('ket noi Api danh muc khong thanh cong');
        }
    }
    async function LayDanhSachDanhMucTheoPage(page) {
        let res = await axios.get('/danhmuc/'+page);
        if (res.data.status === 'thanhcong') {
            setDataDanhMuc(res.data.data);
            console.log(setDataDanhMuc);
            setTongSoTrang(res.data.soTrang);
        } else {
            alert('ket noi Api danh muc khong thanh cong');
        }
    }
    console.log(dataDanhMuc);
    console.log(tongSoTrang);


    async function LayDataMotDanhMuc(_id) {
        let res = await axios.get('/danhmuc-item?id=' + _id);
        if (res.data.status === 'thanhcong') {
            setDataDanhMucDuocChon({
                _id: res.data.data._id,
                ten: res.data.data.ten,
                img: res.data.data.img,
              
            })
        } else {
            alert('ket noi Api danh muc khong thanh cong');
        }
    }
    async function KhoaCategory(id) {
        let res = await axios.put('/danhmuc-khoa', {
            id: id
        })
        if (res.data.status === 'thanh cong') {
            alert('khoa thanh cong');
        } else {
            alert('khoa that bai');
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
    useEffect(() => {
        setDataSua({
            _id: dataDanhMucDuocChon._id,
            ten: dataDanhMucDuocChon.ten,
            img: dataDanhMucDuocChon.img,
           
        })
    }, [dataDanhMucDuocChon])
    return (
        <Fragment>
            <div class="container" style={{ marginBottom: '10px' }}>
                <div class="row">
                    <div class="col-sm">
                        <Row justify={'center'}>
                            <Col span={24}>
                                {/* Modal Thêm */}
                                <div className="modal fade" id="exampleModalLong" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLongTitle">Thêm danh mục</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Tên danh mục</label>
                                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="nhập  tên" onChange={(e) => {
                                                            setThemDanhMuc({
                                                                ...dataThem,
                                                                ten: e.target.value
                                                            })
                                                        }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Link hình</label>
                                                        <input value={dataThem.img} size="large"  className="form-control" placeholder="Nhập link ảnh" onChange={(e) => {
                                                             setThemDanhMuc({...dataThem, img: e.target.value})
                                                              }}
                                                          />
                                                    
                                                    </div>


                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                                                <button type="button" className="btn btn-primary" onClick={(e) => {
                                                    e.preventDefault();
                                                    ThemCategory()
                                                }}>Xác nhận</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Modal Sửa */}
                                <div className="modal fade" id="exampleModalLong2" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLongTitle">Sửa danh mục</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Tên</label>
                                                        <input value={dataSua.ten} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="nhập  tên" onChange={(e) => {
                                                            setDataSua({
                                                                ...dataSua,
                                                                ten: e.target.value
                                                            })
                                                        }} />
                                                        <small id="emailHelp" className="form-text text-muted">PandaShop</small>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputPassword1">Link ảnh</label>
                                                        <input value={dataSua.img} size="large"  className="form-control" placeholder="Nhập link ảnh" onChange={(e) => {
                                                             setDataSua({
                                                                ...dataSua, 
                                                                img: e.target.value
                                                                })
                                                              }}
                                                          />
                                                    </div>
                                                   
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                                                <button type="button" className="btn btn-primary" onClick={(e) => {
                                                    e.preventDefault();
                                                    SuaCategory()
                                                }}>Xác nhận</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* form hien thi */}
                               
                                <Button data-toggle="modal" data-target="#exampleModalLong"> Thêm </Button>
                                <Table bordered style={{ marginTop: '10px' }}>
                                    <thead>
                                        <tr>
                                            <th> Tên danh mục </th>
                                            <th> Ảnh </th>
                                            <th> Ngày tạo </th>
                                            <th> Thao tác </th>
                                        </tr>
                                    </thead>
                                    {
                                        dataDanhMuc.map((item, index) => {
                                            return <tbody>
                                                <tr>
                                                    <td>{item.ten}</td>
                                                    <td><img className="img-responsive" src={item.img} style={{ height: '10%', width: '10%', maxWidth: '100%', objectFit: 'cover' }}></img></td>
                                                    <td>{hamChuyenDoiNgay(new Date(item.ngayTao))}</td>
                                                    <td>
                                                       
                                                        <Button
                                                            style={{ marginLeft: '20px', maxWidth:'50px' }}
                                                            data-toggle="modal"
                                                            data-target="#exampleModalLong2"
                                                            onClick={() => {
                                                                LayDataMotDanhMuc(item._id);
                                                            }}>
                                                             <i class="fas fa-wrench"></i>
                                                        </Button>
                                                        <Button
                                                            style={{ marginLeft: '20px', maxWidth:'50px' }}
                                                            onClick={() => {
                                                                XoaDanhMuc(item._id);
                                                            }}>
                                                              <i class="fa fa-trash"></i>
                                                        </Button> 
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
