/* ============================================================
   CẤU HÌNH — Đây là file DUY NHẤT bạn cần sửa.
   Để thêm/sửa/xoá một menu: chỉnh trong danh sách "restaurants" bên dưới.
   ============================================================ */

window.MENU_CONFIG = {
  // Tên thương hiệu hiển thị ở trang chủ
  brandName: "YÊN SPA",

  // Câu giới thiệu ngắn dưới tên thương hiệu (để trống "" nếu không cần)
  tagline: "Chọn nhà hàng để xem thực đơn",

  // Màu nhấn chính của toàn site (mã màu hex)
  accentColor: "#C0392B",

  // ----------------------------------------------------------
  // DANH SÁCH NHÀ HÀNG / MENU
  // Mỗi menu cần: id, name, pdf. Các trường khác là tuỳ chọn.
  // ----------------------------------------------------------
  restaurants: [
    {
      id: "yen-spa",                  // link chia sẻ: tenmien.com/m/nha-hang-1
      name: "YÊN Spa & Wellness",
      description: "Spa dưỡng sinh chuyên sâu và chăm sóc sức khỏe",
      pdf: "/menus/MENU.pdf",      // đường dẫn tới file PDF trong thư mục /menus
      phone: "0364916989"                // nút gọi nhanh (để trống "" nếu không cần)
    },
    {
      id: "nha-hang-2",                  // link chia sẻ: tenmien.com/m/nha-hang-2
      name: "Hải Sản Biển Đông",
      description: "Hải sản tươi sống mỗi ngày",
      pdf: "/menus/nha-hang-2.pdf",
      phone: "0900000002"
    }
  ]
};
