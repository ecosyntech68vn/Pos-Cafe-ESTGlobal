# Setup ngày đầu — POS Cafe V2 (Multi-Branch + White-label)

Checklist cho chủ quán làm 1 lần duy nhất, trước khi mở bán.

## Trước khi bắt đầu

Chuẩn bị:

- [ ] iPad / máy POS / Laptop đã cài app (xem `INSTALL_TABLET.md`).
- [ ] Logo quán dạng PNG/JPG/SVG ≤ 512KB.
- [ ] Danh sách menu thật (Excel hoặc giấy).
- [ ] Danh sách nguyên liệu hiện có.
- [ ] Nếu có nhiều chi nhánh: danh sách tên + địa chỉ từng chi nhánh.

---

## Phần 1: Đăng nhập + Thương hiệu (White-label) — 5 phút

1. Mở app → đăng nhập PIN **1234** (chủ quán mặc định).
2. Vào **Cài đặt → 🏪 Thương hiệu** → điền:
   - **Tên quán** — sẽ hiện ở sidebar, màn hình login, hoá đơn
   - **Slogan** — hiện dưới tên quán
   - **Logo** → bấm "📷 Chọn ảnh" → chọn file PNG/JPG/SVG (tối đa 512KB)
3. Bấm **Lưu thương hiệu** → app cập nhật ngay: sidebar, login, receipt.

> Mẹo: Bấm vào tên quán ở sidebar để mở nhanh phần Thương hiệu.

## Phần 2: Nhiều chi nhánh (Multi-Branch) — nếu có >1 quán

> Nếu chỉ có 1 quán → bỏ qua phần này, app tự động tạo 1 chi nhánh.

1. Vào **Cài đặt → 🏢 Quản lý chi nhánh**.
2. Bấm **Thêm chi nhánh** → điền tên, địa chỉ, slogan, logo riêng.
3. Mỗi chi nhánh có: menu riêng, kho riêng, nhân viên riêng, đơn hàng riêng.
4. **Chuyển chi nhánh**: bấm icon 🏢 ở sidebar → chọn chi nhánh muốn dùng.
5. Khi chuyển, toàn bộ dữ liệu (menu, đơn, kho) chuyển theo chi nhánh đó.

## Phần 3: Đổi PIN mặc định — 3 phút

1. Vào **Cài đặt → Người dùng & PIN**.
2. Bấm **Đổi PIN** ở dòng "Chủ quán" → gõ PIN mới (KHÔNG dùng 1234, 0000, năm sinh).
3. Đổi PIN "Nhân viên 1" hoặc:
   - Bấm **Xoá** "Nhân viên 1" nếu chưa cần.
   - Thêm nhân viên thật ở khung **Thêm nhân viên**.

## Phần 4: Setup menu — 15-30 phút

1. Vào tab **Menu**.
2. App đã có 114 sản phẩm mẫu Tiệm Bên Suối (đầy đủ categories, variant size M/L).
3. **Sửa từng sản phẩm**: bấm **Sửa** → cập nhật tên / giá / nhóm cho khớp menu thật.
4. **Thêm sản phẩm mới**: bấm **+ Thêm SP**.
5. **Xoá / ẩn**: đặt `active=0` hoặc rename "[ẨN] Tên cũ" để loại khỏi POS.

> Nếu menu > 50 món và Excel có sẵn, dùng tab **Import CSV** (hỗ trợ KiotViet, Sapo, iPos, MISA).

## Phần 5: Setup nguyên liệu & tồn kho — tuỳ chọn

1. Vào tab **Kho**.
2. App có 109 nguyên liệu mẫu. Sửa hoặc thay tên cho khớp.
3. Nhập tồn ban đầu qua **+ Nhập/Xuất** → chọn "Nhập hàng".

> **Có thể bỏ qua**, app vẫn bán bình thường — chỉ không có cảnh báo tồn thấp và trừ kho tự động.

## Phần 6: Đồng bộ Google Sheets (GAS) — tuỳ chọn

> Cần tài khoản Google + GAS script (EcoSynTech cung cấp).

1. Vào **Cài đặt → Đồng bộ Google Sheets (GAS)**.
2. Dán URL Web App → **Lưu** → **Test ping** (phải báo OK).

## Phần 7: Telegram báo doanh thu — tuỳ chọn

1. Chat với **@BotFather** trên Telegram → `/newbot` → đặt tên → copy **token**.
2. Chat với **@userinfobot** → copy **ID** của bạn (chat_id).
3. Vào **Cài đặt → Telegram** → dán cả 2 → **Lưu** → **Gửi tin nhắn test**.
4. Kiểm tra Telegram cá nhân → có tin nhắn test.

## Phần 8: Backup đầu tiên — 2 phút

1. Vào **Cài đặt → Sao lưu & Phục hồi** → **⬇ Tải file backup**.
2. Lưu file `pos-backup-YYYY-MM-DD.db` vào Google Drive / email / cloud.

## Phần 9: Test bán thử 3 đơn — 10 phút

1. Vào **Bán hàng**.
2. Tạo 3 đơn mẫu — kiểm tra giá, tiền thừa, in hoá đơn.
3. Vào **Báo cáo** → kiểm tra doanh thu = tổng 3 đơn.
4. Vào **Đơn** → kiểm tra 3 đơn xuất hiện đầy đủ.

## Phần 10: Training nhân viên

Xem `TRAINING_60MIN.md`.

---

## Tổng quan giao diện mới

| Vị trí | Mô tả |
|--------|-------|
| **Sidebar** | Logo + tên quán. Bấm vào để mở nhanh Cài đặt Thương hiệu |
| **Icon 🏢** (sidebar) | Chuyển nhanh giữa các chi nhánh |
| **Login** | Logo + tên quán hiển thị khi đăng nhập |
| **Receipt** | Logo + tên quán + địa chỉ in trên hoá đơn |
| **Settings** | 2 mục mới: "Thương hiệu" và "Quản lý chi nhánh" |

## Xử lý sự cố thường gặp

| Vấn đề | Cách xử lý |
|--------|-------------|
| Trang trắng khi mở | Refresh lại. Nếu vẫn trắng → clear cache: Cài đặt → "Xoá cache & tải lại" |
| Mất menu sau khi chuyển chi nhánh | Là đúng — mỗi chi nhánh có menu riêng. Chuyển lại chi nhánh cũ. |
| Quên PIN chủ | → phải reset toàn bộ dữ liệu (Cài đặt cuối trang). Mất hết dữ liệu cũ. |
| Không thấy logo | Ảnh > 512KB bị từ chối. Dùng ảnh nhỏ hơn. |

---

✅ Sau 10 bước trên: quán sẵn sàng bán hàng.

Hỗ trợ: davidta.ktqd.mba@gmail.com
