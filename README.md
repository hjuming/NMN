# NMN研究室網站

## 專案簡介

「NMN研究室」是一個專為菸鹼醯胺單核苷酸（NMN）設計的資訊網站，旨在提供關於NMN的科學基礎、臨床實證、市場現況與法規動態的全面性資訊。本網站特別關注美國FDA對NMN的最新立場，並整合了全球主要國家監理機關的相關政策，以及具公信力的學術研究資源，以幫助消費者、產業業者和政策制定者做出明智的決策。

## 專案特色

- **FDA最新立場更新**：即時呈現美國FDA於2025年9月29日對NMN膳食補充劑地位的最新官方聲明與連結。
- **科學基礎深入解析**：詳細解釋NAD⁺在細胞能量代謝和衰老過程中的關鍵作用，以及NMN作為NAD⁺前體的機制。
- **臨床實證摘要**：匯總NMN在人體臨床試驗中的主要發現，涵蓋其對代謝健康、心血管健康、安全性和建議劑量的影響，並提供原始研究論文連結。
- **全球法規動態**：比較美國、歐盟、日本、台灣、加拿大、澳洲等主要國家對NMN的監管政策與市場現況。
- **權威參考資料**：整合了FDA、EFSA、PubMed、ClinicalTrials.gov、哈佛大學Sinclair實驗室等官方監理機關、學術資料庫及研究機構的連結。
- **響應式設計**：網站介面優化，適應手機、平板和桌面等多種裝置瀏覽，提供良好的使用者體驗。
- **專業建議**：針對消費者、產業業者和政策制定者提供基於科學實證的專業建議。

## 網站架構

本網站主要分為以下幾個區塊：

- **首頁**：簡介NMN，並突出FDA最新公告。
- **科學基礎**：探討NAD⁺與NMN的生物化學機制，以及NAD⁺水平與衰老的關係。
- **臨床實證**：呈現NMN的人體臨床試驗結果，包括對代謝、心血管的影響及安全性評估。
- **市場與法規**：分析全球主要國家對NMN的監管政策與市場動態。
- **結論與建議**：為不同利益相關者提供專業建議，並總結NMN的科學前景。
- **頁腳（Footer）**：包含免責聲明、各國監理機關、學術研究資源及行業協會的連結。

## 使用技術

本專案採用現代前端技術棧開發，以確保高效能、可維護性和良好的使用者體驗。

- **前端框架**：[React](https://react.dev/)
- **建構工具**：[Vite](https://vitejs.dev/)
- **樣式框架**：[Tailwind CSS](https://tailwindcss.com/)
- **UI 組件庫**：[Shadcn/ui](https://ui.shadcn.com/)
- **圖標庫**：[Lucide React](https://lucide.dev/)

## 本地開發設置

若要在本地環境運行此專案，請遵循以下步驟：

1. **克隆儲存庫**：
   ```bash
   git clone <您的GitHub儲存庫URL>
   cd NMN
   ```

2. **安裝依賴**：
   使用pnpm安裝專案依賴。如果尚未安裝pnpm，請先安裝它：
   ```bash
   npm install -g pnpm
   pnpm install
   ```

3. **運行開發伺服器**：
   ```bash
   pnpm run dev
   ```
   專案將在 `http://localhost:5173` 啟動。

4. **建立生產版本**：
   ```bash
   pnpm run build
   ```
   這將在 `dist/` 目錄中生成用於生產環境的靜態文件。

## 部署

本網站已部署至 Manus Cloud，可透過以下連結訪問：

[NMN研究室網站](https://nmn-research-lab-nmn-research-lab-branch-3.manus.cloud/)

### 部署到 Cloudflare Pages

您可以將此專案部署到 Cloudflare Pages，以獲得快速、可靠的全球內容分發。以下是部署步驟：

1. **登入 Cloudflare 帳戶**：
   前往 [Cloudflare Dashboard](https://dash.cloudflare.com/) 並登入您的帳戶。

2. **選擇 Pages 服務**：
   在左側導航欄中，點擊「Workers & Pages」，然後選擇「Create application」並點擊「Pages」下的「Connect to Git」。

3. **連接 GitHub 儲存庫**：
   - 選擇您的 GitHub 帳戶，並授權 Cloudflare 訪問您的儲存庫。
   - 選擇 `NMN` 儲存庫。

4. **配置建構設定**：
   - **Project name**: `NMN` (或您喜歡的名稱)
   - **Production branch**: `main`
   - **Build command**: `pnpm install && pnpm run build`
   - **Build output directory**: `dist`

5. **部署網站**：
   點擊「Save and Deploy」。Cloudflare 將會自動從您的 GitHub 儲存庫拉取代碼，執行建構命令，並將生成的靜態文件部署到其全球邊緣網路。

6. **查看部署狀態**：
   部署完成後，您將獲得一個唯一的預覽 URL。每次您推送到 `main` 分支時，Cloudflare Pages 都會自動重新建構和部署您的網站。

## 貢獻

歡迎任何形式的貢獻！如果您有任何建議或發現問題，請隨時提交 Issue 或 Pull Request。

## 授權

本專案採用 MIT 授權協議。詳情請參閱 `LICENSE` 文件。

## 作者

Manus AI

## 更新日期

2025年10月4日
