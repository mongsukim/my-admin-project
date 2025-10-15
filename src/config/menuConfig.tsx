import React from 'react'

import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  ShoppingOutlined,
  FileTextOutlined,
  BarChartOutlined,
  TagOutlined,
  MailOutlined,
} from '@ant-design/icons'

import type { MenuProps } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

export interface MenuItemConfig {
  key: string
  icon?: React.ReactNode
  label: string
  onClick?: () => void
  children?: MenuItemConfig[]
}

export interface BreadcrumbConfig {
  name: string
  icon?: React.ReactNode
  parent?: string
}

export const getMenuItems = (navigate: (path: string) => void): MenuItem[] => [
  {
    key: '/dashboard',
    icon: <DashboardOutlined />,
    label: '실시간 운행 현황',
    children: [
      {
        key: '/dashboard',
        label: '실시간 운행 현황',
        onClick: () => navigate('/dashboard'),
      },
      {
        key: '/dashboard/reason',
        label: '실시간 운영 사유 관리',
        onClick: () => navigate('/dashboard/reason'),
      },
    ],
  },
  {
    key: 'products',
    icon: <ShoppingOutlined />,
    label: '통합관제',
  },
  {
    key: 'orders',
    icon: <FileTextOutlined />,
    label: '운행통계',
    children: [
      {
        key: '/orders/list',
        label: '노선별 계열사 탑승현황',
        onClick: () => navigate('/orders/list'),
      },
      {
        key: '/orders/pending',
        label: '정류소별 탑승자',
        onClick: () => navigate('/orders/pending'),
      },
      {
        key: 'orders-delivery',
        label: '탑승자 탑승 이력',
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
    label: '운행관리',
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
    label: '운수사관리',
    children: [
      {
        key: '/marketing/coupons',
        label: '운수사 정보관리',
        onClick: () => navigate('/marketing/coupons'),
      },
      {
        key: '/marketing/events',
        label: '운전자 정보관리',
        onClick: () => navigate('/marketing/events'),
      },
      {
        key: 'marketing-promotion',
        label: '차량 정보관리',
      },
      {
        key: '/marketing/reviews',
        label: '운전자관리 현황판',
        onClick: () => navigate('/marketing/reviews'),
      },
    ],
  },
  {
    key: 'statistics',
    icon: <BarChartOutlined />,
    label: '민원관리',
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
    label: '공지사항관리',
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

// Breadcrumb를 위한 Map 생성 헬퍼 함수
export function buildBreadcrumbMap(menuItems: MenuItem[]): Record<string, BreadcrumbConfig> {
  const map: Record<string, BreadcrumbConfig> = {}

  const traverse = (items: any[], parentIcon?: React.ReactNode) => {
    items.forEach(item => {
      // key가 경로 형식이면 map에 추가
      if (item.key && item.key.startsWith('/')) {
        map[item.key] = {
          name: item.label,
          icon: item.icon || parentIcon,
        }
      }

      // children이 있으면 재귀 처리
      if (item.children) {
        traverse(item.children, item.icon)
      }
    })
  }

  traverse(menuItems)
  return map
}
