export const transition = {
    type: "spring",
    damping: 20,
    stiffness: 100,
    mass: 1
};

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 200
        }
    }
};

export const heroVariants = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

export const cardHover = {
    y: -10,
    scale: 1.02,
    boxShadow: "0px 10px 30px rgba(79, 70, 229, 0.2)",
    transition: { type: "spring", stiffness: 400, damping: 10 }
};

export const buttonTap = { scale: 0.95 };
