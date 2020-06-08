import { Card, Col, Input, Button, Select, Row, Table } from 'antd';
import RenderUtil from '../util/RenderUtil'
import cardStyle from '../styles/card.css'
import mainStyle from '../styles/main.css'

const { Option } = Select;

const rowGutterMain = [0, 32];
const textColSpan = 8
const inputColSpan = 16;
const title = 'Alexei Stadnik'

const projects = {
    name: 'Проекты',
    rowKey: RenderUtil.uuidV4,
    columns: [
        {
            dataIndex: 'name',
            width: 300,
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

const teams = {
    name: 'Команды',
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

const projectsDataSource = [
    {
        name: 'Management Tool application'
    },
    {
        name: 'Data flow plugin'
    },
]

const teamsDataSource = [
    {
        name: 'Java Department'
    },
]

class UserComponent extends React.Component {

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
                                <h3>Имя</h3>
                            </Col>
                            <Col span={inputColSpan}>
                                <Input
                                    defaultValue='Alexei'
                                    disabled
                                />
                            </Col>
                        </Row>
                        <Row gutter={rowGutterMain} type="flex">
                            <Col span={textColSpan}>
                                <h3>Фамилия</h3>
                            </Col>
                            <Col span={inputColSpan}>
                                <Input
                                    defaultValue='Stadnik'
                                    disabled
                                />
                            </Col>
                        </Row>
                        <Row gutter={rowGutterMain} type="flex">
                            <Col span={textColSpan}>
                                <h3>Почта</h3>
                            </Col>
                            <Col span={inputColSpan}>
                                <Input
                                    defaultValue='alexei.stadnik@gmail.com'
                                    disabled
                                />
                            </Col>
                        </Row>
                        <Row gutter={rowGutterMain} type="flex">
                            <Col span={textColSpan}>
                                <h3>Номер телефона</h3>
                            </Col>
                            <Col span={inputColSpan}>
                                <Input
                                    defaultValue=''
                                    disabled
                                />
                            </Col>
                        </Row>
                        <Row gutter={rowGutterMain} type="flex">
                            <Col span={textColSpan}>
                                <h3>Должность</h3>
                            </Col>
                            <Col span={inputColSpan}>
                                <Input
                                    defaultValue='Senior Java Developer'
                                    disabled
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
                                    style={{ width: '100%' }}
                                    disabled={true}>
                                </Select>
                            </Col>
                        </Row>
                        <Row gutter={rowGutterMain} type="flex">
                            <Col span={24}>
                                <Table
                                    rowKey={projects.rowKey}
                                    title={() => <h2>{projects.name}</h2>}
                                    columns={projects.columns}
                                    dataSource={projectsDataSource}
                                    pagination={false}
                                />
                            </Col>
                        </Row>
                        <Row gutter={rowGutterMain} type="flex">
                            <Col span={24}>
                                <Table
                                    rowKey={teams.rowKey}
                                    title={() => <h2>{teams.name}</h2>}
                                    columns={teams.columns}
                                    dataSource={teamsDataSource}
                                    pagination={false}
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

export default UserComponent
