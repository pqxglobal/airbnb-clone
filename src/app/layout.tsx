import './globals.css'

export const metadata = {
  title: 'Airbnb Clone',
  description: 'Airbnb clone by Sonny Sangha',
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
