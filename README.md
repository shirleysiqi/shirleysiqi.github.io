# Shirley CHEN Professional Profile V7

## 導航
首頁 / 工作經歷 / 案例展示 / 關於我

## 雙語
右上角「繁 / EN」切換繁體中文（香港）與英文。語言選擇會保存在瀏覽器 localStorage。

## 案例分類
- 媒體活動 / Media Events
- 企業活動 / Corporate Events
- ESG 及持份者參與 / ESG & Stakeholder Engagement

## 案例管理員入口
公開導航不顯示管理入口。
管理頁：`/cases/admin/`
預設密碼：`SC-9f2b-7Qx6-2026`

> 注意：GitHub Pages 是靜態網站。此密碼門檻屬於前端隱藏／阻擋，不等同伺服器端安全驗證。若需要真正只有帳號本人可寫入並一鍵發佈，需要後續接 GitHub OAuth 或其他身份驗證服務。

管理頁的新增、修改、刪除均可直接操作，資料先保存在瀏覽器。按「匯出 cases.json」後，把檔案替換到 `src/data/cases.json` 再 commit，GitHub Actions 會重新部署。

## 個人資料
主要文字：`src/data/site.ts`
案例資料：`src/data/cases.json`
管理員密碼雜湊：`src/data/admin.ts`
香港背景圖：`public/images/hong-kong-skyline.jpg`
個人照片：`public/images/shirley-chen-profile.jpg`
