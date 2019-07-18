const hook = ({ useEffect, useRef, useState }) => () => {
  const [time, setTime] = useState(new Date())
  const id = useRef(null)

  useEffect(() => {
    id.current = requestAnimationFrame(() => setTime(new Date()))
    return () => cancelAnimationFrame(id.current)
  }, [id])

  return time
}

export default hook
