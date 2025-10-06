import { useState, useEffect, useCallback } from 'react'

// --- 相對匯入（沿用你的 shadcn/ui 組件結構）---
import { Button } from './components/ui/button.jsx'
import { Separator } from './components/ui/separator.jsx'
import { Alert, AlertDescription, AlertTitle } from './components/ui/alert.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card.jsx'
import { Badge } from './components/ui/badge.jsx'
// --- ---

import {
  FlaskConical,
  Heart,
  Globe,
  Scale,
  Info,
  ExternalLink,
  ChevronDown,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react'
import './App.css'

/* =========================================================
 * 內部骨架與共用元件
 * =======================================================*/
function SectionSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-64 bg-gray-100 rounded-xl" />
      <div className="h-6 bg-gray-100 rounded w-2/3" />
      <div className="h-6 bg-gray-100 rounded w-1/2" />
      <div className="h-6 bg-gray-100 rounded w-3/4" />
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4 space-y-8">
        <div className="text-center space-y-4">
          <p className="text-gray-400 text-base md:text-lg">
            本網站基於科學實證，深入探討NMN的作用機制、臨床證據、市場現況與法規環境，為消費者、業者與政策制定者提供全面的參考資訊。資料來源為科學研究與公開資料整理，僅供資訊參考，不構成醫療建議。
          </p>
          <p className="text-gray-400 text-base md:text-lg">使用任何補充劑前，請諮詢專業醫療人員。</p>
        </div>

        <Separator className="bg-gray-700" />

        <div className="space-y-6">
          <h3 className="text-center text-xl md:text-2xl font-bold text-white">各國監理機關</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            <a
              href="https://www.fda.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105 border border-gray-700 hover:border-blue-500"
            >
              <span className="text-3xl">🇺🇸</span>
              <div className="text-left flex-1">
                <p className="font-semibold text-white text-base md:text-lg">美國 FDA</p>
                <p className="text-gray-400 text-sm">U.S. Food and Drug Administration</p>
              </div>
              <ExternalLink className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </a>

            <a
              href="https://www.efsa.europa.eu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105 border border-gray-700 hover:border-blue-500"
            >
              <span className="text-3xl">🇪🇺</span>
              <div className="text-left flex-1">
                <p className="font-semibold text-white text-base md:text-lg">歐盟 EFSA</p>
                <p className="text-gray-400 text-sm">European Food Safety Authority</p>
              </div>
              <ExternalLink className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </a>

            <a
              href="https://www.mhlw.go.jp/english/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105 border border-gray-700 hover:border-blue-500"
            >
              <span className="text-3xl">🇯🇵</span>
              <div className="text-left flex-1">
                <p className="font-semibold text-white text-base md:text-lg">日本 厚生勞動省</p>
                <p className="text-gray-400 text-sm">Ministry of Health, Labour and Welfare</p>
              </div>
              <ExternalLink className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </a>

            <a
              href="https://www.fda.gov.tw/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105 border border-gray-700 hover:border-blue-500"
            >
              <span className="text-3xl">🇹🇼</span>
              <div className="text-left flex-1">
                <p className="font-semibold text-white text-base md:text-lg">台灣 食藥署</p>
                <p className="text-gray-400 text-sm">Taiwan Food and Drug Administration</p>
              </div>
              <ExternalLink className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </a>

            <a
              href="https://www.canada.ca/en/health-canada.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105 border border-gray-700 hover:border-blue-500"
            >
              <span className="text-3xl">🇨🇦</span>
              <div className="text-left flex-1">
                <p className="font-semibold text-white text-base md:text-lg">加拿大 衛生部</p>
                <p className="text-gray-400 text-sm">Health Canada</p>
              </div>
              <ExternalLink className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </a>

            <a
              href="https://www.tga.gov.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105 border border-gray-700 hover:border-blue-500"
            >
              <span className="text-3xl">🇦🇺</span>
              <div className="text-left flex-1">
                <p className="font-semibold text-white text-base md:text-lg">澳洲 藥品管理局</p>
                <p className="text-gray-400 text-sm">Therapeutic Goods Administration</p>
              </div>
              <ExternalLink className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </a>
          </div>
        </div>

        <Separator className="bg-gray-700" />

        <div className="space-y-6">
          <h3 className="text-center text-xl md:text-2xl font-bold text-white">學術與研究資源</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105 border border-gray-700 hover:border-green-500"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <p className="font-semibold text-white text-base md:text-lg">PubMed</p>
              </div>
              <p className="text-gray-400 text-sm text-center">美國國家醫學圖書館</p>
            </a>

            <a
              href="https://clinicaltrials.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105 border border-gray-700 hover:border-green-500"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔬</span>
                <p className="font-semibold text-white text-base md:text-lg">ClinicalTrials.gov</p>
              </div>
              <p className="text-gray-400 text-sm text-center">臨床試驗資料庫</p>
            </a>

            <a
              href="https://sinclair.hms.harvard.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105 border border-gray-700 hover:border-green-500"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">🧬</span>
                <p className="font-semibold text-white text-base md:text-lg">Sinclair Lab</p>
              </div>
              <p className="text-gray-400 text-sm text-center">哈佛衰老研究實驗室</p>
            </a>

            <a
              href="https://medicine.wustl.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105 border border-gray-700 hover:border-green-500"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏥</span>
                <p className="font-semibold text-white text-base md:text-lg">WashU Medicine</p>
              </div>
              <p className="text-gray-400 text-sm text-center">華盛頓大學醫學院</p>
            </a>
          </div>
        </div>

        <Separator className="bg-gray-700" />

        <p className="text-gray-500 text-center text-sm md:text-base">
          © 2025{' '}
          <a
            href="https://nmn.wedopr.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white underline"
          >
            NMN研究室
          </a>
          . All rights reserved. |{' '}
          <a href="https://www.wedopr.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
            www.WEDOPR.com
          </a>
        </p>
      </div>
    </footer>
  )
}

