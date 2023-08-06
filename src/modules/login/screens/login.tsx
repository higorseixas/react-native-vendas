import { View, Text } from "react-native"

import { ContainerLogin } from "../styles/login.styles"
import Input from "../../../shared/components/input/input"

const Login = () => {
  return (
    <View>
      <ContainerLogin>
        <Text>Login</Text>
        <Input />
      </ContainerLogin>
    </View>
  )

}

export default Login