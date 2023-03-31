import './globals.css'

export const metadata = {
  title: 'Careeryzer',
  description: 'Get your career going!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
