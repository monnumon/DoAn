import React, { Fragment, useState, useEffect } from 'react';
import { axios } from '../../config/constant';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import { Header, Footer } from '../index';
import { QLCategoryComponent, QLDoanhThuComponent, QLBaiVietComponent, QLBlogComponent, ThongTinGianHang,DanhSachSanPham,ThemSanPham } from '../index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu, Row, Col } from 'antd';
const { SubMenu } = Menu;
function MenuGianHang() {
    const match = useRouteMatch();
    return (
        <Fragment>
            <Row >
                <Col xs={7} sm={6} md={4} lg={4}>
                    <Menu defaultOpenKeys={['sub1']}
                        mode="inline" theme="light"
                    >
                   
                        <SubMenu key="sub1" title={<span><i className="far fa-address-card"></i>Thông tin gian hàng</span>}>
                            <Menu.Item >
                                <Link to={`${match.url}/thongtingianhang`} style={{ textDecoration: 'none' }}>Shop của bạn</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><i className="fab fa-cc-paypal"></i>Quản lý giao dich</span>}>

                        </SubMenu>
                        <SubMenu key="sub4" title={<span><i className="fas fa-dragon"></i>Quản lý sản phẩm</span>}>
                        <Menu.Item >
                                <Link to={`${match.url}/quanlysanpham`} style={{ textDecoration: 'none' }}>Danh sách sản phẩm</Link>
                            </Menu.Item>
                            <Menu.Item >
                                <Link to={`${match.url}/themsanpham`} style={{ textDecoration: 'none' }}>Thêm sản phẩm</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5" title={<span><i className="fas fa-cart-arrow-down"></i>Quản lý doanh thu</span>}>
                            <Menu.Item>
                                <Link to={`${match.url}/qldoanhthu`} style={{ textDecoration: 'none' }}>Quản lý doanh thu</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={`${match.url}/qldoanhthu`} style={{ textDecoration: 'none' }}>Quản lý doanh thu</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={`${match.url}/qldoanhthu`} style={{ textDecoration: 'none' }}>Quản lý doanh thu</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={`${match.url}/qldoanhthu`} style={{ textDecoration: 'none' }}>Quản lý doanh thu</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub6" title={<span><i className="fas fa-cogs"></i>Quản lý cài đặt</span>}>

                        </SubMenu>
                    </Menu>
                </Col>
                <Col xs={12} sm={18} md={20} lg={20}>
                    <Switch>
                        <Route exact path={`${match.url}/thongtingianhang`} component={ThongTinGianHang}></Route>
                        <Route exact path={`${match.url}/qldanhmuc`} component={QLCategoryComponent}></Route>
                        <Route exact path={`${match.url}/qldoanhthu`} component={QLDoanhThuComponent}></Route>
                        <Route exact path={`${match.url}/qlbaiviet`} component={QLBaiVietComponent}></Route>
                        <Route exact path={`${match.url}/qlblog`} component={QLBlogComponent}></Route>
                        <Route exact path={`${match.url}/quanlysanpham`} component={DanhSachSanPham}></Route>
                        <Route exact path={`${match.url}/themsanpham`} component={ThemSanPham}></Route>
                    </Switch>
                </Col>
            </Row >
        </Fragment>
    )
}

export default MenuGianHang
