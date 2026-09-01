# Shirley CHEN 陳思琦 — Professional Profile V7.2

V7.2 保留 V7.1 的視覺架構，新增完整案例管理、圖片上傳、媒體報導與全站 noindex。

## 公開網站

- 首頁 `/`
- 工作經歷 `/experience/`
- 案例展示 `/cases/`
- 關於我 `/about/`
- 繁體中文（香港）/ English 全站切換

## 管理員入口

`https://shirleysiqi.github.io/cases/admin/`

預設密碼：`SC-9f2b-7Qx6-2026`

> 注意：GitHub Pages 是靜態網站。這個前端密碼只用來隱藏一般操作介面，不是伺服器級身份驗證，不要把公司機密、記者私人聯絡資料或其他敏感資料存入網站 repository。

## V7.2 案例資料

每個案例支援：

- 分類：媒體活動 / 企業活動 / ESG 及持份者參與
- 中英文標題及簡介
- 公司 / 機構、日期
- 封面圖片
- 多張活動圖片，可排序及刪除
- 多則媒體報導，每則可包含：媒體名稱、報導標題、日期、報導截圖、公開原文連結
- 草稿 / 對外公開

## 如何發布案例更新

1. 進入 `/cases/admin/`。
2. 新增或修改案例，直接從電腦選擇圖片。
3. 按「匯出更新包 ZIP」。
4. 解壓 `shirley-cases-update.zip`。
5. 將包內 `src/data/cases.json` 上傳並覆蓋 repository 同名檔案。
6. 將包內 `public/images/cases/` 合併上傳到 repository。
7. Commit 到 `main`，GitHub Actions 會自動部署。

管理員草稿會保存在目前瀏覽器的 IndexedDB，未匯出及上傳前不會出現在公開網站。

## 修改普通網站文字

主要內容集中在：

`src/data/site.ts`

可修改姓名、首頁簡介、三大專業、工作經歷、教育、語言、Email、LinkedIn 及中英文導航。

## 不希望被搜尋引擎收錄

V7.2 已預設：

- 所有公開頁面 `noindex, nofollow, noarchive, nosnippet, noimageindex`
- Googlebot / Bingbot noindex
- `public/robots.txt` 中 `Disallow: /`
- 不建立 sitemap

這會要求主流搜尋引擎不要收錄，但網站本身仍是公開網址；知道網址的人仍可直接瀏覽。
