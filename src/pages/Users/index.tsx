import { Table, Button, Space, Tag, Input } from 'antd'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { useState } from 'react'

const { Search } = Input

export default function Users() {
    const [searchText, setSearchText] = useState('')

    // 임시 데이터
    const dataSource = [
        {
            key: '1',
            id: '1',
            name: '홍길동',
            email: 'hong@example.com',
            role: 'admin',
            status: 'active',
            createdAt: '2024-01-15',
        },
        {
            key: '2',
            id: '2',
            name: '김철수',
            email: 'kim@example.com',
            role: 'user',
            status: 'active',
            createdAt: '2024-02-20',
        },
        {
            key: '3',
            id: '3',
            name: '이영희',
            email: 'lee@example.com',
            role: 'user',
            status: 'inactive',
            createdAt: '2024-03-10',
        },
    ]

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: 80,
        },
        {
            title: '이름',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '이메일',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: '역할',
            dataIndex: 'role',
            key: 'role',
            render: (role: string) => (
                <Tag color={role === 'admin' ? 'red' : 'blue'}>
                    {role === 'admin' ? '관리자' : '사용자'}
                </Tag>
            ),
        },
        {
            title: '상태',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <Tag color={status === 'active' ? 'green' : 'default'}>
                    {status === 'active' ? '활성' : '비활성'}
                </Tag>
            ),
        },
        {
            title: '생성일',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: '액션',
            key: 'action',
            render: () => (
                <Space>
                    <Button type="link" size="small">수정</Button>
                    <Button type="link" danger size="small">삭제</Button>
                </Space>
            ),
        },
    ]

    const filteredData = dataSource.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.email.toLowerCase().includes(searchText.toLowerCase())
    )

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 24,
            }}>
                <h1 style={{ margin: 0 }}>사용자 관리</h1>
                <Button type="primary" icon={<PlusOutlined />}>
                    사용자 추가
                </Button>
            </div>

            <div style={{ marginBottom: 16 }}>
                <Search
                    placeholder="이름 또는 이메일 검색"
                    allowClear
                    enterButton={<SearchOutlined />}
                    style={{ width: 300 }}
                    onChange={(e) => setSearchText(e.target.value)}
                    onSearch={setSearchText}
                />
            </div>

            <Table
                dataSource={filteredData}
                columns={columns}
                pagination={{
                    pageSize: 10,
                    showSizeChanger: true,
                    showTotal: (total) => `총 ${total}개`,
                }}
            />
        </div>
    )
}