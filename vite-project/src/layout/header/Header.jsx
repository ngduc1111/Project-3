import React from 'react'
import './header.css'
export default function Header() {
  return (
   <header id="hearder" className="header">
  <div className="logo">
    <img src="./images/logo_compact.webp" alt="logo_lining" className="logo-img" />
  </div>
  <div className="navigation">
    <ul className="nav-list">
      <li className="nav-item">Thời trang</li>
      <li className="nav-item">Thể thao</li>
      <li className="nav-item">Nam</li>
      <li className="nav-item">Nữ</li>
      <li className="nav-item">Trẻ em</li>
      <li className="nav-item">Ưu đãi</li>
      <li className="nav-item">Hệ thống cửa hàng</li>
      <li className="nav-item">Tin tức</li>
    </ul>
  </div>
  <div className="actions">
    <div className="action-item action-user">
      <img src="./images/svg/icon-user.webp" alt="user" className="action-img" />
    </div>
    <div className="action-item action-search">
      <img src="./images/svg/icon-search.webp" alt="user" className="action-img" />
    </div>
    <div className="action-item action-cart">
      <img src="./images/svg/icon-bag.webp" alt="user" className="action-img" />
    </div>
  </div>
</header>

  )
}
