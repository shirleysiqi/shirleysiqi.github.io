# Shirley CHEN 陳思琦 — Professional Profile V6

這是一個以 Astro 建立、可部署到 GitHub Pages 的靜態個人專業網站。

## 網站架構

- 首頁 `/`
- 工作經歷 `/experience/`
- 專業實踐 `/practice/`
- 關於我 `/about/`

網站預設使用繁體中文，核心定位為「企業傳訊 · 媒體關係 · 財經公關」，沒有 IR / Investor Relations 定位。

## 前台直接編輯「專業實踐」

正常訪客網址：

`https://shirleysiqi.github.io/practice/`

你的編輯網址：

`https://shirleysiqi.github.io/practice/?edit=1`

在編輯模式中可以直接：新增、修改、刪除、上下排序、選擇分類、加入連結、加入圖片，以及匯出 `practice.json`。

### 重要：GitHub Pages 的限制

GitHub Pages 是純靜態網站，瀏覽器本身不能安全地把公開網站檔案直接寫回 GitHub。因此前台修改先儲存在你目前瀏覽器的 localStorage。這不是傳統 CMS 後台。

當你確認修改後：

1. 在編輯模式按「匯出更新檔」。
2. 得到新的 `practice.json`。
3. 用它取代倉庫中的 `src/data/practice.json` 並 Commit。
4. GitHub Actions 會自動重新部署，所有訪客就會看到更新。

如果日後希望做到「在網頁按發佈 → 自動寫回 GitHub」，需要另外加入安全的 GitHub OAuth / serverless 發佈服務；不建議把 GitHub Token 直接寫在前端網站內。

## 修改首頁／履歷文字

主要文字集中在：

`src/data/site.ts`

這樣不需要逐頁尋找 Astro HTML。

## 本機測試

```bash
npm install
npm run dev
```

正式建構：

```bash
npm run build
```

## GitHub Pages

已包含 `.github/workflows/deploy.yml`。Repository 的 Pages Source 請設定為 **GitHub Actions**。
