# 📤 上傳到 GitHub Pages 的詳細步驟

## 準備完畢！

你現在有一個完整的 repo 資料夾：`~/Desktop/music-dashboard-repo/`

包含：
- ✅ `index.html` - Dashboard（已準備好）
- ✅ `README.md` - 介紹文檔
- ✅ `.gitignore` - Git 配置
- ✅ `LICENSE` - MIT 授權

## 步驟 1️⃣：在 GitHub 網頁上建立 Repository

1. 打開 https://github.com/new
2. **Repository name**: `music-dashboard`
3. **Description**: `🎵 Spotify × Discogs × MusicBrainz 音樂數據分析儀表板`
4. **Public** ✅ （讓別人能訪問）
5. **Add a README file**: ❌ （不勾，因為我們已經有了）
6. **Add .gitignore**: ❌ （不勾，我們也有了）
7. 點擊 **Create repository**

⏱️ 完成時間：1 分鐘

---

## 步驟 2️⃣：上傳檔案到 GitHub

### 方法 A：GitHub 網頁界面（最簡單）

1. 進入你新建的 repo：https://github.com/ritalinyutzu/music-dashboard
2. 點擊 **Add file** → **Upload files**
3. 將這 4 個檔案拖進去：
   - `index.html`
   - `README.md`
   - `.gitignore`
   - `LICENSE`
4. 底部填寫提交訊息：`Initial commit: Add music dashboard`
5. 點擊 **Commit changes**

⏱️ 完成時間：2 分鐘

### 方法 B：使用 Git 命令行（如果你熟悉 Git）

```bash
cd ~/Desktop/music-dashboard-repo

# 初始化 git
git init

# 添加所有檔案
git add .

# 提交
git commit -m "Initial commit: Add music dashboard"

# 添加遠程倉庫
git remote add origin https://github.com/ritalinyutzu/music-dashboard.git

# 推送到 main 分支
git branch -M main
git push -u origin main
```

⏱️ 完成時間：1 分鐘

---

## 步驟 3️⃣：啟用 GitHub Pages

1. 進入 repo 設置：https://github.com/ritalinyutzu/music-dashboard/settings
2. 左側邊欄選擇 **Pages**
3. **Source** 選擇：**Deploy from a branch**
4. **Branch** 選擇：**main** 和 **/ (root)**
5. 點擊 **Save**

⏱️ 完成時間：30 秒

稍等 1-2 分鐘，GitHub 會自動部署...

---

## 步驟 4️⃣：檢查並分享你的 URL

1. 回到 repo 的 **Settings** → **Pages**
2. 你會看到：**Your site is live at** `https://ritalinyutzu.github.io/music-dashboard`
3. 點擊這個連結，驗證 Dashboard 是否正確顯示

🎉 **完成！** 現在你可以分享這個 URL 給任何人！

---

## 📋 檢查清單

- [ ] 建立了 `music-dashboard` repo
- [ ] 上傳了所有檔案（index.html, README.md, .gitignore, LICENSE）
- [ ] 啟用了 GitHub Pages
- [ ] 訪問 `https://ritalinyutzu.github.io/music-dashboard` 看到了 Dashboard

---

## 🔄 未來更新

如果你想更新 Dashboard（例如新增藝術家或修改數據）：

### 方式 1：GitHub 網頁界面
1. 打開 repo
2. 點擊 `index.html`
3. 點擊編輯按鈕（鉛筆圖標）
4. 修改內容
5. 提交更改

### 方式 2：用 Git
```bash
cd ~/Desktop/music-dashboard-repo
# 編輯檔案...
git add .
git commit -m "Update dashboard data"
git push
```

更新會在幾秒內自動部署到網頁上！

---

## ❓ 常見問題

**Q: 頁面顯示 404？**
A: 等待 2-3 分鐘讓 GitHub 完成部署，然後刷新頁面。

**Q: 圖表不顯示？**
A: 確保檔案名是 `index.html`（小寫）

**Q: 想改 URL？**
A: 無法改成其他名稱，但可以改成 `https://ritalinyutzu.github.io`（需要把 repo 改名為 `ritalinyutzu.github.io`）

**Q: 如何限制訪問？**
A: GitHub Pages 免費版無法設密碼，但可以：
- 改成 Private repo（但需要付費）
- 或分享給特定人，告訴他們 URL（沒人知道就看不到）

---

## 🎉 完成後你會有

✅ 公開的 Dashboard 連結：`https://ritalinyutzu.github.io/music-dashboard`  
✅ 完整的 GitHub repo（版本控制）  
✅ 可隨時更新的部署  
✅ 免費的永久託管  

---

需要幫助？讓我知道你卡在哪一步！
