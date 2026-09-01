# Shirley CHEN 陳思琦 — Professional Profile V7.1

這一版重點是重新建立視覺層級，而不是增加更多頁面。

## 公開網站架構
- `/` 首頁
- `/experience/` 工作經歷 / Work Experience
- `/cases/` 案例展示 / Case Studies
- `/about/` 關於我 / About Me

右上角的「繁 / EN」會切換整個網站內容，並以 localStorage 記住使用者的語言選擇。公開畫面不會中英文混排。

## V7.1 視覺調整
- 首頁姓名、職業定位、Section 標題明顯放大。
- 香港背景圖重新調整焦點及深藍漸層，讓文字和人物更清楚。
- 個人照片下方不再放能力按鈕，三項能力移到左側正文下方並改成輕量 pill 標籤。
- 「我的專業」移除大白框模板感，改用三欄大標題與細分隔線。
- 「工作經歷概覽」改成深藍色重點區塊。
- 減少不必要框線、卡片和空白，使首頁層級更明確。

## 案例分類
- 媒體活動 / Media Events
- 企業活動 / Corporate Events
- ESG 及持份者參與 / ESG & Stakeholder Engagement

## 管理員頁面
公開導航中不會出現管理員入口。管理頁面：
`/cases/admin/`

管理功能包括新增、編輯、刪除、草稿/公開及匯出 `cases.json`。

> GitHub Pages 為純靜態網站。管理頁面的即時修改先儲存在目前瀏覽器；正式發佈仍需把匯出的 `cases.json` 替換到 `src/data/cases.json`。如需「按發佈即直接更新 GitHub」，需要另外加入安全的 GitHub OAuth / Serverless 發佈層，不能把 GitHub Token 直接放在前端。

## GitHub Pages
專案已保留 `.github/workflows/deploy.yml`。覆蓋 repository 後 commit 到 `main`，GitHub Actions 會自動 build 及 deploy。
