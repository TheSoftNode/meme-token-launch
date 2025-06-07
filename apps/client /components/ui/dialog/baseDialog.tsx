import { CloseIcon } from '@/components/icons'
import React from 'react'

interface Props {
  children: React.ReactNode
  closeDialog: Function
  className?: string
  open: boolean
}

function BaseDialog({ children, closeDialog, className, open }: Props) {
  if (!open) return null
  return (
    <div className="fixed overflow-y-auto w-screen h-screen inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
      <div
        className={`bg-secondary p-6 rounded-lg shadow-lg z-50 relative ${className}`}
        id="dialog"
        style={{ maxHeight: '98vh' }}
      >
        <button
          className="absolute w-[32px] right-4 text-[32px] font-semibold top-6"
          id="close-btn"
          onClick={() => closeDialog()}
        >
          <CloseIcon />
        </button>
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  )
}

export default BaseDialog
