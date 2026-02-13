import React, { Component } from "react";

class StarsCanvas extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.animationId = null;
        this.stars = [];
        this.numStars = 800;
    }

    componentDidMount() {
        this.initStars();
        this.animate();
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.animationId);
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize = () => {
        const canvas = this.canvasRef.current;
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    };

    initStars() {
        this.stars = [];
        for (let i = 0; i < this.numStars; i++) {
            this.stars.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                z: Math.random() * 1000,
                radius: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.8 + 0.2,
                twinkleSpeed: Math.random() * 0.02 + 0.005,
                twinklePhase: Math.random() * Math.PI * 2,
            });
        }
    }

    animate = () => {
        const canvas = this.canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const time = Date.now() * 0.001;

        for (let i = 0; i < this.stars.length; i++) {
            const star = this.stars[i];

            // Slow drift
            star.x += Math.sin(time * 0.1 + i) * 0.05;
            star.y += Math.cos(time * 0.08 + i) * 0.05;

            // Wrap around
            if (star.x < 0) star.x = canvas.width;
            if (star.x > canvas.width) star.x = 0;
            if (star.y < 0) star.y = canvas.height;
            if (star.y > canvas.height) star.y = 0;

            // Twinkle
            const twinkle =
                Math.sin(time * star.twinkleSpeed * 10 + star.twinklePhase) * 0.3 + 0.7;
            const alpha = star.opacity * twinkle;

            // Randomly color some stars pink/purple like the 3D portfolio
            const colorRand = (i * 7) % 10;
            let color;
            if (colorRand < 3) {
                color = `rgba(242, 114, 200, ${alpha})`; // pink (#f272c8)
            } else if (colorRand < 5) {
                color = `rgba(168, 130, 255, ${alpha})`; // purple
            } else {
                color = `rgba(255, 255, 255, ${alpha})`; // white
            }

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();

            // Glow for larger stars
            if (star.radius > 1.2) {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius * 2.5, 0, Math.PI * 2);
                const glowColor = colorRand < 3
                    ? `rgba(242, 114, 200, ${alpha * 0.15})`
                    : `rgba(255, 255, 255, ${alpha * 0.1})`;
                ctx.fillStyle = glowColor;
                ctx.fill();
            }
        }

        this.animationId = requestAnimationFrame(this.animate);
    };

    render() {
        return (
            <canvas
                ref={this.canvasRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                    pointerEvents: "none",
                }}
            />
        );
    }
}

export default StarsCanvas;
