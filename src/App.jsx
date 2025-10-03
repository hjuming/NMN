import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.jsx'
import { FlaskConical, Heart, Scale, Globe, CheckCircle2, AlertTriangle, Info } from 'lucide-react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FlaskConical className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">NMN研究室</h1>
                <p className="text-sm text-gray-600">效用與安全 實證探討</p>
              </div>
            </div>
            <nav className="flex gap-2 flex-wrap justify-center">
              <Button 
                variant={activeTab === 'home' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('home')}
                className="transition-all"
              >
                首頁
              </Button>
              <Button 
                variant={activeTab === 'science' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('science')}
                className="transition-all"
              >
                科學基礎
              </Button>
              <Button 
                variant={activeTab === 'evidence' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('evidence')}
                className="transition-all"
              >
                臨床實證
              </Button>
              <Button 
                variant={activeTab === 'market' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('market')}
                className="transition-all"
              >
                市場與法規
              </Button>
              <Button 
                variant={activeTab === 'conclusion' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('conclusion')}
                className="transition-all"
              >
                結論與建議
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Home Tab */}
        {activeTab === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <Alert className="border-blue-200 bg-blue-50">
              <Info className="h-5 w-5 text-blue-600" />
              <AlertTitle className="text-lg font-bold text-blue-900">FDA最新立場更新</AlertTitle>
              <AlertDescription className="text-blue-800 leading-relaxed mt-2">
                <strong>2025年9月29日</strong>，FDA正式改變立場，發布公開信確認「NMN符合膳食補充劑的定義」。FDA表示經分析發現有足夠證據證明NMN在被藥物立項前已作為膳食產品上市銷售，因此不受藥物優先條款限制。此外，FDA強調NMN是人體NAD⁺生物合成途徑的天然中間產物，這一特性進一步支持將其視為膳食補充成分而非藥物。此舉等於推翻了2022年的排除決定，為NMN產品在美國市場的合法地位提供了明確保障。
              </AlertDescription>
            </Alert>

            <div className="text-center space-y-4 py-8">
              <h2 className="text-4xl font-bold text-gray-900">新型態膳食補充劑：NMN</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                菸鹼醯胺單核苷酸（NMN）作為NAD⁺的直接前體，在抗衰老保健領域備受矚目。本網站基於科學實證，深入探討NMN的作用機制、臨床證據、市場現況與法規環境，為消費者、業者與政策制定者提供全面的參考資訊。
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab('science')}>
                <CardHeader>
                  <FlaskConical className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle>科學基礎</CardTitle>
                  <CardDescription>了解NAD⁺與NMN的生物化學機制</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab('evidence')}>
                <CardHeader>
                  <Heart className="h-10 w-10 text-red-600 mb-2" />
                  <CardTitle>臨床實證</CardTitle>
                  <CardDescription>探索人體與動物研究的發現</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab('market')}>
                <CardHeader>
                  <Globe className="h-10 w-10 text-green-600 mb-2" />
                  <CardTitle>市場與法規</CardTitle>
                  <CardDescription>掌握全球與台灣的監管動態</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveTab('conclusion')}>
                <CardHeader>
                  <Scale className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>結論與建議</CardTitle>
                  <CardDescription>獲取專業的消費與政策建議</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        )}

        {/* Science Tab */}
        {activeTab === 'science' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4 py-4">
              <h2 className="text-4xl font-bold text-gray-900">NMN的科學基礎</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                深入了解NAD⁺與NMN的生物化學機制，以及它們在細胞能量代謝與衰老過程中的關鍵角色。
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">NAD⁺：細胞能量與健康的關鍵輔酶</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-700">能量代謝的關鍵因子</h3>
                  <p className="text-gray-700 leading-relaxed">
                    菸鹼醯胺腺嘌呤二核苷酸（NAD⁺）是人體每個細胞中不可或缺的輔酶。NAD⁺是細胞呼吸作用的核心，參與糖解作用、三羧酸循環和電子傳遞鏈，驅動ATP（細胞能量貨幣）的合成。人體高達<strong className="text-blue-600">95%的能量</strong>源於此過程。沒有足夠的NAD⁺，細胞無法有效產生能量。
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-700">調控細胞健康與壽命的信號分子</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    NAD⁺是Sirtuins（長壽基因）和PARPs（DNA修復酶）等關鍵酶運作的必需底物：
                  </p>
                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">Sirtuins（去乙醯酶）</strong>
                        <p className="text-gray-700">人體內七種Sirtuins（SIRT1-7）的活性完全依賴NAD⁺。它們參與DNA損傷修復、抑制發炎反應、調節新陳代謝（如血糖與血脂）、維持心血管健康及穩定染色體端粒等，共同構成細胞對抗衰老的防禦網絡。</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">PARPs（聚ADP核糖聚合酶）</strong>
                        <p className="text-gray-700">特別是PARP-1，當偵測到DNA單鏈斷裂時會被迅速活化，大量消耗NAD⁺來合成聚合物，標記損傷位置並召集修復蛋白。這對維持基因組穩定性至關重要。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">NMN：NAD⁺的直接前體</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-700">補救合成途徑</h3>
                  <p className="text-gray-700 leading-relaxed">
                    由於NAD⁺分子過大無法直接穿透細胞膜，人體主要依賴「補救途徑」合成NAD⁺。當NAD⁺被Sirtuins或PARPs消耗後，會產生菸鹼醯胺（NAM），NAM在NAMPT酶作用下轉化為NMN，NMN再與ATP反應生成NAD⁺。<strong className="text-blue-600">NMN正是這條路徑上距離NAD⁺僅一步之遙的直接中間產物</strong>，補充NMN能最直接、有效地為NAD⁺合成提供原料。
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-700">與其他前體的比較</h3>
                  <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                    <p className="text-gray-700"><strong>NR（菸鹼醯胺核苷）</strong>：需先轉化為NMN才能合成NAD⁺</p>
                    <p className="text-gray-700"><strong>NAM（菸鹼醯胺）</strong>：高劑量可能抑制Sirtuins活性</p>
                    <p className="text-gray-700"><strong>Niacin（菸鹼酸）</strong>：常伴隨皮膚潮紅等副作用</p>
                    <p className="text-green-700 font-semibold mt-3">✓ NMN被視為更理想的NAD⁺補充劑</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-700">吸收與轉化</h3>
                  <p className="text-gray-700 leading-relaxed">
                    動物研究證實，口服NMN能被迅速吸收並在多個組織中轉化為NAD⁺。在小鼠實驗中，口服NMN後僅需<strong className="text-blue-600">15分鐘</strong>即可觀察到肝臟NAD⁺水平的顯著提升。人體臨床試驗也證實，每日口服NMN補充劑能安全有效地提高血液中NAD⁺濃度，且效果呈劑量依賴性。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">NAD⁺水平與衰老</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-orange-200 bg-orange-50">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  <AlertTitle className="text-orange-900">NAD⁺隨年齡下降</AlertTitle>
                  <AlertDescription className="text-orange-800">
                    研究顯示，從中年開始，多個組織中的NAD⁺含量可能下降達<strong>50%</strong>。這種NAD⁺耗竭被認為是衰老的九大標誌之一。
                  </AlertDescription>
                </Alert>

                <p className="text-gray-700 leading-relaxed">
                  NAD⁺的減少直接導致Sirtuins和PARPs活性下降，削弱細胞的修復與防禦能力。同時，能量工廠——粒線體的功能也因NAD⁺不足而受損，進一步加劇細胞功能衰退。這種NAD⁺減少被認為破壞了細胞核與粒線體之間的關鍵通訊，是導致衰老相關疾病（如代謝症候群、神經退化性疾病）的重要驅動因素。
                </p>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-green-800 font-semibold">
                    💡 基於此，提升NAD⁺水準成為抗衰老介入的重點策略。NMN作為NAD⁺直接前體，被視為有潛力的抗衰老補充劑。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Evidence Tab */}
        {activeTab === 'evidence' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4 py-4">
              <h2 className="text-4xl font-bold text-gray-900">臨床實證</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                探索NMN在動物與人體研究中的發現，以及其對代謝、心血管、體能與抗衰老標記的影響。
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">奠基性的動物研究</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  哈佛大學David Sinclair教授團隊的實驗室是推動NMN研究的先驅。2013年於《科學》期刊發表的論文是該領域的里程碑。研究發現，給予年長小鼠NMN能在短時間內將其多項生理指標（如粒線體功能、胰島素敏感性、發炎水平）恢復到接近年輕小鼠的水平。
                </p>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <p className="text-purple-800">
                    <strong>關鍵發現：</strong>這些驚人的「逆轉衰老」效果點燃了全球對NMN的熱情，也成為後續所有商業宣傳的核心素材。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">人體臨床試驗發現</CardTitle>
                <CardDescription>人體試驗結果顯示NMN的效果更具針對性與條件性</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-700 flex items-center gap-2">
                    <Badge variant="outline" className="text-blue-600">代謝健康</Badge>
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    聖路易斯華盛頓大學針對超重或肥胖的糖尿病前期停經後婦女進行研究，每日給予250mg NMN，持續10週。
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-800"><strong>結果：</strong>NMN顯著改善骨骼肌的胰島素敏感性約<strong>25%</strong>，對預防和控制第二型糖尿病極具意義。</p>
                    <p className="text-gray-700 mt-2"><em>註：未觀察到對空腹血糖、血脂或血壓的顯著影響，顯示效果具組織特異性。</em></p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-700 flex items-center gap-2">
                    <Badge variant="outline" className="text-red-600">心血管健康</Badge>
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
                  <h3 className="text-xl font-semibold mb-3 text-blue-700 flex items-center gap-2">
                    <Badge variant="outline" className="text-orange-600">體能表現</Badge>
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    針對業餘跑者的研究發現，NMN補充劑（每日600mg或1200mg）與運動訓練相結合，能以劑量依賴方式顯著提升有氧能力（最大攝氧量）。針對65歲以上男性，每日250mg NMN能改善步速和握力等功能性指標。
                  </p>
                  <Alert className="border-yellow-200 bg-yellow-50">
                    <Info className="h-5 w-5 text-yellow-600" />
                    <AlertDescription className="text-yellow-800">
                      近期系統性回顧與統合分析指出，總體而言，NAD⁺前體補充劑並未顯著改善老年人的肌肉力量或身體功能。這凸顯NMN效果可能取決於特定應用場景（如結合運動訓練）和評估指標。
                    </AlertDescription>
                  </Alert>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-700 flex items-center gap-2">
                    <Badge variant="outline" className="text-purple-600">抗衰老生物標記</Badge>
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-purple-800 mb-2"><strong>端粒長度研究：</strong></p>
                      <p className="text-gray-700">在45-60歲男性中，每日補充300mg NMN持續90天後，周邊血單核細胞的端粒長度幾乎<strong className="text-purple-600">增加一倍</strong>。端粒長度縮短是細胞衰老的標誌，此發現極具潛力。</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-purple-800 mb-2"><strong>血液生物學年齡研究：</strong></p>
                      <p className="text-gray-700">使用演算法評估發現，在60天試驗期間，安慰劑組的生物學年齡顯著增加，而NMN補充組維持不變，兩組之間存在統計學顯著差異。</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">安全性與劑量考量</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-700">安全性與耐受性</h3>
                  <p className="text-gray-700 leading-relaxed">
                    目前所有已發表的人體臨床試驗均表明NMN具有良好的安全性和耐受性。在多項隨機對照試驗中，受試者每日服用劑量從250mg至1250mg，持續時間長達12週，甚至短期高達2000mg，均未觀察到與NMN相關的嚴重不良事件。副作用發生率與安慰劑組相當，多為輕微的腸胃不適等。
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-700">有效劑量範圍</h3>
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      人體研究採用的NMN劑量範圍很廣。一些研究顯示，每日250mg已能在特定方面產生效果（如改善胰島素敏感性）。然而，更多研究指出，對於提升體能或更顯著地提高血液NAD⁺水平，可能需要更高劑量，通常在每日600mg至900mg之間效果更為顯著。
                    </p>
                    <div className="bg-white p-4 rounded border border-green-300">
                      <p className="text-green-800 font-semibold text-center text-lg">
                        建議劑量：每日 250mg - 1000mg
                      </p>
                      <p className="text-gray-600 text-center mt-2 text-sm">安全且可能有效的劑量區間</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Market Tab */}
        {activeTab === 'market' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4 py-4">
              <h2 className="text-4xl font-bold text-gray-900">市場與法規</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                了解台灣市場的獨特生態與全球監管動態，掌握NMN產品的法規環境與市場現況。
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">台灣市場的獨特生態</CardTitle>
                <CardDescription>受法規環境塑造的「灰色地帶」市場</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-700">法規限制</h3>
                  <Alert className="border-red-200 bg-red-50">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <AlertDescription className="text-red-800">
                      台灣衛福部食藥署尚未將高純度NMN列為合法食品原料，禁止以純化NMN作為主要成分的產品製造、銷售或進口。
                    </AlertDescription>
                  </Alert>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-700">「天然來源」策略</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    業者透過使用天然存在微量NMN的食品原料（如酵母粉、花椰菜萃取物），並搭配其他保健成分（如白藜蘆醇、輔酶Q10），以符合法規並進行行銷。這種策略使產品能在法規的灰色地帶中合法銷售。
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <p className="text-yellow-800">
                      <strong>問題：</strong>合法產品中的NMN實際含量通常極低，可能遠不及臨床研究所使用的有效劑量，引發對功效的質疑。
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-700">模糊化的劑量標示</h3>
                  <p className="text-gray-700 leading-relaxed">
                    許多產品名稱帶有「3750」、「18000」、「30000」等數字，容易讓消費者誤以為是NMN的毫克含量。然而，實際NMN含量可能以ppm（百萬分點濃度）標示，或根本沒有明確標示。例如，某產品宣稱NMN純度從5,000 ppm提升至30,000 ppm，換算後即為<strong className="text-orange-600">3%的純度</strong>。
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-700">複方成分的「光環效應」</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800 mb-2">NMN + 白藜蘆醇</p>
                      <p className="text-gray-700 text-sm">最常見組合，理論上能產生協同效應</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800 mb-2">NMN + 輔酶Q10</p>
                      <p className="text-gray-700 text-sm">從兩個角度支持細胞能量生產</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800 mb-2">NMN + 膠原蛋白</p>
                      <p className="text-gray-700 text-sm">擴展至美容養顏市場</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800 mb-2">NMN + GABA</p>
                      <p className="text-gray-700 text-sm">定位於改善睡眠</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-700">個人自用進口與雙軌市場</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    台灣法規允許民眾以個人自用目的從國外郵購或攜帶一定數量NMN產品入境（嚴禁轉售）。這形成了台灣市場的雙軌現象：
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="font-semibold text-gray-800 mb-2">國內市場</p>
                      <p className="text-gray-700 text-sm">合法的低劑量、複方天然來源產品</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="font-semibold text-gray-800 mb-2">個人進口</p>
                      <p className="text-gray-700 text-sm">高純度、單方產品（水貨）</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">全球監管動態</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-700 flex items-center gap-2">
                    <Badge className="bg-blue-600">美國FDA</Badge>
                    立場轉變
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <p className="font-semibold text-red-800 mb-2">2022年11月：排除決定</p>
                      <p className="text-gray-700 text-sm">FDA以「藥品排除條款」為由，宣布NMN不再能作為膳食補充劑銷售，導致美國主流電商平台下架NMN產品。</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <p className="font-semibold text-green-800 mb-2">2025年9月29日：政策逆轉</p>
                      <p className="text-gray-700 text-sm">FDA正式改變立場，確認「NMN符合膳食補充劑的定義」，承認有證據表明NMN在被授權作為新藥研究之前就已在市場上銷售，為其在美國市場的合法地位提供明確保障。</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-700 flex items-center gap-2">
                    <Badge className="bg-purple-600">歐盟EFSA</Badge>
                    新穎性食品路徑
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    歐盟將NMN歸類為「新穎性食品」（Novel Food），需通過嚴格的安全性評估方可上市。截至2025年初，已有多家企業向EFSA提交上市申請，部分申請已進入風險評估階段。
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <p className="text-purple-800">
                      <strong>意義：</strong>EFSA的結論將具有極高權威性，一旦批准將為全球NMN的安全性與合法性樹立新標竿，並可能促使其他國家（包括台灣）重新評估管理政策。
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-700">其他主要地區</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline">日本</Badge>
                      <p className="text-gray-700 text-sm">對NMN採取較開放態度，2020年列為「非藥品」可作為食品成分使用。</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline">中國大陸</Badge>
                      <p className="text-gray-700 text-sm">嚴格管制，禁止NMN作為食品添加劑或新食品原料。</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline">加拿大</Badge>
                      <p className="text-gray-700 text-sm">將NMN歸為「天然健康產品」管理，已批准部分產品合法銷售。</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline">澳洲</Badge>
                      <p className="text-gray-700 text-sm">允許NMN產品註冊生產供出口，但不可在境內銷售給本國消費者。</p>
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
              <h2 className="text-4xl font-bold text-gray-900">結論與建議</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                基於科學實證與市場分析，為消費者、產業業者與政策制定者提供專業建議。
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">科學前景與現實差距</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  NMN作為提升細胞NAD⁺水平的補充劑，其背後的生物學理論基礎堅實，具有延緩衰老和改善多種年齡相關生理衰退的巨大潛力。動物研究的結果確實令人鼓舞，為其功效提供了強有力的概念驗證。
                </p>
                <Alert className="border-yellow-200 bg-yellow-50">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <AlertTitle className="text-yellow-900">重要提醒</AlertTitle>
                  <AlertDescription className="text-yellow-800 leading-relaxed">
                    目前的人體臨床證據雖然在某些特定領域取得突破，但總體上仍處於初步階段，結果呈現出零散化、條件性強的特點。當前的人體數據尚不足以支持市場上普遍存在的、泛化的「逆轉衰老」或「延長壽命」等強烈宣稱。科學前景與臨床現實之間存在的差距，是所有利益相關方在評估NMN價值時必須考量的首要因素。
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">對消費者建議</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">保持批判性思維</p>
                        <p className="text-gray-700 text-sm">將NMN視為潛力保健補充劑，而非神奇「不老藥」。警惕誇大行銷宣傳。</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">關注成分與劑量</p>
                        <p className="text-gray-700 text-sm">仔細閱讀成分標示，了解NMN來源和實際含量。審慎評估標示不清或劑量極低的產品。</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">諮詢專業意見</p>
                        <p className="text-gray-700 text-sm">服用前諮詢醫師或營養師，特別是對於有潛在健康問題或正在服藥者。</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">對產業業者建議</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">優先考慮透明度</p>
                        <p className="text-gray-700 text-sm">清晰標示NMN來源和含量，建立消費者信任。透明度是品牌可持續發展的基石。</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">強化科學實證</p>
                        <p className="text-gray-700 text-sm">投資於產品配方的科學研究，證明複方產品的協同效益。</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">為法規變化做好準備</p>
                        <p className="text-gray-700 text-sm">密切關注國際法規動態，建立靈活的供應鏈和產品策略。</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-700">對政策制定者建議</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">建立科學評估途徑</p>
                        <p className="text-gray-700 text-sm">考慮參考歐盟模式，建立基於嚴謹科學證據的本土評估機制。</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">加強市場監管</p>
                        <p className="text-gray-700 text-sm">打擊不實宣稱，維護市場秩序與消費者權益。</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">消費者教育</p>
                        <p className="text-gray-700 text-sm">加強公眾科學教育，幫助消費者做出理性選擇。</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-blue-900">總結</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-center text-lg">
                  NMN的故事仍在發展。它代表了抗衰老科學從實驗室走向市場的重要里程碑，也反映了科學、商業與法規之間複雜的互動。唯有基於科學、保持透明、並在清晰的法規指導下，NMN的真正潛力才能被安全、有效地實現。
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            本網站內容基於科學研究與公開資料整理，僅供資訊參考，不構成醫療建議。
          </p>
          <p className="text-gray-400 mt-2">
            使用任何補充劑前，請諮詢專業醫療人員。
          </p>
          <p className="text-gray-500 mt-4 text-sm">
            © 2025 NMN研究室. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
