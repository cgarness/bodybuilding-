import "./globals.css";import type { Metadata,Viewport } from "next";
export const metadata:Metadata={title:"Physique OS",description:"Private bodybuilding coach and training log",manifest:"/manifest.webmanifest"};export const viewport:Viewport={themeColor:"#090b0c",width:"device-width",initialScale:1};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
