"use client"
import { FC, useEffect, useRef, useState } from "react"
import { motion, useSpring } from "framer-motion"
interface Position {
  x: number
  y: number
}
interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  createdAt: number
}
export interface SmoothCursorProps {
  cursor?: React.ReactNode
  springConfig?: {
    damping: number
    stiffness: number
    mass: number
    restDelta: number
  }
}
const SparkleSVG: FC<{ size: number; rotation: number; id: number }> = ({ size, rotation, id }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ rotate: rotation, filter: 'drop-shadow(0 0 4px rgba(212, 175, 55, 0.8))' }}
    >
      <defs>
        <linearGradient id={`sparkleGradient-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity={1} />
          <stop offset="30%" stopColor="#F4D03F" stopOpacity={1} />
          <stop offset="60%" stopColor="#D4AF37" stopOpacity={1} />
          <stop offset="100%" stopColor="#B8860B" stopOpacity={1} />
        </linearGradient>
        <radialGradient id={`sparkleRadial-${id}`} cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity={1} />
          <stop offset="50%" stopColor="#F4D03F" stopOpacity={0.9} />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity={0.7} />
        </radialGradient>
      </defs>
      {/* Outer glow layer */}
      <path
        d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
        fill={`url(#sparkleGradient-${id})`}
        opacity="0.7"
        transform="scale(1.3) translate(-9.23, -9.23)"
      />
      {/* Main sparkle */}
      <path
        d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
        fill={`url(#sparkleGradient-${id})`}
        stroke="#FFD700"
        strokeWidth="1.5"
      />
      {/* Center bright highlight */}
      <circle cx="12" cy="10" r="3" fill={`url(#sparkleRadial-${id})`} />
      <circle cx="12" cy="10" r="1.5" fill="#FFD700" opacity="0.9" />
    </motion.svg>
  )
}

