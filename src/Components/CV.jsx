import React from 'react';
import TitleHeader from './TitleHeader.jsx';

const CV = () => {


    return (
        <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <TitleHeader
                    title="This is my Cover letter"
                    sub=""
                />
                <a
                    href={import.meta.env.VITE_CV_URI}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                    <span>Download CV (.docx)</span>
                </a>
            </div>
        </section>
    );
};

export default CV;
