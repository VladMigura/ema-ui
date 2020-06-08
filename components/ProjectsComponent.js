import { Button, Col, Row, Table } from 'antd'
import { Pagination } from 'antd';
import RenderUtil from '../util/RenderUtil';

const description = {
    name: 'Проекты',
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
            title: 'Заказчик',
            dataIndex: 'customerName',
            align: 'center',
            ...RenderUtil.renderWithTextSearch('customerName'),
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            align: 'center',
            render: RenderUtil.defaultRender,
            sorter: (a, b) => a.status - b.status,
        },
        {
            title: 'Оценка (недели)',
            dataIndex: 'estimationInWeeks',
            align: 'center',
            render: RenderUtil.defaultRender,
            sorter: (a, b) => a.estimationInWeeks - b.estimationInWeeks,
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
        name: 'Management Tool application',
        customerName: 'Internal',
        status: 'IN_PROGRESS',
        estimationInWeeks: '24',
        createdAt: '2020-05-10 15:37:31.161987'
    },
    {
        name: 'Data flow plugin',
        customerName: 'Internal',
        status: 'SUPPORT',
        estimationInWeeks: '4',
        createdAt: '2020-05-05 16:37:31.658276'
    },
    {
        name: 'Payment service',
        customerName: 'Cox Automotive',
        status: 'PENDING',
        estimationInWeeks: '32',
        createdAt: '2020-05-01 15:32:34.874982'
    },
    {
        name: 'Marketplace',
        customerName: 'SoftIndustry',
        status: 'COMPLETED',
        estimationInWeeks: '10',
        createdAt: '2020-05-01 10:23:20.256983'
    },
    {
        name: 'Fernwayer',
        customerName: 'Jeff Parker',
        status: 'IN_PROGRESS',
        estimationInWeeks: '12',
        createdAt: '2020-04-20 17:40:24.247962'
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
