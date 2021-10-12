import React, { useState } from 'react';
import { BsImages } from 'react-icons/bs';
import { Link } from "react-router-dom";

function MarketCenterCreate(props) {

    const value = [
        {
            id: "1",
            avatar: "oto.jpg",
            name: "Xe cộ",
            route: "/marketplace/category/vehicles",
            status: "normal",
        },
        {
            id: "2",
            avatar: "oto.jpg",
            name: "Bán nhà",
            route: "/marketplace/category/propertyforsale",
            status: "normal",
        },
        {
            id: "3",
            avatar: "oto.jpg",
            name: "Gia đình",
            route: "/marketplace/category/family",
            status: "normal",
        },
        {
            id: "4",
            avatar: "oto.jpg",
            name: "Giải trí",
            route: "/marketplace/category/entertainment",
            status: "normal",
        },
        {
            id: "5",
            avatar: "oto.jpg",
            name: "Làm vườn & hoạt động ngoài trời",
            route: "/marketplace/category/garden",
            status: "normal",
        },
        {
            id: "6",
            avatar: "oto.jpg",
            name: "Nhạc cụ",
            route: "/marketplace/category/instruments",
            status: "normal",
        },
        {
            id: "7",
            avatar: "oto.jpg",
            name: "Rao vặt",
            route: "/marketplace/category/classifieds",
            status: "normal",
        },
        {
            id: "8",
            avatar: "oto.jpg",
            name: "Miễn phí",
            route: "/marketplace/category/free",
            status: "normal",
        },
        {
            id: "9",
            avatar: "oto.jpg",
            name: "Xe cộ",
            route: "/marketplace/category/vehicles",
            status: "normal",
        },
        {
            id: "10",
            avatar: "oto.jpg",
            name: "Xe cộ",
            route: "/marketplace/category/vehicles",
            status: "normal",
        },
        {
            id: "11",
            avatar: "oto.jpg",
            name: "Xe cộ",
            route: "/marketplace/category/vehicles",
            status: "normal",
        },
    ];
    const [marketCategory, setMarketCategory] = useState(value)
    const [marketCategory1, setMarketCategory1] = useState("")
    const [marketstatus, setMarketstatus] = useState("")
    return (
        <div className="market-layout-center">
            <div className="market-layout-create">
                <div className="market-layout-create-left">
                    <div className="market-layout-create-left-nav" ><Link style={{textDecoration:'none',color:'black'}}  to="/marketplace">Marketplace</Link></div>
                    <div className="market-layout-create-left-scroll" id="market-layout-create-left-scroll-style" >
                        <div className="market-layout-create-left-scroll-item">
                            <div className="market-layout-create-left-scroll-item-icon"><BsImages /></div>
                            <div className="market-layout-create-left-scroll-item-name">Quang</div>
                        </div>
                        <div className="market-layout-create-left-scroll-item" >
                            <div className="market-layout-create-left-scroll-item-img" style={{ display: 'flex', flexDirection: 'column' }}>
                                <div className="market-layout-create-left-scroll-item-icon"><BsImages /></div>
                                <div className="">Thêm ảnh</div>
                            </div>

                        </div>
                        <div className="market-layout-create-left-scroll-item"><input className="market-layout-create-left-scroll-item-input" type="text" placeholder="Tiêu đề" /></div>
                        <div className="market-layout-create-left-scroll-item"><input className="market-layout-create-left-scroll-item-input" type="text" placeholder="Giá" /></div>
                        <div className="market-layout-create-left-scroll-item"><select className="market-layout-create-left-scroll-item-select" value={marketCategory1} onChange={(e) => setMarketCategory1(e.target.value)}>
                            {
                                marketCategory.map((val) => {
                                    return (
                                        <option value={val.name}>{val.name}</option>
                                    )
                                })
                            }

                        </select></div>
                        <div className="market-layout-create-left-scroll-item"><select className="market-layout-create-left-scroll-item-select" value={marketstatus} onChange={(e) => setMarketCategory1(e.target.value)}>

                            <option value="Như mới">Như mới</option>
                            <option value="Mới hoàn toàn">Mới hoàn toàn</option>
                            <option value="đã qua sử dụng">đã qua sử dụng</option>

                        </select></div>
                        <div className="market-layout-create-left-scroll-item">
                            <div className="market-layout-create-left-scroll-item-textarea" contentEditable >

                            </div>
                        </div>
                    </div>
                    <div className="market-layout-create-left-footer"><div className="market-layout-create-left-footer-button">Đăng</div></div>
                </div>
                <div className="market-layout-create-body">
                    <div className="market-layout-create-body-info">

                        <label style={{ width: '100%', height: '50px', display: 'flex', alignItems: 'center', marginLeft: '3%', fontWeight: '600' }}>  Xem Trước</label>
                        <div className="market-layout-create-body-info-item">
                            <img className="market-layout-create-body-info-item-img" src="" />
                            <div className="market-layout-create-body-info-item-info">
                                <div className="market-layout-create-body-info-header">
                                    <div className="market-layout-create-body-info-item-info-form">
                                        <div className="market-layout-create-body-info-item-info-form-tile">Tiêu Đề</div>
                                        <div className="market-layout-create-body-info-item-info-form-price">Tiêu Đề</div>
                                        <div className="market-layout-create-body-info-item-info-form-detail">Tiêu Đề</div>
                                        <div className="market-layout-create-body-info-item-info-form-adress">Tiêu Đề</div>
                                        <div className="market-layout-create-body-info-item-info-form-profile">Thông tin về người bán</div>
                                        <div className="market-layout-create-body-info-item-info-form-profile"><div className="market-layout-create-body-info-item-info-form-profile-icon"><BsImages /></div><div className="market-layout-create-body-info-item-info-form-profile-name">Quang</div></div>
                                    </div>
                                </div>
                                <div className="market-layout-create-body-info-footer"><div>Mua</div><div>Thêm vào giỏ hàng</div></div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default MarketCenterCreate;