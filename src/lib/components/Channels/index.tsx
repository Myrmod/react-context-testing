import React, { useEffect, useState } from 'react'
import Channel, { ChannelType } from './Channel'
import ChannelContext, { ChannelContextProps } from './Context'
import './styles.scss'

const channelsData = [
   {
     text: 'SEA',
     name: 'sea',
     title: 'Search Engine Advertising',
   },
   {
     text: 'Display',
     name: 'display',
   },
   {
     text: 'Social',
     name: 'social',
     title: 'Social Media',
   },
   {
     text: 'Affiliate',
     name: 'affiliate',
   },
   {
     text: 'Remarketing',
     name: 'remarketing',
   },
] as Array<ChannelType>

function InnerChannel() {
   return (
      <fieldset id="channels">
         <legend>Channel settings</legend>
         <div>
         <span>
            Channel
         </span>
         <span>
            Budget
         </span>
         <span>
            Keep consistent
         </span>
         <span>
            Exclude
         </span>
         </div>

         {channelsData.map((channel, index) => (
            <Channel
               key={index}
               number={index}
               {...channel}
            />
         ))}
      </fieldset>
   )
}

export default function ChannelsComponent() {
   const [channels, setchannels] = useState<Array<ChannelContextProps>>([])

   const updateChannel = (index: number, props: ChannelContextProps) => {
      const temp = [...channels]
      temp[index] = props
      setchannels(temp)
   }

   useEffect(() => {
      setchannels(channelsData.map(() => ({})))
   }, [])

   return (
      <ChannelContext.Provider value={{
         channels,
         updateChannel,
      }}>
         <InnerChannel />
      </ChannelContext.Provider>
   )
}
