# POS Cafe V2 — Multi-Branch + White-label

Phần mềm bán hàng cho quán cafe / trà sữa. **Offline-first**, hỗ trợ **nhiều chi nhánh**, **white-label** (đổi logo/tên riêng).

Built by **EcoSynTech Global** cho quán cafe Việt.

---

## Tính năng nổi bật

| Tính năng | Mô tả |
|-----------|-------|
| **Multi-Branch** 🏢 | Quản lý nhiều chi nhánh trong 1 app. Mỗi chi nhánh có menu, kho, nhân viên, đơn hàng riêng |
| **White-label** 🏪 | Đổi tên quán, slogan, logo — hiển thị ở sidebar, login, hoá đơn |
| **8 Theme màu** 🎨 | Fresh Green, Royal Navy, Cafe Brown, Tropical, Minimal Mono, **Forest Mint**, **Sunset Warm**, **Ocean Breeze** |
| **Offline-first** | SQLite trong trình duyệt + IndexedDB lưu trữ. Không cần mạng để bán |
| **Auto-trừ kho** | Bán 1 ly → tự trừ nguyên liệu theo công thức pha chế |
| **Kiosk mode** 🔒 | Tablet cho khách tự order tại bàn |
| **PWA** | Cài như app riêng trên iPad/Android (Add to Home Screen) |
| **Bundle tối ưu** 🚀 | JS bundle 66KB — load nhanh, ít request |

## Bắt đầu nhanh

1. Mở `index.html` trong Chrome (hoặc URL do người cung cấp).
2. Đăng nhập PIN: **Chủ quán 1234**, **Nhân viên 5678**.
3. Vào **Cài đặt → 🏪 Thương hiệu**: đặt tên quán, slogan, upload logo.
4. (Nếu nhiều quán) Vào **Cài đặt → 🏢 Quản lý chi nhánh**: thêm chi nhánh.
5. Vào **Menu**: chỉnh sửa 114 sản phẩm mẫu hoặc **Import CSV** từ POS cũ.
6. Quay lại **Bán hàng** — bắt đầu nhận đơn.

> Chi tiết: xem `HANDOFF_KIT/FIRST_RUN.md` và `docs/OWNER_MANUAL.md`.

## Cấu trúc thư mục

```
ecosyntech-pos-cafe/
├── index.html               # Entry — mở file này
├── manifest.json            # PWA manifest
├── service-worker.js        # Offline cache (v18 — multi-branch)
├── assets/bundle.js         # JS bundle minified 66KB (build từ esbuild)
├── assets/styles.css        # Design system + 8 theme presets
├── config/                  # Cấu hình: VAT, payment, printer, Telegram
├── modules/                 # Mã nguồn: core, auth, pos, sync...
├── data/                    # Seed data CSV (114 sản phẩm, 109 nguyên liệu)
├── HANDOFF_KIT/             # Tài liệu bàn giao khách hàng
└── docs/                    # Hướng dẫn chi tiết
├── assets/                  # Icon, logo
├── docs/                    # Hướng dẫn người dùng + dev
├── HANDOFF_KIT/             # Bộ tài liệu bàn giao cho khách hàng
└── LICENSE                  # Proprietary license
```

## Tài liệu

- **Chủ quán**: `docs/OWNER_MANUAL.md`
- **Nhân viên**: `docs/USER_GUIDE.md` (in ra dán cạnh máy POS)
- **Import CSV từ POS khác**: `docs/IMPORT_GUIDE.md`
- **Sao lưu**: `docs/BACKUP_GUIDE.md`
- **Lộ trình mở rộng chi nhánh**: `docs/MULTI_BRANCH_ROADMAP.md`
- **Đối chiếu Excel cũ → app mới**: `docs/MIGRATION_GUIDE.md`
- **Kiến trúc kỹ thuật**: `docs/dev/ARCHITECTURE.md`

## Hỗ trợ

Liên hệ EcoSynTech Global: davidta.ktqd.mba@gmail.com

---

© 2026 EcoSynTech Global · Powered by EcoSynTech Global
