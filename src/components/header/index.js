import React from 'react';
import { Menu } from 'antd';

function gq_Menu() {
    return (
        <Menu className="gq_header" theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2">关于我们</Menu.Item>
            <Menu.Item key="3">最新资讯</Menu.Item>
            <Menu.Item key="4">考试认证</Menu.Item>
            <Menu.Item key="5">协会活动</Menu.Item>
            <Menu.Item key="6">会员服务</Menu.Item>
            <Menu.Item key="7">资料下载</Menu.Item>
            <Menu.Item key="8">联系我们</Menu.Item>
        </Menu>
    )
}
export default gq_Menu