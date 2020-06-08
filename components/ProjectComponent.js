import { Card, Col, Input, Button, Select, Row, Table } from 'antd';
import RenderUtil from '../util/RenderUtil'
import cardStyle from '../styles/card.css'
import mainStyle from '../styles/main.css'

const { Option } = Select;

const rowGutterMain = [0, 32];
const textColSpan = 8
const inputColSpan = 16;
const title = 'Management Tool application'

const users = {
    name: 'Участники',
    rowKey: RenderUtil.uuidV4,
    columns: [
        {
            dataIndex: 'name',
            width: 500,
            align: 'center',
            render: RenderUtil.boldRender,
        },
        {
            dataIndex: '',
            fixed: 'right',
            width: 150,
            align: 'center',
            render: (text, record, index) => {
                return <Button
                    className='Danger'
                    type='primary'
                    shape='round'
                    icon='close'
                    disabled={true}
                >
                </Button>
            }

        }
    ]
}

const usersDataSource = [
    {
        name: 'Alexei Stadnik'
    },
    {
        name: 'Helen Ulasevich'
    },
    {
        name: 'Gil Edelman'
    }
]

class ProjectComponent extends React.Component {

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
                                    defaultValue='Management Tool application'
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
                                    defaultValue='Management Tool application'
                                    disabled
                                />
                            </Col>
                        </Row>
                        <Row gutter={rowGutterMain} type="flex">
                            <Col span={textColSpan}>
                                <h3>Заказчик</h3>
                            </Col>
                            <Col span={inputColSpan}>
                                <Input
                                    defaultValue='Internal'
                                    disabled
                                />
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
                                <h3>Оценка (недели)</h3>
                            </Col>
                            <Col span={inputColSpan}>
                                <Input
                                    defaultValue='24'
                                    disabled
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
                                    style={{ width: '100%' }}
                                    disabled={true}>
                                </Select>
                            </Col>
                        </Row>
                        <Row gutter={rowGutterMain} type="flex">
                            <Col span={textColSpan}>
                                <h3>Scrum-мастер</h3>
                            </Col>
                            <Col span={inputColSpan}>
                                <Select
                                    defaultValue='Gil Edelman'
                                    style={{ width: '100%' }}
                                    disabled={true}>
                                </Select>
                            </Col>
                        </Row>
                        <Row gutter={rowGutterMain} type="flex">
                            <Col span={24}>
                                <Table
                                    rowKey={users.rowKey}
                                    title={() => <h2>{users.name}</h2>}
                                    columns={users.columns}
                                    dataSource={usersDataSource}
                                    pagination={false}
                                />
                            </Col>
                        </Row>
                        <Row gutter={rowGutterMain} type="flex">
                            <Col span={inputColSpan}>
                                <Select
                                    defaultValue='Vadim Mitin'
                                    style={{ width: '100%' }}
                                    disabled={true}>
                                </Select>
                            </Col>
                            <Col offset={5} span={2}>
                                <Button
                                    className='Save'
                                    type='primary'
                                    shape='round'
                                    icon='plus'
                                    disabled={true}
                                >
                                </Button>
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

export default ProjectComponent
