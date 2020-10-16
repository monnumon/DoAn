import React, { Fragment, useState, useEffect } from 'react';
import { axios } from '../../config/constant';
import { Avatar, Button, Col, Row } from "antd";
import { Container } from "reactstrap";
import { green100 } from 'material-ui/styles/colors';   
export default function BodyChitietsanpham(props) {

    useEffect(() => {
    }, []);

    return (
        <Fragment>
            <div className="container" style={{ marginTop: '20px' }}>
                <Row style={{ backgroundColor: green100, paddingTop: 7, paddingBottom: 3 }}>
                    <Container>
                        <div className={'h5 font-weight-bold text-dark'}>THÔNG TIN SHOP</div>
                    </Container>
                </Row>
                <Row>
                    hiển thị thông tin shop
                </Row>
             
                <Row style={{ backgroundColor: green100, paddingTop: 7, paddingBottom: 3 }}>
                    <Container>
                        <div className={'h4 font-weight-bold text-dark'}>CHI TIẾT SẢN PHẨM </div>
                    </Container>
                </Row>
                <Row>
                    hiển thị thông tin của sản phẩm
                </Row>
              
                <Row style={{ backgroundColor: green100, paddingTop: 7, paddingBottom: 3 }}>
                    <Container>
                        <div className={'h4 font-weight-bold text-dark'}>ĐÁNH GIÁ SẢN PHẨM</div>
                    </Container>
                </Row>
               
            </div>

        </Fragment>
    );
}

