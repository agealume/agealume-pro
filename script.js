const { useState, useEffect, useRef } = React;

// --- CONFIGURAÇÃO (Para ligar suas APIs no futuro) ---
// const supabase = supabase.createClient('SUA_URL', 'SUA_ANON_KEY');

const PROVINCES = ["Luanda","Benguela","Huambo","Huíla","Cabinda","Malanje","Uíge","Lunda Norte","Lunda Sul","Moxico","Cuando Cubango","Cunene","Namibe","Bié","Kwanza Norte","Kwanza Sul","Zaire","Bengo","Kuando","Icolo e Bengo"];
const QUESTIONS = [
  {q:"Qual é a capital de Angola?", opts:["Luanda","Benguela","Huambo","Malanje"], a:0},
  {q:"Em que ano Angola se tornou independente?", opts:["1972","1975","1980","1968"], a:1},
  {q:"Qual é a moeda oficial de Angola?", opts:["Real","Kwanza","Escudo","Franco"], a:1},
];

function AlunaApp() {
  const [tab, setTab] = useState("inicio");
  const [user, setUser] = useState({
    name: "Usuário",
    balance: 1500,
    wins: 0,
    losses: 0,
    province: "Luanda"
  });

  return (
    <div className="app">
      <header className="header">
        <div className="logo">Aluna</div>
        <div className="balance-pill" style={{color: 'var(--gold)'}}>
          💰 {user.balance.toLocaleString()} Kz
        </div>
      </header>

      <nav className="nav">
        <button className={`nav-btn ${tab === 'inicio' ? 'active' : ''}`} onClick={() => setTab('inicio')}>Início</button>
        <button className={`nav-btn ${tab === 'luma' ? 'active' : ''}`} onClick={() => setTab('luma')}>Luma IA</button>
        <button className={`nav-btn ${tab === 'carteira' ? 'active' : ''}`} onClick={() => setTab('carteira')}>Carteira</button>
      </nav>

      <main style={{padding: '20px'}}>
        {tab === "inicio" && (
          <div className="card">
            <h2>Olá, {user.name}!</h2>
            <p style={{color: 'var(--muted)', fontSize: '14px'}}>Prepare-se para os teus desafios.</p>
            <button className="btn btn-gold pulse" style={{marginTop: '20px'}} onClick={() => setTab('luma')}>Começar Desafio</button>
          </div>
        )}

        {tab === "luma" && (
          <div className="q-card">
            <p style={{fontSize: '18px', marginBottom: '20px'}}>{QUESTIONS[0].q}</p>
            {QUESTIONS[0].opts.map((opt, i) => (
              <div key={i} className="q-opt">{opt}</div>
            ))}
          </div>
        )}

        {tab === "carteira" && (
          <div className="card">
            <h3>Teu Saldo</h3>
            <div style={{fontSize: '32px', color: 'var(--gold)', margin: '15px 0'}}>{user.balance} Kz</div>
            <button className="btn btn-red">Levantar Saldo</button>
          </div>
        )}
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AlunaApp />);
