import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TrendingUp, ExternalLink, Search, Filter, Clock, Newspaper } from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationButtons from '../components/NavigationButtons';

const Trends = () => {
  const { language, t } = useLanguage();
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [sources, setSources] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    filterNews();
  }, [news, activeFilter, searchTerm]);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await fetch('/news_output/index.json');
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      const data = await response.json();
      
      const sortedNews = data.articles.sort((a, b) => 
        new Date(b.published) - new Date(a.published)
      );
      
      setNews(sortedNews);
      setFilteredNews(sortedNews);
      
      const uniqueSources = [...new Set(sortedNews.map(item => item.source))].sort();
      setSources(uniqueSources);
      
      if (data.meta && data.meta.generated_at) {
        const date = new Date(data.meta.generated_at);
        setLastUpdated(date.toLocaleDateString('de-DE', { 
          day: '2-digit', 
          month: 'short', 
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }));
      }
      
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const filterNews = () => {
    let filtered = news;
    
    if (activeFilter !== 'all') {
      filtered = filtered.filter(item => item.source === activeFilter);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(term) ||
        item.summary.toLowerCase().includes(term) ||
        (item.category && item.category.toLowerCase().includes(term))
      );
    }
    
    setFilteredNews(filtered);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-400">{t('trendsLoading')}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <Newspaper className="w-16 h-16 text-pink-500 mx-auto mb-4" />
          <p className="text-gray-400">{t('trendsError')}</p>
          <Button 
            onClick={fetchNews} 
            className="mt-4 bg-gradient-to-r from-pink-600 to-purple-600"
          >
            {t('trendsRetry')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="w-12 h-12 text-pink-500 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {t('trendsTitle')}
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('trendsSubtitle')}
          </p>
          
          <div className="flex justify-center gap-6 mt-8 flex-wrap">
            <div className="bg-slate-900/50 backdrop-blur-md border border-pink-500/30 rounded-xl px-6 py-4">
              <div className="text-2xl font-bold text-pink-400">{news.length}</div>
              <div className="text-gray-400 text-sm">{t('trendsArticles')}</div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-md border border-pink-500/30 rounded-xl px-6 py-4">
              <div className="text-2xl font-bold text-pink-400">{sources.length}</div>
              <div className="text-gray-400 text-sm">{t('trendsSources')}</div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-md border border-pink-500/30 rounded-xl px-6 py-4">
              <div className="text-lg font-bold text-pink-400">{lastUpdated}</div>
              <div className="text-gray-400 text-sm">{t('trendsLastUpdate')}</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-md border border-pink-500/30 rounded-2xl p-6 mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t('trendsSearchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800/50 border border-pink-500/20 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 transition-colors"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center mr-4 text-gray-400">
              <Filter className="w-4 h-4 mr-2" />
              <span className="text-sm">{t('trendsFilterBy')}:</span>
            </div>
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
                  : 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              {t('trendsAllSources')}
            </button>
            {sources.map(source => (
              <button
                key={source}
                onClick={() => setActiveFilter(source)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === source
                    ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
                    : 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {source}
              </button>
            ))}
          </div>
        </div>

        {filteredNews.length === 0 ? (
          <div className="text-center py-20">
            <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">{t('trendsNoResults')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item, index) => (
              <article
                key={item.id || index}
                className="bg-slate-900/50 backdrop-blur-md border border-pink-500/20 rounded-2xl overflow-hidden hover:border-pink-500/40 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-500/10 flex flex-col"
              >
                <div className="h-48 bg-gradient-to-br from-pink-600/30 to-purple-600/30 flex items-center justify-center overflow-hidden">
                  {item.image_url ? (
                    <img 
                      src={item.image_url} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className={`${item.image_url ? 'hidden' : 'flex'} items-center justify-center w-full h-full`}>
                    <Newspaper className="w-16 h-16 text-pink-500/50" />
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <span className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start">
                    {item.source}
                  </span>
                  
                  <h2 className="text-white font-bold text-lg mb-3 line-clamp-2 hover:text-pink-400 transition-colors">
                    {item.title}
                  </h2>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                    {item.summary}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-pink-500/10 mt-auto">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      <time dateTime={item.published}>{item.published_readable}</time>
                    </div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300"
                    >
                      {t('trendsReadMore')}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>{t('trendsAutoUpdate')}</p>
        </div>
      </div>

      <NavigationButtons />
    </div>
  );
};

export default Trends;
