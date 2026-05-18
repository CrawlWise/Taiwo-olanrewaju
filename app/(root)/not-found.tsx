"use client";

import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-slate-50/50 py-24 px-6 text-center">
      <div className="max-w-md w-full bg-white rounded-[32px] p-10 md:p-14 shadow-premium border border-slate-100">
        <div className="w-16 h-16 bg-burgundy/5 text-burgundy rounded-2xl flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="text-6xl font-extrabold font-poppins text-charcoal mb-4">404</h1>
        <h2 className="text-2xl font-bold font-poppins text-charcoal mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-10 leading-relaxed font-inter">
          The page you are looking for does not exist or has been moved to another location.
        </p>
        <Link href="/">
          <Button className="w-full h-14 bg-burgundy hover:bg-burgundy-dark text-white rounded-2xl flex items-center justify-center gap-2 cursor-pointer font-bold uppercase tracking-wider text-xs shadow-lg">
            <ArrowLeft className="w-4 h-4" /> Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
