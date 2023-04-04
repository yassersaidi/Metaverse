'use client';

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const LinkedInLink = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='fixed bottom-5 right-5 z-10'>
            <Link
                href='https://www.linkedin.com/in/yassersaidi/'
                className='bg-blue-800 text-white rounded-full p-2 transition-all inline-block shadow-xl hover:scale-105 shadow-gray-900/50'>
                <svg width={46} height={46} className="w-8 h-8 xl:w-12 xl:h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.65 3H4.35C3.6 3 3 3.6 3 4.275V19.65c0 .675.6 1.275 1.35 1.275h15.3c.75 0 1.35-.6 1.35-1.275V4.275C21 3.6 20.4 3 19.65 3ZM8.325 18.3H5.7V9.75h2.625v8.55ZM7.05 8.55a1.584 1.584 0 0 1-1.575-1.575c0-.9.675-1.575 1.575-1.575.825 0 1.575.675 1.575 1.575 0 .9-.75 1.575-1.575 1.575Zm11.325 9.675H15.75v-4.2c0-.975 0-2.325-1.425-2.325s-1.575 1.125-1.575 2.175v4.275h-2.625v-8.4H12.6v1.125h.075c.375-.675 1.275-1.425 2.55-1.425 2.7 0 3.225 1.8 3.225 4.125v4.65h-.075Z" />
                </svg>
            </Link>
        </motion.div>
    )
}

export default LinkedInLink