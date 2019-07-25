const hook = ({ useEffect, useRef, useState }) => () => {
  const [time, setTime] = useState(new Date())
  const id = useRef(null)

  useEffect(() => {
    function loop() {
      setTime(new Date())
      id.current = requestAnimationFrame(loop)
    }
    loop()
    return () => cancelAnimationFrame(id.current)
  }, [])

  return time
}

export default hook
