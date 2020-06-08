import { Card, Col, Input, Button, Select, Row } from 'antd';
import cardStyle from '../styles/card.css'
import mainStyle from '../styles/main.css'

const { Option } = Select;

const rowGutterMain = [0, 32];
const textColSpan = 8
const inputColSpan = 16;
const title = 'Новый пользователь'

class NewUserComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Card className='Card' bordered={true} size="large" title={title} style={{ width: 600 }}>
                    <Row gutter={rowGutterMain} type="flex">
                        <Col span={textColSpan}>
                            <h3>Имя</h3>
                        </Col>
                        <Col span={inputColSpan}>
                            <Input
                                placeholder='Имя'
                            />
                        </Col>
                    </Row>
                    <Row gutter={rowGutterMain} type="flex">
                        <Col span={textColSpan}>
                            <h3>Фамилия</h3>
                        </Col>
                        <Col span={inputColSpan}>
                            <Input
                                placeholder='Фамилия'
                            />
                        </Col>
                    </Row>
                    <Row gutter={rowGutterMain} type="flex">
                        <Col span={textColSpan}>
                            <h3>Почта</h3>
                        </Col>
                        <Col span={inputColSpan}>
                            <Input
                                placeholder='Почта'
                            />
                        </Col>
                    </Row>
                    <Row gutter={rowGutterMain} type="flex">
                        <Col span={textColSpan}>
                            <h3>Номер телефона</h3>
                        </Col>
                        <Col span={inputColSpan}>
                            <Input
                                placeholder='Номер телефона'
                            />
                        </Col>
                    </Row>
                    <Row gutter={rowGutterMain} type="flex">
                        <Col span={textColSpan}>
                            <h3>Должность</h3>
                        </Col>
                        <Col span={inputColSpan}>
                            <Input
                                placeholder='Должность'
                            />
                        </Col>
                    </Row>
                    <Row gutter={rowGutterMain} type="flex">
                        <Col span={textColSpan}>
                            <h3>Роль</h3>
                        </Col>
                        <Col span={inputColSpan}>
                            <Select
                                defaultValue='DEVELOPER'
                                style={{ width: '100%' }}>
                                <Option value={'ADMIN'}>{'ADMIN'}</Option>
                                <Option value={'DEVELOPER'}>{'DEVELOPER'}</Option>
                                <Option value={'MANAGER'}>{'MANAGER'}</Option>
                                <Option value={'SCRUM_MASTER'}>{'SCRUM_MASTER'}</Option>
                            </Select>
                        </Col>
                    </Row>
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
                        <Col offset={17} span={7}>
                            <Button type="primary" htmlType="submit">
                                Зарегистрировать
                            </Button>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }

}

export default NewUserComponent
