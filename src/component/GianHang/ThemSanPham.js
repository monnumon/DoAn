import React, { Fragment, useState, useEffect } from 'react';
import { Input, Row, Col, Button, Pagination ,Upload,message,Form,Select,Tabs} from 'antd';
import { axios } from '../../config/constant';
import { UploadOutlined } from '@ant-design/icons';
import { Modal, Spinner } from 'react-bootstrap';
import { storage } from "../../firebase/firebase";
import { ConsoleSqlOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useCookies } from 'react-cookie';
import { QuillEditor } from '../index'





 function ThemSanPham(){
    const [disableFieldBaoHanh, setDisableFieldBaoHanh] = useState(false);
    const { Option } = Select;
    const { TabPane } = Tabs;
    const [files, setFiles] = useState([]) 
    const [dataSanPham, setDataSanPham] = useState([]);
    const [countAnhDaUploadThanhCong, setCountAnhDaUploadThanhCong] = useState(0);
    const [countAnhDaUploadThanhCong_Chinh, setCountAnhDaUploadThanhCong_Chinh] = useState(0);
    const [countAnhDaUploadThanhCong_Phu, setCountAnhDaUploadThanhCong_Phu] = useState(0);
    const [firstTime, setFirstTime] = useState(true);
    const [firstTime3, setFirstTime3] = useState(true);
    const [firstTime4, setFirstTime4] = useState(true);
    const [reloadDatabase, setReloadDatabase] = useState(false);
    const [cookies, setCookie] = useCookies();
    const [shopID, setShopID] = useState(cookies.shopID);
    const [dataCategory, setDataCategory] = useState([]);
    const [dataPhanLoai, setDataPhanLoai] = useState({
        mauSac: {
            mauSac1: '',
            mauSac2: '',
            mauSac3: '',
            mauSac4: ''
        },
        size: {
            size1: '',
            size2: '',
            size3: '',
            size4: ''
        }
    })
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 4, span: 16 },
    };

    const [dataThemSP, setDataThemSP] = useState({
        ten: '',
        img: {
            chinh: '',
            phu: []
        },
        gia: 0,
     
        moTa: '',
        moTaNganGon: [],
        soSao: 0,
        giaTriGiamGia: 0,
        soLuong: 0,
        thongTinBaoHanh: {
            baoHanh: true,
            loaiBaoHanh: '',
            thoiGianBaoHanh: '',
            donViBaoHanh: ''
        },
        ngayTao: new Date(),
     
        idCategory: '',
        idShop: '',
        
        isAccept: false,
        isLock: false,
        isDelete: false

    });
    const [imageAsFile, setImageAsFile] = useState([]);
    const [imageAsFile_Chinh, setImageAsFile_Chinh] = useState([]);
    const [imageAsFile_Phu, setImageAsFile_Phu] = useState([]);
    const [imageAsUrl, setImageAsUrl] = useState([]);
    const [imageAsUrl_Chinh, setImageAsUrl_Chinh] = useState([]);
    const [imageAsUrl_Phu, setImageAsUrl_Phu] = useState([]);
    const [dataThem, setDataThem] = useState({
        ten: '',
        xuatXu: '',
        img: ''
    });
   

   
    const handleChange = (e) => {
        var soLuongFile = e.target.files.length;
        var listFile = [];
        var listUrl = [];
        for (let index = 0; index < soLuongFile; index++) {
            listFile.push(e.target.files[index]);
        }

        setImageAsFile(listFile);

        if (listFile.length === 0) {
            console.log('Không có file nào được upload');
        } else {
            for (let index = 0; index < soLuongFile; index++) {
                console.log('start of upload');
                // async magic goes here...
                if (listFile[index] === '') {
                    console.error(`not an image, the image file is a ${typeof (listFile[index])}`);
                }
                const uploadTask = storage.ref(`/images/${listFile[index].name}`).put(listFile[index]);
                uploadTask.on('state_changed',
                    (snapShot) => {
                        //takes a snap shot of the process as it is happening
                        console.log(snapShot);
                    }, (err) => {
                        //catches the errors
                        console.log(err)
                    }, () => {
                        // gets the functions from storage refences the image storage in firebase by the children
                        // gets the download url then sets the image from firebase as the value for the imgUrl key:
                        storage.ref('images').child(listFile[index].name).getDownloadURL()
                            .then(fireBaseUrl => {
                                // setImageAsUrl(prevObject => ({ ...prevObject, imageAsUrl: fireBaseUrl }))
                                listUrl.push(fireBaseUrl);

                                setCountAnhDaUploadThanhCong(countPrev => countPrev + 1);
                            })
                    })
            }
        }
        setImageAsUrl(listUrl);
    }


    const handleChangeIMG_Chinh = (e) => {
        var soLuongFile = e.target.files.length;
        var listFile = [];
        var listUrl = [];
        for (let index = 0; index < soLuongFile; index++) {
            listFile.push(e.target.files[index]);
        }

        setImageAsFile_Chinh(listFile);

        if (listFile.length === 0) {
            console.log('Không có file nào được upload');
        } else {
            for (let index = 0; index < soLuongFile; index++) {
                console.log('start of upload');
                // async magic goes here...
                if (listFile[index] === '') {
                    console.error(`not an image, the image file is a ${typeof (listFile[index])}`);
                }
                const uploadTask = storage.ref(`/images/${listFile[index].name}`).put(listFile[index]);
                uploadTask.on('state_changed',
                    (snapShot) => {
                        //takes a snap shot of the process as it is happening
                        console.log(snapShot);
                    }, (err) => {
                        //catches the errors
                        console.log(err)
                    }, () => {
                        // gets the functions from storage refences the image storage in firebase by the children
                        // gets the download url then sets the image from firebase as the value for the imgUrl key:
                        storage.ref('images').child(listFile[index].name).getDownloadURL()
                            .then(fireBaseUrl => {
                                // setImageAsUrl(prevObject => ({ ...prevObject, imageAsUrl: fireBaseUrl }))
                                listUrl.push(fireBaseUrl);
                                setCountAnhDaUploadThanhCong_Chinh(countPrev => countPrev + 1);
                            })
                    })
            }
        }
        setImageAsUrl_Chinh(listUrl);
    }

    const handleChangeIMG_Phu = (e) => {
        var soLuongFile = e.target.files.length;
        var listFile = [];
        var listUrl = [];
        for (let index = 0; index < soLuongFile; index++) {
            listFile.push(e.target.files[index]);
        }

        setImageAsFile_Phu(listFile);

        if (listFile.length === 0) {
            console.log('Không có file nào được upload');
        } else {
            for (let index = 0; index < soLuongFile; index++) {
                console.log('start of upload');
                // async magic goes here...
                if (listFile[index] === '') {
                    console.error(`not an image, the image file is a ${typeof (listFile[index])}`);
                }
                const uploadTask = storage.ref(`/images/${listFile[index].name}`).put(listFile[index]);
                uploadTask.on('state_changed',
                    (snapShot) => {
                        //takes a snap shot of the process as it is happening
                        console.log(snapShot);
                    }, (err) => {
                        //catches the errors
                        console.log(err)
                    }, () => {
                        // gets the functions from storage refences the image storage in firebase by the children
                        // gets the download url then sets the image from firebase as the value for the imgUrl key:
                        storage.ref('images').child(listFile[index].name).getDownloadURL()
                            .then(fireBaseUrl => {
                                // setImageAsUrl(prevObject => ({ ...prevObject, imageAsUrl: fireBaseUrl }))
                                listUrl.push(fireBaseUrl);
                                setDataThem({
                                    ...dataThem,
                                    img: fireBaseUrl
                                });
                                setCountAnhDaUploadThanhCong_Phu(countPrev => countPrev + 1);
                            })
                    })
            }
        }
        setImageAsUrl_Phu(listUrl);
    }

    const onEditorChange = (value) => {
        setDataThemSP({
            ...dataThemSP,
            moTa: value
        })
    }

    const onFilesChange = (files) => {
        setFiles(files)
    }
    //them SP///////////////////////////////////////
    async function LayDataCategoryAll() {
        let resData = await axios.get('/danhmuc-all');
        if (resData.data.status === 'success') {
            setDataCategory(resData.data.data);
        } else {
            message.error("Lấy data danh mục thất bại");
        }
    }

    //Ham them
    async function ThemSanPham(){
        let res = await axios.post('/sanpham-them',{
            phanLoai: {
                mauSac: {
                    mauSac1: dataPhanLoai.mauSac.mauSac1,
                    mauSac2: dataPhanLoai.mauSac.mauSac2,
                    mauSac3: dataPhanLoai.mauSac.mauSac3,
                    mauSac4: dataPhanLoai.mauSac.mauSac4
                },
                size: {
                    size1: dataPhanLoai.size.size1,
                    size2: dataPhanLoai.size.size2,
                    size3: dataPhanLoai.size.size3,
                    size4: dataPhanLoai.size.size4,
                }
            },
            ten: dataThemSP.ten,
            img: {
                chinh: dataThemSP.img.chinh,
                phu: dataThemSP.img.phu,
              
            },
            gia: dataThemSP.gia,
            noiSanXuat: dataThemSP.noiSanXuat,
            moTa: dataThemSP.moTa,
            moTaNganGon: dataThemSP.moTaNganGon,
            soSao: dataThemSP.soSao,
            giaTriGiamGia: dataThemSP.giaTriGiamGia,
            soLuong: dataThemSP.soLuong,
            thongTinBaoHanh: {
                baoHanh: dataThemSP.thongTinBaoHanh.baoHanh,
                loaiBaoHanh: dataThemSP.thongTinBaoHanh.loaiBaoHanh,
                thoiGianBaoHanh: dataThemSP.thongTinBaoHanh.thoiGianBaoHanh,
                donViBaoHanh: dataThemSP.thongTinBaoHanh.donViBaoHanh
            },
            ngayTao: dataThemSP.ngayTao,
      
            idCategory: dataThemSP.idCategory,
            idShop: dataThemSP.idShop,
            idEvent: dataThemSP.idEvent,
            isAccept: dataThemSP.isAccept,
            isLock: dataThemSP.isLock,
            isDelete: dataThemSP.isDelete
        });
        if (res.data.status === 'success') {
            message.success("Thêm thành công");
            window.location.reload();
        } else {
            message.error(res.data.message);







        }
    }



    function KiemTraDuLieuNhap() {
        const regSo = /^[0-9\b]+$/;
        if (dataThemSP.ten === '' || dataThemSP.idCategory === ''
           || dataThemSP.gia === 0 || dataThemSP.soLuong === 0) {
            message.error('Thông tin tạo mới sản phẩm không hợp lệ. Vui lòng kiểm tra lại');
        } else {
            if (!dataThemSP.gia.toString().match(regSo)) {
                message.error('Giá gốc không hợp lệ')
            } else {
                if (!dataThemSP.giaTriGiamGia.toString().match(regSo)) {
                    message.error('Giá trị giảm giá không hợp lệ')
                } else {
                    if (!dataThemSP.soLuong.toString().match(regSo)) {
                        message.error('số lượng phải là số và không được là số âm')
                    } else {
                        // message.success('ok')
                        ThemSanPham();
                    }
                } 
            }
        }
    }
 
    useEffect(() => {
        LayDataCategoryAll();
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setDataThemSP({
            ...dataThemSP,
            idShop: shopID
        })
    }, [shopID]);

    useEffect(() => {
        if (firstTime === false) {
            if (imageAsFile.length === 0) {
                message.error('Vui lòng chọn ảnh cho Thương hiệu')
            } else {
                if (countAnhDaUploadThanhCong === imageAsFile.length) {
                    message.success('Upload ảnh thương hiệu thành công');
                }
            }
        }
    }, [countAnhDaUploadThanhCong])
    useEffect(() => {
        if (firstTime3 === false) {
            if (imageAsFile_Chinh.length === 0) {
                message.error('Vui lòng chọn ảnh chính cho sản phẩm')
            } else {
                if (countAnhDaUploadThanhCong_Chinh === imageAsFile_Chinh.length) {
                    message.success('Upload ảnh chính cho sản phẩm thành công');
                }
            }
        }
    }, [countAnhDaUploadThanhCong_Chinh])

    useEffect(() => {
        if (firstTime4 === false) {
            if (imageAsFile_Phu.length === 0) {
                message.error('Vui lòng chọn ảnh phụ cho sản phẩm')
            } else {
                if (countAnhDaUploadThanhCong_Phu === imageAsFile_Phu.length) {
                    message.success('Upload các ảnh phụ cho sản phẩm thành công');
                }
            }
        }
    }, [countAnhDaUploadThanhCong_Phu])


    return (
        <Fragment>
         

         

            <Tabs size='large' style={{ width: '100%' }}>
                <TabPane key={1} tab="Tạo mới sản phẩm">
                    <div className='col'>
                        <h3>Phần thông tin sản phẩm</h3>
                        <Form
                            {...layout}
                            name="basic"
                            initialValues={{ remember: true }}
                            initialValues={{ remember: true }}
                            style={{ padding: 40 }}
                        >
                            <Form.Item
                                label="Tên sản phẩm"
                                name="ten"
                                rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm' }]}
                            >
                                <Input onChange={(e) => {
                                    setDataThemSP({
                                        ...dataThemSP,
                                        ten: e.target.value
                                    })
                                }} />
                            </Form.Item>

                            <Form.Item
                                label="Danh mục"
                                name="danhmuc"
                                rules={[{ required: true, message: 'Vui lòng chọn danh mục' }]}
                            >
                                <Select
                                    mode="multiple"
                                    style={{ width: '100%' }}
                                    placeholder="Chọn danh mục , nhiều nhất 3 lựa chọn"
                                    onChange={(value) => {
                                        setDataThemSP({
                                            ...dataThemSP,
                                            idCategory: value
                                        })
                                    }}
                                    >
                                    {
                                        dataCategory.map((item, i) => {
                                            return <Option key={item._id} value={item._id}>
                                                {item.ten}
                                            </Option>
                                        })
                                    }
                                </Select>
                            </Form.Item>

                           

                           
                                    

                            <Form.Item
                                label="Mô tả chi tiết"
                                name="motachitiet">
                                <QuillEditor
                                    placeholder={"Nhập nội dung"}
                                    onEditorChange={onEditorChange}
                                    onFilesChange={onFilesChange}
                                />
                            </Form.Item>




                            <Form.Item
                                label="Ảnh chính "
                                name="anhchinh"
                                rules={[{ required: true, message: 'Vui lòng chọn ảnh' }]}>
                                <input type='file' accept="image/*"
                                    onChange={(e) => {
                                        handleChangeIMG_Chinh(e);
                                        setCountAnhDaUploadThanhCong_Chinh(0);
                                        setFirstTime3(false);
                                    }}>
                                </input>
                            </Form.Item>

                            <Form.Item
                                name='showanhchinh'
                                label="Show ảnh chính">
                                {
                                    imageAsUrl_Chinh.map((src, i) => {
                                        return <img key={i} style={{ marginLeft: 20 }} src={src} alt={'ảnh ' + i} width='200' height='150'></img>
                                    })
                                }
                            </Form.Item>

                            <Form.Item
                                label="Ảnh phụ"
                                name="anhphu">
                                <input type='file' accept="image/*"
                                    multiple
                                    onChange={(e) => {
                                        handleChangeIMG_Phu(e);
                                        setCountAnhDaUploadThanhCong_Phu(0);
                                        setFirstTime4(false);
                                    }}>
                                </input>
                            </Form.Item>

                            <Form.Item
                                name='showanhphu'
                                label="Show các ảnh phụ">
                                {
                                    imageAsUrl_Phu.map((src, i) => {
                                        return <img key={i} style={{ marginLeft: 20 }} src={src} alt={'ảnh ' + i} width='200' height='150'></img>
                                    })
                                }
                            </Form.Item>
                        </Form>
                        <br></br>
                        <h3>Phần thông tin bán hàng</h3>
                        <Form {...layout}>
                            <Form.Item
                                label="Giá gốc"
                                name="giagoc"
                                rules={[{ required: true, message: 'Vui lòng nhập giá gốc sản phẩm' }]}>
                                <Input
                                    onChange={(e) => {
                                        setDataThemSP({
                                            ...dataThemSP,
                                            gia: parseInt(e.target.value)
                                        })
                                    }}></Input>
                            </Form.Item>

                            <Form.Item
                                label="Giá trị giảm"
                                name="giatrigiam">
                                <Input defaultValue={0}
                                    onChange={(e) => {
                                        setDataThemSP({
                                            ...dataThemSP,
                                            giaTriGiamGia: parseInt(e.target.value)
                                        })
                                    }}></Input>(Nếu giá trị nhập nhỏ hơn 100 thì hệ thống sẽ tự động giảm theo %)
                            </Form.Item>

                            <Form.Item
                                label="Số lượng sản phẩm"
                                name="soluong"
                                rules={[{ required: true, message: 'Vui lòng nhập số lượng sản phẩm' }]}>
                                <Input
                                    onChange={(e) => {
                                        setDataThemSP({
                                            ...dataThemSP,
                                            soLuong: parseInt(e.target.value)
                                        })
                                    }}></Input>
                            </Form.Item>

                          
                            <Form.Item
                                label="Bảo hành"
                                name="baohanh">
                                <Select style={{ width: '100%' }}
                                    defaultValue={0}
                                    onChange={(value) => {
                                        if (value === 1) {
                                            setDisableFieldBaoHanh(true);
                                            setDataThemSP({
                                                ...dataThemSP,
                                                thongTinBaoHanh: {
                                                    baoHanh: false,
                                                    donViBaoHanh: '',
                                                    loaiBaoHanh: '',
                                                    thoiGianBaoHanh: ''
                                                }
                                            })
                                        }

                                        if (value === 0) {
                                            setDisableFieldBaoHanh(false);
                                            setDataThemSP({
                                                ...dataThemSP,
                                                thongTinBaoHanh: {
                                                    baoHanh: true,
                                                    donViBaoHanh: '',
                                                    loaiBaoHanh: '',
                                                    thoiGianBaoHanh: ''
                                                }
                                            })
                                        }
                                    }}>
                                    <Option value={0}>Có</Option>
                                    <Option value={1}>Không</Option>
                                </Select>
                            </Form.Item>

                            {
                                dataThemSP.thongTinBaoHanh.baoHanh === true && (
                                    <Fragment>
                                        <Form.Item
                                            label="Thời gian bảo hành"
                                            name="thoigianbaohanh"
                                            rules={[{ required: true, message: 'Vui lòng nhập thời gian bảo hành' }]}>
                                            <Input disabled={disableFieldBaoHanh}
                                                onChange={(e) => {
                                                    setDataThemSP({
                                                        ...dataThemSP,
                                                        thongTinBaoHanh: {
                                                            ...dataThemSP.thongTinBaoHanh,
                                                            thoiGianBaoHanh: parseInt(e.target.value)
                                                        }
                                                    })
                                                }}></Input>
                                        </Form.Item>

                                        <Form.Item
                                            label="Đơn vị thời gian bảo hành"
                                            name="donvibaohanh"
                                            rules={[{ required: true, message: 'Vui lòng nhập đơn vị thời gian bảo hành' }]}>
                                            <Select style={{ width: '100%' }}
                                                defaultValue={0}
                                                disabled={disableFieldBaoHanh}
                                                onChange={(value) => {
                                                    setDataThemSP({
                                                        ...dataThemSP,
                                                        thongTinBaoHanh: {
                                                            ...dataThemSP.thongTinBaoHanh,
                                                            donViBaoHanh: value - 1
                                                        }
                                                    })
                                                }}>
                                                <Option disabled={true} value={0}>Chọn đơn vị thời gian</Option>
                                                <Option value={1}>Tháng</Option>
                                                <Option value={2}>Năm</Option>
                                            </Select>
                                        </Form.Item>

                                        <Form.Item
                                            label="Loại bảo hành"
                                            name="loaibaohanh"
                                            rules={[{ required: true, message: 'Vui lòng chọn loại bảo hành' }]}>
                                            <Select style={{ width: '100%' }}
                                                defaultValue={0}
                                                disabled={disableFieldBaoHanh}
                                                onChange={(value) => {
                                                    setDataThemSP({
                                                        ...dataThemSP,
                                                        thongTinBaoHanh: {
                                                            ...dataThemSP.thongTinBaoHanh,
                                                            loaiBaoHanh: value - 1
                                                        }
                                                    })
                                                }}>
                                                <Option disabled={true} value={0}>Chọn loại bảo hành</Option>
                                                <Option value={1}>Bảo hành chính hãng</Option>
                                                <Option value={2}>Bảo hành bởi chủ Shop</Option>
                                            </Select>
                                        </Form.Item>
                                    </Fragment>
                                )
                            }
                        </Form>
                    </div>

                    <Form {...layout}>
                        <Form.Item {...tailLayout}
                            name='buttontaomoisanpham'>
                            <Button
                                style={{ width: 200 }}
                                onClick={() => {
                                    KiemTraDuLieuNhap();
                                }}
                                onMouseOver={() => {
                                    setDataThemSP({
                                        ...dataThemSP,
                                        img: {
                                            chinh: imageAsUrl_Chinh[0],
                                            phu: imageAsUrl_Phu
                                        }
                                    })
                                }}>Tạo mới +</Button>
                        </Form.Item>

                    </Form>
                </TabPane>
            </Tabs>
        </Fragment >
    );
}
    export default ThemSanPham;


