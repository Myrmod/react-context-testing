import React, { useState } from 'react'
import formatCurrency from '../../../partials/currency'
import Channel, { ChannelType } from './Channel'
import './styles.scss'

export interface ChannelContextType {
   channels: Array<ChannelContextProps>
   updateChannel: (props: ChannelContextProps, index: number) => void
}

export interface ChannelContextProps {
   costs: number
}

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

export default function Channels() {
   const [channels, setchannels] = useState<Array<ChannelContextProps>>([])

   const updateChannel = (props: ChannelContextProps, index: number) => {
      const temp = [...channels]

      temp[index] = props
      setchannels(temp)
   }

   const sumChannels = (): number => {
      let costs = 0

      channels.forEach(channel => {
         if (channel) {
            costs = costs + channel.costs
         }
      })

      return costs
   }

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
               updateChannel={updateChannel}
               {...channel}
            />
         ))}
         <div>
            <span>
               Total budget:
            </span>
            <span
               tabIndex={0}
               aria-label={`Total budget $${sumChannels()}`}
            >
               {formatCurrency(`${sumChannels()}`)}
            </span>
            <span>

            </span>
            <span>

            </span>
         </div>
      </fieldset>
   )
}