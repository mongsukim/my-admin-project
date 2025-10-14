import { Breadcrumb as AntBreadcrumb } from 'antd'
import {
    HomeOutlined,
    ShoppingOutlined,
    FileTextOutlined,
    UserOutlined,
    TagOutlined,
    BarChartOutlined,
    MailOutlined,
    SettingOutlined,
} from '@ant-design/icons'
import { useLocation, Link } from 'react-router-dom'

interface BreadcrumbConfig {
    name: string
    icon?: React.ReactNode
}

const breadcrumbNameMap: Record<string, BreadcrumbConfig> = {
    '/dashboard': { name: '대시보드', icon: <HomeOutlined /> },

    // 상품 관리
    '/products': { name: '상품 관리', icon: <ShoppingOutlined /> },
    '/products/list': { name: '상품 목록' },
    '/products/add': { name: '상품 등록' },
    '/products/categories': { name: '카테고리 관리' },
    '/products/inventory': { name: '재고 관리' },
    '/products/inventory/stock': { name: '재고 현황' },
    '/products/inventory/history': { name: '입출고 내역' },
    '/products/inventory/alert': { name: '재고 알림' },

    // 주문 관리
    '/orders': { name: '주문 관리', icon: <FileTextOutlined /> },
    '/orders/list': { name: '주문 목록' },
    '/orders/pending': { name: '결제 대기' },
    '/orders/delivery': { name: '배송 관리' },
    '/orders/delivery/preparing': { name: '배송 준비중' },
    '/orders/delivery/shipping': { name: '배송중' },
    '/orders/delivery/completed': { name: '배송 완료' },
    '/orders/returns': { name: '반품/교환' },

    // 회원 관리
    '/users': { name: '회원 관리', icon: <UserOutlined /> },
    '/users/list': { name: '회원 목록' },
    '/users/grade': { name: '회원 등급' },
    '/users/point': { name: '포인트 관리' },

    // 마케팅
    '/marketing': { name: '마케팅', icon: <TagOutlined /> },
    '/marketing/coupons': { name: '쿠폰 관리' },
    '/marketing/events': { name: '이벤트 관리' },
    '/marketing/promotion': { name: '프로모션' },
    '/marketing/promotion/banner': { name: '배너 관리' },
    '/marketing/promotion/popup': { name: '팝업 관리' },
    '/marketing/promotion/push': { name: '푸시 알림' },
    '/marketing/reviews': { name: '리뷰 관리' },

    // 통계/분석
    '/statistics': { name: '통계/분석', icon: <BarChartOutlined /> },
    '/statistics/sales': { name: '매출 통계' },
    '/statistics/products': { name: '상품 분석' },
    '/statistics/users': { name: '회원 분석' },
    '/statistics/report': { name: '리포트' },
    '/statistics/report/daily': { name: '일간 리포트' },
    '/statistics/report/weekly': { name: '주간 리포트' },
    '/statistics/report/monthly': { name: '월간 리포트' },

    // 게시판
    '/board': { name: '게시판', icon: <MailOutlined /> },
    '/board/notice': { name: '공지사항' },
    '/board/faq': { name: 'FAQ' },
    '/board/qna': { name: 'Q&A' },

    // 설정
    '/settings': { name: '설정', icon: <SettingOutlined /> },
    '/settings/basic': { name: '기본 설정' },
    '/settings/payment': { name: '결제 설정' },
    '/settings/delivery': { name: '배송 설정' },
    '/settings/admin': { name: '관리자 설정' },
    '/settings/admin/list': { name: '관리자 목록' },
    '/settings/admin/role': { name: '권한 관리' },
    '/settings/admin/log': { name: '접속 로그' },

    // 프로필
    '/profile': { name: '프로필', icon: <UserOutlined /> },
}

export default function Breadcrumb() {
    const location = useLocation()
    const pathSnippets = location.pathname.split('/').filter(i => i)

    // Home 아이콘
    const breadcrumbItems = [
        {
            title: (
                <Link to="/dashboard">
                    <HomeOutlined style={{ marginRight: 4 }} />
                </Link>
            ),
        },
    ]

    // 현재 경로를 순회하며 breadcrumb 생성
    pathSnippets.forEach((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
        const config = breadcrumbNameMap[url]

        if (config) {
            const { name, icon } = config

            // 마지막 항목이면 링크 없이
            if (index === pathSnippets.length - 1) {
                breadcrumbItems.push({
                    title: (
                        <span>
              {icon && <span style={{ marginRight: 4 }}>{icon}</span>}
                            {name}
            </span>
                    ),
                })
            } else {
                // 중간 항목이면 링크 추가
                breadcrumbItems.push({
                    title: (
                        <Link to={url}>
                            {icon && <span style={{ marginRight: 4 }}>{icon}</span>}
                            {name}
                        </Link>
                    ),
                })
            }
        }
    })

    return (
        <AntBreadcrumb
            items={breadcrumbItems}
            style={{
                marginBottom: 16,
                padding: '8px 0',
            }}
        />
    )
}