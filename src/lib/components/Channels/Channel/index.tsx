import React, { useEffect, useRef } from 'react'
import formatCurrency from '../../../../partials/currency'
import ChannelContext, { useChannelContext } from '../Context'
import './styles.scss'

export interface ChannelProps extends ChannelType {
   number: number
}

export interface ChannelType {
   name: string
   text: string
   title?: string
}

export default function Channel({name, text, title, number}: ChannelProps) {
   const ref = useRef<HTMLInputElement>(null)
   const context = useChannelContext()

   useEffect(() => {
      context.updateChannel(number, {
         currency: ref,
      })
   }, [])

   console.log(context.channels);

   return (
      <ChannelContext.Consumer>
         {({ updateChannel }) => (
            <fieldset
               className='channel'
               title={title}
            >
               <legend>{text}</legend>
               <input
                  type="text"
                  pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                  placeholder="$1,000.00"
                  onKeyDown={e => formatCurrency(e.currentTarget)}
                  onBlur={e => formatCurrency(e.currentTarget, true)}
                  aria-label={`${title || name} budget`}
                  onInput={() => updateChannel(
                     number,
                     {
                        currency: ref,
                     }
                  )}
                  ref={ref}
               />
               <input
                  type="radio"
                  name={name}
                  defaultChecked
                  value="false"
                  aria-label={`keep ${title || name} consistent`}
               />
               <input
                  type="radio"
                  name={name}
                  value="true"
                  aria-label={`exclude ${title || name}`}
               />
            </fieldset>
         )}
      </ChannelContext.Consumer>
   )
}
