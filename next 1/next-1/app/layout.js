const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <header>
          <h2>Navbar</h2>
        </header>
        {children}
        <footer>
          <h3>Footer</h3>
        </footer>
      </body>
    </html>
  )
}

export default RootLayout