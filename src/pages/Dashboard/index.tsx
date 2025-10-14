import { Card, Row, Col, Statistic } from 'antd'
import { UserOutlined, ShoppingOutlined, DollarOutlined } from '@ant-design/icons'

export default function Dashboard() {
  return (
    <div style={{ padding: 24 }}>
      <h1>대시보드</h1>

      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic
              title="총 사용자"
              value={1128}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="총 주문"
              value={2345}
              prefix={<ShoppingOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="총 매출"
              value={12345}
              prefix={<DollarOutlined />}
              suffix="원"
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}
