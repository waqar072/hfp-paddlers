// resources/ts/hooks/useTheme.ts
import { useState, useEffect } from 'react';

export function useTheme() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        
        // FIX 1: Removed the unused 'systemPrefersDark' variable.
        // FIX 2: Simplified logic to only check if 'blue' was explicitly saved.
        if (savedTheme === 'blue') {
            setTheme('blue');
            document.documentElement.setAttribute('data-theme', 'blue');
        }
    }, []);

    // FIX 3: Changed from 'const toggleTheme = ...' to 'function toggleTheme()'
    function toggleTheme() {
        const newTheme = theme === 'blue' ? 'light' : 'blue';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    return { theme, toggleTheme };
}