import React, {useState} from "react";
import {Layout, Menu} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

const {Header, Sider, Content} = Layout;

const GCHeader = (props) => {
    const [collapsed, toggle] = useState(false);

    return (
        <Layout style={{height: '100vh'}}>
            <Sider collapsible
                   collapsed={collapsed}>
                <div className="logo"/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={window.location.pathname}>
                    <Menu.Item key="about">
                        <a href="/about">
                            <UserOutlined/>
                            <span>About</span>
                        </a>
                    </Menu.Item>
                    <Menu.Item key="home">
                        <a href="/home">
                            <VideoCameraOutlined/>
                            <span>Home</span>
                        </a>
                    </Menu.Item>
                    <Menu.Item key="courses">
                        <a href="/courses">
                            <UploadOutlined/>
                            <span>Courses</span>
                        </a>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{padding: 0}}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => toggle(!collapsed),
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {props.content}
                </Content>
            </Layout>
        </Layout>
    );
};

export default GCHeader;
