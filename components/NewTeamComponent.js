import { Card, Col, Input, Button, Select, Row, Table } from 'antd';
import RenderUtil from '../util/RenderUtil'
import cardStyle from '../styles/card.css'
import mainStyle from '../styles/main.css'

const { Option } = Select;

const rowGutterMain = [0, 32];
const textColSpan = 8
const inputColSpan = 16;
const title = 'Новая команда'

class NewTeamComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Card className='Card' bordered={true} size="large" title={title} style={{ width: 600 }}>
                    <div>
                        <Row gutter={rowGutterMain} type="flex">
                            <Col span={textColSpan}>
                                <h3>Название</h3>
                            </Col>
                            <Col span={inputColSpan}>
                                <Input
                                    placeholder='Название'
                                />
                            </Col>
                        </Row>
                        <Row gutter={rowGutterMain} type="flex">
                            <Col span={textColSpan}>
                                <h3>Описание</h3>
                            </Col>
                            <Col span={inputColSpan}>
                                <Input.TextArea rows={4}
                                    placeholder='...'
                                />
                            </Col>
                        </Row>
                        <Row gutter={rowGutterMain} type="flex">
                            <Col span={textColSpan}>
                                <h3>Менеджер</h3>
                            </Col>
                            <Col span={inputColSpan}>
                                <Select
                                    defaultValue='Helen Ulasevich'
                                    style={{ width: '100%' }}>
                                </Select>
                            </Col>
                        </Row>
                        <Row gutter={rowGutterMain} type="flex">
                            <Col offset={22} span={2}>
                                <Button
                                    className='Save'
                                    type='primary'
                                    shape='round'
                                    icon='check'
                                >
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </div>
        )
    }

}

export default NewTeamComponent
