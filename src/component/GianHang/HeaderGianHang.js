import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { axios } from '../../config/constant';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarText, Container } from 'reactstrap';
import { Button, Modal, Form } from 'react-bootstrap';
import { Row, Affix } from "antd";
import { ThongTinKhachHang } from '../index';
import { useDispatch, useSelector } from 'react-redux';
import { DangNhap, TimKiem } from '../index'
function HeaderGianHang() {
    return (
        <Fragment>
            <Affix offsetTop={0}>
                <Navbar color="light" light expand="md" style={{ backgroundImage: 'https://avatarfiles.alphacoders.com/114/thumb-114466.jpg' }}>
                    <Container>
                        <div className={'d-none d-md-block'}>
                            <Link to='/'>
                            <div className={'navbar-brand'} style={{ marginTop: 17, fontFamily: 'Sofia' }}><h1><i className="fas fa-store" /> PandaShop</h1></div>
                            </Link>
                        </div>
                        <NavbarToggler  />
                        <Collapse  navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                </NavItem>
                            </Nav>
                            <NavbarText>
                               
                            </NavbarText>
                        </Collapse>
                    </Container>
                </Navbar>
            </Affix>
        </Fragment>
    )
}

export default HeaderGianHang
