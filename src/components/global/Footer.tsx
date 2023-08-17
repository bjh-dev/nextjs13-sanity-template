import ThemeToggle from '../theme-toggle'

function Footer() {
  return (
    <footer className="py-12">
      <div className="container flex justify-between items-center">
        <div>Example Site</div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  )
}

export default Footer
