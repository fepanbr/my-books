import { Button, Col, Input, Row } from "antd";
import { useRef } from "react";
import { LoginReqType } from "../types";



interface SigninProps {
  login: (reqData: LoginReqType) => void;
}

const Singin: React.FC<SigninProps> = ({login}) => {

  const emailRef = useRef<Input>(null);
  const passwordRef = useRef<Input>(null);
  return (
    <Row align="middle">
      <Col span={24}>
        <Row>
          <Col span={12}></Col>
          <Col span={12}>
            <div>My Books</div>
            <div>Please Note Your Opinion</div>
            <div />
            <div>
              Email
                <span> *</span>
            </div>
            <div>
              <Input
              placeholder="Email"
              autoComplete="email"
              name="email"
              ref={emailRef}
               />
            </div>
            <div>
              password
                <span> *</span>
            </div>
            <div>
              <Input
              autoComplete="current-password"
              type="password"
              ref={passwordRef}
              />
            </div>
            <div>
              <Button onClick={click} size="large">Sign In</Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  )

  function click() {
    const email = emailRef.current!.state.value;
    const password = passwordRef.current!.state.value;
    login({
      email,
      password
    })
  }
}

export default Singin;