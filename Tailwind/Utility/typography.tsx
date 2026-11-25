import type { ReactNode } from "react"

interface TypographyProps {
    children?: ReactNode
    isBold?: boolean
    isCentered?: boolean
    variant?: 'h1' | 'h2' | 'h3' | 'p' | 'subtitle'
    size?: 'h1' | 'h2' | 'h3' | 'p' | 'subtitle'
    style?: string
}

export default function Typography({ children, isBold, isCentered, variant, size, style }: TypographyProps) {
    const variableStyles = `${isBold && 'font-bold' || ''} ${isCentered && 'text-center' || ''} ${style || ''}`

    let sizeOverride = ''; 
    
    if(size != undefined){
      switch(size){
        case 'h1':
          sizeOverride = "text-2xl sm:text-4xl";
          break;
        case 'h2':
          sizeOverride = "text-xl sm:text-3xl"
          break;
        case 'h3':
          sizeOverride = "text-lg sm:text-2xl"
          break;
        case 'subtitle':
          sizeOverride = "text-sm";
          break;
        default:
          sizeOverride = "text-sm sm:text-md"
          break;
      }
    }
    const commonStyles = 'text-white'

    switch (variant) {
        case 'h1':
            return <h1 className={`${commonStyles} ${variableStyles}${sizeOverride || 'text-2xl sm:text-4xl'} `}>{children}</h1>
        case 'h2':
            return <h2 className={`${commonStyles} ${variableStyles} ${sizeOverride || 'text-xl sm:text-3xl'}`}>{children}</h2>
        case 'h3':
            return <h3 className={`${commonStyles} ${variableStyles} ${sizeOverride || 'text-lg sm:text-2xl'}`}>{children}</h3>
        case 'p':
            return <p className={`${commonStyles} ${variableStyles} ${sizeOverride || 'text-sm sm:text-md'}`}>{children}</p>
        case 'subtitle':
            return <p className={`${commonStyles} ${variableStyles} ${sizeOverride || 'text-sm text-gray-700'}`}>{children}</p>
        default:
            return <p className={`${commonStyles} ${variableStyles} ${sizeOverride}`}>{children}</p>
    }
}