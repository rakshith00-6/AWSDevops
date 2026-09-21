
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">DevOps Hub</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#pipeline">CI/CD</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="tag">AWS + React + DevOps</p>

            <h1>
              Learn CI/CD by
              <span> Building & Deploying</span>
            </h1>

            <p className="description">
              A simple React application created to learn Git, GitHub,
              GitHub Actions, AWS EC2, Nginx and CI/CD deployment.
            </p>

            <div className="buttons">
              <button>Explore CI/CD</button>
              <button className="secondary">View Project</button>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <h2>What I'm Learning</h2>

          <div className="cards">
            <div className="card">
              <h3>Git & GitHub</h3>
              <p>
                Managing source code and tracking project changes.
              </p>
            </div>

            <div className="card">
              <h3>GitHub Actions</h3>
              <p>
                Automating build, testing and deployment workflows.
              </p>
            </div>

            <div className="card">
              <h3>AWS EC2</h3>
              <p>
                Deploying and hosting the React application on a server.
              </p>
            </div>
          </div>
        </section>

        <section className="pipeline" id="pipeline">
          <h2>CI/CD Pipeline</h2>

          <div className="pipeline-flow">
            <div>Code</div>
            <span>→</span>
            <div>GitHub</div>
            <span>→</span>
            <div>Build</div>
            <span>→</span>
            <div>Deploy</div>
            <span>→</span>
            <div>AWS EC2</div>
          </div>
        </section>
      </main>

      <footer id="contact">
        <p>DevOps Learning Project</p>
        <p>React + Vite + GitHub Actions + AWS EC2</p>
      </footer>
    </div>
  );
}

export default App;

