    import { useState, useEffect } from 'react';
    import useScreenSize from './useScreenSize';

    export const useIsBottom = () => {
        const [isBottom, setIsBottom] = useState(false);

        const {width} = useScreenSize()
        const isPhone = width <= 768

        useEffect(() => {
            const handleScroll = () => {
                const footerOffset = isPhone ? 328 : 176;
                const scrolledToBottom = window.innerHeight + window.scrollY  >= document.body.offsetHeight - footerOffset;
                setIsBottom(scrolledToBottom);
            };

            window.addEventListener('scroll', handleScroll);

            handleScroll();

            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        return {isBottom};
    }
