import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.jsx'
import { FlaskConical, Heart, Scale, Globe, CheckCircle2, AlertTriangle, Info, ExternalLink, ChevronDown, HelpCircle } from 'lucide-react'
import './App.css'

// 為了方便重用，建立一個 Hero 圖片元件
const TabHero = ({ imageUrl, title, subtitle }) => (
  <div className="relative w-full rounded-lg overflow-hidden shadow-lg mb-8 animate-fade-in">
    <img src={imageUrl} alt={title} className="w-full h-48 sm:h-64 object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-4 sm:p-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
      {subtitle && <p className="text-lg text-gray-200 mt-1">{subtitle}</p>}
    </div>
  </div>
);

// 常見問題的資料
const faqData = [
  {
    question: "NMN是什麼？它有什麼作用？",
    answer: "NMN（菸鹼醯胺單核苷酸）是人體內關鍵輔酶NAD+的直接前體。補充NMN的主要作用是提升體內的NAD+水平。NAD+參與細胞能量代謝、DNA修復等多項重要生理功能，其水平會隨年齡增長而下降。"
  },
  {
    question: "補充NMN安全嗎？建議的劑量是多少？",
    answer: "根據目前已發表的人體臨床試驗，NMN具有良好的安全性和耐受性。常見的有效且安全的劑量區間為每日250mg至1000mg。然而，若您有潛在健康問題或正在服藥，使用前請務必諮詢專業醫療人員。"
  },
  {
    question: "NMN在台灣合法嗎？",
    answer: "截至目前，台灣衛福部食藥署尚未將高純度的「NMN」列為合法的食品原料，因此市面上無法合法販售直接標示為NMN的產品。然而，一些廠商會透過販售能促進體內NAD+生成的其他維生素B群複方產品，來作為替代方案。"
  },
];


