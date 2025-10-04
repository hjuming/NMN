import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.jsx'
import { FlaskConical, Heart, Scale, Globe, CheckCircle2, AlertTriangle, Info, ExternalLink } from 'lucide-react'
import './App.mobile.css'

function AppMobile() {
  const [activeTab, setActiveTab] = useState('home')
  const tablistRef = useRef(null)

  const tabs = [
    { id: 'home', label: '首頁' },
    { id: 'science', label: '科學基礎' },
    { id: 'evidence', label: '臨床實證' },
    { id: 'market', label: '市場與法規' },
    { id: 'conclusion', label: '結論與建議' },
  ]

  // 鍵盤左右切換（桌機/可及性）
  useEffect(() => {
    const el = tablistRef.current
    if (!el) return
    const onKey = (e) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
      e.preventDefault()
      const idx = tabs.findIndex(t => t.id === activeTab)
      if (idx === -1) return
      const nextIdx = e.key === 'ArrowRight' ? (idx + 1) % tabs.length : (idx - 1 + tabs.length) % tabs.length
      setActiveTab(tabs[nextIdx].id)
      el.querySelector(`[data-tab="${tabs[nextIdx].id}"]`)?.scrollIntoView({ inline: 'center', block: 'nearest' })
    }
    el.addEventListener('keydown', onKey)
    return () => el.removeEventListener('keydown', onKey)
  }, [activeTab])

  return (
    <div className="app-m min-h-screen bg-white text-gray-900 selection:bg-blue-100">
      {/* Compact Header（行動優先，含安全區） */}
      <header className="m-header sticky top-0 z-50 border-b bg-white/90 backdrop-blur supports-backdrop-blur">
        <div className="m-safe container-m py-3">
          <div className="flex items-center gap-2">
            <FlaskConical className="h-8 w-8 text-blue-600 flex-shrink-0" />
            <div className="min-w-0">
              <h1 className="text-2xl font-bold tracking-tight truncate">NMN研究室</h1>
              <p className="text-sm text-gray-600 truncate">效用與安全 實證探討</p>
            </div>
          </div>
        </div>

        {/* 行動優先：滿版可滑動分頁（thumb 超好滑） */}
        <div className="m-tabbar shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.06)]">
          <div className="container-m">
            <nav
              ref={tablistRef}
              role="tablist"
              aria-label="主選單分頁"
              className="tab-scroll scrollbar-hide"
            >
              <div className="inline-flex gap-2 whitespace-nowrap">
                {tabs.map((t) => (
                  <Button
                    key={t.id}
                    role="tab"
                    aria-selected={activeTab === t.id}
                    data-tab={t.id}
                    variant={activeTab === t.id ? 'default' : 'ghost'}
                    onClick={() => setActiveTab(t.id)}
                    className={`m-tab ${activeTab === t.id ? 'm-tab-active' : 'm-tab-ghost'}`}
                  >
                    {t.label}
                  </Button>
                ))}
              </div>
            </nav>
          </div>
          {/* 右側漸層提示可滑動 */}
          <div className="m-tab-gradient" />
        </div>
      </header>

      {/* Main（單欄排版，行動字級/間距優化） */}
      <main className="container-m py-6">
        {/* Home */}
        {activeTab === 'home' && (
          <div className="space-y-6 animate-fade-in">
            <Alert className="border-blue-200 bg-blue-50">
              <Info className="h-6 w-6 text-blue-600" />
              <AlertTitle className="text-xl font-bold text-blue-900">FDA最新立場更新</AlertTitle>
              <AlertDescription className="text-blue-800 mt-2 leading-relaxed text-[1.05rem] break-words">
                <strong>2025年09月29日</strong> 美國FDA正式改變立場，發布公開信確認「NMN符合膳食補充劑的定義」。FDA表示經分析發現有足夠證據證明NMN在被藥物立項前已作為膳食產品上市銷售，因此不受藥物優先條款限制。此外，FDA強調NMN是人體NAD⁺生物合成途徑的天然中間產物，進一步支持將其視為膳食補充成分而非藥物。
                <br /><br />
                <a
                  href="https://downloads.regulations.gov/FDA-2023-P-0872-2754/attachment_1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 underline font-semibold break-all"
                >
                  查看FDA官方回應信件 <ExternalLink className="h-4 w-4" />
                </a>
              </AlertDescription>
            </Alert>

            <section className="text-center space-y-3">
              <h2 className="text-3xl font-bold">新型態膳食補充劑：NMN</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                菸鹼醯胺單核苷酸（NMN）作為NAD⁺的直接前體，在抗衰老保健領域備受矚目。本網站基於科學實證，深入探討NMN的作用機制、臨床證據、市場現況與法規環境。
              </p>
            </section>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setActiveTab('science')}>
                <CardHeader className="p-4">
                  <FlaskConical className="h-8 w-8 text-blue-600 mb-1" />
                  <CardTitle className="text-lg">科學基礎</CardTitle>
                  <CardDescription className="text-sm">了解NAD⁺與NMN機制</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setActiveTab('evidence')}>
                <CardHeader className="p-4">
                  <Heart className="h-8 w-8 text-red-600 mb-1" />
                  <CardTitle className="text-lg">臨床實證</CardTitle>
                  <CardDescription className="text-sm">人體與動物研究</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setActiveTab('market')}>
                <CardHeader className="p-4">
                  <Globe className="h-8 w-8 text-green-600 mb-1" />
                  <CardTitle className="text-lg">市場與法規</CardTitle>
                  <CardDescription className="text-sm">全球與台灣動態</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setActiveTab('conclusion')}>
                <CardHeader className="p-4">
                  <Scale className="h-8 w-8 text-purple-600 mb-1" />
                  <CardTitle className="text-lg">結論與建議</CardTitle>
                  <CardDescription className="text-sm">專業建議彙整</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        )}

        {/* Science */}
        {activeTab === 'science' && (
          <div className="space-y-6 animate-fade-in">
            <section className="text-center space-y-2">
              <h2 className="text-2xl font-bold">NMN的科學基礎</h2>
              <p className="text-base text-gray-600">了解NAD⁺與NMN在能量代謝與衰老中的角色。</p>
            </section>

            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-xl">NAD⁺：關鍵輔酶</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4 text-[1.05rem] leading-relaxed">
                <p>當前細胞能量生成大多數仰賴NAD⁺參與的代謝路徑，驅動ATP合成。缺乏NAD⁺會直接影響能量產生。</p>
                <Separator />
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-blue-700">維持細胞健康的關鍵底物</h3>
                  <div className="space-y-2">
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                      <p><strong>Sirtuins</strong> 與 <strong>PARPs</strong> 的活性依賴NAD⁺，參與DNA修復、發炎調控與代謝調節。</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                      <p>粒線體功能與核粒線體通訊也會受到NAD⁺水平影響。</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-xl">NMN：NAD⁺直接前體</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4 text-[1.05rem] leading-relaxed">
                <p>NMN是補救途徑的關鍵中間物，距離NAD⁺僅一步反應；補充NMN可直接支援NAD⁺合成。</p>
                <Separator />
                <p>動物與人體研究顯示口服NMN可提升多組織NAD⁺水平，且呈劑量依賴性。</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Evidence */}
        {activeTab === 'evidence' && (
          <div className="space-y-6 animate-fade-in">
            <section className="text-center space-y-2">
              <h2 className="text-2xl font-bold">臨床實證</h2>
              <p className="text-base text-gray-600">代謝、心血管、體能與安全性。</p>
            </section>

            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-xl">人體臨床試驗</CardTitle>
                <CardDescription className="text-sm">效果具針對性與條件性</CardDescription>
              </CardHeader>
              <CardContent className="p-4 space-y-4 text-[1.05rem] leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-blue-700 flex items-center gap-2">
                    <Badge variant="outline" className="text-blue-600 px-2 py-0.5 text-sm">代謝健康</Badge>
                  </h3>
                  <p className="mt-2">超重/肥胖的糖尿病前期停經後婦女，每日250mg×10週，骨骼肌胰島素敏感性↑約25%。</p>
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/33888596/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 underline font-semibold mt-1"
                  >
                    研究連結 <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold text-blue-700 flex items-center gap-2">
                    <Badge variant="outline" className="text-red-600 px-2 py-0.5 text-sm">心血管</Badge>
                  </h3>
                  <p className="mt-2">每日2000mg×28天：體重、總膽固醇/LDL、舒張壓顯著降低（與受試者基線狀態/劑量相關）。</p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold text-blue-700 flex items-center gap-2">
                    <Badge variant="outline" className="text-purple-600 px-2 py-0.5 text-sm">安全性</Badge>
                  </h3>
                  <p className="mt-2">250–1250mg/日（長達12週），短期至2000mg，均無與NMN相關的嚴重不良事件。</p>
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/36482258/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 underline font-semibold mt-1"
                  >
                    安全性研究 <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader className="p-4">
                <CardTitle className="text-xl text-blue-900">更多資源</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-2 text-[1.05rem]">
                <a
                  href="https://clinicaltrials.gov/search?term=nicotinamide%20mononucleotide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-700 underline font-semibold"
                >
                  <ExternalLink className="h-4 w-4" /> ClinicalTrials.gov
                </a>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=nicotinamide+mononucleotide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-700 underline font-semibold"
                >
                  <ExternalLink className="h-4 w-4" /> PubMed
                </a>
                <a
                  href="https://sinclair.hms.harvard.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-700 underline font-semibold"
                >
                  <ExternalLink className="h-4 w-4" /> Sinclair Lab
                </a>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Market */}
        {activeTab === 'market' && (
          <div className="space-y-6 animate-fade-in">
            <section className="text-center space-y-2">
              <h2 className="text-2xl font-bold">市場與法規</h2>
              <p className="text-base text-gray-600">全球監管與台灣現況。</p>
            </section>

            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-xl">全球監管重點</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4 text-[1.05rem] leading-relaxed">
                <div className="space-y-2">
                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <p className="font-semibold text-red-800">2022/11：FDA排除決定</p>
                    <p className="text-gray-700 text-sm">以藥品排除條款為由，下架多數NMN產品。</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <p className="font-semibold text-green-800">2025/09/29：政策逆轉</p>
                    <p className="text-gray-700 text-sm">確認「NMN符合膳食補充劑定義」。</p>
                    <a
                      href="https://downloads.regulations.gov/FDA-2023-P-0872-2754/attachment_1.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-700 underline font-semibold mt-1"
                    >
                      官方回應信件 <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Badge className="bg-purple-600 px-2 py-0.5 text-sm">歐盟EFSA</Badge>
                    <p className="text-[1.05rem] leading-relaxed">
                      走新穎性食品審查路徑，安全性結論將具高度指標性。
                    </p>
                  </div>
                  <a
                    href="https://www.efsa.europa.eu/en/topics/topic/novel-food"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-700 underline font-semibold"
                  >
                    了解EFSA <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="px-2 py-0.5 text-sm">日本</Badge>
                    <p>2020年起列為「非藥品」可用作食品成分。</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="px-2 py-0.5 text-sm">台灣</Badge>
                    <p>高純度NMN尚未列為合法食品原料。</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="px-2 py-0.5 text-sm">加拿大</Badge>
                    <p>以「天然健康產品」管理，部分產品核准。</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="px-2 py-0.5 text-sm">澳洲</Badge>
                    <p>可註冊生產供出口，境內零售受限。</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Conclusion */}
        {activeTab === 'conclusion' && (
          <div className="space-y-6 animate-fade-in">
            <section className="text-center space-y-2">
              <h2 className="text-2xl font-bold">結論與建議</h2>
              <p className="text-base text-gray-600">給消費者、產業、決策者的要點。</p>
            </section>

            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-xl">科學前景與現實差距</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3 text-[1.05rem] leading-relaxed">
                <p>NMN具備堅實生物學理論，動物證據亮眼；但人體實證仍初步，對泛化宣稱須審慎。</p>
                <Alert className="border-yellow-200 bg-yellow-50">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <AlertTitle className="text-base text-yellow-900">重要提醒</AlertTitle>
                  <AlertDescription className="text-yellow-800">
                    目前人體數據不足以支持「逆齡/延壽」等強宣稱，應聚焦具體族群/終點。
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              <Card className="border-blue-200">
                <CardHeader className="p-4">
                  <CardTitle className="text-lg text-blue-700">對消費者</CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-2 text-[1.05rem]">
                  <p>保持批判思維，警惕誇大宣稱。</p>
                  <p>重視來源與劑量標示，諮詢專業人員。</p>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader className="p-4">
                  <CardTitle className="text-lg text-green-700">對產業</CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-2 text-[1.05rem]">
                  <p>資訊透明、強化科學實證、提前做法規風險配置。</p>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader className="p-4">
                  <CardTitle className="text-lg text-purple-700">對決策者</CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-2 text-[1.05rem]">
                  <p>建立科學審查途徑、加強市場監管與公共教育。</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      {/* Footer（行動優先，精簡版） */}
      <footer className="mt-10 border-t bg-gray-50">
        <div className="container-m py-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <a href="https://www.fda.gov/" target="_blank" rel="noopener noreferrer" className="m-chip">
              🇺🇸 FDA <ExternalLink className="h-4 w-4" />
            </a>
            <a href="https://www.efsa.europa.eu/" target="_blank" rel="noopener noreferrer" className="m-chip">
              🇪🇺 EFSA <ExternalLink className="h-4 w-4" />
            </a>
            <a href="https://www.mhlw.go.jp/english/" target="_blank" rel="noopener noreferrer" className="m-chip">
              🇯🇵 MHLW <ExternalLink className="h-4 w-4" />
            </a>
            <a href="https://www.fda.gov.tw/" target="_blank" rel="noopener noreferrer" className="m-chip">
              🇹🇼 TFDA <ExternalLink className="h-4 w-4" />
            </a>
            <a href="https://www.canada.ca/en/health-canada.html" target="_blank" rel="noopener noreferrer" className="m-chip">
              🇨🇦 Health Canada <ExternalLink className="h-4 w-4" />
            </a>
            <a href="https://www.tga.gov.au/" target="_blank" rel="noopener noreferrer" className="m-chip">
              🇦🇺 TGA <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <p className="text-center text-sm text-gray-600">
            © 2025{' '}
            <a href="https://nmn.wedopr.com" target="_blank" rel="noopener noreferrer" className="underline">
              NMN研究室
            </a>{' '}
            ·{' '}
            <a href="https://www.wedopr.com" target="_blank" rel="noopener noreferrer" className="underline">
              @WEDOPR
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default AppMobile
