import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Rocket, 
  UserPlus, 
  Trash2, 
  Zap, 
  History as HistoryIcon, 
  Trophy, 
  Users, 
  Settings,
  X,
  RefreshCw,
  Star,
  ShieldCheck,
  Maximize,
  Minimize,
  AlertCircle,
  Palette,
  Terminal,
  Gamepad2,
  Leaf,
  Cpu,
  ChevronDown,
  Target
} from 'lucide-react';

/**
 * LIKHA-IT MISSION CONTROL: ADVANCED RADAR EDITION
 * Featuring a sophisticated Radar Sweep system for increased visual tension.
 */

const LikhaItLogo = ({ className = "", color = "currentColor" }) => (
  <svg 
    viewBox="0 0 500 100" 
    className={className} 
    fill={color} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fontStyle="italic" fontWeight="900" fontSize="85" fontFamily="sans-serif" letterSpacing="-2">
      <text x="5" y="85">L</text>
      <g>
        <path d="M78 12 L105 35 L78 40 Z" />
        <text x="70" y="85">i</text>
      </g>
      <text x="105" y="85">KHA</text>
      <text x="325" y="85" fontSize="60">-</text>
      <g>
        <path d="M388 12 L415 35 L388 40 Z" />
        <text x="380" y="85">i</text>
      </g>
      <text x="415" y="85">T</text>
    </g>
  </svg>
);

const THEMES = {
  navy: {
    id: 'navy',
    name: 'Command Center',
    icon: <Cpu size={16} />,
    class: 'bg-slate-950 text-slate-100 font-sans',
    card: 'bg-slate-900/60 backdrop-blur-xl border-white/10',
    accent: 'text-blue-500',
    btn: 'bg-blue-600 hover:bg-blue-500 text-white',
    ring: 'ring-blue-500',
    display: 'bg-slate-900/40 border-white/10',
    dropdown: 'bg-slate-900 border-white/10 text-slate-100 hover:bg-slate-800'
  },
  arcade: {
    id: 'arcade',
    name: 'Retro Arcade',
    icon: <Gamepad2 size={16} />,
    class: 'bg-purple-950 text-yellow-400 font-mono uppercase',
    card: 'bg-black border-4 border-purple-500 shadow-[8px_8px_0px_0px_rgba(168,85,247,1)]',
    accent: 'text-pink-500',
    btn: 'bg-yellow-400 hover:bg-yellow-300 text-black border-b-4 border-yellow-700 active:border-b-0 active:translate-y-1',
    ring: 'ring-pink-500',
    display: 'bg-black border-2 border-purple-500',
    dropdown: 'bg-black border-4 border-purple-500 text-yellow-400 hover:bg-purple-900'
  },
  terminal: {
    id: 'terminal',
    name: 'Terminal Pro',
    icon: <Terminal size={16} />,
    class: 'bg-black text-emerald-500 font-mono',
    card: 'bg-black border border-emerald-900 shadow-[0_0_15px_rgba(16,185,129,0.1)]',
    accent: 'text-emerald-400',
    btn: 'bg-emerald-900/20 hover:bg-emerald-900/40 text-emerald-400 border border-emerald-500',
    ring: 'ring-emerald-500',
    display: 'bg-black border border-emerald-900',
    dropdown: 'bg-black border border-emerald-500 text-emerald-500 hover:bg-emerald-950'
  },
  zen: {
    id: 'zen',
    name: 'Zen Studio',
    icon: <Leaf size={16} />,
    class: 'bg-stone-50 text-stone-800 font-light tracking-wide',
    card: 'bg-white/80 backdrop-blur-sm border-stone-200 shadow-sm',
    accent: 'text-emerald-600',
    btn: 'bg-stone-800 hover:bg-stone-700 text-white rounded-full',
    ring: 'ring-stone-400',
    display: 'bg-stone-100/50 border-stone-200',
    dropdown: 'bg-white border-stone-200 text-stone-800 hover:bg-stone-50'
  }
};

