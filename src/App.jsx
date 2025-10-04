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
        <div className="container mx-auto px-4 py-5 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FlaskConical className="h-10 w-10 md:h-12 md:w-12 text-blue-600" />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">NMN研究室</h1>
                <p className="text-base md:text-lg text-gray-600">效用與安全 實證探討</p>
              </div>
            </div>
            
            {/* 桌面版導覽列 */}
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

            {/* 手機版下拉選單 */}
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
              <CardHeader><CardTitle className="text-2xl md:text-3xl">NAD⁺：細胞能量與健康的關鍵輔酶</CardTitle></CardHeader>
              <CardContent>{/* ... */}</CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-2xl md:text-3xl">NMN：NAD⁺的直接前體</CardTitle></CardHeader>
              <CardContent>{/* ... */}</CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-2xl md:text-3xl">NAD⁺水平與衰老</CardTitle></CardHeader>
              <CardContent>{/* ... */}</CardContent>
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
              <CardContent>{/* ... */}</CardContent>
            </Card>
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader><CardTitle className="text-2xl md:text-3xl text-blue-900">更多臨床研究資源</CardTitle></CardHeader>
              <CardContent>{/* ... */}</CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'market' && (
          <div className="space-y-8">
            <TabHero imageUrl="https://i.urusai.cc/xwYpi.jpg" title="市場與法規" />
            <Card>
              <CardHeader><CardTitle className="text-2xl md:text-3xl">全球監管動態</CardTitle></CardHeader>
              <CardContent>{/* ... */}</CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'conclusion' && (
          <div className="space-y-8">
            <TabHero imageUrl="https://i.urusai.cc/l8oQ3.jpg" title="結論與建議" />
            <Card>
              <CardHeader><CardTitle className="text-2xl md:text-3xl">科學前景與現實差距</CardTitle></CardHeader>
              <CardContent>{/* ... */}</CardContent>
            </Card>
            <div className="grid md:grid-cols-3 gap-6">{/* ... */}</div>
            <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader><CardTitle className="text-2xl md:text-3xl text-center text-blue-900">總結</CardTitle></CardHeader>
              <CardContent>{/* ... */}</Card-Content>
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
          <div className="space-y-6">
            <h3 className="text-center text-xl md:text-2xl font-bold text-white">各國監理機關</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">{/* ... */}</div>
          </div>
          <Separator className="bg-gray-700" />
          <div className="space-y-6">
            <h3 className="text-center text-xl md:text-2xl font-bold text-white">學術與研究資源</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">{/* ... */}</div>
          </div>
          <Separator className="bg-gray-700" />
          <div className="space-y-6">
            <h3 className="text-center text-xl md:text-2xl font-bold text-white">行業協會與組織</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">{/* ... */}</div>
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
