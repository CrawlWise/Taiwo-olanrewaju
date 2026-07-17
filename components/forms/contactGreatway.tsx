
import { Card, CardContent } from '@/components/ui/card'
import { MessageSquare } from 'lucide-react'

export default function ContactGreatway() {
    const style = {
        width: "100%",
        height: "100%",
        border: "none",
        borderRadius: "8px"
    }
    return (
        <Card className="border-none shadow-premium rounded-[48px] overflow-hidden bg-white">
            <CardContent className="p-10 md:p-16">
                <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-2xl bg-burgundy/5 text-burgundy flex items-center justify-center">
                        <MessageSquare className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold font-poppins text-charcoal">Send a Message</h2>
                </div>
                <div className="greateway-form w-full">
                    <iframe
                        src="https://go.taiwoolanrewaju.org/widget/form/fokve2rX2PUcjp1Wk3Hn"
                        style={style}
                        id="inline-fokve2rX2PUcjp1Wk3Hn"
                        data-layout="{'id':'INLINE'}"
                        data-trigger-type="alwaysShow"
                        data-trigger-value=""
                        data-activation-type="alwaysActivated"
                        data-activation-value=""
                        data-deactivation-type="neverDeactivate"
                        data-deactivation-value=""
                        data-form-name="Website Contact Form"
                        data-height="606"
                        data-layout-iframe-id="inline-fokve2rX2PUcjp1Wk3Hn"
                        data-form-id="fokve2rX2PUcjp1Wk3Hn"
                        title="Website Contact Form"

                    >
                    </iframe>
                </div>
            </CardContent>
        </Card>
    )
}
