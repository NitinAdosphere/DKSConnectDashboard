import type { MenuProps } from 'antd'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { logout } from '../redux/auth/auth.thunk'
import { useNavigate } from 'react-router-dom'
import { Outlet, useLocation } from 'react-router-dom'
import { RootState } from '../types/selector.types'
import { LogoutOutlined, MenuOutlined } from '@ant-design/icons'
import { Layout, Menu, Button, ConfigProvider, Drawer } from 'antd'

//images
import Logo from '../assets/reporter-logo.png'
import Doc from '../assets/document-text.svg'
import DocActive from '../assets/active-document-text.svg'
import Reporter from '../assets/reporter-icon.svg'
import ReportersActive from '../assets/active-reporter-icon.svg'
import UsersActive from '../assets/active-users.svg'
import UserIcon from '../assets/user-icon.svg'
import { ButtonThemeConfig } from '../components/antdesign/configs.components'
import { EConfigButtonType } from '../types/state.types'
import { useDispatch } from 'react-redux'
import { setSelectedUpdate } from '../redux/allUpdate/update.slice'

type MenuItem = Required<MenuProps>['items'][number]
const { Header, Sider, Content } = Layout

const DashboardLayout = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const { user } = useSelector((state: RootState) => state.User)
    const selectedUpdate = useSelector((state: any) => state.Updates)

    const [collapsed, setCollapsed] = useState(false)
    const [drawerVisible, setDrawerVisible] = useState<boolean>(false)
    const [isMobileScreen, setIsMobileScreen] = useState<boolean>(window.innerWidth < 1024)
    const [current, setCurrent] = useState<string>(location.pathname.slice(11).split('/')[0])

    const showDrawer = () => {
        setDrawerVisible(true)
    }

    const onCloseDrawer = () => {
        setDrawerVisible(false)
    }

    // For Mobile View
    useEffect(() => {
        const handleResize = () => {
            setIsMobileScreen(window.innerWidth < 1024)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    useEffect(() => {
        setCurrent(location.pathname.split('/')[2])
    }, [location.pathname])

    const onClick: MenuProps['onClick'] = (e) => {
        navigate(e.key)
        onCloseDrawer()
        setCurrent(e.key)
    }

    const getHeaderText = () => {
        return `Welcome, ${user.firstName}`
    }

    const dksItems: MenuItem[] = [
        {
            label: 'All Updates',
            key: 'home',
            disabled: false,
            icon:
                current === 'home' ? (
                    <img
                        src={DocActive}
                        alt="All Updates"
                    />
                ) : (
                    <img
                        src={Doc}
                        alt="Home"
                    />
                )
        },
        {
            label: 'Reporters',
            key: 'reporters',
            icon: current === 'reporters' ? <img src={ReportersActive} /> : <img src={Reporter} />,
            disabled: false
        },
        {
            label: 'User Management',
            key: 'user-management',
            icon: current === 'user-management' ? <img src={UsersActive} /> : <img src={UserIcon} />,
            disabled: false
        }
    ]

    // const managerItems: MenuItem[] = []

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }
    const logoutHandler = async () => {
        try {
            logout().then((res) => {
                if (res.success) {
                    navigate('/')
                }
            })
        } finally {
            //
        }
    }

    const items = dksItems

    // if (Object.keys(user).length === 0) {
    //     return (
    //         <Navigate
    //             to="/"
    //             replace
    //         />
    //     )
    // }

    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Layout: {
                            siderBg: '#FFF'
                        },
                        Menu: {
                            itemColor: '#1c1c1c',
                            itemSelectedColor: '#FFF',
                            itemDisabledColor: '#64748B',
                            itemHeight: 50,
                            groupTitleFontSize: 18,
                            fontWeightStrong: 500,
                            itemBg: '#105E96',
                            itemHoverBg: '#EFF6FA',
                            itemSelectedBg: '#105E96',
                            subMenuItemBg: '#FFF'
                        }
                    },
                    token: {
                        colorPrimary: '#EBEBEB',
                        borderRadius: 2,
                        padding: 5,
                        colorBgContainer: '#FFF'
                    }
                }}>
                <Layout className="h-screen">
                    {isMobileScreen ? (
                        <Drawer
                            title={
                                <>
                                    <div className="flex justify-center items-center">
                                        <img
                                            src={Logo}
                                            alt="logo"
                                            className="w-[120px]"
                                        />
                                    </div>
                                </>
                            }
                            width={360}
                            placement="left"
                            closable={false}
                            onClose={onCloseDrawer}
                            open={drawerVisible}>
                            <Sider
                                width={308}
                                trigger={null}
                                collapsible
                                collapsed={collapsed}
                                onCollapse={toggleCollapsed}
                                collapsedWidth={0}>
                                <Menu
                                    onClick={onClick}
                                    theme="light"
                                    items={items}
                                    mode="inline"
                                    selectedKeys={[current]}
                                    className="mt-6 px-6 font-inter text-base font-normal leading-[22px] border-none"
                                />
                            </Sider>
                        </Drawer>
                    ) : (
                        <Sider
                            width={308}
                            trigger={null}
                            collapsible
                            breakpoint="xxl"
                            className="border-r border-[#E5E5E6] bg-[url('/bg-sidebar.png')] bg-no-repeat bg-center bg-cover"
                            onCollapse={toggleCollapsed}
                            collapsedWidth={90}>
                            <div className="flex justify-center py-2  font-inter">
                                <img
                                    src={Logo}
                                    alt="logo"
                                    className="w-[120px]"
                                />
                            </div>
                            <Menu
                                onClick={onClick}
                                theme="light"
                                items={items}
                                mode="inline"
                                selectedKeys={[current]}
                                className="mt-3 2xl:mt-3 font-inter text-sm 2xl:text-base text-secondary bg-transparent"
                            />
                        </Sider>
                    )}

                    <Layout>
                        <Header className="flex px-4 2xl:px-8 min-h-[54px] 2xl:min-h-[69px] h-auto bg-white border-b bottom-[#E5E5E6] items-center justify-between gap-3">
                            {isMobileScreen && (
                                <Button
                                    type="text"
                                    icon={<MenuOutlined />}
                                    onClick={showDrawer}
                                />
                            )}
                            <div className="lg:flex hidden flex-col justify-end items-start">
                                <h3 className=" font-inter text-secondary text-sm 2xl:text-xl font-semibold"> {getHeaderText()}</h3>
                            </div>
                            <div className="flex justify-center items-center gap-11">
                                <ButtonThemeConfig buttonType={EConfigButtonType.PRIMARY}>
                                    <Button
                                        className="flex border-primary px-4 rounded-3xl text-primary py-4 px-2 text-sm font-medium items-center font-inter"
                                        icon={<LogoutOutlined className="text-base" />}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            logoutHandler()
                                        }}>
                                        Logout
                                    </Button>
                                </ButtonThemeConfig>
                            </div>
                        </Header>
                        <Content
                            style={{
                                backgroundColor: '#EFF6FA'
                            }}
                            className="overflow-auto font-inter">
                            <div className="">
                                <Outlet />
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </ConfigProvider>
        </>
    )
}

export default DashboardLayout
