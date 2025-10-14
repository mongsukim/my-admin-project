import { Result, Button } from 'antd'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <Result
      status="404"
      title="404"
      subTitle="페이지를 찾을 수 없습니다."
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          홈으로
        </Button>
      }
    />
  )
}
