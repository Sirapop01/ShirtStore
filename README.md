# ShirtStore

**ShirtStore** เป็นเว็บแอปพลิเคชันสำหรับร้านค้าเสื้อผ้าออนไลน์แบบ Frontend-focused โดยใช้ React.js สำหรับแสดงรายการสินค้าและรายละเอียดสินค้า ผู้ดูแลระบบสามารถเพิ่มสินค้าได้โดยตรงผ่านฐานข้อมูล (ไม่มีระบบเพิ่มสินค้าผ่านหน้าเว็บ)

---

## 📌 Overview

- เว็บนี้พัฒนาด้วย **React.js** (Frontend) และโค้ด Backend สำหรับให้บริการ API พื้นฐาน
- ไม่มีระบบยืนยันตัวตน, ระบบตะกร้าสินค้า หรือระบบชำระเงิน
- ใช้สำหรับ **แสดงสินค้า** และ **ดูรายละเอียดสินค้า** เท่านั้น

---

## ✨ Features

- 🛍️ แสดงรายการสินค้าเสื้อผ้าทั้งหมด
- 🔍 ดูรายละเอียดสินค้าแต่ละตัว (ชื่อ, ราคา, รายละเอียด, รูปภาพ)
- ✅ ข้อมูลสินค้าเรียกจาก API ของ Backend
- 👨‍💻 เพิ่มสินค้าได้ผ่าน MongoDB โดยตรง (ไม่มีหน้า UI สำหรับเพิ่ม)

---

## 🛠 Installation

### 1. Clone Repo

```bash
git clone https://github.com/Sirapop01/ShirtStore.git
cd ShirtStore
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

สร้างไฟล์ `.env`:

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
```

เริ่มเซิร์ฟเวอร์:

```bash
npm start
```

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

แอปพลิเคชันจะเปิดที่ `http://localhost:3000`

---

## 🧭 Usage

### 🛒 หน้าหลัก (Home)
- แสดงสินค้าทั้งหมดที่มีในระบบ
- ข้อมูลดึงจาก API `/api/products`

### 📄 รายละเอียดสินค้า
- เมื่อคลิกสินค้าชิ้นใด จะพาไปยังหน้า `/product/:id`
- แสดงรายละเอียดสินค้า: ชื่อ, ราคา, คำอธิบาย, รูป

### 📥 การเพิ่มสินค้า
- เพิ่มสินค้าได้โดยตรงในฐานข้อมูล MongoDB (เช่น ผ่าน Compass หรือ Mongo Shell)
- ข้อมูลจะถูกโหลดอัตโนมัติใน frontend

---

## 📂 Folder Structure

```
ShirtStore/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── public/
```

---

## ✅ Tech Stack

- **Frontend**: React.js, Axios
- **Backend**: Express.js, MongoDB (Mongoose)
