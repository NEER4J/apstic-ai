import { NextLogo } from "./next-logo";
import { SupabaseLogo } from "./supabase-logo";
import { BeforeAfter } from "./before-after";

export function Hero() {
  return (
    <div className="flex flex-col gap-16 items-center w-full">

      <h1>Yoo!</h1>
      <BeforeAfter />
    </div>
  );
}