/* =========================================================
 * 各分頁內容（單檔內部元件）
 * =======================================================*/
function HomeSection({ onNavigate, onCardKey }) {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="relative w-full overflow-hidden rounded-xl shadow-2xl aspect-video">
        <img
          src="https://i.urusai.cc/J6wnD.jpg"
          alt="新型態膳食補充劑：NMN"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
          <h2 className="text-4xl sm:text-5xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            新型態膳食補充劑：NMN
          </h2>
          <p
            className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed mt-4"
            style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
          >
            菸鹼醯胺單核苷酸 (NMN) 作為NAD⁺的直接前體，在抗衰老保健領域備受矚目。
          </p>
        </div>
      </div>

      <Alert className="border-blue-200 bg-blue-50">
        <Info className="h-6 w-6 md:h-7 md:w-7 text-blue-600" aria-hidden="true" />
        <AlertTitle className="text-xl md:text-2xl font-bold text-blue-900">FDA最新立場更新</AlertTitle>
        <AlertDescription className="text-blue-800 leading-relaxed mt-3 text-lg md:text-xl">
          （2025年9月29日）美國FDA 發布公開信確認「NMN符合膳食補充劑的定義」，正式改變立場。FDA表示經分析發現有足夠證據證明NMN在被藥物立項前已作為膳食產品上市銷售，因此不受藥物優先條款限制。此舉等於推翻2022年的排除決定，為NMN產品在美國市場的合法地位提供明確保障。
          <div className="mt-4">
            <a
              href="https://downloads.regulations.gov/FDA-2023-P-0872-2754/attachment_1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 underline font-semibold text-base md:text-lg"
            >
              查看FDA官方回應信件 <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </AlertDescription>
      </Alert>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          className="hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
          onClick={() => onNavigate('science')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => onCardKey(e, 'science')}
          aria-label="前往 科學基礎"
        >
          <img
            src="https://i.urusai.cc/UyfbG.jpg"
            alt="科學實驗室中的燒杯與儀器"
            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            decoding="async"
          />
          <CardHeader>
            <FlaskConical className="h-12 w-12 md:h-14 md:w-14 text-blue-600 mb-2" aria-hidden="true" />
            <CardTitle className="text-2xl sm:text-3xl">科學基礎</CardTitle>
            <CardDescription className="text-lg sm:text-xl">了解NAD⁺與NMN的生物化學機制</CardDescription>
          </CardHeader>
        </Card>

        <Card
          className="hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
          onClick={() => onNavigate('evidence')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => onCardKey(e, 'evidence')}
          aria-label="前往 臨床實證"
        >
          <img
            src="https://i.urusai.cc/HgisN.jpg"
            alt="醫生正在檢視臨床數據圖表"
            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            decoding="async"
          />
          <CardHeader>
            <Heart className="h-12 w-12 md:h-14 md:w-14 text-red-600 mb-2" aria-hidden="true" />
            <CardTitle className="text-2xl sm:text-3xl">臨床實證</CardTitle>
            <CardDescription className="text-lg sm:text-xl">探索人體與動物研究的發現</CardDescription>
          </CardHeader>
        </Card>

        <Card
          className="hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
          onClick={() => onNavigate('market')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => onCardKey(e, 'market')}
          aria-label="前往 市場與法規"
        >
          <img
            src="https://i.urusai.cc/xwYpi.jpg"
            alt="象徵全球市場與法規的地球和法槌"
            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            decoding="async"
          />
          <CardHeader>
            <Globe className="h-12 w-12 md:h-14 md:w-14 text-green-600 mb-2" aria-hidden="true" />
            <CardTitle className="text-2xl sm:text-3xl">市場與法規</CardTitle>
            <CardDescription className="text-lg sm:text-xl">掌握全球與台灣的監管動態</CardDescription>
          </CardHeader>
        </Card>

        <Card
          className="hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
          onClick={() => onNavigate('conclusion')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => onCardKey(e, 'conclusion')}
          aria-label="前往 結論與建議"
        >
          <img
            src="https://i.urusai.cc/l8oQ3.jpg"
            alt="一個人正在仔細閱讀產品標示"
            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            decoding="async"
          />
          <CardHeader>
            <Scale className="h-12 w-12 md:h-14 md:w-14 text-purple-600 mb-2" aria-hidden="true" />
            <CardTitle className="text-2xl sm:text-3xl">結論與建議</CardTitle>
            <CardDescription className="text-lg sm:text-xl">獲取專業的消費與政策建議</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}

