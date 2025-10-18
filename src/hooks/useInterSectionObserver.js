import { useEffect, useState } from "react"

export const useInterSectionObserver = () => {
    const [hasAnimated, setHasAnimated] = useState({})

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated[entry.target.id]) {
                        setHasAnimated(prev => ({
                            ...prev,
                            [entry.target.id]: true
                        }));
                    }
                })
            },
            { threshold: 0.2 }
        )

        document.querySelectorAll("[id]").forEach((el) => observer.observe(el));

        return () => {
            observer.disconnect();
        }
    }, [hasAnimated])
    return hasAnimated;
}