function App() {
  const [activeTab, setActiveTab] = useState('home')

  const navItems = [
    { id: 'home', label: '首頁' },
    { id: 'science', label: '科學基礎' },
    { id: 'evidence', label: '臨床實證' },
    { id: 'market', label: '市場與法規' },
    { id: 'conclusion', label: '結論與建議' },
  ]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
        {/* ... Header 內容維持不變，此處省略 ... */}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-screen-xl">
        {/* Home Tab */}
        {activeTab === 'home' && (
          <div className="space-y-8">
            <TabHero 
              imageUrl="https://i.urusai.cc/J6wnD.jpg"
              title="新型態膳食補充劑：NMN"
              subtitle="效用與安全 實證探討"
            />
            <div className="text-center space-y-4 py-8 animate-fade-in">
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                菸鹼醯胺單核苷酸（NMN）作為NAD⁺的直接前體，在抗衰老保健領域備受矚目。本網站基於科學實證，深入探討NMN的作用機制、臨床證據、市場現況與法規環境，為消費者、業者與政策制定者提供全面的參考資訊。
              </p>
            </div>
            <Alert className="border-blue-200 bg-blue-50 animate-fade-in">
              <Info className="h-6 w-6 md:h-7 md:w-7 text-blue-600" />
              <AlertTitle className="text-xl md:text-2xl font-bold text-blue-900">FDA最新立場更新</AlertTitle>
              <AlertDescription className="text-blue-800 leading-relaxed mt-3 text-lg md:text-xl">
                <strong>2025年9月29日</strong>，美國FDA正式改變立場，發布公開信確認「NMN符合膳食補充劑的定義」。此舉等於推翻了2022年的排除決定，為NMN產品在美國市場的合法地位提供了明確保障。
                <br /><br />
                <a 
                  href="https://downloads.regulations.gov/FDA-2023-P-0872-2754/attachment_1.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 underline font-semibold text-base md:text-lg"
                >
                  查看FDA官方回應信件 <ExternalLink className="h-4 w-4" />
                </a>
              </AlertDescription>
            </Alert>
            
            {/* 新增 FAQ 區塊 */}
            <Card className="animate-fade-in">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-2xl md:text-3xl">常見問題 (FAQ)</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {faqData.map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">{faq.answer}</p>
                    {index < faqData.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
              {/* ... 四個導覽卡片維持不變 ... */}
            </div>
          </div>
        )}
        {/* Evidence Tab */}
        {activeTab === 'evidence' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4 py-4">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">臨床實證</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                探索NMN在動物與人體研究中的發現，以及其對代謝、心血管、體能與抗衰老標記的影響。
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">人體臨床試驗發現</CardTitle>
                <CardDescription className="text-base md:text-lg">人體試驗結果顯示NMN的效果更具針對性與條件性</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 text-base md:text-lg">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-700 flex items-center gap-2">
                    <Badge variant="outline" className="text-blue-600 text-base md:text-lg px-3 py-1">代謝健康</Badge>
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    聖路易斯華盛頓大學針對超重或肥胖的糖尿病前期停經後婦女進行研究，每日給予250mg NMN，持續10週。
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg mb-3">
                    <p className="text-green-800"><strong>結果：</strong>NMN顯著改善骨骼肌的胰島素敏感性約<strong>25%</strong>，對預防和控制第二型糖尿病極具意義。</p>
                    <p className="text-gray-700 mt-2"><em>註：未觀察到對空腹血糖、血脂或血壓的顯著影響，顯示效果具組織特異性。</em></p>
                  </div>
                  <a 
                    href="https://pubmed.ncbi.nlm.nih.gov/33888596/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 underline font-semibold"
                  >
                    查看研究論文 (PubMed) <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-700 flex items-center gap-2">
                    <Badge variant="outline" className="text-red-600 text-base md:text-lg px-3 py-1">心血管健康</Badge>
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    哈佛醫學院研究團隊採用更高劑量（每日2000mg），對象為超重或肥胖的中老年人，持續28天。
                  </p>
                  <div className="bg-red-50 p-4 rounded-lg space-y-2">
                    <p className="text-red-800">✓ 顯著降低體重</p>
                    <p className="text-red-800">✓ 顯著降低總膽固醇（包括有害的LDL）</p>
                    <p className="text-red-800">✓ 顯著降低舒張壓</p>
                    <p className="text-gray-700 mt-3"><em>此研究強烈暗示NMN的效果與劑量大小及受試族群的基線健康狀況密切相關。</em></p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-700 flex items-center gap-2">
                    <Badge variant="outline" className="text-purple-600 text-base md:text-lg px-3 py-1">安全性與劑量</Badge>
                  </h3>
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      目前所有已發表的人體臨床試驗均表明NMN具有良好的安全性和耐受性。在多項隨機對照試驗中，受試者每日服用劑量從250mg至1250mg，持續時間長達12週，甚至短期高達2000mg，均未觀察到與NMN相關的嚴重不良事件。
                    </p>
                    <div className="bg-white p-4 rounded border border-green-300">
                      <p className="text-green-800 font-semibold text-center text-xl">
                        建議劑量：每日 250mg - 1000mg
                      </p>
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
                      NMN安全性研究 (GeroScience, 2023) <ExternalLink className="h-4 w-4" />
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
                  <ExternalLink className="h-5 w-5" />
                  ClinicalTrials.gov - NMN臨床試驗資料庫
                </a>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=nicotinamide+mononucleotide" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-700 hover:text-blue-900 underline font-semibold"
                >
                  <ExternalLink className="h-5 w-5" />
                  PubMed - NMN相關研究論文
                </a>
                <a 
                  href="https://sinclair.hms.harvard.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-700 hover:text-blue-900 underline font-semibold"
                >
                  <ExternalLink className="h-5 w-5" />
                  The Sinclair Lab - 哈佛大學衰老研究實驗室
                </a>
              </CardContent>
            </Card>
          </div>
        )}
        {/* Market Tab */}
        {activeTab === 'market' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4 py-4">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">市場與法規</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                了解台灣市場的獨特生態與全球監管動態，掌握NMN產品的法規環境與市場現況。
              </p>
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
                      <p className="text-gray-700">FDA以「藥品排除條款」為由，宣布NMN不再能作為膳食補充劑銷售，導致美國主流電商平台下架NMN產品。</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <p className="font-semibold text-green-800 mb-2 text-lg">2025年9月29日：政策逆轉</p>
                      <p className="text-gray-700 mb-3">FDA正式改變立場，確認「NMN符合膳食補充劑的定義」，承認有證據表明NMN在被授權作為新藥研究之前就已在市場上銷售，為其在美國市場的合法地位提供明確保障。</p>
                      <a 
                        href="https://downloads.regulations.gov/FDA-2023-P-0872-2754/attachment_1.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 underline font-semibold"
                      >
                        查看FDA官方回應信件 <ExternalLink className="h-4 w-4" />
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
                      <ExternalLink className="h-5 w-5" />
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
                    歐盟將NMN歸類為「新穎性食品」（Novel Food），需通過嚴格的安全性評估方可上市。截至2025年初，已有多家企業向EFSA提交上市申請，部分申請已進入風險評估階段。
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-3">
                    <p className="text-purple-800">
                      <strong>意義：</strong>EFSA的結論將具有極高權威性，一旦批准將為全球NMN的安全性與合法性樹立新標竿，並可能促使其他國家（包括台灣）重新評估管理政策。
                    </p>
                  </div>
                  <a 
                    href="https://www.efsa.europa.eu/en/topics/topic/novel-food" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 underline font-semibold"
                  >
                    <ExternalLink className="h-5 w-5" />
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
                        日本厚生勞動省 <ExternalLink className="h-4 w-4" />
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
                        台灣食品藥物管理署 <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    <div className="flex flex-col gap-2 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Badge variant="outline" className="text-base px-3 py-1">加拿大</Badge>
                        <p className="text-gray-700">將NMN歸為「天然健康產品」管理，已批准部分產品合法銷售。</p>
                      </div>
                      <a 
                        href="https://www.canada.ca/en/health-canada/services/drugs-health-products/natural-non-prescription.html" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 underline text-sm ml-auto"
                      >
                        加拿大衛生部 <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    <div className="flex flex-col gap-2 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Badge variant="outline" className="text-base px-3 py-1">澳洲</Badge>
                        <p className="text-gray-700">允許NMN產品註冊生產供出口，但不可在境內銷售給本國消費者。</p>
                      </div>
                      <a 
                        href="https://www.tga.gov.au/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 underline text-sm ml-auto"
                      >
                        澳洲藥品管理局 <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Conclusion Tab */}
        {activeTab === 'conclusion' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4 py-4">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">結論與建議</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                基於科學實證與市場分析，為消費者、產業業者與政策制定者提供專業建議。
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">科學前景與現實差距</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base md:text-lg">
                <p className="text-gray-700 leading-relaxed">
                  NMN作為提升細胞NAD⁺水平的補充劑，其背後的生物學理論基礎堅實，具有延緩衰老和改善多種年齡相關生理衰退的巨大潛力。動物研究的結果確實令人鼓舞，為其功效提供了強有力的概念驗證。
                </p>
                <Alert className="border-yellow-200 bg-yellow-50">
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                  <AlertTitle className="text-lg md:text-xl text-yellow-900">重要提醒</AlertTitle>
                  <AlertDescription className="text-yellow-800 leading-relaxed">
                    目前的人體臨床證據雖然在某些特定領域取得突破，但總體上仍處於初步階段，結果呈現出零散化、條件性強的特點。當前的人體數據尚不足以支持市場上普遍存在的、泛化的「逆轉衰老」或「延長壽命」等強烈宣稱。科學前景與臨床現實之間存在的差距，是所有利益相關方在評估NMN價值時必須考量的首要因素。
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
                      <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">保持批判性思維</p>
                        <p className="text-gray-700">將NMN視為潛力保健補充劑，而非神奇「不老藥」。警惕誇大行銷宣傳。</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">關注成分與劑量</p>
                        <p className="text-gray-700">仔細閱讀成分標示，了解NMN來源和實際含量。審慎評估標示不清或劑量極低的產品。</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">諮詢專業意見</p>
                        <p className="text-gray-700">服用前諮詢醫師或營養師，特別是對於有潛在健康問題或正在服藥者。</p>
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
                      <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">優先考慮透明度</p>
                        <p className="text-gray-700">清晰標示NMN來源和含量，建立消費者信任。透明度是品牌可持續發展的基石。</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">強化科學實證</p>
                        <p className="text-gray-700">投資於產品配方的科學研究，證明複方產品的協同效益。</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">為法規變化做好準備</p>
                        <p className="text-gray-700">密切關注國際法規動態，建立靈活的供應鏈和產品策略。</p>
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
                      <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">建立科學評估途徑</p>
                        <p className="text-gray-700">考慮參考歐盟模式，建立基於嚴謹科學證據的本土評估機制。</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">加強市場監管</p>
                        <p className="text-gray-700">打擊不實宣稱，維護市場秩序與消費者權益。</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">消費者教育</p>
                        <p className="text-gray-700">加強公眾科學教育，幫助消費者做出理性選擇。</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl text-center text-blue-900">總結</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-center text-lg md:text-xl">
                  NMN的故事仍在發展。它代表了抗衰老科學從實驗室走向市場的重要里程碑，也反映了科學、商業與法規之間複雜的互動。唯有基於科學、保持透明、並在清晰的法規指導下，NMN的真正潛力才能被安全、有效地實現。
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4 space-y-8">
          <div className="text-center space-y-4">
            <p className="text-gray-400 text-base md:text-lg">
              本網站內容基於科學研究與公開資料整理，僅供資訊參考，不構成醫療建議。
            </p>
            <p className="text-gray-400 text-base md:text-lg">
              使用任何補充劑前，請諮詢專業醫療人員。
            </p>
          </div>

          <Separator className="bg-gray-700" />

          {/* 監理機關參考資料 */}
          <div className="space-y-6">
            <h3 className="text-center text-xl md:text-2xl font-bold text-white">各國監理機關</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {/* 美國 FDA */}
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
                <ExternalLink className="h-5 w-5 text-gray-400" />
              </a>

              {/* 歐盟 EFSA */}
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
                <ExternalLink className="h-5 w-5 text-gray-400" />
              </a>

              {/* 日本 MHLW */}
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
                <ExternalLink className="h-5 w-5 text-gray-400" />
              </a>

              {/* 台灣 TFDA */}
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
                <ExternalLink className="h-5 w-5 text-gray-400" />
              </a>

              {/* 加拿大 Health Canada */}
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
                <ExternalLink className="h-5 w-5 text-gray-400" />
              </a>

              {/* 澳洲 TGA */}
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
                <ExternalLink className="h-5 w-5 text-gray-400" />
              </a>
            </div>
          </div>

          <Separator className="bg-gray-700" />

          {/* 學術與研究資源 */}
          <div className="space-y-6">
            <h3 className="text-center text-xl md:text-2xl font-bold text-white">學術與研究資源</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {/* PubMed */}
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
                <ExternalLink className="h-4 w-4 text-gray-400 mt-1" />
              </a>

              {/* ClinicalTrials.gov */}
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
                <ExternalLink className="h-4 w-4 text-gray-400 mt-1" />
              </a>

              {/* The Sinclair Lab */}
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
                <ExternalLink className="h-4 w-4 text-gray-400 mt-1" />
              </a>

              {/* Washington University */}
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
                <ExternalLink className="h-4 w-4 text-gray-400 mt-1" />
              </a>
            </div>
          </div>

          <Separator className="bg-gray-700" />

          {/* 行業協會 */}
          <div className="space-y-6">
            <h3 className="text-center text-xl md:text-2xl font-bold text-white">行業協會與組織</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {/* NPA */}
              <a 
                href="https://www.npanational.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105 border border-gray-700 hover:border-purple-500"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏛️</span>
                  <p className="font-semibold text-white text-base md:text-lg">NPA</p>
                </div>
                <p className="text-gray-400 text-sm text-center">Natural Products Association</p>
                <ExternalLink className="h-4 w-4 text-gray-400 mt-1" />
              </a>

              {/* ANH-USA */}
              <a 
                href="https://anh-usa.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105 border border-gray-700 hover:border-purple-500"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🌿</span>
                  <p className="font-semibold text-white text-base md:text-lg">ANH-USA</p>
                </div>
                <p className="text-gray-400 text-sm text-center">Alliance for Natural Health USA</p>
                <ExternalLink className="h-4 w-4 text-gray-400 mt-1" />
              </a>

              {/* CRN */}
              <a 
                href="https://www.crnusa.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105 border border-gray-700 hover:border-purple-500"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⚖️</span>
                  <p className="font-semibold text-white text-base md:text-lg">CRN</p>
                </div>
                <p className="text-gray-400 text-sm text-center">Council for Responsible Nutrition</p>
                <ExternalLink className="h-4 w-4 text-gray-400 mt-1" />
              </a>

              {/* AHPA */}
              <a 
                href="https://www.ahpa.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105 border border-gray-700 hover:border-purple-500"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🌱</span>
                  <p className="font-semibold text-white text-base md:text-lg">AHPA</p>
                </div>
                <p className="text-gray-400 text-sm text-center">American Herbal Products Association</p>
                <ExternalLink className="h-4 w-4 text-gray-400 mt-1" />
              </a>
            </div>
          </div>

          <Separator className="bg-gray-700" />
          <p className="text-gray-500 text-center text-sm md:text-base">
            © 2025 <a href="https://nmn.wedopr.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-400">NMN研究室</a>. All rights reserved. <a href="https://www.wedopr.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-400">www.WEDOPR.com</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
