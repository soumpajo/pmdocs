import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTranslations } from "next-intl"
import { sendMagicLink } from "@/app/(auth)/login/actions"

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {

    const translation = useTranslations("auth")

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>{translation("title")}</CardTitle>
                    <CardDescription>
                        {translation("title_description")}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="email">{translation("email_address")}</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="me@example.com"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <Button type="submit" formAction={sendMagicLink} className="w-full">
                                    {translation("get_magic_link")}
                                </Button>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
