import { profile } from '../data/profile'
import SectionHeading from '../components/ui/SectionHeading'
export default function About() {
  const contactLinks = profile.contactLinks.filter(link => /^https?:\/\//i.test(link.url) || /^mailto:[^\s@]+@[^\s@]+$/.test(link.url))
  return <div className="container page">
    <header className="page-header"><p className="eyebrow">BEHIND THE PORTFOLIO</p><h1>About Me<span className="accent">.</span></h1><p className="page-lead">I'm {profile.name}, a Computer Science student exploring how thoughtful software can solve practical problems.</p></header>
    <div className="about-grid"><section><SectionHeading title="My education" /><div className="education-card"><p className="eyebrow">CURRENT STUDIES</p><h3>{profile.degree}</h3><p>{profile.university}</p></div><p>My academic focus connects core computing concepts with my interest in backend systems and full-stack applications. This portfolio brings together my coursework and will grow to include verified projects and reflections.</p></section>
    <section><SectionHeading title="Professional direction" /><p>I want to develop reliable, useful software and continue learning how to design, test, and maintain it. My career interests include:</p><ul className="plain-list">{profile.careerInterests.map(interest => <li key={interest}>{interest}</li>)}</ul></section></div>
    <section className="section compact-section"><SectionHeading title="Skills & technical interests">Areas I am focused on developing through study and practice.</SectionHeading><div className="tags light-tags">{profile.interests.map(interest => <span key={interest}>{interest}</span>)}</div></section>
    <section className="contact-panel"><SectionHeading title="Contact" />{contactLinks.length ? <ul className="contact-links">{contactLinks.map(link => <li key={link.url}><a href={link.url}>{link.label}</a></li>)}</ul> : <p>Contact and professional profile links will be added when available.</p>}</section>
  </div>
}
