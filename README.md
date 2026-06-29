# Thực Đơn Online (flipbook) — không quảng cáo, deploy miễn phí trên Vercel

Hệ thống xem menu PDF dạng "sách lật" giống Heyzine, nhưng **hoàn toàn của bạn**:
không quảng cáo, không gián đoạn, không phụ thuộc website bên thứ ba.

---

## 1. Cấu trúc thư mục

```
menu-flipbook/
├── index.html        ← trang chủ (liệt kê các nhà hàng)
├── menu.html         ← trình xem flipbook
├── config.js         ← ★ FILE DUY NHẤT BẠN CẦN SỬA ★
├── vercel.json       ← cấu hình link đẹp (không cần đụng vào)
├── vendor/           ← 2 thư viện đã đóng gói sẵn (không cần đụng vào)
└── menus/            ← ★ NƠI BẠN BỎ FILE PDF MENU VÀO ★
    ├── nha-hang-1.pdf
    └── nha-hang-2.pdf
```

Bạn chỉ làm việc với **2 chỗ**: file `config.js` và thư mục `menus/`.

---

## 2. Thêm / đổi menu (làm thường xuyên)

**Bước 1.** Đặt file PDF của bạn vào thư mục `menus/`. Ví dụ: `menus/pho-co.pdf`.

**Bước 2.** Mở `config.js`, thêm hoặc sửa một mục trong danh sách `restaurants`:

```js
{
  id: "pho-co",                    // sẽ thành link: tenmien.com/m/pho-co
  name: "Nhà Hàng Phố Cổ",
  description: "Ẩm thực Việt truyền thống",
  pdf: "/menus/pho-co.pdf",        // đúng tên file bạn vừa bỏ vào
  phone: "0901234567"              // để trống "" nếu không cần nút gọi
}
```

> Quy tắc `id`: chỉ dùng chữ thường không dấu và dấu gạch ngang (`pho-co`, `hai-san`…),
> không dùng khoảng trắng hay dấu tiếng Việt.

Lưu lại → cập nhật (xem mục Deploy bên dưới) → xong.

**Cập nhật menu cũ:** chỉ cần thay file PDF cùng tên trong `menus/` rồi deploy lại.

---

## 3. Đổi thương hiệu / màu sắc

Ở đầu `config.js`:

```js
brandName: "Nhà Hàng Của Tôi",     // tên hiển thị ở trang chủ
tagline:   "Chọn nhà hàng để xem thực đơn",
accentColor: "#C0392B",            // màu nhấn (mã hex), đổi theo thương hiệu
```

---

## 4. Đưa lên mạng (deploy lên Vercel)

Có 2 cách. **Cách 2 được khuyên dùng** vì sau này đổi menu rất nhanh.

### Cách 1 — Nhanh nhất (dùng Vercel CLI)

Cần đã cài Node.js trên máy (bạn đang dùng Cursor/VS Code nên thường đã có).

```bash
npm install -g vercel      # cài 1 lần duy nhất
cd menu-flipbook           # vào đúng thư mục project
vercel                     # lần đầu sẽ hỏi đăng nhập + vài câu, cứ Enter mặc định
vercel --prod              # đẩy bản chính thức
```

Mỗi lần đổi menu, chạy lại `vercel --prod`.

### Cách 2 — Khuyên dùng (GitHub + Vercel, tự cập nhật)

1. Tạo tài khoản tại **github.com** và **vercel.com** (đăng nhập Vercel bằng GitHub).
2. Đẩy thư mục `menu-flipbook` lên một repository GitHub (kéo-thả file qua giao diện web GitHub cũng được).
3. Trên Vercel: **Add New → Project → Import** repo vừa tạo → bấm **Deploy**.
   (Không cần chọn framework, để mặc định "Other" là được.)
4. Xong. Từ giờ mỗi khi bạn sửa `config.js` hoặc thay PDF và đẩy lên GitHub,
   Vercel **tự động cập nhật** — không phải làm gì thêm.

---

## 5. Gắn tên miền của bạn

Sau khi mua tên miền:

1. Mở project trên Vercel → tab **Settings → Domains**.
2. Nhập tên miền của bạn (vd: `menu.nhahangcuatoi.com`) → **Add**.
3. Vercel sẽ chỉ bạn thêm bản ghi DNS (thường là 1 dòng `CNAME` hoặc `A`)
   vào trang quản lý tên miền nơi bạn mua. Làm theo đúng hướng dẫn đó.
4. Chờ vài phút đến vài giờ để DNS lan truyền. Xong.

---

## 6. Chia sẻ link cho khách

- Trang chủ tất cả nhà hàng: `https://tenmien.com`
- Menu một nhà hàng cụ thể: `https://tenmien.com/m/<id>`
  ví dụ `https://tenmien.com/m/pho-co`

Dán link này vào Zalo, Facebook, Google Maps, mã QR đặt trên bàn… Khách bấm vào là xem
được menu lật trang, không quảng cáo, chạy mượt trên điện thoại.

> Mẹo tạo mã QR: vào bất kỳ trang tạo QR miễn phí nào, dán link menu vào, in ra dán lên bàn.

---

## 7. Lưu ý nhỏ

- **Kích thước PDF:** nên giữ dưới ~10–15 MB để khách tải nhanh. Nếu menu nặng,
  dùng công cụ nén PDF online trước khi bỏ vào `menus/`.
- **Tỉ lệ trang:** PDF dọc (A4 đứng) hiển thị đẹp nhất trên điện thoại.
- **Khách bị máy yếu / lỗi:** hệ thống tự chuyển sang chế độ cuộn ảnh để khách vẫn xem được menu.
- **Chi phí:** Vercel gói miễn phí thừa sức cho nhu cầu vài nhà hàng. Bạn chỉ trả tiền tên miền.

---

Nếu muốn nâng cấp sau này (trang quản trị để tự upload PDF không cần đụng code,
gắn nhiều thương hiệu, thống kê lượt xem…), có thể mở rộng thêm — nền tảng hiện tại
đã sẵn sàng cho việc đó.
