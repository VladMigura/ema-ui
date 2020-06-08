import { Button, Col, List, Row } from 'antd'
import { Pagination } from 'antd';
import NotificationUtil from '../util/NotificationUtil'

const dataSource = [
    {
        title: '10 Best Practices for Improving Your CSS',
        description: 'CSS may seem like a pretty straightforward language, on that’s hard to make mistakes in. You just add your rules to style your website and you’re done, right? With...',
    },
    {
        title: 'Why I think GCP is better than AWS',
        description: 'I originally posted this on Reddit so I could get a good sample of opinions from other engineers to see how they compared to mine before posting and expanding here...'
    },
    {
        title: 'How to Write Log Files That Save You Hours of Time',
        description: 'I need to rant a bit here: The program I maintain at work has many cute quirks. “An error has occurred” is not one of them. This is not just how that error message...'
    },
    {
        title: 'Новости компании. 10.05.2020',
        description: 'За эту неделю произошли глобальные изменения в процессе развертывания наших проектов. Разработчики из отдела DevOps настроили платформу Jenkins и конвейеры для всех...'
    },
    {
        title: 'How to Automate Your Emails With Python',
        description: 'Automating daily tasks with Python is easy. With a combination of APIs and easy-to-understand libraries, you can easily set up systems that scrape websites, send emails...'
    },
    {
        title: 'Эффективное управление транзакциями в Spring',
        description: 'Большую часть времени разработчики не придают значения управлению транзакциями. В результате либо большую часть кода приходится переписывать позже, либо разработчик реализует...'
    },
    {
        title: 'Митап «Безопасная работа с облачными сервисами»',
        description: 'Продолжаем серию безопасных и бесконтактных митапов Wrike TechClub. На этот раз поговорим о безопасности облачных решений и сервисов. Коснемся вопросов защиты и контроля данных...'
    },
    {
        title: 'Unit тесты для RxSwift кода',
        description: 'Написание реактивных приложений с помощью RxSwift концептуально отличается от написания приложений "обычным путем". Оно отличается в том смысле, что объекты в вашем...'
    },
    {
        title: 'Apple обновила MacBook Pro 13',
        description: 'Компания Apple представила обновлённый 13-дюймовый MacBook Pro. От предыдущего он отличается клавиатурой (отказались от проблемной Butterfly Keyboard, как ранее уже сделали...'
    },
    {
        title: 'Подводные камни тестирования Kafka Streams',
        description: 'Kafka, в отличие от реляционных баз данных, является молодой технологией, и потому инструментарий для автоматического тестирования приложений, созданных на базе этой платформы...'
    }
]

const rowGutterMain = [16, 64];

class PostsComponent extends React.Component {

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
                            onClick={() => {
                                NotificationUtil.showNotification('UsersApiController', 'The user has been created successfully.', true)
                            }
                            }
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
                        <Pagination defaultCurrent={1} total={20}></Pagination>
                    </Col>
                </Row>
                <Row gutter={rowGutterMain}>
                    <Col>
                        <List
                            itemLayout="horizontal"
                            dataSource={dataSource}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={item.title}
                                        description={item.description}
                                    />
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </div>
        );
    }

}

export default PostsComponent
