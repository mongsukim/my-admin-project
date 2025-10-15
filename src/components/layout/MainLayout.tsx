import { Layout, Menu, Avatar, Dropdown, Space } from 'antd'
import type { MenuProps } from 'antd'
import { UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Breadcrumb from '@/components/common/Breadcrumb'
import { getMenuItems } from '@/config/menuConfig.tsx'

const { Header, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  // const { user, logout } = useAuthStore()

  const menuItems = getMenuItems(navigate)

  const userMenuItems: MenuItem[] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: '프로필',
      onClick: () => navigate('/profile'),
    },
    // {
    //   key: 'logout',
    //   icon: <LogoutOutlined />,
    //   label: '로그아웃',
    //   onClick: () => {
    //     logout()
    //     navigate('/login')
    //   },
    // },
  ]

  const getSelectedKeys = () => {
    return [location.pathname]
  }

  const getOpenKeys = () => {
    const path = location.pathname
    const openKeys: string[] = []

    if (path.startsWith('/dashboard')) {
      openKeys.push('/dashboard')
    }
    if (path.startsWith('/products')) {
      openKeys.push('products')
      if (path.includes('/inventory/')) {
        openKeys.push('products-inventory')
      }
    }
    if (path.startsWith('/orders')) {
      openKeys.push('orders')
      if (path.includes('/delivery/')) {
        openKeys.push('orders-delivery')
      }
    }
    if (path.startsWith('/users')) openKeys.push('users')
    if (path.startsWith('/marketing')) {
      openKeys.push('marketing')
      if (path.includes('/promotion/')) {
        openKeys.push('marketing-promotion')
      }
    }
    if (path.startsWith('/statistics')) {
      openKeys.push('statistics')
      if (path.includes('/report/')) {
        openKeys.push('statistics-report')
      }
    }
    if (path.startsWith('/board')) openKeys.push('board')
    if (path.startsWith('/settings')) {
      openKeys.push('settings')
      if (path.includes('/admin/')) {
        openKeys.push('settings-admin')
      }
    }

    return openKeys
  }

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* 사이드바 */}
      <div
        style={{
          width: collapsed ? 80 : 250,
          transition: 'width 0.2s',
          flexShrink: 0,
        }}
      >
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={collapsed ? 80 : 250}
          style={{
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            overflowY: 'auto',
          }}
        >
          {/* 로고 */}
          <div
            style={{
              height: 64,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: collapsed ? 16 : 20,
              fontWeight: 'bold',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <img width="206px" height="45px" src="/images/logo.png" alt="logo" />
          </div>

          {/* 메뉴 */}
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={getSelectedKeys()}
            defaultOpenKeys={getOpenKeys()}
            items={menuItems}
            style={{ borderRight: 0 }}
          />
        </Sider>
      </div>

      {/* 메인 영역 */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        {/* 헤더 */}
        <Header
          style={{
            padding: '0 24px',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
            flexShrink: 0,
          }}
        >
          {/* 토글 버튼 */}
          <div style={{ fontSize: 18, cursor: 'pointer' }} onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>

          {/* 사용자 정보 */}
          <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
            <Space style={{ cursor: 'pointer' }}>
              <Avatar icon={<UserOutlined />} />
              {/*<span>{user?.name || '관리자'}</span>*/}
            </Space>
          </Dropdown>
        </Header>

        {/* 콘텐츠 */}
        <div
          style={{
            flex: 1,
            overflow: 'auto',
            background: '#f0f2f5',
          }}
        >
          <div
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: '#fff',
              borderRadius: 8,
            }}
          >
            <Breadcrumb />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
