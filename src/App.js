import React, { Fragment, useState, useEffect,lazy,Suspense  } from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { ChiTietSanPham, GioHang, DangKy, DangNhap ,ThanhToan,TrangChuAdmin,DangKyGianHang,Demo,checkout,TimKiem, Thongbao, TKnguoidung, ShopCuaBan} from '../src/component/index';
const TrangChu = lazy(()=>import('./component/TrangChu/TrangChu'));

// import "bootstrap/dist/css/bootstrap.css";

function App() {

  return (
      <Router>
        <Fragment>
          <Switch>
          <Suspense fallback={<div>Loading...</div>}>
                   
            <Route exact path="/" component={TrangChu}></Route>
            <Route path="/chitietsanpham/:id" component={ChiTietSanPham}></Route>
            <Route path="/GioHang" component={GioHang}></Route>
            <Route path="/DangKy" component={DangKy}></Route>
            <Route path="/DangNhap" component={DangNhap}></Route>
            <Route path="/ThanhToan" component={ThanhToan}></Route>
            <Route path="/Admin" component={TrangChuAdmin}></Route>
            <Route path="/DangKyGianHang" component={DangKyGianHang}></Route>
            <Route path="/chat" component={Demo}></Route>
            <Route path="/checkout" component={checkout}></Route>
            <Route path="/timkiem" component={TimKiem}></Route>
            <Route path="/thongbao" component={Thongbao}></Route>
            <Route path="/nguoidung" component={TKnguoidung}></Route>
            <Route path="/ShopCuaBan" component={ShopCuaBan}></Route>
            </Suspense>
          </Switch>
        </Fragment>
      </Router>
 
  );
}

export default App;
