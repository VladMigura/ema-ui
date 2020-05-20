import { Button, Layout, Tabs } from 'antd'
import Head from 'next/head'
import mainStyle from '../styles/main.css'

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
              <div className='Inline'><h4 style={{ color: 'white' }}>{this.state.user.email == '' ? '' : 'Hello '.concat(this.state.user.email)}</h4></div>
              <div className='Inline'><Button>Change Password</Button></div>
              <div className='Inline'><Button>Sign Out</Button></div>
            </div>
          </Header>
          <Content className='Content'>
            <Tabs
              defaultActiveKey="feed"
              size="large"
              animated={false}>
              <TabPane tab="Feed" key="feed">
              </TabPane>
              <TabPane tab="Users" key="users">
              </TabPane>
              <TabPane tab="Projects" key="projects">                
              </TabPane>
              <TabPane tab="Teams" key="teams">
              </TabPane>
              <TabPane tab="Tasks" key="teams">
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
