import CustomCursor from "@/commons/CustomCursor";
import ScollPageProcess from "@/commons/ScollPageProcess";
import ThemeRegister from "@/commons/ThemeRegister";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "../share/styles/_global.scss";

export const metadata = {
  title: "Happy Bug",
  description: "Development blog",
};

const DefaultLayoutWrapper = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <body suppressHydrationWarning={true}>{children}</body>
  </html>
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <DefaultLayoutWrapper>
      <AppRouterCacheProvider>
        <ThemeRegister>
          {children}
          <CustomCursor />
          <ScollPageProcess />
        </ThemeRegister>
      </AppRouterCacheProvider>
    </DefaultLayoutWrapper>
  );
}
