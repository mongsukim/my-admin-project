import { Form, Input, Button, Card, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/stores/authStore'

export default function Login() {
    const navigate = useNavigate()
    const { login } = useAuthStore()

    const onFinish = (values: any) => {
        // TODO: 실제 API 호출
        console.log('Login:', values)

        // 임시 사용자 정보
        const user = {
            id: '1',
            email: values.email,
            name: '관리자',
        }

        // 로그인 처리
        login(user)
        localStorage.setItem('accessToken', 'dummy-access-token')
        localStorage.setItem('refreshToken', 'dummy-refresh-token')

        message.success('로그인 성공!')
        navigate('/dashboard')
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            }}
        >
            <Card
                title={
                    <div style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>
                        Admin Dashboard
                    </div>
                }
                style={{ width: 400, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
            >
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item
                        label="이메일"
                        name="email"
                        rules={[
                            { required: true, message: '이메일을 입력하세요' },
                            { type: 'email', message: 'ex: abc@gmail.com 등 fake email' },
                        ]}
                    >
                        <Input size="large" placeholder="admin@example.com" />
                    </Form.Item>

                    <Form.Item
                        label="비밀번호"
                        name="password"
                        rules={[{ required: true, message: '비밀번호를 입력하세요' }]}
                    >
                        <Input.Password size="large" placeholder="비밀번호" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block size="large">
                            로그인
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}