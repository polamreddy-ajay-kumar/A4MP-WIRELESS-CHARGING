import { useEffect, useState } from 'react';

const navItems = ['Overview', 'Core', 'Transmission', 'Prototype', 'Research'];

const cardData = [
  { label: 'Phone Power', tag: 'SIMULATION', value: '14 W' },
  { label: 'EV Power', tag: 'SIMULATION', value: '11 kW' },
  { label: 'Prototype', tag: 'MEASURED DATA', value: '100 m' },
  { label: 'Simulation', tag: 'SIMULATION', value: 'Realtime' },
  { label: 'Research', tag: 'CONCEPT', value: '30 km' },
  { label: 'Safety', tag: 'MEASURED DATA', value: 'ISO aligned' },
  { label: 'Technology', tag: 'FUTURE RESEARCH', value: 'Adaptive' },
];

const prototypeDistances = [1, 10, 50, 100];

const energyParticles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 17) % 100}%`,
  top: `${(index * 23) % 100}%`,
  delay: `${index * 0.6}s`,
  duration: `${10 + (index % 8)}s`,
}));

function App() {
  const [distance, setDistance] = useState(100);
  const [battery, setBattery] = useState(32);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBattery((current) => (current >= 98 ? 32 : current + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const beamOpacity = 0.3 + (distance / 100) * 0.5;
  const beamWidth = 44 + (100 - distance) * 0.7;
  const powerLevel = (distance / 100) * 64 + 35;

  return (
    <div className="app-shell">
      <div className={`loading-screen ${loading ? 'visible' : 'hidden'}`}>
        <div className="loading-core-wrap">
          <div className="loading-core">
            <span className="core-particle" />
          </div>
          <div className="loading-rings ring-one" />
          <div className="loading-rings ring-two" />
          <div className="loading-rings ring-three" />
        </div>
        <div className="loading-label">A4MP</div>
        <div className="loading-sub">WIRELESS CHARGING</div>
        <p className="loading-status">INITIALIZING POWER NETWORK...</p>
        <p className="loading-ready">SYSTEM READY</p>
      </div>

      <header className="topbar glass-panel">
        <div className="brand-wrap">
          <div className="brand-mark">A4MP</div>
          <span>WIRELESS CHARGING</span>
        </div>

        <nav className="nav">
          {navItems.map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
        </nav>

        <button className="nav-button primary-button">RUN SIMULATION</button>
      </header>

      <main className="page">
        <section className="hero-section" id="overview">
          <div className="hero-bg" aria-hidden="true">
            <div className="energy-field energy-field-1" />
            <div className="energy-field energy-field-2" />
            <div className="energy-field energy-field-3" />
          </div>

          <div className="particle-layer">
            {energyParticles.map((p) => (
              <span
                key={p.id}
                className="drifting-particle"
                style={{
                  left: p.left,
                  top: p.top,
                  animationDelay: p.delay,
                  animationDuration: p.duration,
                }}
              />
            ))}
          </div>

          <div className="hero-copy glass-panel">
            <div className="eyebrow">ENERGY DELIVERY SYSTEM</div>
            <h1>A4MP</h1>
            <h2>WIRELESS CHARGING</h2>
            <p>“One Network. Wireless Power. Wherever You Need It.”</p>

            <div className="hero-actions">
              <button className="primary-button">RUN SIMULATION</button>
              <button className="secondary-button">EXPLORE PROTOTYPE</button>
            </div>

            <div className="metrics-row">
              <div>
                <span>SIMULATION</span>
                <strong>1.6 kW</strong>
              </div>
              <div>
                <span>EFFICIENCY</span>
                <strong>91.4%</strong>
              </div>
              <div>
                <span>ALIGNMENT</span>
                <strong>±2.1°</strong>
              </div>
            </div>
          </div>

          <div className="station-scene glass-panel">
            <div className="station-layer">
              <div className="station-structure">
                <div className="station-tower" />
                <div className="station-glow" />
                <div className="station-core core-small">
                  <span />
                </div>
              </div>

              <div className="beam-visual">
                <div className="beam-label">POWER SOURCE</div>
                <div className="beam-node source-node">
                  <span className="node-dot" />
                </div>
                <div className="beam-energy">
                  <span className="beam-track" />
                </div>
                <div className="beam-node receiver-node">
                  <span className="node-dot" />
                </div>
                <div className="beam-label receiver-label">RECEIVER</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-grid section-compact" id="core">
          <div className="panel glass-panel power-core-panel">
            <div className="panel-head">
              <span className="eyebrow">POWER CORE</span>
              <span className="status-pill">TRANSMISSION ACTIVE</span>
            </div>
            <div className="power-core-scene">
              <div className="core-orbit orbit-one" />
              <div className="core-orbit orbit-two" />
              <div className="power-core">
                <div className="power-core-inner" />
              </div>
            </div>
          </div>

          <div className="panel glass-panel sentence-panel">
            <div className="micro-label">SYSTEM NOTE</div>
            <h3>Adaptive resonance steering with controlled spatial energy transfer.</h3>
            <p>
              A4MP uses a synchronized field architecture that guides energy through a measured
              transmission corridor. The interface highlights simulation and measured conditions to keep
              the research platform clear, precise, and transparent.
            </p>
          </div>
        </section>

        <section className="section-grid transmission-layout" id="transmission">
          <div className="panel glass-panel sender-panel">
            <div className="panel-head">
              <span className="eyebrow">SENDER STATION</span>
              <span className="status-pill active">TRANSMISSION ACTIVE</span>
            </div>
            <div className="station-block">
              <div className="sender-art">
                <div className="sender-tower" />
                <div className="sender-core">
                  <span />
                </div>
                <div className="energy-rings" />
                <div className="energy-rings ring-b" />
              </div>

              <div className="power-meter meter-blue">
                <span className="meter-label">TRANSMIT POWER</span>
                <div className="meter-bar">
                  <span style={{ width: `${powerLevel}%` }} />
                </div>
                <strong>{Math.round(powerLevel)} kW</strong>
              </div>
            </div>
          </div>

          <div className="panel glass-panel receiver-panel">
            <div className="panel-head">
              <span className="eyebrow">RECEIVER</span>
              <span className="status-pill soft">LOAD MATCHED</span>
            </div>
            <div className="station-block">
              <div className="receiver-art">
                <div className="receiver-body">
                  <div className="receiver-wave" />
                  <div className="receiver-ring ring-large" />
                  <div className="receiver-ring ring-small" />
                </div>
              </div>

              <div className="power-meter">
                <span className="meter-label">DELIVERED POWER</span>
                <div className="meter-bar">
                  <span style={{ width: `${Math.min(100, battery)}%`, opacity: beamOpacity }} />
                </div>
                <strong>{battery}% BATTERY</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="service-grid" id="prototype">
          <div className="panel glass-panel service-panel">
            <div className="panel-head">
              <span className="eyebrow">APPLICATIONS</span>
              <span className="status-pill active">FIELD READY</span>
            </div>

            <div className="section-grid compact-grid">
              <div className="phone-scene">
                <div className="phone-glow" />
                <div className="phone-device">
                  <div className="phone-screen">
                    <div className="charge-row">
                      <span>WIRELESS</span>
                      <strong>14W</strong>
                    </div>
                    <div className="battery-rail">
                      <span style={{ width: `${Math.min(100, battery)}%` }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="ev-scene">
                <div className="ev-body">
                  <div className="ev-window" />
                  <div className="ev-light" />
                  <div className="ev-receiver" />
                </div>
                <div className="ev-stats">
                  <div>
                    <span>OUTPUT</span>
                    <strong>11 kW</strong>
                  </div>
                  <div>
                    <span>PORT</span>
                    <strong>DC fast</strong>
                  </div>
                  <div>
                    <span>LOAD</span>
                    <strong>92%</strong>
                  </div>
                  <div>
                    <span>COOLING</span>
                    <strong>Adaptive</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="prototype-section" id="research">
          <div className="panel glass-panel">
            <div className="panel-head">
              <span className="eyebrow">PROTOTYPE FIELD TEST</span>
              <span className="status-pill">SENSOR GRID ONLINE</span>
            </div>

            <div className="prototype-visual">
              <div className="proto-sender">
                <div className="proto-icon">⚡</div>
                <div className="proto-label">SOURCE</div>
              </div>

              <div className="proto-beam-wrap">
                <div className="proto-distance">{distance} m</div>
                <div
                  className="proto-beam"
                  style={{
                    width: `${beamWidth}%`,
                    opacity: beamOpacity,
                  }}
                />
              </div>

              <div className="proto-receiver">
                <div className="proto-icon">📡</div>
                <div className="proto-label">RECEIVER</div>
              </div>
            </div>

            <div className="prototype-controls">
              {prototypeDistances.map((value) => (
                <button
                  key={value}
                  className={`distance-button ${distance === value ? 'active' : ''}`}
                  onClick={() => setDistance(value)}
                  type="button"
                >
                  {value} m
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="vision-section">
          <div className="panel glass-panel vision-landscape">
            <div className="panel-head">
              <span className="eyebrow">RESEARCH VISION</span>
              <span className="status-pill active">NEXT GENERATION</span>
            </div>

            <div className="vision-rail">
              <span>📱</span>
              <div className="vision-line" />
              <span>🚗</span>
              <div className="vision-line" />
              <span>🏙️</span>
            </div>

            <div className="cards-strip">
              {cardData.map((card) => (
                <div className="info-card" key={card.label}>
                  <span>{card.tag}</span>
                  <strong>{card.label}</strong>
                  <small>{card.value}</small>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
