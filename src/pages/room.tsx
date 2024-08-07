import { useParams } from "react-router-dom"

export function Room() {

  const { roomId } = useParams()

  return(
    <h1>Room: {roomId}</h1>
  )
}