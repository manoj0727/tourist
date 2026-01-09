'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  high: number;
  low: number;
  volume: string;
  marketCap: string;
}

// Simulated stock data for tourism-related companies
const mockStocks: StockData[] = [
  { symbol: 'IRCTC', name: 'IRCTC Ltd', price: 892.45, change: 12.35, changePercent: 1.4, high: 898.00, low: 878.20, volume: '2.3M', marketCap: '71.4B' },
  { symbol: 'INDIGO', name: 'InterGlobe Aviation', price: 4521.80, change: -45.20, changePercent: -0.99, high: 4580.00, low: 4510.00, volume: '1.1M', marketCap: '1.74T' },
  { symbol: 'TATA ELXSI', name: 'Tata Elxsi Ltd', price: 6892.15, change: 78.90, changePercent: 1.16, high: 6920.00, low: 6810.00, volume: '0.5M', marketCap: '430B' },
  { symbol: 'LEMON TREE', name: 'Lemon Tree Hotels', price: 142.30, change: 3.45, changePercent: 2.49, high: 143.80, low: 138.50, volume: '4.2M', marketCap: '11.2B' },
  { symbol: 'THOMAS COOK', name: 'Thomas Cook India', price: 218.65, change: -2.15, changePercent: -0.97, high: 222.00, low: 216.40, volume: '1.8M', marketCap: '8.1B' },
  { symbol: 'EIH', name: 'EIH Ltd (Oberoi)', price: 385.20, change: 8.75, changePercent: 2.32, high: 388.00, low: 375.00, volume: '0.9M', marketCap: '24.1B' },
];

const StockMarket = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [stocks, setStocks] = useState<StockData[]>(mockStocks);
  const [selectedStock, setSelectedStock] = useState<StockData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  // Simulate real-time price updates
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStocks((prevStocks) =>
        prevStocks.map((stock) => {
          const changeAmount = (Math.random() - 0.5) * 2;
          const newPrice = Math.max(stock.price + changeAmount, 1);
          const newChange = stock.change + changeAmount;
          const newChangePercent = (newChange / (stock.price - stock.change)) * 100;
          return {
            ...stock,
            price: Number(newPrice.toFixed(2)),
            change: Number(newChange.toFixed(2)),
            changePercent: Number(newChangePercent.toFixed(2)),
          };
        })
      );
      setLastUpdated(new Date());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="stocks" ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-[#1e3a5f] via-[#2d4a6f] to-[#1e3a5f] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-[#c9a227] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#c9a227] rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-white/20"
          >
            Live Market Data
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tourism & Travel{' '}
            <span className="text-[#c9a227]">Stocks</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Track the performance of India&apos;s leading tourism and hospitality companies
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-white/50 text-sm flex items-center justify-center gap-2"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-2 h-2 bg-green-400 rounded-full"
            />
            Last updated: {lastUpdated.toLocaleTimeString()}
          </motion.div>
        </motion.div>

        {/* Stock Cards Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <div className="animate-pulse">
                  <div className="h-4 bg-white/20 rounded w-1/3 mb-4"></div>
                  <div className="h-8 bg-white/20 rounded w-1/2 mb-4"></div>
                  <div className="h-4 bg-white/20 rounded w-full mb-2"></div>
                  <div className="h-4 bg-white/20 rounded w-2/3"></div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {stocks.map((stock, index) => (
              <motion.div
                key={stock.symbol}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedStock(stock)}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 cursor-pointer hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-white font-bold text-lg">{stock.symbol}</h3>
                    <p className="text-white/60 text-sm">{stock.name}</p>
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      stock.change >= 0
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {stock.change >= 0 ? '▲' : '▼'} {Math.abs(stock.changePercent).toFixed(2)}%
                  </motion.div>
                </div>

                <motion.div
                  key={stock.price}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className="text-3xl font-bold text-white mb-4"
                >
                  ₹{stock.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                </motion.div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-white/50 mb-1">High</p>
                    <p className="text-white font-medium">₹{stock.high.toFixed(2)}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-white/50 mb-1">Low</p>
                    <p className="text-white font-medium">₹{stock.low.toFixed(2)}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-sm">
                  <div>
                    <p className="text-white/50">Volume</p>
                    <p className="text-white font-medium">{stock.volume}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/50">Market Cap</p>
                    <p className="text-white font-medium">₹{stock.marketCap}</p>
                  </div>
                </div>

                {/* Hover indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className="h-0.5 bg-gradient-to-r from-[#c9a227] to-[#e6b82d] mt-4 rounded-full"
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Stock Detail Modal */}
        <AnimatePresence>
          {selectedStock && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStock(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8a] rounded-3xl p-8 max-w-lg w-full border border-white/20"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedStock.symbol}</h3>
                    <p className="text-white/60">{selectedStock.name}</p>
                  </div>
                  <button
                    onClick={() => setSelectedStock(null)}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-end gap-4 mb-8">
                  <span className="text-4xl font-bold text-white">
                    ₹{selectedStock.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </span>
                  <span
                    className={`text-lg font-semibold ${
                      selectedStock.change >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {selectedStock.change >= 0 ? '+' : ''}
                    {selectedStock.change.toFixed(2)} ({selectedStock.changePercent.toFixed(2)}%)
                  </span>
                </div>

                {/* Mini Chart Placeholder */}
                <div className="bg-white/10 rounded-xl p-4 mb-6">
                  <div className="flex items-end h-32 gap-1">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${30 + Math.random() * 70}%` }}
                        transition={{ delay: i * 0.05, duration: 0.5 }}
                        className={`flex-1 rounded-t ${
                          Math.random() > 0.4 ? 'bg-green-400/60' : 'bg-red-400/60'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-white/50 text-sm mb-1">Day High</p>
                    <p className="text-white font-semibold">₹{selectedStock.high.toFixed(2)}</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-white/50 text-sm mb-1">Day Low</p>
                    <p className="text-white font-semibold">₹{selectedStock.low.toFixed(2)}</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-white/50 text-sm mb-1">Volume</p>
                    <p className="text-white font-semibold">{selectedStock.volume}</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-white/50 text-sm mb-1">Market Cap</p>
                    <p className="text-white font-semibold">₹{selectedStock.marketCap}</p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 py-4 bg-[#c9a227] text-white font-semibold rounded-xl hover:bg-[#e6b82d] transition-colors"
                >
                  View Full Details
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Market Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
        >
          <h3 className="text-white font-bold text-lg mb-4">Market Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <p className="text-green-400 text-2xl font-bold">
                {stocks.filter((s) => s.change >= 0).length}
              </p>
              <p className="text-white/60 text-sm">Gainers</p>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <p className="text-red-400 text-2xl font-bold">
                {stocks.filter((s) => s.change < 0).length}
              </p>
              <p className="text-white/60 text-sm">Losers</p>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <p className="text-white text-2xl font-bold">{stocks.length}</p>
              <p className="text-white/60 text-sm">Total Stocks</p>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <p className="text-[#c9a227] text-2xl font-bold">
                {(stocks.reduce((acc, s) => acc + s.changePercent, 0) / stocks.length).toFixed(2)}%
              </p>
              <p className="text-white/60 text-sm">Avg Change</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StockMarket;
