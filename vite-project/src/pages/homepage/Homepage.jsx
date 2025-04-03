import React from "react";
import "./homepage.css";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
export default function Homepage() {
  const itemsNav = [
    {
      id: 1,
      name: "thể thao",
      iamge: "./images/wapper/groupbuy_5_img_compact.webp",
    },

    {
      id: 2,
      name: "Chạy Bộ",
      iamge: "./images/wapper/groupbuy_5_img_compact.webp",
    },
    {
      id: 3,
      name: "Thời Trang",
      iamge: "./images/wapper/groupbuy_5_img_compact.webp",
    },
    {
      id: 4,
      name: "Tập Luyện",
      iamge: "./images/wapper/groupbuy_6_img_compact.webp",
    },
    {
      id: 5,
      name: "Bóng Rổ",
      iamge: './images/wapper/groupbuy_7_img_compact.jpg"',
    },
    {
      id: 6,
      name: "Cầu Lông - Bóng Đá",
      iamge: "./images/wapper/groupbuy_8_img_compact.webp",
    },
    {
      id: 7,
      name: "Golf",
      iamge: "./images/wapper/groupbuy_9_img_compact.webp",
    },
  ];
  const hinhanhnoibat = [
    {
      img: "./images/Hli/1202a426.1002_cfd3a2fd3678448da7cb476786033450_large.jpg",
    },
    {
      img: "./images/Hli/marius_kimutai_-_1st__2.webp",
    },
    {
      img: "./images/Hli/1202a426.webp",
    },
    {
      img: "./images/Hli/3q7a3063_6d307dd7160d4b7384cd55701afd54bd_large.jpg",
    },
    {
      img: "./images/Hli/_mg_8369_21c01fa501324c028fa35b4f3880e7ba_large.jpg",
    },
    {
      img: "./images/Hli/_nam7405_54d16093623f4016b8478b34f6b79fb0_large.webp",
    },
    {
      img: "./images/Hli/img_0875_55cfc2ffb2904c2bbc4222a499901409_large.webp",
    },
    {
      img: "./images/Hli/img_1306_a89ae558f9544551a6942718fe24b964_large.jpg",
    },
    {
      img: "./images/Hli/img_8901_68eef96b153d4664a433520aeb81039f_large.webp",
    },
  ];
  return (
    <>
      <Header />
      <main className="main">
        <div className="slideshow">
          <img src="./images/slideshow_2.webp" alt style={{ width: "100%" }} />
        </div>
        <div className="groupbuy">
          <div className="groupbuy-title">
            <p className="thethao-title">Thể thao</p>
          </div>
          <div className="groupbuy__wrapper">
            <div className="groupbuy-list">
              {itemsNav.map((item) => {
                return (
                  <div className="groupbuy-item" key={item.id}>
                    <img src={item.iamge} alt className="groupbuy-item-img" />
                    <p className="groupbuy-item-title">{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="readytowear">
          <div className="container">
            <div className="readytowear-title">
              <p className="readytowear-title_h2">Ready to wear</p>
            </div>
            <div className="readytowear__wrapper">
              <div className="readytowear-list">
                <div className="readytowear-items">
                  <div
                    className="readytowear-img"
                    style={{ width: 255, height: 255 }}
                  >
                    <img
                      src="./images/wapper/Ko sale/ATST792-3V.webp"
                      alt
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="readytowear-desc">
                    <p style={{ margin: "10px 0px" }}>
                      Áo T-Shirt nữ ATST792-3V
                    </p>
                    <p
                      style={{
                        paddingBottom: 10,
                        color: "#c54934",
                        fontWeight: 600,
                      }}
                    >
                      608,727₫
                    </p>
                  </div>
                </div>
                <div className="readytowear-items">
                  <div
                    className="readytowear-img"
                    style={{ width: 255, height: 255 }}
                  >
                    <img
                      src="./images/wapper/Ko sale/ATST792-2V.webp"
                      alt
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="readytowear-desc">
                    <p style={{ margin: "10px 0px" }}>
                      Áo T-Shirt nữ ATST792-2V
                    </p>
                    <p
                      style={{
                        paddingBottom: 10,
                        color: "#c54934",
                        fontWeight: 600,
                      }}
                    >
                      608,727₫
                    </p>
                  </div>
                </div>
                <div className="readytowear-items">
                  <div
                    className="readytowear-img"
                    style={{ width: 255, height: 255 }}
                  >
                    <img
                      src="./images/wapper/Ko sale/ATST792-1V.webp"
                      alt
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="readytowear-desc">
                    <p style={{ margin: "10px 0px" }}>
                      Áo T-Shirt nữ ATST792-1V
                    </p>
                    <p
                      style={{
                        paddingBottom: 10,
                        color: "#c54934",
                        fontWeight: 600,
                      }}
                    >
                      608,727₫
                    </p>
                  </div>
                </div>
                <div className="readytowear-items">
                  <div
                    className="readytowear-img"
                    style={{ width: 255, height: 255 }}
                  >
                    <img
                      src="./images/wapper/Ko sale/AKSU433-5V.webp"
                      alt
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="readytowear-desc">
                    <p style={{ margin: "10px 0px" }}>
                      Quần short Nam AKSU433-5V
                    </p>
                    <p
                      style={{
                        paddingBottom: 10,
                        color: "#c54934",
                        fontWeight: 600,
                      }}
                    >
                      834,545₫
                    </p>
                  </div>
                </div>
                <div className="readytowear-items">
                  <div
                    className="readytowear-img"
                    style={{ width: 255, height: 255 }}
                  >
                    <img
                      src="./images/wapper/Ko sale/ATSU347-7V.webp"
                      alt
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="readytowear-desc">
                    <p style={{ margin: "10px 0px" }}>
                      Áo T-shirt Nam ATSU347-7V
                    </p>
                    <p
                      style={{
                        paddingBottom: 10,
                        color: "#c54934",
                        fontWeight: 600,
                      }}
                    >
                      731,455₫
                    </p>
                  </div>
                </div>
                <div className="readytowear-items">
                  <div
                    className="readytowear-img"
                    style={{ width: 255, height: 255 }}
                  >
                    <img
                      src="./images/wapper/Ko sale/ATSU347-5V.webp"
                      alt
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="readytowear-desc">
                    <p style={{ margin: "10px 0px" }}>
                      Áo T-Shirt nữ ATST792-3V
                    </p>
                    <p
                      style={{
                        paddingBottom: 10,
                        color: "#c54934",
                        fontWeight: 600,
                      }}
                    >
                      731,455₫
                    </p>
                  </div>
                </div>
                <div className="readytowear-items">
                  <div
                    className="readytowear-img"
                    style={{ width: 255, height: 255 }}
                  >
                    <img
                      src="./images/wapper/Ko sale/AWST021-1.webp"
                      alt
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="readytowear-desc">
                    <p style={{ margin: "10px 0px" }}>
                      Tất Thể Thao Unisex AWST021-1
                    </p>
                    <p
                      style={{
                        paddingBottom: 10,
                        color: "#c54934",
                        fontWeight: 600,
                      }}
                    >
                      68,728₫
                    </p>
                  </div>
                </div>
                <div className="readytowear-items">
                  <div
                    className="readytowear-img"
                    style={{ width: 255, height: 255 }}
                  >
                    <img
                      src="./images/wapper/Ko sale/ABST017-1.webp"
                      alt
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="readytowear-desc">
                    <p style={{ margin: "10px 0px" }}>
                      Balo thể thao ABST017-1
                    </p>
                    <p
                      style={{
                        paddingBottom: 10,
                        color: "#c54934",
                        fontWeight: 600,
                      }}
                    >
                      1,364,727₫
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button className="btn1">Xem thêm sản phẩm</button>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-review">
          <div className="container">
            <div className="blog-review-title">
              <p className="blog-review-title_h2">Hình ảnh nổi bật</p>
            </div>
            <div className="blog-review_wapper">
              <div className="blog-review-list">
                {hinhanhnoibat.map((item, index) => {
                  return (
                    <div className="blog-review-items" key={index}>
                      <div
                        className="blog-review-img"
                        style={{ width: 255, height: 255 }}
                      >
                        <img
                          src={item.img}
                          alt
                          style={{
                            width: "100%",
                            height: 200,
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="homeblog">
            <div
              className="container"
              style={{ backgroundColor: "transparent" }}
            >
              <div className="homeblog_title">
                <p className="cnsp_title"> Công nghệ sản phẩm </p>
              </div>
              <div className="homeblog_wapper">
                <div className="homeblog_list">
                  <div className="homeblog_item">
                    <div className="homeblog_img" style={{}}>
                      <img
                        src="./images/Hli/blog/00_fee8904b54d8482995828edefe5a9e8e_large.webp"
                        alt="homeblog-item-img"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="text-item-homelog">
                      <p
                        style={{
                          fontSize: 20,
                          lineHeight: "1.5",
                          marginBottom: 8,
                        }}
                      >
                        LI-NING PICKLEBALL PADDLE CHÍNH THỨC RA MẮT - LỰA...
                      </p>
                      <h2 style={{ fontSize: 16, lineHeight: "1.5" }}>
                        Các tín đồ Pickleball đã sẵn sàng để trải nghiệm cảm
                        giác chơi bóng tuyệt...
                      </h2>
                    </div>
                  </div>
                  <div className="homeblog_item">
                    <div className="homeblog_img" style={{}}>
                      <img
                        src="./images/Hli/blog/05_39560d766f7448bcb8467d6273142cd7_large.webp"
                        alt="homeblog-item-img"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="text-item-homelog">
                      <p
                        style={{
                          fontSize: 20,
                          lineHeight: "1.5",
                          marginBottom: 8,
                        }}
                      >
                        LI-NING RA MẮT SIÊU PHẨM GIÀY SOFT GO 2 KNIT: THIẾT KẾ
                      </p>
                      <h2 style={{ fontSize: 16, lineHeight: "1.5" }}>[...]</h2>
                    </div>
                  </div>
                  <div className="homeblog_item">
                    <div className="homeblog_img" style={{}}>
                      <img
                        src="./images/Hli/blog/1.webp"
                        alt="homeblog-item-img"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="text-item-homelog">
                      <p
                        style={{
                          fontSize: 20,
                          lineHeight: "1.5",
                          marginBottom: 8,
                        }}
                      >
                        SẴN SÀNG CHO MỌI HÀNH TRÌNH MỚI CÙNG LI-NING
                      </p>
                      <h2 style={{ fontSize: 16, lineHeight: "1.5" }}>
                        Chuẩn bị sẵn sàng cho những chuyến đi 2025 bên người
                        thân yêu, bạn chí...
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
