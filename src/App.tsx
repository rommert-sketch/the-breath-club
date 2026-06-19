import './App.css';
import {
  NavBar,
  SectionDark,
  SectionLight,
  BoxBreath,
  HeadlineDark,
  HeadlineLight,
  Button,
  Card,
  FAQItem,
  ContactBlock,
  JourneySelector,
  ParallaxDivider,
  WhatIsBreathwork,
} from './components';

const FAQ_ITEMS = [
  {
    question: 'What is breathwork and how does it work?',
    answer:
      'Breathwork is a conscious breathing practice that uses intentional rhythm and depth to shift your nervous system, release stored tension, and access deeper states of awareness. By changing how you breathe, you change how you feel — in minutes, not months.',
  },
  {
    question: 'Do I need any experience to start?',
    answer:
      "None at all. Every session is adapted to where you are right now. Whether you've never tried anything like this or you've been exploring somatic practices for years, the breath meets you exactly where you are.",
  },
  {
    question: 'What can I expect during a private session?',
    answer:
      "We begin with a short conversation to understand what you're carrying. From there, I guide you through a breathing sequence that's right for you — usually 45 to 60 minutes of active breathwork, followed by an integration period. Some people feel euphoric. Some cry. Some sleep deeply after. All of it is welcome.",
  },
  {
    question: 'Is this suitable for people with anxiety or trauma?',
    answer:
      "Yes, with care. Breathwork can be profoundly supportive for anxiety and stored emotional material — but we always go at a pace that feels safe for your system. If you have a trauma history or medical concerns, please mention it when booking so we can shape the session accordingly.",
  },
  {
    question: 'Where do sessions take place?',
    answer:
      'Private sessions are available in-person in Leiden, Netherlands, and online via video call. Group events are announced on a rolling basis — follow along to stay in the loop.',
  },
];

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

export default function App() {
  return (
    <>
      {/* 1. Navigation */}
      <NavBar
        onBreathWithMe={() =>
          document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
        }
        onBookSession={scrollToContact}
      />

      {/* 2. Hero */}
      <SectionDark centered id="hero">
        <div className="hero-content">
          <HeadlineDark
            boldLine="The Medicine is in"
            italicLine="the Exhale."
          />
          <p className="hero-body">
            Immersive breathwork experiences shaped by music, ritual, and presence.
            Designed to help you slow down, release tension, and reconnect.
          </p>
          <div className="hero-actions">
            <Button variant="outline" onClick={() => document.getElementById('what-is-breathwork')?.scrollIntoView({ behavior: 'smooth' })}>What is Breathwork?</Button>
            <Button variant="solid" onClick={scrollToContact}>
              Book a Session
            </Button>
          </div>
        </div>
      </SectionDark>

      {/* 3. Intro — two-column: BoxBreath left, text right */}
      <SectionDark>
        <div className="intro-two-col">
          <div className="intro-two-col__left">
            <BoxBreath />
          </div>
          <div className="intro-two-col__right">
            <p className="section-label">The practice</p>
            <p className="intro-text">
              Breathwork is not a technique. It is a return. A way of using the most
              fundamental thing you do — breathing — to move through what words
              can't reach. We bring consciousness to the breath so the breath can
              bring you back to yourself. Simple. Ancient. Quietly radical.
            </p>
          </div>
        </div>
      </SectionDark>

      {/* 4. What is Breathwork */}
      <SectionDark id="what-is-breathwork">
        <WhatIsBreathwork />
      </SectionDark>

      {/* 5. Spaceholder / Bio */}
      <SectionLight>
        <div className="spaceholder">
          <div className="spaceholder__photo-wrap">
            <img
              src="/images/rommert.jpg"
              alt="Rommert Crépin"
              className="spaceholder__photo-img"
              onError={e => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
                (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
              }}
            />
            <div className="spaceholder__photo spaceholder__photo--fallback">
              Photo — drop rommert.jpg into public/images/
            </div>
          </div>
          <div className="spaceholder__text">
            <HeadlineLight as="p">About the facilitator</HeadlineLight>
            <h2 className="spaceholder__name">Rommert Crépin</h2>
            <p className="spaceholder__bio">
              The Breath Club is guided by me, Rommert. I am a breathwork
              facilitator and long-time explorer of personal development and
              somatic practices.
            </p>
            <p className="spaceholder__bio">
              My sessions combine breathwork, music, nature, and ritual with a
              grounded understanding of nervous system regulation.
            </p>
          </div>
        </div>
      </SectionLight>

      {/* 5. Parallax image divider — quote only, no label */}
      <ParallaxDivider
        imageSrc="/images/fjord.jpg"
        quote="The medicine is in the exhale."
      />

      {/* 6. Journey Selector */}
      <SectionDark>
        <p className="section-label">Choose your path</p>
        <HeadlineDark boldLine="How do you want" italicLine="to breathe?" />
        <div style={{ marginTop: 'var(--space-8)' }}>
          <JourneySelector
            onPrivate={scrollToContact}
            onGroup={scrollToContact}
          />
        </div>
      </SectionDark>

      {/* 7. Packages */}
      <SectionDark>
        <p className="section-label">Investment</p>
        <HeadlineDark boldLine="The journeys" italicLine="available to you." />
        <div className="packages-grid">
          <Card
            subtitle="Single session"
            title="First Breath"
            description="Your first step. One full session to experience what breathwork feels like in your body — no commitment, no pressure. Just you and the breath."
            price="€100"
            ctaLabel="Book this"
            variant="dark"
            onCta={scrollToContact}
          />
          <Card
            subtitle="3 sessions"
            title="The Current"
            description="Real change takes repetition. Three sessions spread over six weeks to establish a rhythm, process what comes up, and begin to integrate the practice into your life."
            price="€280"
            ctaLabel="Start here"
            variant="dark"
            onCta={scrollToContact}
          />
          <Card
            subtitle="5 sessions"
            title="Full Immersion"
            description="A complete journey. Five sessions with deeper work, longer integration periods, and ongoing support between sessions. For those who are ready to go all the way in."
            price="€400"
            ctaLabel="Go deep"
            variant="dark"
            onCta={scrollToContact}
          />
        </div>
      </SectionDark>

      {/* 8. FAQ */}
      <SectionLight>
        <p className="section-label" style={{ color: 'var(--color-glacier-stone)' }}>
          Questions
        </p>
        <h2 className="section-heading-light">Things people ask</h2>
        <div className="faq-list">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem key={i} question={item.question} answer={item.answer} />
          ))}
        </div>
      </SectionLight>

      {/* 9. Contact */}
      <SectionDark centered id="contact">
        <ContactBlock
          headline="Ready to breathe?"
          body="Reach out to book a session or ask a question. Every journey starts with a single message."
          email="thebreathclub@icloud.com"
          phone="+31610566369"
          whatsapp="https://wa.me/31610566369"
        />
      </SectionDark>
    </>
  );
}
