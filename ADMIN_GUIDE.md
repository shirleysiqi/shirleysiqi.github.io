# V8-GH 案例管理使用指南

管理頁：`https://shirleysiqi.github.io/cases/admin/`

## 登入

貼上只授權 `shirleysiqi.github.io` 的 GitHub Fine-grained Token，按「連接 GitHub」。

## 新增案例

按「＋ 新增案例」，填寫分類、日期、中英文標題、公司／機構、中英文簡介，並選擇是否公開。

可直接從 Mac / PC 選擇：

- 案例封面
- 多張活動圖片
- 媒體報導截圖

媒體報導欄位包括：媒體名稱、日期、中英文標題、公開原文連結、截圖。

## 儲存與發佈的分別

「儲存到待發佈」只更新目前頁面內的編輯狀態，不會立即改 GitHub。

「發佈到網站」才會把所有待發佈變更一次寫回 GitHub，建立單一 commit。完成後 GitHub Actions 會自動部署。

## 草稿

取消「對外公開」即可把案例保存在 `cases.json` 中，但公開案例頁不顯示它。

## 圖片

新上傳圖片會先在瀏覽器縮放及轉成 JPEG。發佈時放到：

`public/images/cases/<case-id>/`

## 媒體報導截圖

公開作品集只建議使用必要的預覽截圖，並提供原文連結。若截圖來自專業 media monitoring provider，請確認你的使用授權是否容許公開展示；文章及媒體內容版權仍屬原出版機構。
