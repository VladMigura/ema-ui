import { Card, Col, Input, Button, Row } from 'antd';
const { TextArea } = Input;
import cardStyle from '../styles/card.css'
import mainStyle from '../styles/main.css'

const rowGutterMain = [0, 32];
const textColSpan = 8
const inputColSpan = 16;
const title = 'Новая запись'

class NewPostComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Card className='Card' bordered={true} size="large" title={title} style={{ width: 600 }}>
                    <Row gutter={rowGutterMain} type="flex">
                        <Col span={textColSpan}>
                            <h3>Заголовок</h3>
                        </Col>
                        <Col span={inputColSpan}>
                            <Input
                                placeholder='Заголовок'
                            />
                        </Col>
                    </Row>
                    <Row gutter={rowGutterMain} type="flex">
                        <Col span={textColSpan}>
                            <h3>Описание</h3>
                        </Col>
                        <Col span={inputColSpan}>
                            <TextArea
                                placeholder='...'
                                rows={5}
                            />
                        </Col>
                    </Row>
                    <Row gutter={rowGutterMain} type="flex">
                        <Col offset={20} span={4}>
                            <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                                Создать
                            </Button>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }

}

export default NewPostComponent
