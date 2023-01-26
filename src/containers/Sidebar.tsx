import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="logo">
        <img src="assets/images/logo.svg" alt="logo" />
        <h1>Gaurav</h1>
        <p>Web Developer</p>
      </div>
      <div className="sidebar--links-container">
        <a href="/link1" className="navlink">
          Link1
        </a>
        <a href="/link2" className="navlink active">
          Link2
        </a>
        <a href="/link3" className="navlink">
          Link3
        </a>
        <a href="/link4" className="navlink">
          Link4
        </a>
      </div>
    </div>
  )
}

export default Sidebar
