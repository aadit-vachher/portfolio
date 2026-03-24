export default function Sidebar(){
  return(
    <aside className="sidebar">
      <img
        src="/profile.png"
        alt="Profile"
        className="sidebar-avatar"
      />
      <h1 className="sidebar-name">Aadit Vachher</h1>
      <p className="sidebar-username">aadit-vachher</p>
      <p className="sidebar-bio">
        Full-stack developer building clean, scalable
        web applications. Passionate about React, Python,
        and open-source.
      </p>

      <button className="sidebar-follow-btn">Follow / Contact</button>

      <div className="sidebar-info">
        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"/>
          </svg>
          <span>New Delhi, India</span>
        </div>
        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5C0 2.784.784 2 1.75 2zM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809v6.442zm13-8.181v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88z"/>
          </svg>
          <a href="mailto:your.email@gmail.com">your.email@gmail.com</a>
        </div>
        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M2 2.75C2 1.784 2.784 1 3.75 1h8.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25zm1.75-.25a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25zM8 12a1 1 0 100-2 1 1 0 000 2z"/>
          </svg>
          <span>+91 98765 43210</span>
        </div>
        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"/>
          </svg>
          <a href="https://linkedin.com/in/aadit" target="_blank" rel="noreferrer">linkedin.com/in/aadit</a>
        </div>
      </div>

      <div className="sidebar-orgs">
        <h3 className="sidebar-orgs-title">Organizations</h3>
        <div className="sidebar-orgs-list">
          <span className="org-pill">React</span>
          <span className="org-pill">Node.js</span>
          <span className="org-pill">Python</span>
          <span className="org-pill">JavaScript</span>
          <span className="org-pill">MongoDB</span>
        </div>
      </div>
    </aside>
  )
}
