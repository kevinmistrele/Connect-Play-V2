import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
    icon: LucideIcon
    title: string
    description: string
    iconColor: "primary" | "accent" | "primary-light" | "error"
}

export function FeatureCard({
                                icon: Icon,
                                title,
                                description,
                                iconColor,
                            }: FeatureCardProps) {
    const iconColors: Record<FeatureCardProps["iconColor"], string> = {
        primary: "bg-primary/20 text-primary",
        accent: "bg-accent/20 text-accent",
        "primary-light": "bg-primary-light/20 text-primary-light",
        error: "bg-destructive/20 text-destructive",
    }

    return (
        <div className="bg-card-bg rounded-xl p-6 border border-card-bg hover:border-primary/60 transition-all duration-300">
            <div
                className={`w-12 h-12 rounded-md flex items-center justify-center mb-4 ${iconColors[iconColor]}`}
            >
                <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-poppins text-xl font-semibold mb-2 text-text-light">
                {title}
            </h3>
            <p className="font-inter text-sm text-text-light/80">{description}</p>
        </div>
    )
}
