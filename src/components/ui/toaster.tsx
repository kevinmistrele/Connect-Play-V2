import { useToast } from "@/hooks/use-toast"
import {
  CntToast as Toast,
  CntToastClose as ToastClose,
  CntToastDescription as ToastDescription,
  CntToastProvider as ToastProvider,
  CntToastTitle as ToastTitle,
  CntToastViewport as ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
