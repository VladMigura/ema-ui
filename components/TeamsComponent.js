import { Button, Col, Row, Table } from 'antd'
import { Pagination } from 'antd';
import RenderUtil from '../util/RenderUtil';

const description = {
    name: 'Команды',
    rowKey: RenderUtil.uuidV4,
    columns: [
        {
            title: 'Название',
            dataIndex: 'name',
            fixed: 'left',
            width: 300,
            align: 'center',
            ...RenderUtil.renderWithTextSearch('name'),
        },
        {
            title: 'Описание',
            dataIndex: 'description',
            align: 'center',
            render: RenderUtil.defaultRender,
        },
        {
            title: 'Время создания',
            dataIndex: 'createdAt',
            fixed: 'right',
            width: 300,
            align: 'center',
            render: RenderUtil.defaultRender,
        },
    ]
}

const dataSource = [
    {
        name: 'Java Department',
        description: 'Java Department Description',
        createdAt: '2020-05-11 12:20:20.672597'
    },
    {
        name: 'IOS Department',
        description: 'IOS Department Description',
        createdAt: '2020-05-11 12:21:05.358703'
    },
    {
        name: 'Android Department',
        description: 'Android Department Description',
        createdAt: '2020-05-11 12:21:43.253702'
    },
    {
        name: 'Management Department',
        description: 'Management Department Description',
        createdAt: '2020-05-11 12:22:15.239572'
    },
    {
        name: 'DevOps Department',
        description: 'DevOps Department Description',
        createdAt: '2020-05-11 12:22:54.952739'
    }
]

const rowGutterMain = [16, 64];

class ProjectsComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Row gutter={rowGutterMain}>
                    <Col span={1}>
                        <Button
                            type='primary'
                            shape='round'
                            icon='sync'
                        >
                        </Button>
                    </Col>
                    <Col span={1}>
                        <Button
                            type='primary'
                            shape='round'
                            icon='plus'
                        >
                        </Button>
                    </Col>
                    <Col span={16}>
                        <Pagination defaultCurrent={1} total={5}></Pagination>
                    </Col>
                </Row>
                <Row gutter={rowGutterMain}>
                    <Col>
                        <Table
                            rowKey={description.rowKey}
                            title={() => <h2>{description.name}</h2>}
                            columns={description.columns}
                            dataSource={dataSource}
                            bordered
                            pagination={false}
                        />
                    </Col>
                </Row>
            </div>
        );
    }

}

export default ProjectsComponent
