import { ConfigProvider } from 'antd'
import { ReactNode } from 'react'
import { EConfigButtonType } from '../../types/state.types'

export const ButtonThemeConfig = ({ buttonType, children }: { buttonType: EConfigButtonType; children: ReactNode }) => {
    // Define different button themes based on the buttonType
    let buttonTheme = {}
    switch (buttonType) {
        case 'primary':
            buttonTheme = {
                defaultHoverBg: '#1C65B0',
                defaultHoverColor: '#FFFFFF',
                defaultActiveBg: '#1C65B0',
                borderColorDisabled: '#9d9d9d',
                colorBgContainerDisabled: '#9d9d9d',
                colorTextDisabled: '#FFFFFF',
                defaultHoverBorderColor: '#1C65B0',
                defaultActiveColor: '#FFFFFF'
            }
            break
        case 'secondary':
            buttonTheme = {
                defaultHoverBg: '#E0E0E0',
                defaultHoverColor: '#141F29',
                borderColorDisabled: 'E0E0E0',
                colorBgContainerDisabled: 'E0E0E0',
                defaultActiveBg: '#E0E0E0',
                defaultHoverBorderColor: '#141F29',
                defaultActiveColor: '#141F29'
            }
            break

        case 'transparent':
            buttonTheme = {
                defaultHoverBg: 'rgba(0, 0, 0, 0.0)',
                defaultHoverColor: '#E27670',
                defaultActiveColor: '#E27670'
            }
            break

        default:
            break
    }

    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: buttonTheme
                }
            }}>
            {children}
        </ConfigProvider>
    )
}

export const TableConfig = ({
    children,
    paddingBlock,
    borderColor = '#F8FAFB',
    headerBg = '#FFFFFF'
}: {
    children: ReactNode
    paddingBlock: number
    borderColor: string
    headerBg?: string
}) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Table: {
                        headerColor: '#334155',
                        headerBg: headerBg ? headerBg : '#105E96',
                        colorPrimary: '#64748B',
                        cellFontSize: 16,
                        cellPaddingBlock: paddingBlock,
                        cellPaddingInline: paddingBlock,
                        fontFamily: 'DM Sans',
                        fontWeightStrong: 400,
                        rowSelectedHoverBg: '#fafafa',
                        rowSelectedBg: '#fafafa',
                        borderColor: borderColor,
                        headerSplitColor: '#D4D4D4',
                        stickyScrollBarBorderRadius: 10
                    }
                }
            }}>
            {children}
        </ConfigProvider>
    )
}

export const SwitchTabConfig = ({ children }: { children: ReactNode }) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Tabs: {
                        inkBarColor: '#0F1322',
                        itemSelectedColor: '#0F1322',
                        itemHoverColor: '#0F1322',
                        itemActiveColor: '#0F1322'
                    }
                }
            }}>
            {children}
        </ConfigProvider>
    )
}
