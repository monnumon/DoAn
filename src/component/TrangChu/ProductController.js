import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap'
import { Card, Col, Button, Row, Skeleton, Tooltip } from "antd";


function ProductController(props) {
    var dataSanPham = props.dataSanPham;
    const { Meta } = Card;
    return (
        <Fragment>
            {/* danh sach san pham hot */}
            <Container style={{ marginTop: '10px' }}>
                <Col>
                    <Row>
                        <div className='row'
                            style={{ marginLeft: '10px' }}>
                            <i className="fa fa-book fa-2x"
                                style={{ marginTop: '15px' }}></i>
                            <div style={{ border: '2px solid Tomato' }} className='col'>
                           
                                <h2 style={{ color: 'MediumSeaGreen', fontFamily: 'Sofia' }}> SẢN PHẨM DÀNH CHO BẠN </h2>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        {
                            dataSanPham.map((item) => {
                                return (
                                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" key={item._id} className={'itemDanhMuc h-100 '}>
                                        <Link to={"/ChiTietSanPham/" + item._id}>
                                            <Card
                                                hoverable
                                                style={{ width: 240, marginTop: '10px', marginRight: '10px' }}
                                            >
                                                {/* truyen id san pham di */}
                                                <Link to={"/ChiTietSanPham/" + item._id}>
                                                    <img alt="hinh anh" src={item.hinh} style={{ width: '100%', height: '100%' }}></img>
                                                </Link>
                                                <Meta title={item.ten} />
                                                <div>
                                                <span class="_3fVV-h">VNĐ</span>
                                                <Meta title={item.gia} /> 
                                                </div>
                                            </Card>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </Row>
                    <Row >
                        <Col span={12} offset={12}>
                            <Link to={'/'}>
                                <Button style={{ justifyContent: 'center', marginTop: '15px', alignContent: 'center' }}> Xem Thêm </Button>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Container>
            {/* danh sach san pham danh cho ban */}
            <Container style={{ marginTop: '10px' }}>
                <Col>
                    <Row>
                        <div className='row' style={{ marginLeft: '10px' }}>

                            <i className="fa fa-laptop fa-2x" style={{ marginTop: '15px' }}></i>

                            <div style={{ border: '2px solid Tomato' }} className='col'>
                                <mark>Các sản phẩm hot</mark>
                                <h2 style={{ color: '#FF1493', fontFamily: 'Sofia' }}> SẢN PHẨM HOT </h2>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        {
                            dataSanPham.map((item) => {
                                return (
                                    <div class="col-sm-6" key={item._id} className={'itemDanhMuc h-100 '}>
                                        <Link to={"/ChiTietSanPham/" + item._id}>
                                            <Card
                                                hoverable
                                                style={{ width: 240, marginTop: '10px', marginRight: '10px' }}
                                            >
                                                {/* truyen id san pham di */}
                                                <Link to={"/ChiTietSanPham/" + item._id}>
                                                    <img alt="hinh anh" src={item.hinh} style={{ width: '100%', height: '100%' }}></img>
                                                </Link>
                                                <Meta title={item.ten}/>
                                                <span class="_3fVV-h">VNĐ</span>
                                                <Meta title={item.gia} />
                                            </Card>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </Row>
                    <Row >
                        <Col style={{ marginBottom: '20px' }} span={12} offset={12}>
                            <Link to={'/'}>
                                <Button style={{ justifyContent: 'center', marginTop: '15px', alignContent: 'center' }}> Xem Thêm </Button>
                            </Link>
                        </Col>
                    </Row>
                </Col>

            </Container>

        </Fragment>

      
    )
}


export default ProductController
