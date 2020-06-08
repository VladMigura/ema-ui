import { Button, Col, Table, Row } from 'antd'
import { Pagination } from 'antd';

import cardStyle from '../styles/card.css'
import mainStyle from '../styles/main.css'
import RenderUtil from '../util/RenderUtil'

const rowGutterMain = [16, 64];

const description = {
    name: 'Пользователи',
    rowKey: RenderUtil.uuidV4,
    columns: [
        {
            title: 'Почта',
            dataIndex: 'email',
            fixed: 'left',
            width: 300,
            align: 'center',
            ...RenderUtil.renderWithTextSearch('firstName'),
        },
        {
            title: 'Имя',
            dataIndex: 'firstName',
            width: 200,
            align: 'center',
            ...RenderUtil.renderWithTextSearch('firstName'),
        },
        {
            title: 'Фамилия',
            dataIndex: 'lastName',
            width: 200,
            align: 'center',
            ...RenderUtil.renderWithTextSearch('lastName'),
        },
        {
            title: 'Номер телефона',
            dataIndex: 'phoneNumber',
            width: 300,
            align: 'center',
            render: RenderUtil.defaultRender,
        },
        {
            title: 'Должность',
            dataIndex: 'title',
            width: 300,
            align: 'center',
            render: RenderUtil.defaultRender,
        },
        {
            title: 'Роль',
            dataIndex: 'role',
            width: 200,
            align: 'center',
            render: RenderUtil.defaultRender,
        },
        {
            title: 'Время регистрации',
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
        email: 'vladmigura99@gmail.com',
        firstName: 'Vladislav',
        lastName: 'Migura',
        phoneNumber: '+375298785789',
        title: 'CEO',
        role: 'ADMIN',
        createdAt: '2020-05-10 15:37:23.127997'
    },
    {
        email: 'alexei.stadnik@gmail.com',
        firstName: 'Alexei',
        lastName: 'Stadnik',
        phoneNumber: '',
        title: 'Senior Java Developer',
        role: 'DEVELOPER',
        createdAt: '2020-05-10 16:13:22.432521'
    },
    {
        email: 'helen.ulasevich@gmail.com',
        firstName: 'Helen',
        lastName: 'Ulasevich',
        phoneNumber: '+375256784378',
        title: 'Project Manager',
        role: 'MANAGER',
        createdAt: '2020-05-10 16:14:32.876345'
    },
    {
        email: 'vadim.mitin@gmail.com',
        firstName: 'Vadim',
        lastName: 'Mitin',
        phoneNumber: '+375293456774',
        title: 'Middle Java Developer',
        role: 'DEVELOPER',
        createdAt: '2020-05-10 16:17:40.123235'
    },
    {
        email: 'kirill.stativko@gmail.com',
        firstName: 'Kirill',
        lastName: 'Stativko',
        phoneNumber: '',
        title: 'Senior DevOps',
        role: 'DEVELOPER',
        createdAt: '2020-05-10 16:20:12.982458'
    },
    {
        email: 'gil.edelman@gmail.com',
        firstName: 'Gil',
        lastName: 'Edelman',
        phoneNumber: '+143067498143',
        title: 'Senior Scrum Master',
        role: 'SCRUM_MASTER',
        createdAt: '2020-05-10 16:26:43.784093'
    },
    {
        email: 'sasha.galay@gmail.com',
        firstName: 'Alexandra',
        lastName: 'Galay',
        phoneNumber: '+375447683475',
        title: 'Middle Java Developer',
        role: 'DEVELOPER',
        createdAt: '2020-05-10 16:27:44.567234'
    },
    {
        email: 'kirill.budevich@gmail.com',
        firstName: 'Kirill',
        lastName: 'Budevich',
        phoneNumber: '',
        title: 'Middle Frontend Developer',
        role: 'DEVELOPER',
        createdAt: '2020-05-10 16:30:49.234653'
    },
    {
        email: 'arina.senchuk@gmail.com',
        firstName: 'Arina',
        lastName: 'Senchuk',
        phoneNumber: '+375296789456',
        title: 'Middle Frontend Developer',
        role: 'DEVELOPER',
        createdAt: '2020-05-10 16:35:30.987976'
    },
    {
        email: 'pavel.khankevich@gmail.com',
        firstName: 'Pavel',
        lastName: 'Khankevich',
        phoneNumber: '',
        title: 'Lead Software Engineer',
        role: 'DEVELOPER',
        createdAt: '2020-05-10 16:36:24.231445'
    },
]

class UsersComponent extends React.Component {

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
                    <Col span={14}>
                        <Pagination defaultCurrent={1} total={20}></Pagination>
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
                            scroll={{ x: 1800 }}
                        />
                    </Col>
                </Row>
            </div>
        )
    }

}

export default UsersComponent
