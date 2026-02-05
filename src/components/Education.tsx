'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { FaGraduationCap, FaLanguage } from 'react-icons/fa'

export default function Education() {
    const t = useTranslations()

    return (
        <section id="education" className="relative py-20 bg-[#030712] overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">

                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <FaGraduationCap className="text-3xl text-blue-500" />
                            <h2 className="text-3xl font-bold text-white">{t('education.title')}</h2>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-2">{t('education.degree')}</h3>
                            <p className="text-blue-400 font-medium mb-1">{t('education.institution')}</p>
                            <p className="text-gray-500 text-sm font-mono">{t('education.period')}</p>
                        </div>
                    </motion.div>

                    {/* Languages Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <FaLanguage className="text-3xl text-purple-500" />
                            <h2 className="text-3xl font-bold text-white">{t('languages.title')}</h2>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <span className="text-white text-lg">{t('languages.spanish')}</span>
                                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20">Native</span>
                            </div>
                            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-full w-[100%]" />
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <span className="text-white text-lg">{t('languages.english')}</span>
                                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20">B2</span>
                            </div>
                            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full w-[75%]" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