const DefaultCursorSVG: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={54}
      viewBox="0 0 50 54"
      fill="none"
      style={{ scale: 0.5 }}
    >
      <defs>
        {/* Gradient definition */}
        <linearGradient id="cursorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8860B" stopOpacity={1} />
          <stop offset="40%" stopColor="#D4AF37" stopOpacity={1} />
          <stop offset="70%" stopColor="#FFD700" stopOpacity={1} />
          <stop offset="100%" stopColor="#F4D03F" stopOpacity={1} />
        </linearGradient>
        {/* Gradient for stroke */}
        <linearGradient id="cursorStrokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B6914" stopOpacity={1} />
          <stop offset="100%" stopColor="#B8860B" stopOpacity={1} />
        </linearGradient>
        <filter
          id="filter0_d_91_7928"
          x={0.602397}
          y={0.952444}
          width={49.0584}
          height={52.428}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2.25825} />
          <feGaussianBlur stdDeviation={2.25825} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_91_7928"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_91_7928"
            result="shape"
          />
        </filter>
      </defs>
      <g filter="url(#filter0_d_91_7928)">
        {/* Outer gradient stroke for visibility on light backgrounds */}
        <path
          d="M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z"
          stroke="url(#cursorStrokeGradient)"
          strokeWidth={3.5}
          strokeLinejoin="round"
        />
        {/* Inner gradient fill */}
        <path
          d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
          fill="url(#cursorGradient)"
        />
        {/* Inner gold stroke for extra contrast */}
        <path
          d="M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z"
          stroke="#FFD700"
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
export function SmoothCursor({
  cursor = <DefaultCursorSVG />,
  springConfig = {
    damping: 45,
    stiffness: 400,
    mass: 1,
    restDelta: 0.001,
  },
}: SmoothCursorProps) {
  const [isMoving, setIsMoving] = useState(false)
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const lastMousePos = useRef<Position>({ x: 0, y: 0 })
  const velocity = useRef<Position>({ x: 0, y: 0 })
  const lastUpdateTime = useRef(Date.now())
  const lastSparkleTime = useRef(0)
  const sparkleIdCounter = useRef(0)
  const isInitialized = useRef(false)
  const previousAngle = useRef(0)
  const accumulatedRotation = useRef(0)
  const cursorX = useSpring(0, springConfig)
  const cursorY = useSpring(0, springConfig)
  const rotation = useSpring(0, {
    ...springConfig,
    damping: 60,
    stiffness: 300,
  })
  const scale = useSpring(1, {
    ...springConfig,
    stiffness: 500,
    damping: 35,
  })
  useEffect(() => {
    const updateVelocity = (currentPos: Position) => {
      const currentTime = Date.now()
      const deltaTime = currentTime - lastUpdateTime.current
      if (deltaTime > 0) {
        velocity.current = {
          x: (currentPos.x - lastMousePos.current.x) / deltaTime,
          y: (currentPos.y - lastMousePos.current.y) / deltaTime,
        }
      }
      lastUpdateTime.current = currentTime
      lastMousePos.current = currentPos
    }
    const smoothMouseMove = (e: MouseEvent) => {
      const currentPos = { x: e.clientX, y: e.clientY }
      
      // Calculate distance moved BEFORE updating lastMousePos
      const distance = Math.sqrt(
        Math.pow(currentPos.x - lastMousePos.current.x, 2) + 
        Math.pow(currentPos.y - lastMousePos.current.y, 2)
      )
      
      updateVelocity(currentPos)
      const speed = Math.sqrt(
        Math.pow(velocity.current.x, 2) + Math.pow(velocity.current.y, 2)
      )
      
      cursorX.set(currentPos.x)
      cursorY.set(currentPos.y)
      
      // Initialize lastMousePos on first move to avoid huge distance calculation
      if (!isInitialized.current) {
        lastMousePos.current = currentPos
        lastSparkleTime.current = Date.now()
        isInitialized.current = true
      }
      
      // Create sparkles continuously whenever mouse moves
      const now = Date.now()
      const timeSinceLastSparkle = now - lastSparkleTime.current
      
      // Create sparkles more frequently - every 20ms minimum
      // This ensures sparkles appear even with slow movement
      // For slow movements, browser may throttle mousemove events, so when they fire, we create sparkles
      if (timeSinceLastSparkle >= 20) {
        // Always create at least 1 sparkle for any movement
        // More sparkles for faster movement (based on distance)
        let sparkleCount = 1
        
        // Scale sparkle count based on distance moved
        // Even small distances will get at least 1 sparkle
        if (distance > 1) {
          sparkleCount = Math.min(Math.max(1, Math.floor(distance / 4)), 5)
        }
        
        const newSparkles: Sparkle[] = []
        
        for (let i = 0; i < sparkleCount; i++) {
          const offsetX = (Math.random() - 0.5) * 50
          const offsetY = (Math.random() - 0.5) * 50
          sparkleIdCounter.current += 1
          newSparkles.push({
            id: sparkleIdCounter.current,
            x: currentPos.x + offsetX,
            y: currentPos.y + offsetY,
            size: 6, // Fixed size: 6px
            rotation: Math.random() * 360,
            createdAt: now,
          })
        }
        
        setSparkles((prev) => {
          const updated = [...prev, ...newSparkles]
          // Limit to 60 sparkles max for better visibility
          return updated.slice(-60)
        })
        
        lastSparkleTime.current = now
      }
      
      if (speed > 0.1) {
        const currentAngle =
          Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI) +
          90
        let angleDiff = currentAngle - previousAngle.current
        if (angleDiff > 180) angleDiff -= 360
        if (angleDiff < -180) angleDiff += 360
        accumulatedRotation.current += angleDiff
        rotation.set(accumulatedRotation.current)
        previousAngle.current = currentAngle
        scale.set(0.95)
        setIsMoving(true)
        
        const timeout = setTimeout(() => {
          scale.set(1)
          setIsMoving(false)
        }, 150)
        return () => clearTimeout(timeout)
      }
    }
    let rafId: number
    const throttledMouseMove = (e: MouseEvent) => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        smoothMouseMove(e)
        rafId = 0
      })
    }
    document.body.style.cursor = "none"
    window.addEventListener("mousemove", throttledMouseMove)
    return () => {
      window.removeEventListener("mousemove", throttledMouseMove)
      document.body.style.cursor = "auto"
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [cursorX, cursorY, rotation, scale])

  // Clean up old sparkles
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now()
      setSparkles((prev) =>
        prev.filter((sparkle) => now - sparkle.createdAt < 1200)
      )
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Sparkle Trail */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          style={{
            position: "fixed",
            left: sparkle.x,
            top: sparkle.y,
            translateX: "-50%",
            translateY: "-50%",
            zIndex: 99,
            pointerEvents: "none",
          }}
          initial={{ scale: 0, opacity: 1, y: 0 }}
          animate={{
            scale: [0, 1.2, 1, 0.8, 0],
            opacity: [1, 1, 0.9, 0.6, 0],
            y: -40,
            rotate: sparkle.rotation + 360,
          }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <SparkleSVG size={sparkle.size} rotation={sparkle.rotation} id={sparkle.id} />
        </motion.div>
      ))}

      {/* Main Cursor */}
      <motion.div
        style={{
          position: "fixed",
          left: cursorX,
          top: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          rotate: rotation,
          scale: scale,
          zIndex: 100,
          pointerEvents: "none",
          willChange: "transform",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
      >
        {cursor}
      </motion.div>
    </>
  )
}