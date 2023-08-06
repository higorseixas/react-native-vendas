import { TextInput, TextInputAndroidProps } from "react-native"
import { ContainerInput } from "./input.styled"

type InputProps = TextInputAndroidProps

const Input = ({ ...props }: InputProps) => {
  return <ContainerInput {...props} />
}

export default Input