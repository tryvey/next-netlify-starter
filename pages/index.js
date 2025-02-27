import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      //<Head>
      //<title>jamietreyvaud.com</title>
      //<link rel="icon" href="/favicon.ico" />
      //</Head>

      <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Design Manager | Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <script defer src="script.js"></script>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #1d1d1f;
            color: #f5f5f7;
            text-align: center;
        }
        header {
            background: #000;
            padding: 40px 20px;
            text-align: center;
            font-size: 1.5em;
            font-weight: bold;
        }
        nav ul {
            list-style: none;
            padding: 0;
            margin: 20px 0 0;
        }
        nav ul li {
            display: inline;
            margin: 0 20px;
        }
        nav ul li a {
            text-decoration: none;
            color: #f5f5f7;
            font-size: 1.2em;
            font-weight: 500;
        }
        section {
            max-width: 900px;
            margin: 60px auto;
            padding: 40px;
            background: #2c2c2e;
            border-radius: 12px;
        }
        h2 {
            font-size: 2em;
            font-weight: 600;
            margin-bottom: 20px;
        }
        .portfolio-item {
            background: #3a3a3c;
            padding: 20px;
            margin: 15px 0;
            border-radius: 8px;
            font-size: 1.2em;
            font-weight: 500;
        }
        footer {
            text-align: center;
            padding: 30px;
            background: #000;
            font-size: 1em;
            color: #a1a1a6;
        }
        
        /* Mobile Responsive Styling */
        @media (max-width: 768px) {
            header {
                font-size: 1.2em;
                padding: 30px 15px;
            }
            nav ul {
                display: flex;
                flex-direction: column;
                gap: 10px;
                padding: 0;
            }
            nav ul li {
                display: block;
                margin: 0;
            }
            section {
                max-width: 90%;
                padding: 30px;
                margin: 40px auto;
            }
            h2 {
                font-size: 1.8em;
            }
            .portfolio-item {
                font-size: 1em;
                padding: 15px;
            }
            footer {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Jamie Treyvaud</h1>
        <p>Design Manager | UX Leader | Product Strategist</p>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="about">
        <h2>About Me</h2>
        <p>Experienced Design Manager with a passion for leading cross-functional teams, driving UX excellence, and crafting user-centered solutions.</p>
    </section>

    <section id="work">
        <h2>Work Experience</h2>
        <p>Currently leading design teams at [Company Name]. Previously at [Company], working on digital transformation and innovation.</p>
    </section>

    <section id="portfolio">
        <h2>Portfolio</h2>
        <div class="portfolio-item">P&T 1</div>
        <div class="portfolio-item">Project 2</div>
        <div class="portfolio-item">Project 3</div>
    </section>

    <section id="contact">
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: <a href="#">Your Profile</a></p>
    </section>

    <footer>
        <p>&copy; 2025 Your Name. All rights reserved.</p>
    </footer>
</body>

      <Footer />
    </div>
  )
}
