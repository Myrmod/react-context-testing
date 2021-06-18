import React, { useRef } from 'react'
import { ChannelContextProps } from '..'
import formatCurrency from '../../../../partials/currency'
import './styles.scss'

export interface ChannelProps extends ChannelType {
   number: number
   updateChannel: (props: ChannelContextProps, index: number) => void
}

export interface ChannelType {
   name: string
   text: string
   title?: string
}

export default function Channel({
   name,
   text,
   title,
   number,
   updateChannel,
}: ChannelProps) {
   const ref = useRef<HTMLInputElement>(null)

   const costsToFloat = (): number => {
      if (!ref.current) return 0

      const cleanedCosts = ref.current.value
         .replace('$', '')
         .replaceAll(',', '')

     return parseFloat(cleanedCosts)
   }

   return (
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
               {
                  costs: costsToFloat(),
               },
               number,
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
   )
}
