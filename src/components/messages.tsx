import { useParams } from "react-router-dom";
import { Message } from "./message";
import { use } from "react";
import { getRoomMessages } from "../http/get-room-messages";

export function Messages() {

  const { roomId } = useParams()

  if(!roomId) {
    throw new Error('Messages components must be used within room page')
  }

  const { messages } = use(getRoomMessages({ roomId }))

  console.log(messages)

  return(
    <ol className="list-decimal list-outside px-3 space-y-8">
      <Message text="Como funcionam as goroutines em GoLang e por que elas são importantes para a concorrência e paralelismo?" amountOfReactions={100} answered />
      <Message text="Quais são as melhores práticas para organizar o código em um projeto GoLang, incluindo pacotes, módulos e a estrutura de diretórios?" amountOfReactions={50} />
      <Message text="Como fazer a depuração de programas GoLang e quais ferramentas são recomendadas para isso?" amountOfReactions={10} />
    </ol>
  )
}