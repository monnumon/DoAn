/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axios } from '../../config/constant';
import { Affix } from 'antd';
import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        <div class="footer">
            <footer className="page-footer font-small stylish-color-dark pt-4" style={{ backgroundColor: '#f0f2f4' }}>
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="col-md-4 mx-auto">
                        </div>
                    </div>
                </div>
                <hr />
                <ul className="list-unstyled list-inline text-center py-2">
                    {/* <p className={'font-weight-bold'} style={{fontSize:13,whiteSpace: 'pre-wrap'}}>{footerReducer.thongTinTinh.ghiChu}</p> */}
                </ul>
                <hr />
                <ul className="list-unstyled list-inline text-center">
                    <li className="list-inline-item">
                        <a className="btn-floating btn-fb mx-1">
                            <i className="fab fa-facebook-f"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-tw mx-1">
                            <i className="fab fa-twitter"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-gplus mx-1">
                            <i className="fab fa-google-plus-g"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-li mx-1">
                            <i className="fab fa-linkedin-in"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-dribbble mx-1">
                            <i className="fab fa-dribbble"> </i>
                        </a>
                    </li>
                </ul>
                {/* <div className="footer-copyright text-center h5">Đang online: {dangOnlineReducer.dangTruyCap}</div>
            <div className="footer-copyright text-center h5">Tổng lượt truy cập: {dangOnlineReducer.tongLuotTruyCap}</div>
            <div className="footer-copyright text-center py-3">© 2020 Copyright {footerReducer.thongTinTinh.tenBrand}</div> */}
            </footer>
        </div>

    );
}