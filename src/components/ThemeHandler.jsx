import React, { useState, useEffect } from 'react';

// Router
import { Link } from 'react-router-dom';

export default function ThemeHandler() {
    const [theme, setTheme] = useState(false);
    const dark_classes = ['dark-theme', 'bg-dark', 'text-light'];
    const light_classes = ['light-theme', 'bg-light', 'text-dark'];
    const navbar_light = ['navbar-light', 'bg-light'];
    const navbar_dark = ['navbar-dark', 'bg-dark'];

    useEffect(() => {
        const getTheme = localStorage.getItem('Theme');
        if (getTheme === 'dark') {
            setTheme(true);
        }
    }, []);

    useEffect(() => {
        if (theme) {
            localStorage.setItem('Theme', 'dark');

            document.body.classList.add(...dark_classes);
            document.body.classList.remove(...light_classes);

            document.getElementById('nav_toggle').classList.add(...navbar_dark);
            document
                .getElementById('nav_toggle')
                .classList.remove(...navbar_light);
        } else {
            localStorage.setItem('Theme', 'light');

            document.body.classList.add(...light_classes);
            document.body.classList.remove(...dark_classes);

            document
                .getElementById('nav_toggle')
                .classList.add(...navbar_light);
            document
                .getElementById('nav_toggle')
                .classList.remove(...navbar_dark);
        }
    }, [theme]);

    return (
        <>
            <Link
                to="#"
                className="toggle_link"
                onClick={() => setTheme(!theme)}
            >
                {theme ? (
                    <i className="far fa-moon me-2"></i>
                ) : (
                    <i class="fas fa-moon me-2"></i>
                )}
                Dark Mode
            </Link>
        </>
    );
}
