'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function Experience() {
    const t = useTranslations('experience')

    // Since we only have one experience for now, we can hardcode the key iteration or just look for keys
    // A dynamic approach would be better if we had an array in json, but the json structure I used is object based.
    // I'll iterate through known keys or just map a single one for now as per the JSON structure "capitalPlus".

    const experiences = [
        'capitalPlus'
    ]

    return (
        <section id="experience" className="relative py-32 bg-[#050914] overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-blue-600/10 blur-[100px]" />
                <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-purple-600/10 blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                            {t('title')}
                        </span>
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((expKey, index) => (
                        <motion.div
                            key={expKey}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Line (Desktop) */}
                            <div className="hidden md:block absolute left-[20px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30"></div>

                            <div className="md:flex gap-10 items-start group">
                                {/* Time period & Company Logo Placeholder */}
                                <div className="hidden md:flex flex-col items-center w-[40px] flex-shrink-0 pt-2 relative">
                                    <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 shadow-lg">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">{t(`${expKey}.role`)}</h3>
                                            <div className="text-blue-400 font-medium text-lg">{t(`${expKey}.company`)}</div>
                                        </div>
                                        <div className="px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-mono whitespace-nowrap self-start md:self-auto">
                                            {t(`${expKey}.period`)}
                                        </div>
                                    </div>

                                    <ul className="space-y-3">
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                                            <li key={item} className="flex gap-3 text-gray-300 leading-relaxed text-sm md:text-base">
                                                <span className="text-blue-500 mt-1.5 text-xs">▹</span>
                                                <span>{t(`${expKey}.responsibilities.${item}`)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