function ScienceSection() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="relative w-full overflow-hidden rounded-xl shadow-lg aspect-video">
        <img
          src="https://i.urusai.cc/UyfbG.jpg"
          alt="NMN的科學基礎"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>NMN的科學基礎</h2>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto mt-4"
            style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
          >
            深入了解NAD⁺與NMN的生物化學機制，以及它們在細胞能量代謝與衰老過程中的關鍵角色。
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">NAD⁺：細胞能量與健康的關鍵輔酶</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-base md:text-lg">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-700">能量代謝的關鍵因子</h3>
            <p className="text-gray-700 leading-relaxed">
              菸鹼醯胺腺嘌呤二核苷酸（NAD⁺）是人體每個細胞中不可或缺的輔酶。NAD⁺是細胞呼吸作用的核心，參與糖解作用、三羧酸循環和電子傳遞鏈，驅動ATP（細胞能量貨幣）的合成。人體高達<strong className="text-blue-600">95%的能量</strong>源於此過程。沒有足夠的NAD⁺，細胞無法有效產生能量。
            </p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-700">調控細胞健康與壽命的信號分子</h3>
            <p className="text-gray-700 leading-relaxed mb-4">NAD⁺是Sirtuins（長壽基因）和PARPs（DNA修復酶）等關鍵酶運作的必需底物：</p>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <strong className="text-gray-900 text-lg">Sirtuins（去乙醯酶）</strong>
                  <p className="text-gray-700">
                    人體內七種Sirtuins（SIRT1-7）活性依賴NAD⁺；參與DNA損傷修復、抑制發炎、調節代謝（血糖血脂）、維持心血管健康等。
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <strong className="text-gray-900 text-lg">PARPs（聚ADP核糖聚合酶）</strong>
                  <p className="text-gray-700">如PARP-1於DNA單鏈斷裂時活化，消耗NAD⁺合成聚合物以標記損傷並召集修復蛋白。</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">NMN：NAD⁺的直接前體</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-base md:text-lg">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-700">補救合成途徑</h3>
            <p className="text-gray-700 leading-relaxed">
              由於NAD⁺分子過大無法直接穿透細胞膜，人體主要依賴「補救途徑」合成NAD⁺：NAM 經 NAMPT 轉為 NMN，NMN 再與ATP反應生成NAD⁺；NMN距離NAD⁺僅一步。
            </p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-700">吸收與轉化</h3>
            <p className="text-gray-700 leading-relaxed">
              動物研究顯示口服NMN可迅速被吸收並於多組織轉為NAD⁺；小鼠口服約<strong className="text-blue-600">15分鐘</strong>即見肝臟NAD⁺提升。人體試驗亦顯示口服NMN能提升血中NAD⁺代謝相關指標，且呈劑量依賴。
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">NAD⁺水平與衰老</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-base md:text-lg">
          <Alert className="border-orange-200 bg-orange-50">
            <AlertTriangle className="h-6 w-6 text-orange-600" aria-hidden="true" />
            <AlertTitle className="text-lg md:text-xl text-orange-900">NAD⁺隨年齡下降</AlertTitle>
            <AlertDescription className="text-orange-800">
              研究指出，自中年起多組織NAD⁺含量可能下降達50%，並與年齡相關病理機制相關。
            </AlertDescription>
          </Alert>
          <p className="text-gray-700 leading-relaxed">
            NAD⁺下降會抑制Sirtuins與PARPs活性並損害粒線體功能，導致修復能力下滑與功能衰退；提升NAD⁺因此成為干預策略。
          </p>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="text-green-800 font-semibold text-lg">💡 提升NAD⁺水準是抗衰老的重要策略；NMN作為直接前體具潛力。</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function EvidenceSection() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="relative w-full overflow-hidden rounded-xl shadow-lg aspect-video">
        <img src="https://i.urusai.cc/HgisN.jpg" alt="臨床實證" className="w-full h-full object-cover" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>臨床實證</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mt-4" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
            探索NMN在動物與人體研究中的發現，以及其對代謝、心血管、體能與抗衰老標記的影響。
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">人體臨床試驗發現</CardTitle>
          <CardDescription className="text-base md:text-lg">人體試驗結果顯示NMN的效果更具針對性與條件性</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-base md:text-lg">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-700 flex items-center gap-2">
              <Badge variant="outline" className="text-blue-600 text-base md:text-lg px-3 py-1">
                代謝健康
              </Badge>
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">華盛頓大學（WUSTL）研究：超重或肥胖的糖尿病前期停經後婦女每日250mg、10週。</p>
            <div className="bg-green-50 p-4 rounded-lg mb-3">
              <p className="text-green-800">
                <strong>結果：</strong>骨骼肌胰島素敏感性提升約<strong>25%</strong>；空腹血糖、血脂與血壓未見顯著差異。
              </p>
            </div>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/33888596/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 underline font-semibold"
            >
              查看研究論文 (PubMed) <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <Separator />

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-700 flex items-center gap-2">
              <Badge variant="outline" className="text-red-600 text-base md:text-lg px-3 py-1">心血管健康</Badge>
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">哈佛醫學院研究：超重/肥胖中老年人每日2000mg、28天。</p>
            <div className="bg-red-50 p-4 rounded-lg space-y-2">
              <p className="text-red-800">✓ 體重下降</p>
              <p className="text-red-800">✓ 總膽固醇（含LDL）下降</p>
              <p className="text-red-800">✓ 舒張壓下降</p>
              <p className="text-gray-700 mt-3">
                <em>提示NMN可能具劑量與受試者基線狀況依賴。</em>
              </p>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-700 flex items-center gap-2">
              <Badge variant="outline" className="text-purple-600 text-base md:text-lg px-3 py-1">安全性與劑量</Badge>
            </h3>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="text-gray-700 leading-relaxed mb-4">
                多項隨機對照試驗（每日250–1250mg，長達12週；短期高達2000mg）未見與NMN相關的嚴重不良事件，整體耐受性良好。
              </p>
              <div className="bg-white p-4 rounded border border-green-300">
                <p className="text-green-800 font-semibold text-center text-xl">建議劑量：每日 250mg - 1000mg</p>
                <p className="text-gray-600 text-center mt-2">安全且可能有效的劑量區間</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/36482258/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 underline font-semibold"
              >
                NMN安全性研究 (GeroScience, 2023) <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl text-blue-900">更多臨床研究資源</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-base md:text-lg">
          <a
            href="https://clinicaltrials.gov/search?term=nicotinamide%20mononucleotide"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-700 hover:text-blue-900 underline font-semibold"
          >
            <ExternalLink className="h-5 w-5" aria-hidden="true" />
            ClinicalTrials.gov - NMN臨床試驗資料庫
          </a>
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/?term=nicotinamide+mononucleotide"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-700 hover:text-blue-900 underline font-semibold"
          >
            <ExternalLink className="h-5 w-5" aria-hidden="true" />
            PubMed - NMN相關研究論文
          </a>
          <a
            href="https://sinclair.hms.harvard.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-700 hover:text-blue-900 underline font-semibold"
          >
            <ExternalLink className="h-5 w-5" aria-hidden="true" />
            The Sinclair Lab - 哈佛大學衰老研究實驗室
          </a>
        </CardContent>
      </Card>
    </div>
  )
}

