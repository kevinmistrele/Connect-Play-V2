"use client"

import { LoginModal } from "@/components/common/login-modal"
import { RegisterModal } from "@/components/common/register-modal"
import {useModal} from "@/providers/modal-context.tsx";


export function GlobalModals() {
    const { modalType, closeModal, openModal } = useModal()

    return (
        <>
            <LoginModal
                isOpen={modalType === "login"}
                onClose={closeModal}
                onSwitchToRegister={() => openModal("register")}
            />
            <RegisterModal
                isOpen={modalType === "register"}
                onClose={closeModal}
                onSwitchToLogin={() => openModal("login")}
            />
        </>
    )
}
