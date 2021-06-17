import React, { useContext } from "react"

export interface ChannelContextType {
   channels: Array<ChannelContextProps>
   updateChannel: (index: number, props: ChannelContextProps) => void
}

export interface ChannelContextProps {
   currency?: React.RefObject<HTMLInputElement>
}

const ChannelContext = React.createContext({
   channels: [] as Array<ChannelContextProps>,
   updateChannel: (index: number, props: ChannelContextProps) => {},
})

export default ChannelContext

export const useChannelContext = () => useContext<ChannelContextType>(ChannelContext);