import css from "@/app/components/css";
import { LargePageContainer } from "@/app/components/page/containers";

export const DEV_PADDING_X = "px-8";

export default async function DevLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return <LargePageContainer className={css(DEV_PADDING_X, "py-4")}>
    {children}
  </LargePageContainer>;
}