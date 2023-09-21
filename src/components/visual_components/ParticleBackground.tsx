import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticleBackground: React.FC = () => {
    const particlesInit = async (engine: any) => {
        console.log(engine);
        await loadSlim(engine);
    };

    const particlesLoaded = async (container: any) => {
        console.log(container);
    };

    return (
        <Particles
            className="absolute top-0 left-0 w-full h-screen -z-10"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#191929",  // deep space color
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        // onHover: {
                        //     enable: true,
                        //     mode: "repulse",
                        // },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 1,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: ["#5bc0de", "#5bc0de", "#ffffff"],  // subtle colors
                    },
                    links: {
                        color: "#ffffff",
                        distance: 300,
                        enable: true,  // no links for a space feel
                        opacity: 0.3,
                        width: 0.5,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 0.3,  // much slower
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000,
                        },
                        value: 30,  // fewer particles
                    },
                    opacity: {
                        random: true,
                        value: { min: 0.1, max: 0.9 }
                    },
                    shape: {
                        type: "triangle",
                    },
                    size: {
                        random: true,
                        value: { min: 0.5, max: 4 },  // vary sizes
                    },
                },
                detectRetina: true,
            }}
        />
    );
}

export default ParticleBackground;
