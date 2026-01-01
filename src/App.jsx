import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Code2, Cpu, Globe, Rocket, Terminal, Database, Shield, Menu } from 'lucide-react';
import { heroVariants, containerVariants, itemVariants, cardHover, buttonTap } from './utils/animations';
import { Logo } from './components/Logo';
import { ContactModal } from './components/ContactModal';

// ... (products and skills arrays remain the same, so we optimize by keeping them if context allows, but tool requires contiguous replacement if I touch imports and Nav.
// Wait, I will replace the imports and the whole App component structure up to the hero to ensure I catch the Nav changes correctly.)

const products = [
    {
        id: 'antiprocast',
        name: "AntiProcast",
        tagline: "Tu Segundo Cerebro Digital",
        description: "Sistema gamificado para organizar tu vida, hábitos y finanzas. Disponible ahora como PWA.",
        link: "../webapp/",
        icon: <Rocket size={24} color="#ec4899" />,
        gradient: "linear-gradient(135deg, #4f46e5 0%, #ec4899 100%)",
        status: "BETA"
    },
    {
        id: 'focuslive',
        name: "FocusLive",
        tagline: "Productividad Móvil Extrema",
        description: "App nativa para gestión de tiempo y bloqueos de distracción.",
        link: "https://www.mediafire.com/file/z2715lpzvmrju9t/focuslive.apk/file",
        icon: <Cpu size={24} color="#3b82f6" />,
        gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
        status: "LIVE"
    },
    {
        id: 'cyberhero',
        name: "CyberHero Academy",
        tagline: "Hacking Ético para Todos",
        description: "Plataforma educativa interactiva para aprender ciberseguridad desde cero.",
        link: "https://walaz05.github.io/cyberhero-academy/",
        icon: <Shield size={24} color="#10b981" />,
        gradient: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
        status: "LIVE"
    }
];

