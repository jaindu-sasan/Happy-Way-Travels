import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";


export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://api.whatsapp.com/send?phone=94719201718&text=Hi%20I%20want%20to%20plan%20my%20trip!"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
      className="
        fixed bottom-10 right-4 z-50
        bg-green-600 hover:bg-green-700
        text-white px-4 sm:px-6 py-3 rounded-full
        shadow-xl font-semibold text-sm sm:text-base
        flex items-center gap-2 sm:gap-3
        animate-bounce
      "
    >
      {/* Animated Icon */}
      <motion.span
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="bg-white/20 p-2 rounded-full"
      >
        <MessageCircle size={18} className="sm:w-6 sm:h-6" />
      </motion.span>

      {/* Text: hidden on very small screens */}
      <span className="hidden sm:inline">
        Chat with us on WhatsApp
      </span>
    </motion.a>
  );
}
