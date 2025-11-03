import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ToolCard } from './components/ToolCard';
import { SearchBar } from './components/SearchBar';
import { LoadingSpinner } from './components/LoadingSpinner';
import { InstallationModal } from './components/InstallationModal';
import { AiAssistant } from './components/AiAssistant';
import { ImageEditor } from './components/ImageEditor';
import { MasterInstallationGuide } from './components/MasterInstallationGuide';
import { FeedbackModal } from './components/FeedbackModal';
import { fetchKaliTools } from './services/geminiService';
import { allHackingTools } from './constants';
import { Tool, Category } from './types';

const App: React.FC = () => {
  const [tools, setTools] = useState<Tool[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [activePlatform, setActivePlatform] = useState<'all' | 'Termux' | 'Kali'>('all');
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  useEffect(() => {
    const loadTools = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const kaliTools = await fetchKaliTools();
        const allTools = [...allHackingTools, ...kaliTools].sort((a, b) => a.name.localeCompare(b.name));
        setTools(allTools);
      } catch (err) {
        console.error("Failed to load tools:", err);
        setError('Failed to fetch tool data from the AI. Please check your API key and try again.');
      } finally {
        setIsLoading(false);
      }
    };
    
    loadTools();
  }, []);

  const handleShowInstallation = (tool: Tool) => {
    setSelectedTool(tool);
  };

  const handleCloseModal = () => {
    setSelectedTool(null);
  };

  const filteredTools = useMemo(() => {
    return tools
      .filter(tool =>
        activePlatform === 'all' || tool.platform === activePlatform
      )
      .filter(tool => 
        activeCategory === 'all' || tool.category === activeCategory
      )
      .filter(tool =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [tools, searchTerm, activeCategory, activePlatform]);
  
  const categories = useMemo(() => {
      const allCategories = new Set(tools.map(t => t.category));
      return ['all', ...Array.from(allCategories).sort()] as (Category | 'all')[];
  }, [tools]);


  return (
    <div className="min-h-screen bg-slate-900 text-gray-300 font-mono flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <MasterInstallationGuide />

        <div className="my-16 pt-8 border-t border-slate-800">
            <AiAssistant />
        </div>
        
        <div className="text-center mb-12 mt-16 pt-8 border-t border-slate-800">
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 tracking-widest uppercase" style={{ textShadow: '0 0 10px #06b6d4, 0 0 20px #06b6d4' }}>
                AI Image Editor
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
                Upload an image and use a text prompt to perform powerful AI-driven edits.
            </p>
        </div>
        <ImageEditor />

        <div className="text-center mb-12 mt-16 pt-8 border-t border-slate-800">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 tracking-widest uppercase" style={{ textShadow: '0 0 10px #06b6d4, 0 0 20px #06b6d4' }}>
            Toolkit Database
          </h2>
        </div>

        <div className="sticky top-0 z-10 bg-slate-900/80 backdrop-blur-sm py-4 mb-8">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-6">
                {(['all', 'Termux', 'Kali'] as const).map(platform => (
                    <button
                        key={platform}
                        onClick={() => setActivePlatform(platform)}
                        className={`px-4 py-1 text-sm rounded-full border-b-2 transition-all duration-300 ${
                            activePlatform === platform
                                ? 'border-cyan-500 text-cyan-400 font-bold'
                                : 'border-transparent text-slate-400 hover:text-white'
                        }`}
                    >
                        {platform}
                    </button>
                ))}
            </div>

             <div className="flex flex-wrap justify-center gap-2 mt-4">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-1 text-sm rounded-full border transition-all duration-300 ${
                            activeCategory === category
                                ? 'bg-cyan-500 border-cyan-500 text-slate-900 font-bold shadow-lg shadow-cyan-500/30'
                                : 'bg-slate-800 border-slate-700 hover:bg-slate-700 hover:border-cyan-500'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <LoadingSpinner />
          </div>
        ) : error ? (
          <div className="text-center text-red-400 bg-red-900/20 border border-red-500 p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">Error</h3>
            <p>{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.length > 0 ? (
                filteredTools.map((tool, index) => (
                    <ToolCard 
                        key={`${tool.name}-${index}`} 
                        tool={tool}
                        onShowInstallation={handleShowInstallation}
                    />
                ))
            ) : (
                <div className="col-span-full text-center py-16">
                    <h3 className="text-2xl font-bold text-slate-500">No tools found.</h3>
                    <p className="text-slate-600">Try adjusting your search or category filter.</p>
                </div>
            )}
          </div>
        )}
      </main>
      <Footer onOpenFeedback={() => setIsFeedbackModalOpen(true)} />
      <InstallationModal tool={selectedTool} onClose={handleCloseModal} />
      <FeedbackModal isOpen={isFeedbackModalOpen} onClose={() => setIsFeedbackModalOpen(false)} />
    </div>
  );
};

export default App;