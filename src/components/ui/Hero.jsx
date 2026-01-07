import { motion } from "framer-motion";

const HEIGHTS = {
  home: "h-[90vh] md:h-[100vh]",
  section: "h-[60vh] md:h-[65vh]",
  inner: "h-[45vh] md:h-[50vh]",
};

const TITLE_STYLES = {
  home: "text-5xl md:text-7xl font-extrabold",
  section: "text-4xl md:text-6xl font-bold",
  inner: "text-3xl md:text-5xl font-bold",
};

export default function Hero({
  title,
  subtitle,
  image,
  video,
  size = "section",
  align = "left",
  overlay = true,
  children,
}) {
  const isCenter = align === "center";

  return (
    <section
      className={`relative ${HEIGHTS[size]} flex items-center overflow-hidden`}
    >
      {/* VIDEO BACKGROUND (HOME ONLY) */}
      {video && size === "home" && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          autoPlay
          muted
          loop
          playsInline
          poster={image}
        />
      )}

      {/* IMAGE BACKGROUND */}
      {!video && image && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}

      {/* OVERLAY */}
      {overlay && (
        <div className="absolute inset-0 bg-black/55" />
      )}

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div
          className={`max-w-3xl ${
            isCenter ? "mx-auto text-center" : "text-left"
          }`}
        >
          {/* SUBTITLE */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-sm md:text-base font-medium text-emerald-300"
            >
              {subtitle}
            </motion.p>
          )}

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`${TITLE_STYLES[size]} text-white leading-tight tracking-tight`}
          >
            {title}
          </motion.h1>

          {/* EXTRA CONTENT (CTA / BUTTONS) */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
