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
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-5 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FlaskConical className="h-10 w-10 md:h-12 md:w-12 text-blue-600" />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">NMN研究室</h1>
                <p className="text-base md:text-lg text-gray-600">效用與安全 實證探討</p>
              </div>
            </div>
            
            <nav className="hidden md:flex md:flex-wrap md:gap-1 md:justify-center">
              {navItems.map((item) => (
                <Button 
                  key={item.id}
                  variant={activeTab === item.id ? 'default' : 'ghost'} 
                  onClick={() => setActiveTab(item.id)}
                  className="transition-all text-base px-4 py-2 h-auto flex-shrink-0"
                >
                  {item.label}
                </Button>
              ))}
            </nav>

            <div className="w-full md:hidden relative">
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="w-full appearance-none rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 text-base font-semibold"
              >
                {navItems.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute top-1/2 right-3 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-screen-xl">
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
                <strong>2025年9月29日</strong>，美國FDA正式改變立場，發布公開信確認「NMN符合膳食補充劑的定義」。FDA表示經分析發現有足夠證據證明NMN在被藥物立項前已作為膳食產品上市銷售，因此不受藥物優先條款限制。此外，FDA強調NMN是人體NAD⁺生物合成途徑的天然中間產物，這一特性進一步支持將其視為膳食補充成分而非藥物。此舉等於推翻了2022年的排除決定，為NMN產品在美國市場的合法地位提供了明確保障。
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
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab('science')}>
                <CardHeader>
                  <FlaskConical className="h-12 w-12 md:h-14 md:w-14 text-blue-600 mb-2" />
                  <CardTitle className="text-2xl sm:text-3xl">科學基礎</CardTitle>
                  <CardDescription className="text-lg sm:text-xl">了解NAD⁺與NMN的生物化學機制</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab('evidence')}>
                <CardHeader>
                  <Heart className="h-12 w-12 md:h-14 md:w-14 text-red-600 mb-2" />
                  <CardTitle className="text-2xl sm:text-3xl">臨床實證</CardTitle>
                  <CardDescription className="text-lg sm:text-xl">探索人體與動物研究的發現</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab('market')}>
                <CardHeader>
                  <Globe className="h-12 w-12 md:h-14 md:w-14 text-green-600 mb-2" />
                  <CardTitle className="text-2xl sm:text-3xl">市場與法規</CardTitle>
                  <CardDescription className="text-lg sm:text-xl">掌握全球與台灣的監管動態</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab('conclusion')}>
                <CardHeader>
                  <Scale className="h-12 w-12 md:h-14 md:w-14 text-purple-600 mb-2" />
                  <CardTitle className="text-2xl sm:text-3xl">結論與建議</CardTitle>
                  <CardDescription className="text-lg sm:text-xl">獲取專業的消費與政策建議</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'science' && (
          <div className="space-y-8">
            <TabHero imageUrl="https://i.urusai.cc/UyfbG.jpg" title="NMN的科學基礎" />
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">NAD⁺：細胞能量與健康的關鍵輔酶</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-base md:text-lg">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-700">能量代謝的關鍵因子</h3>
                  <p className="text-gray-700 leading-relaxed">菸鹼醯胺腺嘌呤二核苷酸（NAD⁺）是人體每個細胞中不可或缺的輔酶。NAD⁺是細胞呼吸作用的核心，參與糖解作用、三羧酸循環和電子傳遞鏈，驅動ATP（細胞能量貨幣）的合成。人體高達<strong className="text-blue-600">95%的能量</strong>源於此過程。沒有足夠的NAD⁺，細胞無法有效產生能量。</p>
                </div>
                <Separator />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-700">調控細胞健康與壽命的信號分子</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">NAD⁺是Sirtuins（長壽基因）和PARPs（DNA修復酶）等關鍵酶運作的必需底物：</p>
                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900 text-lg">Sirtuins（去乙醯酶）</strong>
                        <p className="text-gray-700">人體內七種Sirtuins（SIRT1-7）的活性完全依賴NAD⁺。它們參與DNA損傷修復、抑制發炎反應、調節新陳代謝（如血糖與血脂）、維持心血管健康及穩定染色體端粒等，共同構成細胞對抗衰老的防禦網絡。</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900 text-lg">PARPs（聚ADP核糖聚合酶）</strong>
                        <p className="text-gray-700">特別是PARP-1，當偵測到DNA單鏈斷裂時會被迅速活化，大量消耗NAD⁺來合成聚合物，標記損傷位置並召集修復蛋白。這對維持基因組穩定性至關重要。</p>
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
                  <p className="text-gray-700 leading-relaxed">由於NAD⁺分子過大無法直接穿透細胞膜，人體主要依賴「補救途徑」合成NAD⁺。當NAD⁺被Sirtuins或PARPs消耗後，會產生菸鹼醯胺（NAM），NAM在NAMPT酶作用下轉化為NMN，NMN再與ATP反應生成NAD⁺。<strong className="text-blue-600">NMN正是這條路徑上距離NAD⁺僅一步之遙的直接中間產物</strong>，補充NMN能最直接、有效地為NAD⁺合成提供原料。</p>
                </div>
                <Separator />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-700">吸收與轉化</h3>
                  <p className="text-gray-700 leading-relaxed">動物研究證實，口服NMN能被迅速吸收並在多個組織中轉化為NAD⁺。在小鼠實驗中，口服NMN後僅需<strong className="text-blue-600">15分鐘</strong>即可觀察到肝臟NAD⁺水平的顯著提升。人體臨床試驗也證實，每日口服NMN補充劑能安全有效地提高血液中NAD⁺濃度，且效果呈劑量依賴性。</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">NAD⁺水平與衰老</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base md:text-lg">
                <Alert className="border-orange-200 bg-orange-50">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                  <AlertTitle className="text-lg md:text-xl text-orange-900">NAD⁺隨年齡下降</AlertTitle>
                  <AlertDescription className="text-orange-800">研究顯示，從中年開始，多個組織中的NAD⁺含量可能下降達<strong>50%</strong>。這種NAD⁺耗竭被認為是衰老的九大標誌之一。</AlertDescription>
                </Alert>
                <p className="text-gray-700 leading-relaxed">NAD⁺的減少直接導致Sirtuins和PARPs活性下降，削弱細胞的修復與防禦能力。同時，能量工廠——粒線體的功能也因NAD⁺不足而受損，進一步加劇細胞功能衰退。這種NAD⁺減少被認為破壞了細胞核與粒線體之間的關鍵通訊，是導致衰老相關疾病（如代謝症候群、神經退化性疾病）的重要驅動因素。</p>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-green-800 font-semibold text-lg">💡 基於此，提升NAD⁺水準成為抗衰老介入的重點策略。NMN作為NAD⁺直接前體，被視為有潛力的抗衰老補充劑。</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'evidence' && (
          <div className="space-y-8">
            <TabHero imageUrl="https://i.urusai.cc/HgisN.jpg" title="臨床實證" />
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">人體臨床試驗發現</CardTitle>
                <CardDescription className="text-base md:text-lg">人體試驗結果顯示NMN的效果更具針對性與條件性</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 text-base md:text-lg">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-700 flex items-center gap-2"><Badge variant="outline" className="text-blue-600 text-base md:text-lg px-3 py-1">代謝健康</Badge></h3>
                  <p className="text-gray-700 leading-relaxed mb-3">聖路易斯華盛頓大學針對超重或肥胖的糖尿病前期停經後婦女進行研究，每日給予250mg NMN，持續10週。</p>
                  <div className="bg-green-50 p-4 rounded-lg mb-3">
                    <p className="text-green-800"><strong>結果：</strong>NMN顯著改善骨骼肌的胰島素敏感性約<strong>25%</strong>，對預防和控制第二型糖尿病極具意義。</p>
                    <p className="text-gray-700 mt-2"><em>註：未觀察到對空腹血糖、血脂或血壓的顯著影響，顯示效果具組織特異性。</em></p>
                  </div>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/33888596/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 underline font-semibold">查看研究論文 (PubMed) <ExternalLink className="h-4 w-4" /></a>
                </div>
                <Separator />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-700 flex items-center gap-2"><Badge variant="outline" className="text-red-600 text-base md:text-lg px-3 py-1">心血管健康</Badge></h3>
                  <p className="text-gray-700 leading-relaxed mb-3">哈佛醫學院研究團隊採用更高劑量（每日2000mg），對象為超重或肥胖的中老年人，持續28天。</p>
                  <div className="bg-red-50 p-4 rounded-lg space-y-2">
                    <p className="text-red-800">✓ 顯著降低體重</p>
                    <p className="text-red-800">✓ 顯著降低總膽固醇（包括有害的LDL）</p>
                    <p className="text-red-800">✓ 顯著降低舒張壓</p>
                    <p className="text-gray-700 mt-3"><em>此研究強烈暗示NMN的效果與劑量大小及受試族群的基線健康狀況密切相關。</em></p>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-700 flex items-center gap-2"><Badge variant="outline" className="text-purple-600 text-base md:text-lg px-3 py-1">安全性與劑量</Badge></h3>
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <p className="text-gray-700 leading-relaxed mb-4">目前所有已發表的人體臨床試驗均表明NMN具有良好的安全性和耐受性。在多項隨機對照試驗中，受試者每日服用劑量從250mg至1250mg，持續時間長達12週，甚至短期高達2000mg，均未觀察到與NMN相關的嚴重不良事件。</p>
                    <div className="bg-white p-4 rounded border border-green-300">
                      <p className="text-green-800 font-semibold text-center text-xl">建議劑量：每日 250mg - 1000mg</p>
                      <p className="text-gray-600 text-center mt-2">安全且可能有效的劑量區間</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <a href="https://pubmed.ncbi.nlm.nih.gov/36482258/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 underline font-semibold">NMN安全性研究 (GeroScience, 2023) <ExternalLink className="h-4 w-4" /></a>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader><CardTitle className="text-2xl md:text-3xl text-blue-900">更多臨床研究資源</CardTitle></CardHeader>
              <CardContent className="space-y-3 text-base md:text-lg">
                <a href="https://clinicaltrials.gov/search?term=nicotinamide%20mononucleotide" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 underline font-semibold"><ExternalLink className="h-5 w-5" />ClinicalTrials.gov - NMN臨床試驗資料庫</a>
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=nicotinamide+mononucleotide" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 underline font-semibold"><ExternalLink className="h-5 w-5" />PubMed - NMN相關研究論文</a>
                <a href="https://sinclair.hms.harvard.edu/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 underline font-semibold"><ExternalLink className="h-5 w-5" />The Sinclair Lab - 哈佛大學衰老研究實驗室</a>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'market' && (
          <div className="space-y-8">
            <TabHero imageUrl="https://i.urusai.cc/xwYpi.jpg" title="市場與法規" />
            <Card>
              <CardHeader><CardTitle className="text-2xl md:text-3xl">全球監管動態</CardTitle></CardHeader>
              <CardContent className="space-y-6 text-base md:text-lg">
                {/* ... market content from original file ... */}
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'conclusion' && (
          <div className="space-y-8">
            <TabHero imageUrl="https://i.urusai.cc/l8oQ3.jpg" title="結論與建議" />
            <Card>
              <CardHeader><CardTitle className="text-2xl md:text-3xl">科學前景與現實差距</CardTitle></CardHeader>
              <CardContent className="space-y-4 text-base md:text-lg">
                <p className="text-gray-700 leading-relaxed">NMN作為提升細胞NAD⁺水平的補充劑，其背後的生物學理論基礎堅實，具有延緩衰老和改善多種年齡相關生理衰退的巨大潛力。動物研究的結果確實令人鼓舞，為其功效提供了強有力的概念驗證。</p>
                <Alert className="border-yellow-200 bg-yellow-50">
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                  <AlertTitle className="text-lg md:text-xl text-yellow-900">重要提醒</AlertTitle>
                  <AlertDescription className="text-yellow-800 leading-relaxed">目前的人體臨床證據雖然在某些特定領域取得突破，但總體上仍處於初步階段，結果呈現出零散化、條件性強的特點。當前的人體數據尚不足以支持市場上普遍存在的、泛化的「逆轉衰老」或「延長壽命」等強烈宣稱。科學前景與臨床現實之間存在的差距，是所有利益相關方在評估NMN價值時必須考量的首要因素。</AlertDescription>
                </Alert>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-blue-200">{/* ... consumer card ... */}</Card>
              <Card className="border-green-200">{/* ... industry card ... */}</Card>
              <Card className="border-purple-200">{/* ... policy card ... */}</Card>
            </div>
            <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader><CardTitle className="text-2xl md:text-3xl text-center text-blue-900">總結</CardTitle></CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-center text-lg md:text-xl">NMN的故事仍在發展。它代表了抗衰老科學從實驗室走向市場的重要里程碑，也反映了科學、商業與法規之間複雜的互動。唯有基於科學、保持透明、並在清晰的法規指導下，NMN的真正潛力才能被安全、有效地實現。</p>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4 space-y-8">
          <div className="text-center space-y-4">
            <p className="text-gray-400 text-base md:text-lg">本網站內容基於科學研究與公開資料整理，僅供資訊參考，不構成醫療建議。</p>
            <p className="text-gray-400 text-base md:text-lg">使用任何補充劑前，請諮詢專業醫療人員。</p>
          </div>
          <Separator className="bg-gray-700" />
          <div className="space-y-6">
            <h3 className="text-center text-xl md:text-2xl font-bold text-white">各國監理機關</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">{/* ... links ... */}</div>
          </div>
          <Separator className="bg-gray-700" />
          <div className="space-y-6">
            <h3 className="text-center text-xl md:text-2xl font-bold text-white">學術與研究資源</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">{/* ... links ... */}</div>
          </div>
          <Separator className="bg-gray-700" />
          <div className="space-y-6">
            <h3 className="text-center text-xl md:text-2xl font-bold text-white">行業協會與組織</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">{/* ... links ... */}</div>
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
