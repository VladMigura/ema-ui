import { Card, Col, Input, Button, Select, Row, Table } from 'antd';
import RenderUtil from '../util/RenderUtil'
import cardStyle from '../styles/card.css'
import mainStyle from '../styles/main.css'

const { Option } = Select;

const rowGutterMain = [0, 32];
const textColSpan = 8
const inputColSpan = 16;
const title = 'Create project skeleton'

class TaskComponent extends React.Component {

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
                                    defaultValue='Create project skeleton'
                                    disabled
                                />
                            </Col>
                        </Row>
                        <Row gutter={rowGutterMain} type="flex">
                            <Col span={textColSpan}>
                                <h3>Описание</h3>
                            </Col>
                            <Col span={inputColSpan}>
                                <Input.TextArea rows={4}
                                    defaultValue='Create project skeleton Description'
                                    disabled
                                />
                            </Col>
                        </Row>
                        <Row gutter={rowGutterMain} type="flex">
                            <Col span={textColSpan}>
                                <h3>Тип</h3>
                            </Col>
                            <Col span={inputColSpan}>
                                <Select
                                    defaultValue='DESIGN'
                                    style={{ width: '100%' }}
                                    disabled={true}>
                                </Select>
                            </Col>
                        </Row>
                        <Row gutter={rowGutterMain} type="flex">
                            <Col span={textColSpan}>
                                <h3>Приоритет</h3>
                            </Col>
                            <Col span={inputColSpan}>
                                <Select
                                    defaultValue='HIGH'
                                    style={{ width: '100%' }}
                                    disabled={true}>
                                </Select>
                            </Col>
                        </Row>
                        <Row gutter={rowGutterMain} type="flex">
                            <Col span={textColSpan}>
                                <h3>Статус</h3>
                            </Col>
                            <Col span={inputColSpan}>
                                <Select
                                    defaultValue='IN_PROGRESS'
                                    style={{ width: '100%' }}
                                    disabled={true}>
                                </Select>
                            </Col>
                        </Row>
                        <Row gutter={rowGutterMain} type="flex">
                            <Col span={textColSpan}>
                                <h3>Проект</h3>
                            </Col>
                            <Col span={inputColSpan}>
                                <Input
                                    defaultValue='Management Tool application'
                                    disabled
                                />
                            </Col>
                        </Row>
                        <Row gutter={rowGutterMain} type="flex">
                            <Col span={textColSpan}>
                                <h3>Владелец</h3>
                            </Col>
                            <Col span={inputColSpan}>
                                <Select
                                    defaultValue='Alexei Stadnik'
                                    style={{ width: '100%' }}
                                    disabled={true}>
                                </Select>
                            </Col>
                        </Row>
                        <Row gutter={rowGutterMain} type="flex">
                            <Col span={textColSpan}>
                                <h3>Оценка (часы)</h3>
                            </Col>
                            <Col span={inputColSpan}>
                                <Input
                                    defaultValue='16'
                                    disabled
                                />
                            </Col>
                        </Row>
                        <Row gutter={rowGutterMain} type="flex">
                            <Col span={textColSpan}>
                                <h3>Оценка (очки)</h3>
                            </Col>
                            <Col span={inputColSpan}>
                                <Input
                                    defaultValue='3'
                                    disabled
                                />
                            </Col>
                        </Row>
                        <Row gutter={rowGutterMain} type="flex">
                            <Col span={textColSpan}>
                                <h3>Создатель</h3>
                            </Col>
                            <Col span={inputColSpan}>
                                <Input
                                    defaultValue='Helen Ulasevich'
                                    disabled
                                />
                            </Col>
                        </Row>
                        <Row gutter={rowGutterMain} type="flex">
                            <Col offset={15} span={3}>
                                <Button
                                    className='Save'
                                    type='primary'
                                    shape='round'
                                    icon='check'
                                >
                                </Button>
                            </Col>
                            <Col span={3}>
                                <Button
                                    className='Edit'
                                    type='primary'
                                    shape='round'
                                    icon='edit'
                                >
                                </Button>
                            </Col>
                            <Col span={3}>
                                <Button
                                    className='Danger'
                                    type='primary'
                                    shape='round'
                                    icon='close'
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

export default TaskComponent
