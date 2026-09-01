# V8-GH 一次性設定指南

你只需要做一次 GitHub Token 設定。完成後，日常新增案例不需要再上傳 code。

## A. 把 V8-GH 上傳到 GitHub（最後一次網站架構更新）

把本 ZIP 的網站檔案取代目前 `shirleysiqi/shirleysiqi.github.io` repository 的對應檔案，commit 到 `main`。等 GitHub Actions 部署成功。

之後正常案例更新不再需要手動上傳檔案。

## B. 建立 Fine-grained Personal Access Token

1. 登入 GitHub。
2. 點右上角頭像 → **Settings**。
3. 左側最下方附近選 **Developer settings**。
4. 選 **Personal access tokens** → **Fine-grained tokens**。
5. 點 **Generate new token**。
6. Token name 可填：`Shirley Website Admin`。
7. Expiration：建議選一個你方便管理的有效期，例如 90 days；到期後只需重新建立新 token，網站不需要改 code。
8. Resource owner：選你的 GitHub 帳戶 `shirleysiqi`。
9. Repository access：選 **Only select repositories**。
10. 只選：`shirleysiqi.github.io`。
11. Repository permissions 找到 **Contents**，設為 **Read and write**。
12. 其他寫入權限不需要開啟。
13. 產生 token 後，GitHub 通常只完整顯示一次。把它保存在你自己的密碼管理器。

不要把 token 寫入網站代碼，也不要傳給其他人。

## C. 第一次登入網站後台

開啟：

`https://shirleysiqi.github.io/cases/admin/`

把 Fine-grained Token 貼到欄位，按 **連接 GitHub**。

成功後會直接讀取 repository 裡目前的 `src/data/cases.json`。

## D. 日常更新

1. 新增或編輯案例。
2. 選封面、活動圖片、媒體報導截圖。
3. 按「儲存到待發佈」。
4. 可以繼續修改其他案例。
5. 最後一次按「發佈到網站」。
6. 系統會把所有變更一次 commit 到 GitHub `main`。
7. GitHub Actions 自動部署，通常等候約數分鐘後公開頁便會更新。

## E. 安全提醒

- Token 等同於這個 repository 的內容寫入鑰匙，請自行保管。
- 建議只授權這一個 repository，並只開 `Contents: Read and write`。
- 不要使用 classic PAT 的廣泛 `repo` 權限，除非你清楚知道原因。
- 不要把 token 放在 `site.ts`、`.env`（若會被打包到前端）、HTML、GitHub issue 或公開聊天內容。
- 如果懷疑 token 洩漏，立即在 GitHub Settings → Developer settings → Personal access tokens 撤銷它，再建立一個新的。
