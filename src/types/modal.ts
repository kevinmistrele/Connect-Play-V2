export const MODALS = {
    login: "LoginModal",
    register: "RegisterModal",
} as const;

export type ModalType = keyof typeof MODALS;
