import { ContactEmail } from "@/app/_global_components";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: any) {
    try {
        const body = await request.json();
        console.log("body", body)
        const { email, name, message, phone, subject } = body;
        const data: any = await resend.emails.send({
            from: "Stephen <non-reply@stephenleachman.com>",
            to: email,
            subject: "This is Stephen Leachman",
            bcc: "globalumbrella16@gmail.com",
            react: ContactEmail({
                name: name,
                email: email,
                message: message
            }) as React.ReactElement,
        });

        if (data.status === 200) {
            return NextResponse.json({ message: 'Email Successfully Sent!' })
        }
        return NextResponse.json(data)
        
    } catch (error) {
           console.log('error', error)
    }
}