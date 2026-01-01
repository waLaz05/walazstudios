import { AnimatePresence, motion } from "framer-motion";
import { X, Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import React, { useState } from "react";

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3 }
    },
    exit: { opacity: 0, transition: { delay: 0.2 } }
};

const modalVariants = {
    hidden: { scale: 0, rotate: "10deg", opacity: 0, y: 100 },
    visible: {
        scale: 1,
        rotate: "0deg",
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 15,
            stiffness: 100,
            mass: 0.8
        }
    },
    exit: {
        scale: 0.8,
        opacity: 0,
        y: -50,
        transition: { duration: 0.3 }
    }
};

const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
};

export const ContactModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-overlay"
                    style={{
                        position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
                        background: "rgba(0,0,0,0.7)", zIndex: 1000,
                        display: "flex", justifyContent: "center", alignItems: "center",
                        backdropFilter: "blur(8px)"
                    }}
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={onClose}
                >
                    <motion.div
                        className="glass-panel"
                        style={{
                            width: "90%", maxWidth: "500px", padding: "2.5rem",
                            background: "linear-gradient(145deg, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.95))",
                            position: "relative", border: "1px solid var(--neon-purple)",
                            boxShadow: "0 0 50px rgba(139, 92, 246, 0.3)"
                        }}
                        variants={modalVariants}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            style={{
                                position: "absolute", top: "1rem", right: "1rem",
                                background: "transparent", border: "none", color: "white", cursor: "pointer"
                            }}
                        >
                            <X size={24} />
                        </button>

                        <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "0.5rem" }}>
                            Conecta con <span className="gradient-text">Wlaz</span>
                        </h2>
                        <p style={{ textAlign: "center", color: "#94a3b8", marginBottom: "2rem" }}>
                            ¿Tienes una idea revolucionaria? Estoy listo.
                        </p>

                        <motion.div
                            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                            initial="hidden"
                            animate="visible"
                            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                        >
                            <ContactLink icon={<Mail size={20} />} text="josephivan050505@gmail.com" color="#ec4899" href="mailto:josephivan050505@gmail.com" />
                            <ContactLink icon={<Github size={20} />} text="github.com/waLaz05" color="#fff" href="https://github.com/waLaz05" />
                            <ContactLink icon={<Linkedin size={20} />} text="LinkedIn Profile" color="#3b82f6" href="#" />
                            <ContactLink icon={<MessageCircle size={20} />} text="+51 966 552 520" color="#10b981" href="https://wa.me/51966552520" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const ContactLink = ({ icon, text, color, href }) => (
    <motion.a
        href={href}
        target="_blank"
        variants={itemVariants}
        whileHover={{ scale: 1.05, x: 10, backgroundColor: "rgba(255,255,255,0.1)" }}
        whileTap={{ scale: 0.95 }}
        style={{
            display: "flex", alignItems: "center", gap: "1rem",
            padding: "1rem", borderRadius: "12px",
            background: "rgba(255,255,255,0.05)", textDecoration: "none", color: "white",
            border: `1px solid ${color}40`
        }}
    >
        <div style={{ color: color }}>{icon}</div>
        <span style={{ fontWeight: "500" }}>{text}</span>
    </motion.a>
);
