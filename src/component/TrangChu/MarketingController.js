import React, { Fragment, useState, useEffect } from 'react';
import { Container } from 'reactstrap'
import { Card, Col, Divider, Row, Skeleton, Tooltip } from "antd";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const { Meta } = Card;
export default function MarketingController(props) {
    const dataDanhMuc = props.dataDanhMuc;
    const settings = {
        dots: false,
        slidesToShow: 7,
        slidesToScroll: 2,
        speed: 200,
        //swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1324,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 2,
                    speed: 200,

                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    speed: 200,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    speed: 200,
                }
            }
        ]
    };

    return (
        <Fragment>
            <Container style={{ marginTop: '10px' }}>
                <Row>
                    <div className='row' style={{ marginLeft: '10px' }}>
                        <i className="fa fa-bell fa-2x" style={{ marginTop: '15px' }}></i>
                    
                        <div style={{ border: '2px solid Tomato' }} className='col'>
                         
                            <h2 style={{ color: '#FF8C00', fontFamily: 'Sofia' }}> Danh Mục </h2>
                        </div>
                    </div>
                </Row>
                <Slider {...settings}>
                    {
                        dataDanhMuc.map((item) => {
                            return (
                                <div key={item._id} className={'itemDanhMuc h-100 '}>
                                    <Link to={`/timkiem?danhmuc=${item._id}`}>
                                        <Card
                                            hoverable
                                            cover={<img style={{ height: 170 }} alt="example"
                                                src={item.img} />}
                                        >
                                            <Tooltip placement="topLeft" title={item.ten}>
                                                <Meta title={item.ten} />
                                            </Tooltip>
                                        </Card>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </Slider>
            </Container>
        </Fragment>
    )
}

