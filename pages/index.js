import { Button, Col, Layout, Tabs, Row } from 'antd'
import Head from 'next/head'
import mainStyle from '../styles/main.css'
import PostsComponent from '../components/PostsComponent'
import LoginForm from '../components/LoginForm'
import PostComponent from '../components/PostComponent'
import ChangePasswordForm from '../components/ChangePasswordForm'
import UsersComponent from '../components/UsersComponent'
import UserComponent from '../components/UserComponent'
import NewUserComponent from '../components/NewUserComponent'
import NewPostComponent from '../components/NewPostComponent'
import ProjectsComponent from '../components/ProjectsComponent'
import ProjectComponent from '../components/ProjectComponent'
import NewProjectComponent from '../components/NewProjectComponent'
import TeamsComponent from '../components/TeamsComponent'
import TeamComponent from '../components/TeamComponent'
import NewTeamComponent from '../components/NewTeamComponent'
import TasksComponent from '../components/TasksComponent'
import TaskComponent from '../components/TaskComponent'
import NewTaskComponent from '../components/NewTaskComponent'
import NotificationUtil from '../util/NotificationUtil'

const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

const rowGutterMain = [16, 64];

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: 'vladmigura99@gmail.com'
      }
    }
  }

  render() {
    return (
      <div>
        <Head>
          <link rel="shortcut icon" href="./static/favicon.ico" type="image/x-icon" />
        </Head>
        <Layout>
          <Header className='Header'>
            <div align={'right'}>
              <div className='Inline'><h4 style={{ color: 'white' }}>{this.state.user.email == '' ? '' : ''.concat(this.state.user.email)}</h4></div>
              <div className='Inline'><Button>Изменить пароль</Button></div>
              <div className='Inline'><Button>Выйти</Button></div>
            </div>
          </Header>
          <Content className='Content'>
            <Tabs
              defaultActiveKey="feed"
              size="large"
              animated={false}>
              <TabPane tab="Новостная лента" key="feed">
                <Row gutter={rowGutterMain}>
                  <Col>
                    <PostsComponent />
                  </Col>
                </Row>
                <Row gutter={rowGutterMain}>
                  <Col>
                    <PostComponent />
                  </Col>
                </Row>
                <Row gutter={rowGutterMain}>
                  <Col>
                    <NewPostComponent />
                  </Col>
                </Row>
                <Row gutter={rowGutterMain}>
                  <Col>
                    <LoginForm />
                  </Col>
                </Row>
                <Row gutter={rowGutterMain}>
                  <Col>
                    <ChangePasswordForm />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Пользователи" key="users">
                <Row gutter={rowGutterMain}>
                  <Col>
                    <UsersComponent />
                  </Col>
                </Row>
                <Row gutter={rowGutterMain}>
                  <Col>
                    <UserComponent />
                  </Col>
                </Row>
                <Row gutter={rowGutterMain}>
                  <Col>
                    <NewUserComponent />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Проекты" key="projects">
                <Row gutter={rowGutterMain}>
                  <Col>
                    <ProjectsComponent />
                  </Col>
                </Row>
                <Row gutter={rowGutterMain}>
                  <Col>
                    <ProjectComponent />
                  </Col>
                </Row>
                <Row gutter={rowGutterMain}>
                  <Col>
                    <NewProjectComponent />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Команды" key="teams">
                <Row gutter={rowGutterMain}>
                  <Col>
                    <TeamsComponent />
                  </Col>
                </Row>
                <Row gutter={rowGutterMain}>
                  <Col>
                    <TeamComponent />
                  </Col>
                </Row>
                <Row gutter={rowGutterMain}>
                  <Col>
                    <NewTeamComponent />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Задачи" key="tasks">
                <Row gutter={rowGutterMain}>
                  <Col>
                    <TasksComponent />
                  </Col>
                </Row>
                <Row gutter={rowGutterMain}>
                  <Col>
                    <TaskComponent />
                  </Col>
                </Row>
                <Row gutter={rowGutterMain}>
                  <Col>
                    <NewTaskComponent />
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </Content>
          <Footer className='Footer'>
          </Footer>
        </Layout>
      </div>
    );
  }

}

export default IndexPage;
