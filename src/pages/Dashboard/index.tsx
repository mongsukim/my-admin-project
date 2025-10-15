import { Card, Row, Col, Statistic, DatePicker, Space, Select } from 'antd'
import { UserOutlined, ShoppingOutlined, DollarOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import { useState } from 'react'

export default function Dashboard() {
  const now = dayjs()
  const onChange = (value: string) => {
    console.log(`selected ${value}`)
  }

  const cityData = {
    사업장전체: [],
    '전자 서초,양재': ['D&O', 'LG CNS', 'LG CNS 협력사'],
    'LG 사이언스파크': ['(주)LG', 'Suzhou', 'Zhenjiang'],
    '전자 가산': [],
  }

  type CityName = keyof typeof cityData

  const provinceData: CityName[] = ['전자 서초,양재', 'LG 사이언스파크', '전자 가산']

  const [cities, setCities] = useState(cityData[provinceData[0] as CityName])
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0] as CityName)

  const handleProvinceChange = (value: CityName) => {
    setCities(cityData[value])
    setSecondCity(cityData[value][0] as CityName)
  }

  const onSecondCityChange = (value: CityName) => {
    setSecondCity(value)
  }

  return (
    <div style={{ padding: 24 }}>
      <Row>
        실시간 운행 현황(갱신주기 20초)
        <Space direction="vertical" style={{ width: '135px' }}>
          <DatePicker
            defaultValue={dayjs(now)}
            placeholder="날짜를 선택하세요"
            style={{ width: '100%', cursor: 'pointer' }}
          />
        </Space>
        <Space wrap>
          <Select
            defaultValue={'사업장전체'}
            style={{ width: 120 }}
            onChange={handleProvinceChange}
            options={provinceData.map(province => ({ label: province, value: province }))}
          />
          <Select
            style={{ width: 120 }}
            value={secondCity}
            onChange={onSecondCityChange}
            options={cities.map(city => ({ label: city, value: city }))}
          />

          <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="label"
            onChange={onChange}
            options={[
              {
                value: 'jack',
                label: 'Jack',
              },
              {
                value: 'lucy',
                label: 'Lucy',
              },
              {
                value: 'tom',
                label: 'Tom',
              },
            ]}
          />
        </Space>
      </Row>

      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic title="배차" value={1128} prefix={<UserOutlined />} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="운행중" value={2345} prefix={<ShoppingOutlined />} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="운행종료" value={12345} prefix={<DollarOutlined />} suffix="원" />
          </Card>
        </Col>
      </Row>
    </div>
  )
}
