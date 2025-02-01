
import React from "react";

const VideoP = () => {
    return (
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl shadow-lg">
            {/* Video with reduced opacity */}
            <video
                className="w-full h-full object-cover opacity-70"
                controls
                autoPlay
                muted
                loop
            >
                <source src="./public/footV.mp4" type="video/mp4" />
            </video>

            {/* Text overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white   bg-opacity-20 p-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    Our Valley
                </h2>
                <p className="text-sm md:text-base lg:text-lg max-w-2xl">
                    The history of Bogawantalawa is traced back to 1869. It was during this time that pioneering Scottish planters came across a valley surrounded by mountains
                    encircled by lush and forests, quite unlike anything else witnessed… It was soon discovered that extremely fertile soil in this Bogawantalawa Valley, with its
                    elevation ranging from 4,000 to 6,000 feet above sea-level along with the ideal micro-climatic conditions, provide the perfect terroir to produce the most exquisite
                    teas of a unique distinct character, flavor and body that are renowned the world over. The Bogawantalawa valley has since been termed the Golden Valley of Ceylon
                    Tea…
                </p>
            </div>
        </div>
    );
};

export default VideoP;