function MarketSection() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="relative w-full overflow-hidden rounded-xl shadow-lg aspect-video">
        <img src="https://i.urusai.cc/xwYpi.jpg" alt="市場與法規" className="w-full h-full object-cover" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>市場與法規</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mt-4" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
            了解台灣市場的獨特生態與全球監管動態，掌握NMN<strong>產品</strong>的法規環境與市場現況。
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">全球監管動態</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-base md:text-lg">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-700 flex items-center gap-2">
              <Badge className="bg-blue-600 text-base md:text-lg px-3 py-1">美國FDA</Badge>
              立場轉變
            </h3>
            <div className="space-y-3">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="font-semibold text-red-800 mb-2 text-lg">2022年11月：排除決定</p>
                <p className="text-gray-700">FDA以「藥品排除條款」為由，宣布NMN不再能作為膳食補充劑銷售，導致主流電商平台下架NMN產品。</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-green-800 mb-2 text-lg">2025年9月29日：政策逆轉</p>
                <p className="text-gray-700 mb-3">FDA正式改變立場，確認「NMN符合膳食補充劑的定義」，承認有證據表明NMN在被授權為新藥研究前已在市場銷售。</p>
                <a
                  href="https://downloads.regulations.gov/FDA-2023-P-0872-2754/attachment_1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 underline font-semibold"
                >
                  查看FDA官方回應信件 <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <a
                href="https://www.fda.gov/food/dietary-supplements"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 underline font-semibold"
              >
                <ExternalLink className="h-5 w-5" aria-hidden="true" />
                FDA膳食補充劑官方網站
              </a>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-700 flex items-center gap-2">
              <Badge className="bg-purple-600 text-base md:text-lg px-3 py-1">歐盟EFSA</Badge>
              新穎性食品路徑
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              歐盟將NMN歸類為「新穎性食品」（Novel Food），需通過安全性評估方可上市。截至2025年初，已有多家企業向EFSA提交上市申請。
            </p>
            <a
              href="https://www.efsa.europa.eu/en/topics/topic/novel-food"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 underline font-semibold"
            >
              <ExternalLink className="h-5 w-5" aria-hidden="true" />
              EFSA新穎性食品官方網站
            </a>
          </div>

          <Separator />

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-700">其他主要地區</h3>
            <div className="space-y-4">
              <div className="flex flex-col gap-2 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="text-base px-3 py-1">日本</Badge>
                  <p className="text-gray-700">對NMN採取較開放態度，2020年列為「非藥品」可作為食品成分使用。</p>
                </div>
                <a
                  href="https://www.mhlw.go.jp/english/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 underline text-sm ml-auto"
                >
                  日本厚生勞動省 <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <div className="flex flex-col gap-2 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="text-base px-3 py-1">台灣</Badge>
                  <p className="text-gray-700">衛福部食藥署尚未將高純度NMN列為合法食品原料。</p>
                </div>
                <a
                  href="https://www.fda.gov.tw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 underline text-sm ml-auto"
                >
                  台灣食品藥物管理署 <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <div className="flex flex-col gap-2 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="text-base px-3 py-1">加拿大</Badge>
                  <p className="text-gray-700">將NMN歸為「天然健康產品」管理，部分產品已取得核准銷售。</p>
                </div>
                <a
                  href="https://www.canada.ca/en/health-canada/services/drugs-health-products/natural-non-prescription.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 underline text-sm ml-auto"
                >
                  加拿大衛生部 <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <div className="flex flex-col gap-2 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="text-base px-3 py-1">澳洲</Badge>
                <p className="text-gray-700">允許NMN產品註冊生產供出口，但不可在境內銷售給本國消費者。</p>
                </div>
                <a href="https://www.tga.gov.au/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 underline text-sm ml-auto">
                  澳洲藥品管理局 <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

