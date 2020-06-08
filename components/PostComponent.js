import { Card, Col, Comment, Input, Button, Row } from 'antd';
const { TextArea } = Input;
import cardStyle from '../styles/card.css'
import mainStyle from '../styles/main.css'

const title = 'Подводные камни тестирования Kafka Streams'

const rowGutterMain = [16, 64];

class PostComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Card className='Card' bordered={true} size="large" title={title} style={{ width: 600 }}>
                    <Row gutter={rowGutterMain}>
                        <Col>
                            <Comment
                                author={<a>Vladislav Migura</a>}
                                content={
                                    <div>
                                        <p>
                                            Kafka, в отличие от реляционных баз данных, является молодой технологией, и потому инструментарий для автоматического тестирования
                                            приложений, созданных на базе этой платформы, был доступен разработчикам с самого начала. Хотя на первый взгляд с этим инструментарием
                                            всё обстоит очень хорошо — бери и пиши тесты! — на практике приходится сталкиваться с трудностями, о которых хочу поведать в этом посте.
                                        </p>
                                        <h3>
                                            TopologyTestDriver
                                        </h3>
                                        <p>
                                            Основным инструментом тестирования Kafka Streams является TopologyTestDriver. Его API подвергался значительным усовершенствованиям и к
                                            версии 2.4 стал очень удобным и приятным в использовании.
                                        </p>
                                    </div>
                                }
                                datetime='09-05-2020'
                            />
                        </Col>
                    </Row>
                    <Row gutter={rowGutterMain}>
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
                </Card>
            </div>
        )
    }

}

export default PostComponent
