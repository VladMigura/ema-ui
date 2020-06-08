import { Button, Col, DatePicker, Row, Table } from 'antd'
import { Pagination } from 'antd';
import RenderUtil from '../util/RenderUtil';

const description = {
    name: 'Задачи',
    rowKey: RenderUtil.uuidV4,
    columns: [
        {
            title: 'Название',
            dataIndex: 'title',
            fixed: 'left',
            width: 300,
            align: 'center',
            ...RenderUtil.renderWithTextSearch('name'),
        },
        {
            title: 'Тип',
            dataIndex: 'type',
            width: 200,
            align: 'center',
            ...RenderUtil.renderWithTextSearch('type'),
        },
        {
            title: 'Приоритет',
            dataIndex: 'priority',
            width: 150,
            align: 'center',
            ...RenderUtil.renderWithTextSearch('priority'),
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            width: 150,
            align: 'center',
            ...RenderUtil.renderWithTextSearch('status'),
        },
        {
            title: 'Проект',
            dataIndex: 'projectName',
            width: 300,
            align: 'center',
            ...RenderUtil.renderWithTextSearch('projectName'),
        },
        {
            title: 'Владелец',
            dataIndex: 'devOwner',
            width: 300,
            align: 'center',
            ...RenderUtil.renderWithTextSearch('devOwner'),
        },
        {
            title: 'Оценка (часы)',
            dataIndex: 'estimationInHours',
            width: 200,
            align: 'center',
            render: RenderUtil.defaultRender,
            sorter: (a, b) => a.estimationInHours - b.estimationInHours,
        },
        {
            title: 'Оценка (очки)',
            dataIndex: 'estimationInPoints',
            width: 200,
            align: 'center',
            render: RenderUtil.defaultRender,
            sorter: (a, b) => a.estimationInPoints - b.estimationInPoints,
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
        title: 'Create project skeleton',
        type: 'DESIGN',
        priority: 'HIGH',
        status: 'IN_PROGRESS',
        projectName: 'Management Tool application',
        devOwner: 'Alexei Stadnik',
        estimationInHours: '16',
        estimationInPoints: '3',
        createdAt: '2020-05-10 16:40:57.209703',
    },
    {
        title: 'Implement Swagger Codegen',
        type: 'IMPLEMENTATION',
        priority: 'MEDIUM',
        status: 'PENDING',
        projectName: 'Management Tool application',
        devOwner: 'Alexei Stadnik',
        estimationInHours: '12',
        estimationInPoints: '3',
        createdAt: '2020-05-10 16:41:12.532702',
    },
    {
        title: 'Fix the defect with Google Maps',
        type: 'FIX',
        priority: 'HIGH',
        status: 'IN_PROGRESS',
        projectName: 'Fernwayer',
        devOwner: 'Vadim Mitin',
        estimationInHours: '4',
        estimationInPoints: '1',
        createdAt: '2020-05-10 16:42:39.359548',
    },
    {
        title: 'Investigate AWS cost',
        type: 'INVESTIGATION',
        priority: 'MEDIUM',
        status: 'IN_PROGRESS',
        projectName: 'Fernwayer',
        devOwner: 'Kirill Stativko',
        estimationInHours: '4',
        estimationInPoints: '3',
        createdAt: '2020-05-10 16:43:01.447298',
    },
    {
        title: 'Integrate BrainTree',
        type: 'FEATURE',
        priority: 'HIGH',
        status: 'COMPLETED',
        projectName: 'Fernwayer',
        devOwner: 'Alexandra Galay',
        estimationInHours: '16',
        estimationInPoints: '5',
        createdAt: '2020-05-10 16:45:23.629468',
    },
]

const rowGutterMain = [16, 64];

class ProjectsComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Row gutter={rowGutterMain} type='flex'>
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
                <Row gutter={rowGutterMain} style={{ width: '40%' }} type='flex'>
                    <Col span={12}>
                        <DatePicker
                            showTime
                            placeholder='Начальная дата'
                            style={{ width: '100%' }}
                        />
                    </Col>
                    <Col span={12}>
                        <DatePicker
                            showTime
                            placeholder='Конечная дата'
                            style={{ width: '100%' }}
                        />
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
                            scroll={{ x: 2100 }}
                        />
                    </Col>
                </Row>
            </div>
        );
    }

}

export default ProjectsComponent
