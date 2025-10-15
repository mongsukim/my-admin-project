import { Card, Form, Input, Button, Switch, Space, Divider } from 'antd'

export default function Settings() {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log('Settings:', values)
  }

  return (
    <div>
      <h1>설정</h1>

      <Card title="기본 설정" style={{ marginBottom: 16 }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            siteName: '통근버스',
            siteUrl: 'https://admin.example.com',
            adminEmail: 'admin@example.com',
            emailNotification: true,
            pushNotification: false,
          }}
        >
          <Form.Item
            label="사이트 이름"
            name="siteName"
            rules={[{ required: true, message: '사이트 이름을 입력하세요' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="사이트 URL"
            name="siteUrl"
            rules={[
              { required: true, message: 'URL을 입력하세요' },
              { type: 'url', message: '올바른 URL을 입력하세요' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="관리자 이메일"
            name="adminEmail"
            rules={[
              { required: true, message: '이메일을 입력하세요' },
              { type: 'email', message: '올바른 이메일을 입력하세요' },
            ]}
          >
            <Input />
          </Form.Item>

          <Divider />

          <Form.Item label="이메일 알림" name="emailNotification" valuePropName="checked">
            <Switch />
          </Form.Item>

          <Form.Item label="푸시 알림" name="pushNotification" valuePropName="checked">
            <Switch />
          </Form.Item>

          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                저장
              </Button>
              <Button onClick={() => form.resetFields()}>초기화</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
