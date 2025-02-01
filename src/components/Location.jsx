import { motion } from "framer-motion";

const Location = () => {
    const locations = [
        {
            title: "Kandy",
            text: "Norwood Estate, located at 4,708 feet above sea level, are nurtured using bio-dynamic farming methods, ensuring no pollution. Norwood Green Tea is handpicked, resulting in a mellow liquor with nutty and herbal notes. Norwood Black Tea is a signature cup with a golden hue and revitalizing aroma.",
            image: "/L1.jpg", // Ensure images are in the public folder
        },
        {
            title: "Haputhale",
            text: "Norwood Estate, located at 4,708 feet above sea level, are nurtured using bio-dynamic farming methods, ensuring no pollution. Norwood Green Tea is handpicked, resulting in a mellow liquor with nutty and herbal notes. Norwood Black Tea is a signature cup with a golden hue and revitalizing aroma.",
            image: "/L2.jpg", // Ensure images are in the public folder
        },
        {
            title: "Nuwara Eliya",
            text: "Norwood Estate, located at 4,708 feet above sea level, are nurtured using bio-dynamic farming methods, ensuring no pollution. Norwood Green Tea is handpicked, resulting in a mellow liquor with nutty and herbal notes. Norwood Black Tea is a signature cup with a golden hue and revitalizing aroma.",
            image: "/L3.jpg", // Ensure images are in the public folder
        },
    ];

    const transitionVariant = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeInOut" } },
    };

    return (
        <div className="flex flex-col space-y-10 py-12 px-4 w-250 mx-auto">
            {locations.map((location, index) => (
                <motion.div
                    key={index}
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center md:space-x-8 bg-white p-6 shadow-lg rounded-xl`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }} // Changed `once: false` to replay animation
                    variants={transitionVariant}
                >
                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">{location.title}</h1>
                        <p className="text-gray-600">{location.text}</p>
                    </div>

                    {/* Image */}
                    <motion.img
                        src={location.image}
                        alt={location.title}
                        className="w-full md:w-96 h-64 object-cover rounded-xl cursor-pointer mt-6 md:mt-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default Location;