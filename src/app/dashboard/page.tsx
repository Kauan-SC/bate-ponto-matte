import { Suspense } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";


export const instant = false;

export default async function Page() {
    const session = await getServerSession();

    if(!session) {
        redirect("/");
    }
    return (
        <div>
            <div> Dashboard </div>
            <div> 
                <LogoutButton/> 
            </div>
        </div>
    )
}