interface GetRoomMessagesRequest {
  roomId: string;
}

export async function getRoomMessages({ roomId }: GetRoomMessagesRequest) {
  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/rooms/${roomId}/messages`)

  const data: Array<{
    id: string,
    room_id: string
    message: string
    reaction_count: number
    answered: boolean
  }> = await response.json()

  return {
    messages: data.map(message => {
      return {
        id: message.id,
        text: message.message,
        amountOfReactions: message.reaction_count,
        answered: message.answered
      }
    })
  }
}