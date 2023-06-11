import { useEffect, useRef } from "react"

function LazyImg_2({children, className, src}) {
    const containerRef = useRef(null)

    useEffect(
        () => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        console.log(entry.target);
                        // setTimeout(() => {
                        //     console.log("intersecting");
                        //     containerRef.current.removeAttribute("loading")
                        // }, 1000);
                        observer.unobserve(containerRef.current)
                    }
                })
            })

            observer.observe(containerRef.current)
        },
        []
    )
    
    return (
        <img
            loading="lazy"
            className={className}
            alt=""
            src={src}
            ref={containerRef}
        />
    )
}

export default LazyImg_2