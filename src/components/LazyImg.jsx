import { useEffect, useRef } from "react"

function LazyImg({children, className}) {
    const containerRef = useRef(null)

    useEffect(
        () => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        const img = entry.target.querySelector("[loading]")
                        if(img) {
                            img.setAttribute("src", img.getAttribute("data-src"))
                            img.removeAttribute("loading")
                            observer.unobserve(containerRef.current)
                        }
                    }
                })
            })

            observer.observe(containerRef.current)
        },
        []
    )
    
    return (
        <div ref={containerRef} className={"inline-block " + className}>
            {children}
        </div>
    )
}

export default LazyImg