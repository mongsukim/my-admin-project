import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider } from 'antd'
import koKR from 'antd/locale/ko_KR'

import ProtectedRoute from './components/common/ProtectedRoute'
import MainLayout from './components/layout/MainLayout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'

// 임시 페이지 컴포넌트
const TempPage = ({ title }: { title: string }) => (
    <div>
        <h1>{title}</h1>
        <p>이 페이지는 개발 중입니다.</p>
    </div>
)

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
        },
    },
})

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ConfigProvider locale={koKR}>
                <BrowserRouter>
                    <Routes>
                        {/* 로그인 */}
                        <Route path="/login" element={<Login />} />

                        {/* 메인 레이아웃 */}
                        <Route
                            path="/"
                            element={
                                <ProtectedRoute>
                                    <MainLayout />
                                </ProtectedRoute>
                            }
                        >
                            <Route index element={<Navigate to="/dashboard" replace />} />
                            <Route path="dashboard" element={<Dashboard />} />

                            {/* 상품 관리 */}
                            <Route path="products/list" element={<TempPage title="상품 목록" />} />
                            <Route path="products/add" element={<TempPage title="상품 등록" />} />
                            <Route path="products/categories" element={<TempPage title="카테고리 관리" />} />
                            <Route path="products/inventory/stock" element={<TempPage title="재고 현황" />} />
                            <Route path="products/inventory/history" element={<TempPage title="입출고 내역" />} />
                            <Route path="products/inventory/alert" element={<TempPage title="재고 알림" />} />

                            {/* 주문 관리 */}
                            <Route path="orders/list" element={<TempPage title="주문 목록" />} />
                            <Route path="orders/pending" element={<TempPage title="결제 대기" />} />
                            <Route path="orders/delivery/preparing" element={<TempPage title="배송 준비중" />} />
                            <Route path="orders/delivery/shipping" element={<TempPage title="배송중" />} />
                            <Route path="orders/delivery/completed" element={<TempPage title="배송 완료" />} />
                            <Route path="orders/returns" element={<TempPage title="반품/교환" />} />

                            {/* 회원 관리 */}
                            <Route path="users/list" element={<TempPage title="회원 목록" />} />
                            <Route path="users/grade" element={<TempPage title="회원 등급" />} />
                            <Route path="users/point" element={<TempPage title="포인트 관리" />} />

                            {/* 마케팅 */}
                            <Route path="marketing/coupons" element={<TempPage title="쿠폰 관리" />} />
                            <Route path="marketing/events" element={<TempPage title="이벤트 관리" />} />
                            <Route path="marketing/promotion/banner" element={<TempPage title="배너 관리" />} />
                            <Route path="marketing/promotion/popup" element={<TempPage title="팝업 관리" />} />
                            <Route path="marketing/promotion/push" element={<TempPage title="푸시 알림" />} />
                            <Route path="marketing/reviews" element={<TempPage title="리뷰 관리" />} />

                            {/* 통계/분석 */}
                            <Route path="statistics/sales" element={<TempPage title="매출 통계" />} />
                            <Route path="statistics/products" element={<TempPage title="상품 분석" />} />
                            <Route path="statistics/users" element={<TempPage title="회원 분석" />} />
                            <Route path="statistics/report/daily" element={<TempPage title="일간 리포트" />} />
                            <Route path="statistics/report/weekly" element={<TempPage title="주간 리포트" />} />
                            <Route path="statistics/report/monthly" element={<TempPage title="월간 리포트" />} />

                            {/* 게시판 */}
                            <Route path="board/notice" element={<TempPage title="공지사항" />} />
                            <Route path="board/faq" element={<TempPage title="FAQ" />} />
                            <Route path="board/qna" element={<TempPage title="Q&A" />} />

                            {/* 설정 */}
                            <Route path="settings/basic" element={<TempPage title="기본 설정" />} />
                            <Route path="settings/payment" element={<TempPage title="결제 설정" />} />
                            <Route path="settings/delivery" element={<TempPage title="배송 설정" />} />
                            <Route path="settings/admin/list" element={<TempPage title="관리자 목록" />} />
                            <Route path="settings/admin/role" element={<TempPage title="권한 관리" />} />
                            <Route path="settings/admin/log" element={<TempPage title="접속 로그" />} />

                            {/* 프로필 */}
                            <Route path="profile" element={<TempPage title="프로필" />} />
                        </Route>

                        {/* 404 */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </ConfigProvider>
        </QueryClientProvider>
    )
}

export default App