import { Breadcrumb as AntBreadcrumb } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { useMemo } from 'react'
import { getMenuItems, buildBreadcrumbMap } from '@/config/menuConfig.tsx'

export default function Breadcrumb() {
  const location = useLocation()
  const navigate = useNavigate()

  // menuItems로부터 breadcrumb map 생성
  const breadcrumbNameMap = useMemo(() => {
    const menuItems = getMenuItems(navigate)
    return buildBreadcrumbMap(menuItems)
  }, [navigate])

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
  let addedParents = new Set<string>() // 이미 추가된 부모 추적

  pathSnippets.forEach((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    const config = breadcrumbNameMap[url]

    if (config) {
      const { name, icon, parent } = config

      if (parent && !addedParents.has(parent)) {
        breadcrumbItems.push({
          title: (
            <span>
              {icon && <span style={{ marginRight: 4 }}>{icon}</span>}
              {parent}
            </span>
          ),
        })
        addedParents.add(parent)
      }

      // 마지막 항목이면 링크 없이
      if (index === pathSnippets.length - 1) {
        breadcrumbItems.push({
          title: <span>{name}</span>,
        })
      } else {
        // 중간 항목이면 링크 추가
        breadcrumbItems.push({
          title: <Link to={url}>{name}</Link>,
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
