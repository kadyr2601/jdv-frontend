"use client"

import { useEffect, useRef } from "react"

interface ProgressItem {
    title: string
    percentage: number
}

export default function CircularProgress({ items = [] }: { items: ProgressItem[] }) {
    // Create refs for each canvas element
    const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([])

    useEffect(() => {
        // Initialize canvas refs array if needed
        if (canvasRefs.current.length !== items.length) {
            canvasRefs.current = Array(items.length).fill(null)
        }

        // Animation function for each canvas
        const animateCanvases = () => {
            let needsAnimation = false

            items.forEach((item, index) => {
                const canvas = canvasRefs.current[index]
                if (!canvas) return

                const ctx = canvas.getContext("2d")
                if (!ctx) return

                // Set up canvas with proper dimensions
                const size = 200 // Match the canvas width/height
                const lineWidth = 13
                const radius = size / 2 - lineWidth
                const centerX = size / 2
                const centerY = size / 2

                // Clear canvas
                ctx.clearRect(0, 0, size, size)

                // Draw background circle (white)
                ctx.beginPath()
                ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
                ctx.strokeStyle = "#ffffff"
                ctx.lineWidth = lineWidth
                ctx.stroke()

                // Calculate current percentage for animation
                const currentPercentage = Math.min(item.percentage, (performance.now() - startTime) / 40)

                // Draw progress arc (gold/beige color)
                const startAngle = -Math.PI / 2 // Start from top
                const endAngle = startAngle + (Math.PI * 2 * currentPercentage) / 100

                ctx.beginPath()
                ctx.arc(centerX, centerY, radius, startAngle, endAngle)
                ctx.strokeStyle = "#cda274" // Gold/beige color
                ctx.lineWidth = lineWidth
                ctx.lineCap = "round"
                ctx.stroke()

                // Continue animation if not complete
                if (currentPercentage < item.percentage) {
                    needsAnimation = true
                }
            })

            // Request next animation frame if needed
            if (needsAnimation) {
                requestAnimationFrame(animateCanvases)
            }
        }

        // Start animation
        const startTime = performance.now()
        requestAnimationFrame(animateCanvases)

        // Cleanup on unmount
        return () => {
            // Animation will stop naturally when component unmounts
        }
    }, [items])

    return (
        <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
            {items.map((item, i) => (
                <div className="col-md-4 col-sm-6" key={i} style={{ width: "33.333%", padding: "15px" }}>
                    <div
                        className="ttm-fid inside ttm-fid-view-circle-progress ttm-fid-with-border"
                        style={{ textAlign: "center" }}
                    >
                        <div className="ttm-fid-contents">
                            <div
                                className="ttm-circle-box completed"
                                data-digit={item.percentage}
                                data-fill="#cda274"
                                data-before=""
                                data-before-type="sup"
                                data-after="%"
                                data-after-type="span"
                                data-size="100"
                                data-emptyfill="#fff"
                                data-thickness="7"
                                data-linecap="round"
                                data-gradient=""
                                style={{ position: "relative", display: "inline-block" }}
                            >
                                <div className="ttm-circle-content" style={{ position: "relative", width: "100px", height: "100px" }}>
                                    <div className="ttm-circle">
                                        <canvas
                                            ref={(el) => {
                                                canvasRefs.current[i] = el
                                            }}
                                            width="200"
                                            height="200"
                                            style={{ width: "100px", height: "100px" }}
                                        ></canvas>
                                    </div>
                                    <div
                                        className="ttm-circle-boxcontent"
                                        style={{
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%)",
                                            zIndex: 10,
                                            width: "100%",
                                            textAlign: "center",
                                        }}
                                    >
                                        <div className="ttm-fid-number" style={{ color: "white", fontSize: "28px", fontWeight: "bold" }}>
                                            {item.percentage}%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className="ttm-fid-title" style={{ marginTop: "20px", textAlign: "center" }}>
                <span className="ttm-textcolor-darkgrey" style={{ color: "white", fontSize: "20px" }}>
                  {item.title}
                </span>
                            </h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
