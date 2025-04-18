"use client"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const socialVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {duration: 0.2, ease: "easeOut" }
  }),
}

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-10 overflow-hidden">
      <div className="w-full mx-auto">
        <div className="px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between">

            {/* Left Section */}
            <motion.div
              className="flex flex-col space-y-6 md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              {/* Coffee & Chaos */}
              <motion.div
                className="flex flex-col items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[#eb5939] text-2xl md:text-3xl font-bold italic mb-2 font-whitenice">
                  Turning Coffee Into Code & Chaos
                </h3>

                {/* Meet Dheeraj */}
                <motion.span
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.1, type: "spring", stiffness: 300 }}
                  viewport={{ once: true }}
                  className="flex flex-row items-baseline space-x-1 text-[#b7ab98]"
                >
                  <h1 className="text-8xl md:text-15xl font-highrise">MEET&nbsp;DHEERAJ</h1>
                  <h2 className="text-4xl md:text-3xl font-bold tracking-tightest">.dev</h2>
                </motion.span>
              </motion.div>

              {/* Signature */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center mt-6 md:mt-auto"
              >
                <div className="h-8 w-8 rounded-full bg-[#b7ab98] text-black flex items-center justify-center text-lg font-highrise mr-1">
                  AD
                </div>
                <p className="text-sm text-[#b7ab98]">
                  <span className="italic">Designed</span> and Developed by Appaji Dheeraj
                </p>
              </motion.div>
            </motion.div>

            {/* Right Section */}
            <motion.div
              className="flex flex-col justify-around font-avant1 tracking-wider mb-4 md:w-1/3 mt-4 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2, delayChildren: 0.4 } },
              }}
            >
              {/* Social Links */}
              <div className="flex justify-end items-center space-x-6 md:space-x-12 mr-1">
                {[
                  {
                    label: "Instagram",
                    desc: "Here by chance <br /> or by choice?",
                    href: "#",
                  },
                  {
                    label: "Github",
                    desc: "Where my code <br /> meets its destiny",
                    href: "#",
                  },
                  {
                    label: "LINKEDIN",
                    desc: "Stalking me is fine,<br /> I do it too.",
                    href: "#",
                  },
                ].map((item, i) => (
                  <motion.a
                    key={item.label}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={socialVariants}
                    className="group flex items-center text-[#b7ab98] hover:text-black hover:bg-[#eb5939] transition-all px-2 py-1 rounded-md"
                    href={item.href}
                  >
                    <span className="group-hover:hidden">{item.label}</span>
                    <span
                      className="hidden text-xs tracking-normal text-left group-hover:inline"
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    />
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </motion.a>
                ))}
              </div>

              {/* Contact Info */}
              <div className="flex flex-col space-y-0 mt-8">
                {[
                  {
                    label: "email",
                    value: "dheeraj.nagaraja@gmail.com",
                    href: "mailto:dheeraj.nagaraja@gmail.com",
                  },
                  {
                    label: "contact",
                    value: "+91-94816 60290",
                    href: "tel:+919481660290",
                  },
                ].map((info, i) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}

                    viewport={{ once: true }}
                    className="border-t border-[#b7ab98] border-opacity-60 pt-2 pb-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[#b7ab98] italic w-20 font-whitenice text-2xl">
                        {info.label}
                      </span>
                      <a
                        href={info.href}
                        className="text-[#b7ab98] hover:text-purple-400 transition-colors font-avant1 tracking-wide"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
