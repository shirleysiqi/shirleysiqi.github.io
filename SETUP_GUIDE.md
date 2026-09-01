# V8 一次性設定指南

完成以下一次設定後，日後新增案例、上傳圖片、修改網站文字都不需要再進 GitHub 改 code。

## 1. 建立 Supabase Project

1. 登入 Supabase，建立一個新 project。
2. Project 建立後，進入 **SQL Editor**。
3. 打開本專案的 `supabase/SETUP.sql`，複製全部內容到 SQL Editor，按 **Run**。

這會建立：
- `cases`：案例資料
- `site_content`：首頁／工作經歷／關於我內容
- `portfolio-media`：案例圖片 Storage bucket
- RLS 權限規則

## 2. 建立唯一的 Admin 帳戶

Supabase Dashboard：

**Authentication → Users → Add user → Create new user**

Admin Email 請使用 `Shirley.chensiqi@gmail.com`，再設定只有你知道的 Password。V8 的 RLS 規則已限定只有這個 Email 可以寫入資料。

然後到 Authentication 的登入／註冊設定，**關閉公開 Email sign-up**。網站 V8 本身沒有註冊按鈕，但仍建議在 Supabase 關掉自行註冊，確保只有你建立的帳戶可以登入後台。

## 3. 取得 Project URL 和 Key

Supabase Dashboard：

**Project Settings → API**

取得：
- Project URL
- Publishable key / anon public key

注意：前端只能使用 Publishable / anon key，**絕對不要放 service_role key**。

## 4. 在 GitHub 加兩個 Secrets

Repository：`shirleysiqi/shirleysiqi.github.io`

進入：

**Settings → Secrets and variables → Actions → New repository secret**

新增：

### Secret 1
Name:
`PUBLIC_SUPABASE_URL`

Value：你的 Supabase Project URL。

### Secret 2
Name:
`PUBLIC_SUPABASE_ANON_KEY`

Value：你的 Publishable / anon public key。

## 5. 第一次部署 V8

把 V8 完整專案取代目前 GitHub repository 的網站代碼，Commit 到 `main`。

之後進入 **Actions**，等部署工作顯示綠色勾號。

## 6. 日後使用

Admin：
`https://shirleysiqi.github.io/cases/admin/`

登入後：
- 「案例管理」新增／修改／下架案例
- 直接選 Mac / PC 裡面的圖片上傳
- 加入活動 Gallery
- 加入媒體報導截圖和原文連結
- 「網站內容」修改首頁、工作經歷及關於我主要文字

按儲存後資料直接進 Supabase，公開網站會在重新整理時讀取最新資料，**不需要 GitHub Commit，也不需要重新部署**。

## 私隱及安全

V8 繼續使用全站 `noindex / nofollow / noarchive / nosnippet` 以及 `robots.txt Disallow: /`，減少搜尋引擎收錄。

但 GitHub Pages 仍是公開網址；知道網址的人可以訪問。`portfolio-media` 是公開圖片 bucket，所以只應上傳適合公開展示的素材，不要放未發佈公司資料、私人記者聯絡資料、內部文件或其他機密內容。
