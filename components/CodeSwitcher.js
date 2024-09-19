// components/CodeSwitcher.js
import { useState } from 'react';

const CodeSwitcher = ({ codeBlocks }) => {
    const [selectedLang, setSelectedLang] = useState(codeBlocks[0].lang);

    return (
        <div>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                {codeBlocks.map(({ lang, filename }) => (
                    <button
                        key={lang}
                        onClick={() => setSelectedLang(lang)}
                        style={{
                            backgroundColor: selectedLang === lang ? '#ddd' : '#f4f4f4',
                            border: '1px solid #ccc',
                            padding: '0.5rem 1rem',
                            cursor: 'pointer',
                        }}
                    >
                        {filename}
                    </button>
                ))}
            </div>

            <pre>
                <code>{codeBlocks.find((block) => block.lang === selectedLang).code}</code>
            </pre>
        </div>
    );
};

export default CodeSwitcher;