const skills = [
    { name: "React / Vite", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python / IoT", level: 80 },
    { name: "Cybersecurity", level: 75 }
];

function App() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <div style={{ minHeight: '100vh', background: 'transparent', color: 'white', overflowX: 'hidden' }}>

            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

            {/* Navbar */}
            <nav className="glass-panel" style={{
                position: 'fixed', top: '1rem', left: '50%', transform: 'translateX(-50%)',
                width: '90%', maxWidth: '1000px', display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', padding: '0.8rem 1.5rem', zIndex: 100
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <Logo />
                    <div style={{ fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '-0.5px' }}>
                        Wlaz<span className="gradient-text">Studios</span>
                    </div>
                </div>

                {/* Desktop Menu */}
                {/* Desktop Menu */}
                <div className="nav-links" style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', alignItems: 'center' }}>
                    <a href="#projects" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Proyectos</a>
                    <a href="#about" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Nosotros</a>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsContactOpen(true)}
                        style={{
                            color: 'white', background: 'var(--accent-gradient)', padding: '0.5rem 1rem',
                            borderRadius: '20px', fontWeight: '600', fontSize: '0.85rem', border: 'none', cursor: 'pointer'
                        }}
                    >
                        Contacto
                    </motion.button>
                </div>
            </nav>

            {/* Hero Section */}
            <section style={{
                height: '100vh', display: 'flex', flexDirection: 'column',
                justifyContent: 'center', alignItems: 'center', textAlign: 'center',
                position: 'relative', overflow: 'hidden'
            }}>

                {/* Background Blobs */}
                <div style={{
                    position: 'absolute', width: '500px', height: '500px', background: '#4f46e5',
                    borderRadius: '50%', filter: 'blur(100px)', opacity: 0.2, top: '-10%', left: '-10%'
                }}></div>
                <div style={{
                    position: 'absolute', width: '400px', height: '400px', background: '#ec4899',
                    borderRadius: '50%', filter: 'blur(100px)', opacity: 0.15, bottom: '10%', right: '-5%'
                }}></div>

                <motion.div
                    variants={heroVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ zIndex: 1 }}
                >
                    <div style={{
                        display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '50px',
                        background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                        marginBottom: '1.5rem', fontSize: '0.85rem', letterSpacing: '1px'
                    }}>
                        INGENIERÍA DE SISTEMAS & CREATIVIDAD DIGITAL
                    </div>

                    <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                        Construyendo el <br />
                        <span className="gradient-text">Futuro Digital</span>
                    </h1>

                    <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        Hola, soy <strong>Joseph Cachay</strong>. Transformo ideas complejas en experiencias web y móviles funcionales.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <a href="#projects" style={{
                            padding: '1rem 2rem', background: 'white', color: 'black', borderRadius: '12px',
                            fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem'
                        }}>
                            Ver el Ecosistema <Globe size={18} />
                        </a>
                        <a href="https://github.com/waLaz05" target="_blank" style={{
                            padding: '1rem 2rem', background: 'rgba(255,255,255,0.1)', color: 'white',
                            borderRadius: '12px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem'
                        }}>
                            GitHub <Code2 size={18} />
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* Projects Ecosystem */}
            <section id="projects" className="section container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Ecosistema <span className="gradient-text">Wlaz</span></h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}
                >
                    {products.map((product, i) => (
                        <motion.div
                            key={product.id}
                            variants={itemVariants}
                            whileHover={cardHover}
                            className="glass-panel"
                            style={{ padding: '2rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}
                        >
                            <div style={{
                                width: '100%', height: '4px', background: product.gradient,
                                position: 'absolute', top: 0, left: 0
                            }}></div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                                <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                                    {product.icon}
                                </div>
                                <span style={{ fontSize: '0.7rem', padding: '4px 8px', borderRadius: '4px', background: 'rgba(255,255,255,0.1)' }}>
                                    {product.status}
                                </span>
                            </div>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{product.name}</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1rem', flex: 1 }}>{product.description}</p>

                            <motion.a
                                whileTap={buttonTap}
                                href={product.link}
                                target={product.link.startsWith('http') ? '_blank' : '_self'}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white',
                                    padding: '0.8rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)',
                                    justifyContent: 'center', transition: 'background 0.2s', marginTop: 'auto'
                                }}
                            >
                                {product.link.startsWith('http') ? <ExternalLink size={16} /> : <Rocket size={16} />}
                                {product.link.startsWith('http') ? 'Visitar Sitio' : 'Lanzar App'}
                            </motion.a>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* About/Skills Section */}
            <section id="about" className="section container">
                <div className="glass-panel" style={{ padding: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div>
                        <h2>Sobre <span className="gradient-text">Joseph</span></h2>
                        <p style={{ color: '#cbd5e1', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                            Soy un Ingeniero de Sistemas de 20 años apasionado por la intersección entre software, hardware y diseño.
                            En <strong>Wlaz Studios</strong>, mi misión es crear herramientas digitales que empoderen a las personas.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <span style={{ padding: '0.5rem 1rem', background: 'rgba(79, 70, 229, 0.2)', color: '#a5b4fc', borderRadius: '20px', fontSize: '0.85rem' }}>Backend Dev</span>
                            <span style={{ padding: '0.5rem 1rem', background: 'rgba(236, 72, 153, 0.2)', color: '#fbcfe8', borderRadius: '20px', fontSize: '0.85rem' }}>UI/UX Design</span>
                            <span style={{ padding: '0.5rem 1rem', background: 'rgba(16, 185, 129, 0.2)', color: '#a7f3d0', borderRadius: '20px', fontSize: '0.85rem' }}>Hacking Ético</span>
                        </div>
                    </div>

                    <div>
                        <h3 style={{ marginBottom: '1.5rem' }}>Arsenal Tecnológico</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {skills.map(s => (
                                <div key={s.name}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                        <span>{s.name}</span>
                                        <span>{s.level}%</span>
                                    </div>
                                    <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${s.level}%` }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            style={{ height: '100%', background: 'var(--accent-gradient)', borderRadius: '3px' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ padding: '3rem 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', color: '#64748b' }}>
                <p>© 2026 Wlaz Studios. Todos los derechos reservados.</p>
                <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Diseñado y Programado por Joseph Cachay</p>
            </footer>

        </div>
    )
}

export default App
