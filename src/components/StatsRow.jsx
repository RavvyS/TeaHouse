import { motion } from "framer-motion";

const data = [
  { label: "Hectares of Land", value: "250" },
  { label: "Employees", value: "75" },
  { label: "Projects Completed", value: "120" },
  { label: "Annual Revenue", value: "$1M" },
  { label: "Satisfied Clients", value: "98%" },
];

const StatsRow = () => {
  return (
    <div className="w-full py-10 px-4 flex justify-center">
      <div className="flex justify-between max-w-6xl w-full">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center mx-4 bg-white shadow-md p-4 rounded-lg w-[160px] text-center cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }} // Animation triggers on every viewport entry
            transition={{
              delay: index * 0.2,
              duration: 0.6,
              ease: "easeInOut",
            }}
            viewport={{ once: false, amount: 0.1 }} // Changed `once: false` to replay animation
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
          >
            <h2 className="text-gray-600 text-lg font-semibold mb-2">
              {item.label}
            </h2>
            <p className="text-2xl text-amber-800 font-bold">{item.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsRow;