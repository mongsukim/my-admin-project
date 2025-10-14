import { Card, Form, Input, Button, Avatar, Upload, Space } from 'antd'
import { UserOutlined, UploadOutlined } from '@ant-design/icons'
import { useAuthStore } from '@/stores/authStore'

export default function Profile() {
    const { user } = useAuthStore()
    const [form] = Form.useForm()

    const onFinish = (values: any) => {
        console.log('Profile update:', values)
    }

    return (
        <div>
            <h1>프로필</h1>

            <Card>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 24,
                }}>
                    <Avatar size={80} icon={<UserOutlined />} />
                    <div style={{ marginLeft: 16 }}>
                        <Upload>
                            <Button icon={<UploadOutlined />}>
                                프로필 이미지 변경
                            </Button>
                        </Upload>
                    </div>
                </div>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={{
                        name: user?.name || '관리자',
                        email: user?.email || 'admin@example.com',
                        phone: '010-1234-5678',
                    }}
                >
                    <Form.Item
                        label="이름"
                        name="name"
                        rules={[{ required: true, message: '이름을 입력하세요' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="이메일"
                        name="email"
                        rules={[
                            { required: true, message: '이메일을 입력하세요' },
                            { type: 'email', message: '올바른 이메일을 입력하세요' },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="전화번호"
                        name="phone"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item>
                        <Space>
                            <Button type="primary" htmlType="submit">
                                저장
                            </Button>
                            <Button onClick={() => form.resetFields()}>
                                취소
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}