import { useState as useStateReact } from 'react' // 防止與上面同名報錯（保險，實際不需）

function ConclusionSection() {
  const [openFaq, setOpenFaq] = useStateReact(null)

  const faqData = [
    {
      question: 'NMN 是什麼？它和 NAD+ 有什麼關係？',
      answer:
        'NMN (菸鹼醯胺單核苷酸) 是NAD+ (菸鹼醯胺腺嘌呤二核苷酸) 的直接前體。補充 NMN 的主要目的是提升 NAD+ 水準，因為 NAD+ 參與能量代謝、DNA 修復與多項關鍵途徑。',
    },
    {
      question: 'NMN 和 NR (菸鹼醯胺核糖) 有什麼不同？',
      answer: 'NR 需經 NRK1/2 先轉為 NMN，之後 NMN 再轉為 NAD+。路徑為 NR → NMN → NAD+；而 NMN → NAD+ 更直接。',
    },
    {
      question: '服用 NMN 安全嗎？建議的劑量是多少？',
      answer: '現有人體研究顯示整體耐受度佳。常見建議劑量區間為每日 250–1000 mg；若有慢性病或用藥，務必先諮詢醫師。',
    },
    {
      question: '購買 NMN 產品時應注意什麼？',
      answer: '重點：純度≥99%、第三方檢測、品牌透明度。避免來源不明或異常低價。',
    },
    {
      question: '運動搭配 NMN 是否效果更好？',
      answer: '運動可自然提升 NAD+，NMN補充提供前體，理論上可能具協同；實際效益仍需更多人體數據支持。',
    },
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="relative w-full overflow-hidden rounded-xl shadow-lg aspect-video">
        <img src="https://i.urusai.cc/l8oQ3.jpg" alt="結論與建議" className="w-full h-full object-cover" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex flex-col justify中心 items-center text-center text-white p-4">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>結論與建議</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mt-4" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
            基於科學實證與市場分析，為消費者、產業業者與政策制定者提供專業建議。
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">科學前景與現實差距</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-base md:text-lg">
          <p className="text-gray-700 leading-relaxed">
            NMN作為提升NAD⁺水準的補充劑，理論基礎紮實，動物研究具說服力；但人體證據仍屬初期、族群與劑量依賴明顯。
          </p>
          <Alert className="border-yellow-200 bg-yellow-50">
            <AlertTriangle className="h-6 w-6 text-yellow-600" aria-hidden="true" />
            <AlertTitle className="text-lg md:text-xl text-yellow-900">重要提醒</AlertTitle>
            <AlertDescription className="text-yellow-800 leading-relaxed">
              目前尚不足以支持泛化的「逆轉衰老」或「延長壽命」宣稱；應聚焦具體、可測量的健康指標與特定人群。
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl text-blue-700">對消費者建議</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-base md:text-lg">
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-gray-900">保持批判性思維</p>
                  <p className="text-gray-700">視為潛力補充劑而非「不老藥」，警惕誇大宣稱。</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-gray-900">關注成分與劑量</p>
                  <p className="text-gray-700">確認來源、含量與純度；避開標示不清與劑量偏低者。</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-gray-900">諮詢專業</p>
                  <p className="text-gray-700">有慢性病或用藥者，先與醫師/營養師討論。</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl text-green-700">對產業業者建議</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-base md:text-lg">
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-gray-900">資訊透明</p>
                  <p className="text-gray-700">清楚標示NMN來源與含量，提供第三方檢測報告。</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-gray-900">強化臨床證據</p>
                  <p className="text-gray-700">投入複方與劑量—效果關係之臨床驗證。</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-gray-900">因應法規變化</p>
                  <p className="text-gray-700">追蹤國際監管，建立具彈性的供應鏈策略。</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl text-purple-700">對政策制定者建議</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-base md:text-lg">
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-gray-900">建立科學評估途徑</p>
                  <p className="text-gray-700">參考歐盟模式，建立本土審評機制與指引。</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-gray-900">加強市場監管</p>
                  <p className="text-gray-700">打擊不實宣稱，維護消費者權益。</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-gray-900">消費者教育</p>
                  <p className="text-gray-700">推廣科普，提高理性選購與使用。</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* FAQ */}
      <div className="mt-12">
        <h3 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-8">常見問題 (FAQ)</h3>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => {
            const opened = openFaq === index
            return (
              <div key={index} className="border rounded-lg overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => setOpenFaq(opened ? null : index)}
                  className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg text-gray-800 hover:bg-gray-50 transition"
                  aria-expanded={opened}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span>{faq.question}</span>
                  <svg className="h-5 w-5" aria-hidden="true" />
                </button>
                <div
                  id={`faq-panel-${index}`}
                  className={`transition-all duration-500 ease-in-out ${opened ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="p-5 pt-0 text-gray-600 leading-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

/* =========================================================
 * 主元件
 * =======================================================*/
const navItems = [
  { id: 'home', label: '首頁' },
  { id: 'science', label: '科學基礎' },
  { id: 'evidence', label: '臨床實證' },
  { id: 'market', label: '市場與法規' },
  { id: 'conclusion', label: '結論與建議' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('home')

  const handleCardKey = useCallback((e, tab) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setActiveTab(tab)
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeTab])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <FlaskConical className="h-10 w-10 text-blue-600" aria-hidden="true" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">NMN研究室</h1>
                <p className="text-base text-gray-600">效用與安全 實證探討</p>
              </div>
            </div>

            <nav className="hidden md:flex md:flex-wrap md:gap-1 md:justify-center" aria-label="主導覽">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? 'default' : 'ghost'}
                  onClick={() => setActiveTab(item.id)}
                  className="transition-all text-base px-3 py-1.5 h-auto flex-shrink-0"
                >
                  {item.label}
                </Button>
              ))}
            </nav>

            <div className="w-full md:hidden relative mt-2">
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                aria-label="切換分頁"
                className="w-full appearance-none rounded-lg border-2 border-blue-500 bg-blue-50 text-blue-800 shadow-sm focus:border-blue-600 focus:ring-blue-600 p-3 text-base font-bold text-center"
              >
                {navItems.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute top-1/2 right-4 -translate-y-1/2 h-6 w-6 text-blue-600 pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto px-4 py-8 max-w-screen-xl">
        {/* 這裡不做 lazy，以單檔為主；SectionSkeleton 保留作為佈景可替換 */}
        {activeTab === 'home' && <HomeSection onNavigate={setActiveTab} onCardKey={handleCardKey} />}
        {activeTab === 'science' && <ScienceSection />}
        {activeTab === 'evidence' && <EvidenceSection />}
        {activeTab === 'market' && <MarketSection />}
        {activeTab === 'conclusion' && <ConclusionSection />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
