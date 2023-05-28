import { useState, useEffect } from "react";
import { WindowSize } from "../types";

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: 0,
        height: 0
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener("resize", handleResize)

        handleResize()

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return windowSize
}