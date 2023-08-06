import { View, Text } from "react-native"

import { ContainerLogin } from "../styles/login.styles"
import Input from "../../../shared/components/input/input"
import Button from "../../../shared/components/button/Button"

const Login = () => {
  return (
    <View>
      <ContainerLogin>
        <Text>Login</Text>
        <Input />
        <Button margin="16px" title="ENTRAR" />
      </ContainerLogin>
    </View>
  )

}

export default Login