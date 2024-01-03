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
            from: "Stephen <contact@stephenleachman.com>",
            to: email,
            subject: "This is Stephen Leachman",
            react: ContactEmail({ firstName: name }) as React.ReactElement,
        });

        if (data.status === 200) {
            return NextResponse.json({ message: 'Email Successfully Sent!' })
        }
        return NextResponse.json(data)
        
    } catch (error) {
           console.log('error', error)
    }
}