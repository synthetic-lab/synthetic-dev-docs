import { LargePageContainer } from "@/app/components/page/containers";

export default async function DevLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return <LargePageContainer className="px-8 py-4">
    {children}
  </LargePageContainer>;
}