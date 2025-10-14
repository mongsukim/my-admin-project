import { Layout, Menu, Avatar, Dropdown, Space } from 'antd'
import {
    DashboardOutlined,
    UserOutlined,
    SettingOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useAuthStore } from '@/stores/authStore'

const { Header, Sider, Content } = Layout

export default function MainLayout() {
    const [collapsed, setCollapsed] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const { user, logout } = useAuthStore()

    const menuItems = [
        {
            key: '/dashboard',
            icon: <DashboardOutlined />,
            label: '대시보드',
            onClick: () => navigate('/dashboard'),
        },
        {
            key: '/users',
            icon: <UserOutlined />,
            label: '사용자 관리',
            onClick: () => navigate('/users'),
        },
        {
            key: '/settings',
            icon: <SettingOutlined />,
            label: '설정',
            onClick: () => navigate('/settings'),
        },
    ]

    const userMenuItems = [
        {
            key: 'profile',
            icon: <UserOutlined />,
            label: '프로필',
            onClick: () => navigate('/profile'),
        },
        {
            key: 'logout',
            icon: <LogoutOutlined />,
            label: '로그아웃',
            onClick: () => {
                logout()
                navigate('/login')
            },
        },
    ]

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* 사이드바 */}
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',  // sticky → fixed로 변경
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                {/* 로고 */}
                <div style={{
                    height: 64,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: collapsed ? 16 : 20,
                    fontWeight: 'bold',
                    transition: 'all 0.2s',
                }}>
                    {collapsed ? 'A' : 'Admin'}
                </div>

                {/* 메뉴 */}
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[location.pathname]}
                    items={menuItems}
                />
            </Sider>

            {/* 메인 레이아웃 */}
            <Layout style={{
                marginLeft: collapsed ? 80 : 200,  // Sider 너비만큼 왼쪽 마진
                transition: 'all 0.2s',
            }}>
                {/* 헤더 */}
                <Header style={{
                    padding: '0 24px',
                    background: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                }}>
                    {/* 토글 버튼 */}
                    <div
                        style={{ fontSize: 18, cursor: 'pointer' }}
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </div>

                    {/* 사용자 정보 */}
                    <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
                        <Space style={{ cursor: 'pointer' }}>
                            <Avatar icon={<UserOutlined />} />
                            <span>{user?.name || '관리자'}</span>
                        </Space>
                    </Dropdown>
                </Header>

                {/* 콘텐츠 */}
                <Content style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    background: '#fff',
                    borderRadius: 8,
                }}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}