"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import {ModalType} from "@/types/modal.ts";


interface ModalContextProps {
    openModal: (type: ModalType) => void
    closeModal: () => void
    modalType: ModalType | null
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [modalType, setModalType] = useState<ModalType | null>(null)

    const openModal = (type: ModalType) => setModalType(type)
    const closeModal = () => setModalType(null)

    return (
        <ModalContext.Provider value={{ openModal, closeModal, modalType }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => {
    const context = useContext(ModalContext)
    if (!context) throw new Error("useModal must be used within a ModalProvider")
    return context
}
