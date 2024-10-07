import React from 'react';

const Home = () => {
  return (
    <div className="home">
      {/* Menu bên trái */}
      <div className="left-menu">
        <h3>Menu</h3>
        <ul>
          <li><a href="/">Trang Chủ</a></li>
          <li><a href="/">Giáo Trình</a></li>
          <li><a href="/">Luyện Thi</a></li>
          <li><a href="/">Thành Tích</a></li>
          <li><a href="/">Thêm</a></li>
        </ul>
      </div>

      {/* Nội dung chính */}
      <div className="content">
        <h2>Listening</h2>

        {/* Thẻ bài học đầu tiên */}
        <div className="lesson medium">
          <h3>1. My School</h3>
          <p>Listen and match the information.</p>
          <p>Điểm: __</p>
        </div>

        {/* Thẻ bài học thứ hai */}
        <div className="lesson medium">
          <h3>2. Stationery</h3>
          <p>Listen and fill in the sentences.</p>
          <p>Điểm: __</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
