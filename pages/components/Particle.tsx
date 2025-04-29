import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Asegúrate de que esté instalado este paquete

const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <div className="relative w-full h-screen bg-black">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: "#000",
            repeat: "no-repeat",
            size: "40%",
            position: "60% 50%",
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "bubble",
              },
            },
            modes: {
              bubble: {
                distance: 200,
                duration: 2,
                opacity: 0,
                size: 0,
                speed: 3,
              },
              repulse: {
                distance: 400,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            move: {
              direction: "none",
              enable: true,
              outModes: "out",
              random: true,
              speed: 0.3,
            },
            number: {
              density: {
                enable: true,
              },
              value: 600,
            },
            opacity: {
              animation: {
                enable: true,
                speed: 5,
              },
              value: { min: 0.3, max: 0.6 },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 1,
            },
          },
        }}
      />
    </div>
  );
};

export default Particle;