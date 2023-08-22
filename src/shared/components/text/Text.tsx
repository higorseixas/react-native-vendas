import { TextProps as TextPropNative } from "react-native/types"
import { ContainerText } from "./text.style"
import { useMemo } from "react"
import { textTypes } from "./textTypes"

interface TextProps extends TextPropNative {
  color?: string
  type?: string
}

const Text = ({ color, type, ...props }: TextProps) => {
  const handleFontSize = useMemo(() => {
    switch (type) {
      case textTypes.TITLE:
        return '32px';

      default:
        return '16px'
    }
  }, [type])

  return (
    <ContainerText color={color} fontSize={handleFontSize} {...props} />
  )
}

export default Text