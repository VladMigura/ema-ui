import { Col, Row, Card, Input, Button } from 'antd';
import cardStyle from '../styles/card.css'

const rowGutterMain = [0, 32];
const textColSpan = 8
const inputColSpan = 16;
const title = 'Смена пароля'

class ChangePasswordForm extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Card className='Card' bordered={true} size="large" title={title} style={{ width: 600 }}>
                    <Row gutter={rowGutterMain} type="flex">
                        <Col span={textColSpan}>
                            <h3>Пароль</h3>
                        </Col>
                        <Col span={inputColSpan}>
                            <Input.Password
                                placeholder='********'
                            />
                        </Col>
                    </Row>
                    <Row gutter={rowGutterMain} type="flex">
                        <Col span={textColSpan}>
                            <h3>Новый пароль</h3>
                        </Col>
                        <Col span={inputColSpan}>
                            <Input.Password
                                placeholder='********'
                            />
                        </Col>
                    </Row>
                    <Row gutter={rowGutterMain} type="flex">
                        <Col offset={19} span={5}>
                            <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                                Подтвердить
                            </Button>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }

}

export default ChangePasswordForm
