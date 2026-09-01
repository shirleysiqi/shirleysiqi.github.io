# Shirley CHEN Professional Profile — V8

V8 將 V7.2 的 GitHub 匯出／Commit 流程改為真正的 Supabase 後台。

## V8 使用體驗

日後更新流程：

`/cases/admin/` → 登入 → 編輯 → 上傳圖片 → 儲存／發佈 → 網站直接更新

不再需要匯出 ZIP、改 `cases.json`、上傳 GitHub 或等待重新 build。

## 技術架構

- Astro 5 靜態前台，部署到 GitHub Pages
- Supabase Auth：Admin Email / Password 登入
- Supabase Database：案例及網站內容
- Supabase Storage：封面、活動照片、媒體報導截圖
- Row Level Security：公開訪客只能讀公開案例；登入帳戶可以管理資料

## 公開網站

- `/` 首頁
- `/experience/` 工作經歷
- `/cases/` 案例展示
- `/about/` 關於我

## Admin

- `/cases/admin/`
- 案例新增／修改／刪除
- 草稿／公開
- 封面圖片上傳
- 多張 Gallery 圖片
- Gallery 排序及刪除
- 多則媒體報導
- 媒體名稱、標題、日期、截圖、原文連結
- 網站主要文字後台修改

## 搜尋引擎

所有頁面保留：

`noindex, nofollow, noarchive, nosnippet, noimageindex`

以及：

```txt
User-agent: *
Disallow: /
```

這降低一般搜尋引擎建立索引的機會，但不會把公開 GitHub Pages 網站變成私人網站。

## 第一次安裝

請直接看 `SETUP_GUIDE.md`。Supabase SQL 在 `supabase/SETUP.sql`。
