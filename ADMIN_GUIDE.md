# 案例管理使用指南

1. 訪問 `https://shirleysiqi.github.io/cases/admin/`
2. 輸入預設管理員密碼：`SC-9f2b-7Qx6-2026`
3. 點「新增案例」或在表格中「編輯 / 刪除」
4. 可切換「對外公開」或保留草稿
5. 完成後按「匯出 cases.json」
6. 在 GitHub repository 將 `src/data/cases.json` 替換成新檔案並 Commit
7. GitHub Actions 自動重新部署網站

### 為何不能直接在頁面按一下永久發佈？
GitHub Pages 本身沒有資料庫或登入後端。若把 GitHub 寫入 Token 放在前端，任何人都可能取得，安全性不足。因此 V7 先採用「前台管理 + 匯出更新檔」方式。若之後需要真正一鍵發佈，可新增 GitHub OAuth / Serverless API。