const RadarSystem = ({ theme, currentTheme }) => {
  if (currentTheme === 'zen') {
    return (
      <div className="relative w-48 h-48 flex items-center justify-center">
        <div className="absolute inset-0 bg-emerald-500/10 rounded-full animate-ping duration-[3000ms]" />
        <div className="absolute inset-4 border border-emerald-500/20 rounded-full animate-pulse" />
        <Leaf size={56} className="text-emerald-600/40" />
      </div>
    );
  }

  if (currentTheme === 'arcade') {
    return (
      <div className="relative w-40 h-40 border-4 border-purple-500 bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(168,85,247,0.2)_1px,transparent_1px)] bg-[length:10px_10px]" />
        <div className="w-4 h-4 bg-yellow-400 animate-[bounce_0.5s_infinite]" />
        <div className="absolute inset-0 border-t-8 border-r-8 border-transparent border-yellow-400 animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative w-56 h-56 group">
      {/* Outer Rings */}
      <div className="absolute inset-0 border border-current opacity-10 rounded-full" />
      <div className="absolute inset-8 border border-current opacity-10 rounded-full" />
      <div className="absolute inset-16 border border-current opacity-10 rounded-full" />
      
      {/* Crosshairs */}
      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-current opacity-10" />
      <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-current opacity-10" />
      
      {/* The Radar Sweep */}
      <div 
        className="absolute inset-0 rounded-full animate-[spin_4s_linear_infinite]"
        style={{
          background: `conic-gradient(from 0deg, transparent 0deg, transparent 300deg, currentColor 360deg)`,
          opacity: 0.3
        }}
      />
      
      {/* Leading Edge Glow */}
      <div className="absolute inset-0 animate-[spin_4s_linear_infinite]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1/2 bg-gradient-to-t from-transparent via-current to-white opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-current blur-md opacity-50" />
      </div>

      {/* Target Icon */}
      <div className="absolute inset-0 flex items-center justify-center text-current/30 animate-pulse">
        <Target size={40} />
      </div>

      {/* Randomized "Blips" */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-current rounded-full blur-[2px] animate-pulse delay-700 opacity-20" />
      <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-current rounded-full blur-[1px] animate-pulse delay-1000 opacity-20" />
    </div>
  );
};

const App = () => {
  const [candidates, setCandidates] = useState([
    "James", "Jhoren", "JoshWAH", "Jose", "Boss JS", "Charie-san", 
    "Will", "Kei-san", "Pau", "Camille", "Aireen", "Keisha", 
    "Monty", "Papa Matthew", "Aberu", "Dane", "Alex", "Maam Jane", 
    "Paul", "RM", "RJ", "Risto-san", "Big Winner Eli", "Ervin", 
    "Wassan", "Je-ehm", "Sting Rae", "Ethan", "Lableh", "Anna", 
    "Dren Pogi", "Lawrence", "Raph", "Nokzers", "Dhar", "Marc", 
    "Boss Neil", "Oyaburns"
  ]);
  const [newCandidate, setNewCandidate] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState(null);
  const [history, setHistory] = useState([]);
  const [scanProgress, setScanProgress] = useState(0);
  const [currentScanningName, setCurrentScanningName] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [isTheaterMode, setIsTheaterMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('navy');
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const scanIntervalRef = useRef(null);
  const menuRef = useRef(null);
  const theme = THEMES[currentTheme];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsTheaterMode(false);
    };
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsThemeMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement && !isTheaterMode) {
      try {
        await document.documentElement.requestFullscreen();
      } catch (err) {
        setIsTheaterMode(true);
      }
    } else {
      if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
      setIsTheaterMode(false);
    }
  };

  const addCandidate = (e) => {
    e?.preventDefault();
    if (newCandidate.trim() && !candidates.includes(newCandidate.trim())) {
      setCandidates([...candidates, newCandidate.trim()]);
      setNewCandidate("");
    }
  };

  const removeCandidate = (index) => {
    const updated = [...candidates];
    updated.splice(index, 1);
    setCandidates(updated);
  };

  const startSelection = () => {
    if (candidates.length < 2) return;
    setIsSpinning(true);
    setWinner(null);
    setScanProgress(0);
    setShowConfetti(false);

    let progress = 0;
    const duration = 3500;
    const interval = 50;
    const steps = duration / interval;

    scanIntervalRef.current = setInterval(() => {
      progress += (100 / steps);
      setScanProgress(progress);
      const randomIdx = Math.floor(Math.random() * candidates.length);
      setCurrentScanningName(candidates[randomIdx]);

      if (progress >= 100) {
        clearInterval(scanIntervalRef.current);
        const finalWinner = candidates[Math.floor(Math.random() * candidates.length)];
        setTimeout(() => {
          setWinner(finalWinner);
          setIsSpinning(false);
          setHistory(prev => [finalWinner, ...prev].slice(0, 8));
          setShowConfetti(true);
        }, 500);
      }
    }, interval);
  };

  const reset = () => {
    setWinner(null);
    setScanProgress(0);
    setShowConfetti(false);
  };

  const Confetti = () => {
    const particles = useMemo(() => {
      return Array.from({ length: 60 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 3,
        color: currentTheme === 'zen' ? '#10b981' : (currentTheme === 'arcade' ? '#ff00ff' : '#3b82f6')
      }));
    }, [currentTheme]);

    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[9999]">
        {particles.map(p => (
          <div 
            key={p.id}
            className={`absolute top-[-10px] ${currentTheme === 'arcade' ? 'w-4 h-4' : 'w-2 h-4 rounded-full'}`}
            style={{
              left: `${p.left}%`,
              backgroundColor: p.color,
              animation: `fall ${p.duration}s linear ${p.delay}s infinite`,
              opacity: 0.8
            }}
          />
        ))}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes fall {
            0% { transform: translateY(0vh) rotate(0deg); opacity: 1; }
            100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
          }
        `}} />
      </div>
    );
  };

  return (
    <div className={`min-h-screen transition-all duration-500 overflow-x-hidden ${theme.class} ${isTheaterMode ? 'fixed inset-0 z-[8888] overflow-y-auto p-4' : ''}`}>
      {showConfetti && <Confetti />}

      {/* Background patterns */}
      {currentTheme === 'navy' && (
        <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-900 rounded-full blur-[160px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-800 rounded-full blur-[140px]" />
        </div>
      )}
      {currentTheme === 'arcade' && (
        <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(168,85,247,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      )}
      {currentTheme === 'terminal' && (
        <div className="fixed inset-0 z-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(transparent 50%, rgba(16,185,129,0.1) 50%)', backgroundSize: '100% 4px' }} />
      )}

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        {/* Universal Header */}
        <header className="flex flex-col items-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                className={`flex items-center gap-3 px-6 py-2.5 rounded-full border text-xs font-bold transition-all shadow-lg ${theme.card} group active:scale-95`}
              >
                <Palette size={16} className={theme.accent} />
                <span className="opacity-60">HUD MODE:</span>
                <span className="flex items-center gap-2">
                  {theme.icon}
                  {theme.name}
                </span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isThemeMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isThemeMenuOpen && (
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 p-2 z-50 transition-all duration-300 shadow-2xl animate-[scaleIn_0.2s_ease-out] border ${theme.dropdown} ${currentTheme === 'arcade' ? 'rounded-none border-4' : 'rounded-2xl'}`}>
                  <div className="text-[10px] font-bold opacity-30 mb-2 px-3 tracking-widest">SELECT ENVIRONMENT</div>
                  {Object.values(THEMES).map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setCurrentTheme(t.id);
                        setIsThemeMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-xs font-bold mb-1 last:mb-0 ${currentTheme === t.id ? 'bg-white/10' : 'hover:bg-white/5 opacity-70 hover:opacity-100'}`}
                    >
                      <div className={`p-1.5 rounded-lg ${t.id === currentTheme ? theme.btn : 'bg-current/10'}`}>
                        {t.icon}
                      </div>
                      <div className="text-left">
                        <div className="block">{t.name}</div>
                        <div className="text-[9px] opacity-40 font-mono">PROTOCOL {t.id.toUpperCase()}</div>
                      </div>
                      {currentTheme === t.id && (
                        <div className={`ml-auto w-2 h-2 rounded-full animate-pulse`} style={{ backgroundColor: 'currentColor' }}></div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button 
              onClick={toggleFullscreen}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 shadow-lg ${theme.btn} ${currentTheme === 'arcade' ? 'rounded-none' : ''}`}
            >
              {isTheaterMode ? <Minimize size={14} /> : <Maximize size={14} />}
              {isTheaterMode ? "EXIT FULL" : "FULL SCREEN"}
            </button>
          </div>

          <div className={`relative transition-all duration-500 p-8 md:p-10 rounded-[2.5rem] border ${theme.card} ${currentTheme === 'arcade' ? 'rounded-none border-8' : ''}`}>
             <LikhaItLogo className={`h-12 md:h-16 w-auto transition-colors duration-500 ${currentTheme === 'zen' ? 'text-stone-800' : 'text-white'}`} />
             {currentTheme === 'terminal' && <div className="absolute top-2 right-4 text-[10px] opacity-30">v5.2.0_SECURE</div>}
          </div>

          <h1 className={`mt-6 text-xl md:text-2xl font-black uppercase tracking-[0.4em] ${theme.accent}`}>
            Facilitator Forge
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Crew Roster */}
          <section className="lg:col-span-4 space-y-6">
            <div className={`border rounded-3xl p-6 transition-all duration-500 ${theme.card} ${currentTheme === 'arcade' ? 'rounded-none border-4' : ''}`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <Users size={18} />
                  Crew Roster
                </h2>
                <span className="text-xs font-mono opacity-60">{candidates.length} ACTIVE</span>
              </div>
              
              <form onSubmit={addCandidate} className="relative mb-6">
                <input 
                  type="text"
                  value={newCandidate}
                  onChange={(e) => setNewCandidate(e.target.value)}
                  placeholder="ADD PERSONNEL..."
                  className={`w-full bg-black/20 border border-current/20 rounded-xl py-3 px-4 pr-12 focus:outline-none focus:ring-2 transition-all ${theme.ring} ${currentTheme === 'arcade' ? 'rounded-none' : ''}`}
                />
                <button type="submit" disabled={!newCandidate.trim()} className={`absolute right-2 top-2 p-1.5 rounded-lg ${theme.btn} ${currentTheme === 'arcade' ? 'rounded-none' : ''}`}>
                  <UserPlus size={20} />
                </button>
              </form>

              <div className="space-y-1 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {candidates.map((name, i) => (
                  <div key={i} className={`group flex items-center justify-between p-2.5 rounded-lg border border-transparent hover:border-current/10 hover:bg-current/5 transition-all`}>
                    <span className="text-sm font-medium">{name}</span>
                    <button onClick={() => removeCandidate(i)} className="opacity-0 group-hover:opacity-100 p-1 hover:text-red-500 transition-all">
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className={`border rounded-2xl p-6 transition-all duration-500 ${theme.card} ${currentTheme === 'arcade' ? 'rounded-none border-4' : ''}`}>
              <h2 className="text-xs font-bold mb-4 uppercase tracking-widest opacity-50 flex items-center gap-2">
                <HistoryIcon size={14} />
                Log History
              </h2>
              <div className="space-y-2">
                {history.length > 0 ? history.map((name, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs opacity-60">
                    <span className={theme.accent}>0{history.length - i}</span>
                    {name}
                  </div>
                )) : <p className="text-xs italic opacity-40">Awaiting deployment...</p>}
              </div>
            </div>
          </section>

          {/* Selection Stage */}
          <section className="lg:col-span-8 space-y-8">
            <div className={`relative min-h-[600px] flex flex-col items-center justify-center border transition-all duration-500 overflow-hidden ${theme.display} ${currentTheme === 'arcade' ? 'border-4' : 'rounded-[3rem]'}`}>
              
              {(currentTheme === 'terminal' || currentTheme === 'arcade') && (
                <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_4px,3px_100%]" />
              )}

              {!isSpinning && !winner && (
                <div className="flex flex-col items-center text-center p-12 animate-[scaleIn_0.3s_ease-out]">
                  {/* The New Radar Component */}
                  <div className="mb-10">
                    <RadarSystem theme={theme} currentTheme={currentTheme} />
                  </div>

                  <h3 className="text-3xl font-black mb-4">INITIATE SELECTION</h3>
                  <button onClick={startSelection} disabled={candidates.length < 2} className={`group relative px-16 py-6 text-xl font-black transition-all hover:scale-105 active:scale-95 shadow-xl ${theme.btn} ${currentTheme === 'arcade' ? 'rounded-none' : 'rounded-2xl'}`}>
                    <span className="flex items-center gap-3 relative z-10 tracking-widest">
                      <Zap size={24} className="fill-current" />
                      PRESS START
                    </span>
                  </button>
                </div>
              )}

              {isSpinning && (
                <div className="w-full h-full flex flex-col items-center justify-center p-12">
                  <div className="w-full max-w-md mb-16 relative z-10">
                    <div className="flex justify-between text-xs font-mono mb-3 tracking-[0.2em] opacity-60">
                      <span>SEQUENCING DATA</span>
                      <span>{Math.round(scanProgress)}%</span>
                    </div>
                    <div className={`h-2 bg-black/20 overflow-hidden ${currentTheme === 'arcade' ? 'border-2 border-yellow-400' : 'rounded-full border border-white/5'}`}>
                      <div className="h-full bg-current transition-all duration-75 ease-linear shadow-lg" 
                           style={{ width: `${scanProgress}%` }} />
                    </div>
                  </div>
                  <div className="text-center relative z-10">
                    <div className={`text-6xl md:text-8xl font-black tracking-tighter drop-shadow-2xl animate-[wiggle_0.1s_ease-in-out_infinite] ${currentTheme === 'arcade' ? 'text-white italic' : ''}`}>
                      {currentScanningName}
                    </div>
                  </div>
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                     <div className="w-full h-[2px] absolute top-0 animate-[scan_1.5s_linear_infinite] bg-current opacity-30 shadow-[0_0_20px_rgba(255,255,255,0.5)]"></div>
                  </div>
                </div>
              )}

              {winner && (
                <div className="flex flex-col items-center text-center p-12 animate-[scaleIn_0.6s_cubic-bezier(0.34,1.56,0.64,1)] relative z-10">
                  <div className="relative mb-12">
                    <div className={`relative z-10 w-40 h-40 border-4 border-white/20 shadow-2xl flex items-center justify-center ${currentTheme === 'arcade' ? 'rounded-none border-8 bg-pink-500' : 'rounded-full bg-gradient-to-b from-white/10 to-transparent'}`}>
                      <Trophy size={80} className="drop-shadow-2xl animate-[bounce_2s_infinite]" />
                    </div>
                  </div>
                  <h3 className="text-lg uppercase tracking-[0.3em] mb-4 opacity-60 font-bold">New Leader Identified</h3>
                  <h2 className={`text-6xl md:text-8xl font-black mb-12 drop-shadow-2xl tracking-tighter ${currentTheme === 'arcade' ? 'text-white' : ''}`}>
                    {winner}
                  </h2>
                  <div className="flex flex-wrap justify-center gap-6">
                    <button onClick={startSelection} className={`px-10 py-5 font-bold transition-all flex items-center gap-3 border border-current/20 hover:bg-current/10 ${currentTheme === 'arcade' ? 'rounded-none border-4' : 'rounded-2xl'}`}>
                      <RefreshCw size={22} />
                      RE-ROLL
                    </button>
                    <button onClick={reset} className={`px-10 py-5 font-black transition-all ${theme.btn} ${currentTheme === 'arcade' ? 'rounded-none' : 'rounded-2xl'}`}>
                      CONFIRM
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['ENCRYPTED', 'LiKHA-iT HQ', '0.04ms', 'NOMINAL'].map((val, idx) => (
                <div key={idx} className={`border p-4 transition-all duration-500 text-center ${theme.card} ${currentTheme === 'arcade' ? 'rounded-none border-2' : 'rounded-xl'}`}>
                  <div className="font-mono text-xs font-bold opacity-70">{val}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="relative z-10 py-12 text-center opacity-30">
        <div className="text-xs font-bold tracking-[0.5em] uppercase">
           LiKHA-iT MISSION CONTROL // PROTOCOL v5.2
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan { 0% { transform: translateY(0); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(600px); opacity: 0; } }
        @keyframes scaleIn { 0% { transform: scale(0.9); opacity: 0; filter: blur(10px); } 100% { transform: scale(1); opacity: 1; filter: blur(0); } }
        @keyframes wiggle { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-2px) rotate(-1deg); } 75% { transform: translateX(2px) rotate(1deg); } }
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: currentColor; border-radius: 10px; opacity: 0.2; }
      `}} />
    </div>
  );
};

export default App;