import { useState, useEffect } from 'react';
// --- 已移除所有外部元件和圖示庫的 import ---
import './App.css';

// 為了替代 lucide-react，我們自己做幾個簡單的圖示元件
const ExternalLink = () => <span style={{ verticalAlign: 'middle' }}>↗</span>;
const ChevronDown = (props) => <span {...props}>▼</span>;
const Plus = (props) => <span {...props}>+</span>;
const Minus = (props) => <span {...props}>-</span>;

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [openFaq, setOpenFaq] = useState(null);

  const navItems = [
    { id: 'home', label: '首頁' },
    { id: 'science', label: '科學基礎' },
    { id: 'evidence', label: '臨床實證' },
    { id: 'market', label: '市場與法規' },
    { id: 'conclusion', label: '結論與建議' },
  ];

  const faqData = [
    {
      question: "NMN 是什麼？它和 NAD+ 有什麼關係？",
      answer: "NMN (菸鹼醯胺單核苷酸) 是人體內天然存在的分子，也是 NAD+ (菸鹼醯胺腺嘌呤二核苷酸) 的直接前體。您可以將 NMN 視為製造 NAD+ 的原料。補充 NMN 的主要目的就是為了提升體內 NAD+ 的水平，因為 NAD+ 在細胞能量代謝、DNA 修復和維持整體健康中扮演著至關重要的角色。"
    },
    {
      question: "服用 NMN 安全嗎？建議的劑量是多少？",
      answer: "根據目前已發表的人體臨床試驗，NMN 具有良好的安全性和耐受性。常見的有效劑量範圍在每日 250mg 至 1000mg 之間。然而，如果您有潛在的健康問題或正在服用其他藥物，在開始服用任何新的補充劑前，務必諮詢您的醫師或專業醫療人員。"
    },
    {
      question: "NMN 在台灣是合法的嗎？",
      answer: "截至目前，台灣衛福部食藥署 (TFDA) 尚未將高純度的 NMN 列為合法的「食品原料」。因此，在台灣市場上，您可能會看到一些含有 NMN 前體（如菸鹼醯胺或菸鹼酸）的產品，或是透過跨境電商購買的 NMN 產品。法規狀態可能會變動，建議隨時關注 TFDA 的最新公告。"
    },
    {
      question: "服用 NMN 多久才能看到效果？",
      answer: "效果因人而異，取決於個人年齡、健康狀況、生活方式和服用劑量。一些研究顯示，血液中的 NAD+ 水平在服用後幾週內就會提升，但身體上的感受（如體力、精神狀態的改善）可能需要數週到數月才會變得比較明顯。NMN 更像是一種長期保養，而非速效藥物。"
    }
  ];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  // --- UI 元件用基本 HTML + Tailwind 取代 ---
  const Card = ({ children, className = '', ...props }) => <div className={`border rounded-lg bg-white shadow-sm ${className}`} {...props}>{children}</div>;
  const CardHeader = ({ children, className = '', ...props }) => <div className={`p-6 ${className}`} {...props}>{children}</div>;
  const CardTitle = ({ children, className = '', ...props }) => <h3 className={`font-bold text-2xl ${className}`} {...props}>{children}</h3>;
  const CardDescription = ({ children, className = '', ...props }) => <p className={`text-gray-600 ${className}`} {...props}>{children}</p>;
  const CardContent = ({ children, className = '', ...props }) => <div className={`p-6 pt-0 ${className}`} {...props}>{children}</div>;
  const Separator = () => <hr className="my-6" />;
  const Alert = ({ children, className = '', ...props }) => <div className={`border p-4 rounded-lg ${className}`} {...props}>{children}</div>;
  const AlertTitle = ({ children, className = '', ...props }) => <h4 className={`font-bold ${className}`} {...props}>{children}</h4>;
  const AlertDescription = ({ children, className = '', ...props }) => <div className={`${className}`} {...props}>{children}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🧪</span>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">NMN研究室</h1>
                <p className="text-base text-gray-600">效用與安全 實證探討</p>
              </div>
            </div>
            
            <nav className="hidden md:flex md:flex-wrap md:gap-1 md:justify-center">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`transition-all text-base px-3 py-1.5 h-auto flex-shrink-0 rounded-md ${activeTab === item.id ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="w-full md:hidden relative mt-2">
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="w-full appearance-none rounded-lg border-2 border-blue-500 bg-blue-50 text-blue-800 shadow-sm focus:border-blue-600 focus:ring-blue-600 p-3 text-base font-bold text-center"
              >
                {navItems.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute top-1/2 right-4 -translate-y-1/2 h-6 w-6 text-blue-600 pointer-events-none" />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-screen-xl">
        {/* Home Tab */}
        {activeTab === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4 pt-4 pb-8">
               <div className="overflow-hidden rounded-xl shadow-2xl aspect-video mb-6">
                  <img src="https://i.urusai.cc/J6wnD.jpg" alt="NMN 分子結構與細胞能量概念圖" className="w-full h-full object-cover" />
               </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">新型態膳食補充劑：NMN</h2>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                菸鹼醯胺單核苷酸（NMN）作為NAD⁺的直接前體，在抗衰老保健領域備受矚目。本網站基於科學實證，深入探討NMN的作用機制、臨床證據、市場現況與法規環境，為消費者、業者與政策制定者提供全面的參考資訊。
              </p>
            </div>
            
            <Alert className="border-blue-200 bg-blue-50">
              <AlertTitle className="text-xl md:text-2xl font-bold text-blue-900">FDA最新立場更新</AlertTitle>
              <AlertDescription className="text-blue-800 leading-relaxed mt-3 text-lg md:text-xl">
                美國FDA 2025年9月29日發布公開信確認「NMN符合膳食補充劑的定義」，正式改變立場... (內容省略以保持簡潔)
                <div className="mt-4">
                   <a href="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 underline font-semibold text-base md:text-lg">
                    查看FDA官方回應信件 <ExternalLink />
                  </a>
                </div>
              </AlertDescription>
            </Alert>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden" onClick={() => setActiveTab('science')}>
                <img src="https://i.urusai.cc/UyfbG.jpg" alt="科學實驗室中的燒杯與儀器" className="w-full h-40 object-cover" />
                <CardHeader>
                  <CardTitle>科學基礎</CardTitle>
                  <CardDescription>了解NAD⁺與NMN的生物化學機制</CardDescription>
                </CardHeader>
              </Card>
              {/* Other cards replaced similarly */}
            </div>
          </div>
        )}
        
        {/* Other Tabs (content temporarily simplified) */}
        {activeTab === 'science' && <div>科學基礎內容</div>}
        {activeTab === 'evidence' && <div>臨床實證內容</div>}
        {activeTab === 'market' && <div>市場與法規內容</div>}
        {activeTab === 'conclusion' && (
            <div>
                結論與建議內容
                {/* FAQ Section */}
                <div className="mt-12">
                  <h3 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-8">常見問題 (FAQ)</h3>
                  <div className="max-w-4xl mx-auto space-y-4">
                    {faqData.map((faq, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden bg-white shadow-sm">
                        <button
                          onClick={() => setOpenFaq(openFaq === index ? null : index)}
                          className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg text-gray-800 hover:bg-gray-50 transition"
                        >
                          <span>{faq.question}</span>
                          {openFaq === index ? <Minus /> : <Plus />}
                        </button>
                        {openFaq === index && (
                          <div className="p-5 pt-0 text-gray-600 leading-relaxed">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
            </div>
        )}
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4 space-y-8 text-center">
            <p>本網站內容僅供資訊參考，不構成醫療建議。</p>
            <Separator />
            <p>
                © 2025 <a href="https://nmn.wedopr.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">NMN研究室</a>. All rights reserved. | <a href="https://www.wedopr.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">www.WEDOPR.com</a>
            </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
