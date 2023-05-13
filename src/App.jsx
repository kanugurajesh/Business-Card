import './App.css'

function App() {
  return (
    <div className="App">
      <header className='header1'>
        <img src="/rajesh.svg" alt="" />
        <div className="profile">
          <h1>Kanugu Rajesh</h1>
          <h2>Full Stack Developer</h2>
          <h3><a href="https://dulcet-speculoos-316a92.netlify.app/">My website</a></h3>
        </div>
        <div className="contact">
          <a href=""> <img src="/gmail.gif" alt="" /> Email</a>
          <a href="https://www.linkedin.com/in/rajesh-kanugu-aba8a3254/"> <img src="/linked.gif" alt="" /> Linkedin</a>
        </div>
      </header>
      <main>
        <section>
          <h2>About</h2>
          <p>
            I'm rajesh i am a full stack developer i am expert in web development, app development, and i am also expert in python and java programming languages.
          </p>
        </section>
        <section>
          <h2>Intrests</h2>
          <p>
            I spend my time programming and hearing to conferences like google i/o and microsoft build and i also spend my time in learning new things.
          </p>
        </section>
      </main>
      <footer>
        <div className="icons">
          <a href="https://github.com/rajesh604"><img src="./github.gif" alt="" /></a>
          <a href="https://www.linkedin.com/in/rajesh-kanugu-aba8a3254/"><img src="./linkedin.gif" alt="" /></a>
          <a href="https://twitter.com/exploringengin1"><img src="./twitter.gif" alt="" /></a>
          <a href="https://dulcet-speculoos-316a92.netlify.app/"><img src="./website.gif" alt="" /></a>
        </div>
        <p>icons by icon8</p>
      </footer>
    </div>
  )
}



export default App
