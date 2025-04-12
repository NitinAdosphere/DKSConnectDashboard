import { Button, Modal } from 'antd'
import { Dispatch, useState } from 'react'
import { ButtonThemeConfig } from '../configs.components'
import { EConfigButtonType } from '../../../types/state.types'
import Exclaim from '../../../assets/exclaim.svg'

export const DeleteUpdate = ({
    isDeleteUpdateModalOpen,
    setIsDeleteUpdateModalOpen,
    update
}: {
    isDeleteUpdateModalOpen: boolean
    setIsDeleteUpdateModalOpen: Dispatch<boolean>
    update: string
}) => {
    const [isDisabled, setIsDisabled] = useState(false)

    // const deleteUpdate = async () => {
    //     try {
    //         setIsDisabled(true)
    //         const res = await deleteUpdateById(update._id as string)
    //         if (res.success) {
    //             setIsDeleteUpdateModalOpen(false)
    //         }
    //     } finally {
    //         setIsDisabled(false)
    //     }
    // }
    return (
        <Modal
            open={isDeleteUpdateModalOpen}
            onCancel={() => setIsDeleteUpdateModalOpen(false)}
            footer={null}
            centered
            width={492}>
            <div className="flex items-center mt-5 justify-between gap-[12px]">
                <img
                    src={Exclaim}
                    alt=""
                />
                <span className=" font-dmSans font-normal text-[20px]">Are you sure you want to delete this Update ?</span>
            </div>
            <div className="flex w-full justify-end mt-6 gap-[17px]">
                <ButtonThemeConfig buttonType={EConfigButtonType.SECONDARY}>
                    <Button
                        className="bg-primary px-6 rounded-md text-white text-lg font-dmSans font-normal h-12"
                        onClick={() => setIsDeleteUpdateModalOpen(false)}>
                        No
                    </Button>
                </ButtonThemeConfig>

                <button
                    onClick={() => {}}
                    disabled={isDisabled}
                    className="bg-[#F90E0E] hover:bg-red-500 px-6 rounded-md border border-none text-white text-lg font-dmSans font-normal h-12">
                    Yes, Delete Update
                </button>
            </div>
        </Modal>
    )
}
