# V7.2 案例管理指南

## 入口

`https://shirleysiqi.github.io/cases/admin/`

密碼：`SC-9f2b-7Qx6-2026`

## 新增案例

按「＋ 新增案例」，填寫：

- 分類
- 日期
- 中文 / 英文標題
- 公司 / 機構
- 中文 / 英文簡介
- 是否對外公開

## 上傳圖片

### 封面
按「選擇封面」，直接從 Mac / PC 選擇 JPG、PNG 或 WebP。

### 活動圖片
按「＋ 加入活動圖片」，可一次選多張。每張圖片可以：

- 上移
- 下移
- 刪除

### 媒體報導
按「＋ 新增媒體報導」，每則可填：

- 媒體名稱
- 日期
- 中文報導標題
- English headline
- 公開原文連結
- 報導截圖

V7.2 不使用 Paywall 欄位。

## 保存與正式發布

按「儲存案例」後，內容會先保存在這部瀏覽器的 IndexedDB。

要更新公開網站：

1. 按「匯出更新包 ZIP」。
2. 解壓下載的 ZIP。
3. 將 `src/data/cases.json` 覆蓋 GitHub 內同名檔案。
4. 將 `public/images/cases/` 合併到 GitHub 的 `public/images/cases/`。
5. Commit changes。

GitHub Actions 會自動重建網站。

## 匯入

如果換電腦或瀏覽器，可以用管理頁右上角「匯入 cases.json」讀入 repository 的案例資料。已經在 repository 的圖片會保留公開路徑；需要更換圖片時再重新從本機選擇即可。

## 私隱提醒

管理頁有 `noindex`，公開網站亦全站 `noindex`；但 GitHub Pages 仍然是公開網頁。不要上傳任何不應公開的公司機密、私人聯絡資料或受保密義務限制的材料。
