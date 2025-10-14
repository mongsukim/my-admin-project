import { Layout, Menu, Avatar, Dropdown, Space } from 'antd'
import type { MenuProps } from 'antd'
import {
    DashboardOutlined,
    UserOutlined,
    SettingOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ShoppingOutlined,
    FileTextOutlined,
    BarChartOutlined,
    TagOutlined,
    MailOutlined,
} from '@ant-design/icons'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useAuthStore } from '@/stores/authStore'
import Breadcrumb from '@/components/common/Breadcrumb'  // 추가

const { Header, Sider, Content } = Layout

type MenuItem = Required<MenuProps>['items'][number]

export default function MainLayout() {
    const [collapsed, setCollapsed] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const { user, logout } = useAuthStore()

    // 메뉴 아이템 (이전과 동일)
    const menuItems: MenuItem[] = [
        {
            key: '/dashboard',
            icon: <DashboardOutlined />,
            label: '대시보드',
            onClick: () => navigate('/dashboard'),
        },
        {
            key: 'products',
            icon: <ShoppingOutlined />,
            label: '상품 관리',
            children: [
                {
                    key: '/products/list',
                    label: '상품 목록',
                    onClick: () => navigate('/products/list'),
                },
                {
                    key: '/products/add',
                    label: '상품 등록',
                    onClick: () => navigate('/products/add'),
                },
                {
                    key: '/products/categories',
                    label: '카테고리 관리',
                    onClick: () => navigate('/products/categories'),
                },
                {
                    key: 'products-inventory',
                    label: '재고 관리',
                    children: [
                        {
                            key: '/products/inventory/stock',
                            label: '재고 현황',
                            onClick: () => navigate('/products/inventory/stock'),
                        },
                        {
                            key: '/products/inventory/history',
                            label: '입출고 내역',
                            onClick: () => navigate('/products/inventory/history'),
                        },
                        {
                            key: '/products/inventory/alert',
                            label: '재고 알림',
                            onClick: () => navigate('/products/inventory/alert'),
                        },
                    ],
                },
            ],
        },
        {
            key: 'orders',
            icon: <FileTextOutlined />,
            label: '주문 관리',
            children: [
                {
                    key: '/orders/list',
                    label: '주문 목록',
                    onClick: () => navigate('/orders/list'),
                },
                {
                    key: '/orders/pending',
                    label: '결제 대기',
                    onClick: () => navigate('/orders/pending'),
                },
                {
                    key: 'orders-delivery',
                    label: '배송 관리',
                    children: [
                        {
                            key: '/orders/delivery/preparing',
                            label: '배송 준비중',
                            onClick: () => navigate('/orders/delivery/preparing'),
                        },
                        {
                            key: '/orders/delivery/shipping',
                            label: '배송중',
                            onClick: () => navigate('/orders/delivery/shipping'),
                        },
                        {
                            key: '/orders/delivery/completed',
                            label: '배송 완료',
                            onClick: () => navigate('/orders/delivery/completed'),
                        },
                    ],
                },
                {
                    key: '/orders/returns',
                    label: '반품/교환',
                    onClick: () => navigate('/orders/returns'),
                },
            ],
        },
        {
            key: 'users',
            icon: <UserOutlined />,
            label: '회원 관리',
            children: [
                {
                    key: '/users/list',
                    label: '회원 목록',
                    onClick: () => navigate('/users/list'),
                },
                {
                    key: '/users/grade',
                    label: '회원 등급',
                    onClick: () => navigate('/users/grade'),
                },
                {
                    key: '/users/point',
                    label: '포인트 관리',
                    onClick: () => navigate('/users/point'),
                },
            ],
        },
        {
            key: 'marketing',
            icon: <TagOutlined />,
            label: '마케팅',
            children: [
                {
                    key: '/marketing/coupons',
                    label: '쿠폰 관리',
                    onClick: () => navigate('/marketing/coupons'),
                },
                {
                    key: '/marketing/events',
                    label: '이벤트 관리',
                    onClick: () => navigate('/marketing/events'),
                },
                {
                    key: 'marketing-promotion',
                    label: '프로모션',
                    children: [
                        {
                            key: '/marketing/promotion/banner',
                            label: '배너 관리',
                            onClick: () => navigate('/marketing/promotion/banner'),
                        },
                        {
                            key: '/marketing/promotion/popup',
                            label: '팝업 관리',
                            onClick: () => navigate('/marketing/promotion/popup'),
                        },
                        {
                            key: '/marketing/promotion/push',
                            label: '푸시 알림',
                            onClick: () => navigate('/marketing/promotion/push'),
                        },
                    ],
                },
                {
                    key: '/marketing/reviews',
                    label: '리뷰 관리',
                    onClick: () => navigate('/marketing/reviews'),
                },
            ],
        },
        {
            key: 'statistics',
            icon: <BarChartOutlined />,
            label: '통계/분석',
            children: [
                {
                    key: '/statistics/sales',
                    label: '매출 통계',
                    onClick: () => navigate('/statistics/sales'),
                },
                {
                    key: '/statistics/products',
                    label: '상품 분석',
                    onClick: () => navigate('/statistics/products'),
                },
                {
                    key: '/statistics/users',
                    label: '회원 분석',
                    onClick: () => navigate('/statistics/users'),
                },
                {
                    key: 'statistics-report',
                    label: '리포트',
                    children: [
                        {
                            key: '/statistics/report/daily',
                            label: '일간 리포트',
                            onClick: () => navigate('/statistics/report/daily'),
                        },
                        {
                            key: '/statistics/report/weekly',
                            label: '주간 리포트',
                            onClick: () => navigate('/statistics/report/weekly'),
                        },
                        {
                            key: '/statistics/report/monthly',
                            label: '월간 리포트',
                            onClick: () => navigate('/statistics/report/monthly'),
                        },
                    ],
                },
            ],
        },
        {
            key: 'board',
            icon: <MailOutlined />,
            label: '게시판',
            children: [
                {
                    key: '/board/notice',
                    label: '공지사항',
                    onClick: () => navigate('/board/notice'),
                },
                {
                    key: '/board/faq',
                    label: 'FAQ',
                    onClick: () => navigate('/board/faq'),
                },
                {
                    key: '/board/qna',
                    label: 'Q&A',
                    onClick: () => navigate('/board/qna'),
                },
            ],
        },
        {
            key: 'settings',
            icon: <SettingOutlined />,
            label: '설정',
            children: [
                {
                    key: '/settings/basic',
                    label: '기본 설정',
                    onClick: () => navigate('/settings/basic'),
                },
                {
                    key: '/settings/payment',
                    label: '결제 설정',
                    onClick: () => navigate('/settings/payment'),
                },
                {
                    key: '/settings/delivery',
                    label: '배송 설정',
                    onClick: () => navigate('/settings/delivery'),
                },
                {
                    key: 'settings-admin',
                    label: '관리자 설정',
                    children: [
                        {
                            key: '/settings/admin/list',
                            label: '관리자 목록',
                            onClick: () => navigate('/settings/admin/list'),
                        },
                        {
                            key: '/settings/admin/role',
                            label: '권한 관리',
                            onClick: () => navigate('/settings/admin/role'),
                        },
                        {
                            key: '/settings/admin/log',
                            label: '접속 로그',
                            onClick: () => navigate('/settings/admin/log'),
                        },
                    ],
                },
            ],
        },
    ]

    const userMenuItems: MenuItem[] = [
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

    const getSelectedKeys = () => {
        return [location.pathname]
    }

    const getOpenKeys = () => {
        const path = location.pathname
        const openKeys: string[] = []

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
            <div style={{
                width: collapsed ? 80 : 250,
                transition: 'width 0.2s',
                flexShrink: 0,
            }}>
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
                    <div style={{
                        height: 64,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: collapsed ? 16 : 20,
                        fontWeight: 'bold',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    }}>
                        {collapsed ? 'A' : 'Admin Dashboard'}
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
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                overflow: 'hidden',
            }}>
                {/* 헤더 */}
                <Header style={{
                    padding: '0 24px',
                    background: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                    flexShrink: 0,
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
                <div style={{
                    flex: 1,
                    overflow: 'auto',
                    background: '#f0f2f5',
                }}>
                    <div style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: '#fff',
                        borderRadius: 8,
                    }}>
                        {/* Breadcrumb 추가 */}
                        <Breadcrumb />

                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}