import React from 'react'
import './Resume.css'
import info from './info.json'

const formatPhone = number => `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6)}`

const formatEmail = email_object => `${email_object.user}@${email_object.domain}`

const Address = props => {
  const { data } = props

  return (
    <span className="address">
      {data.line1}&nbsp;
      {data.line2},&nbsp;
      {data.city},&nbsp;
      {data.state},&nbsp;
      {data.zip}
    </span>
  )
}

const PersonalInfo = () => {
  const {
    name,
    phone: _phone,
    email: _email,
    github,
    address
  } = info.personal

  const phone = formatPhone(_phone.toString())
  const email = formatEmail(_email)

  return (
    <section>
      <header className="title">{name.first} {name.middle.charAt(0)}. {name.last}</header>
      <footer className="subtitle">
        <span className="phone">{phone}</span> |&nbsp;
        <span className="email"><a href={`mailto:${email}`}>{email}</a></span> |&nbsp;
        <span className="github"><a href={`https://www.github.com/${github}`}>{`github.com/${github}`}</a></span> |&nbsp;
        <Address
          data={address}
        />
      </footer>
    </section>
  )
}

const Bio = () => (
  <section>
    {info.bio.map((para, i) => <p key={i}>{para}</p>)}
  </section>
)

const Skills = () => (
  <section id="skills">
    <header>Skills</header>
    <ul>
      {info.skills.map((skill, i) => <li key={i}>{skill}</li>)}
    </ul>
  </section>
)

const Education = () => (
  <section id="education">
    <header>Education</header>
    <section>
      <div>Bachelor of Arts, Computer Science &ndash; Software Development Concentration</div>
      <div>Graduation Date: August 15th, 2018</div>
      <div>Covenant College, Lookout Mountain, GA</div>
      <div>GPA: 3.6/4.0</div>
    </section>
  </section>
)

const Job = props => (
  <section>
    <div>{props.title}</div>
    <div>{props.company}</div>
    <div>{props.location}</div>
    <div>{props.date.start} &mdash; {props.date.end}</div>
  </section>
)

const WorkExperience = () => (
  <section id="experience">
    <header>Work Experience</header>
    {info.work_experience.map(
      (job, i) => <Job
        date={job.date}
        title={Array.isArray(job.title) ? job.title.join(' & ') : job.title}
        company={job.company}
        location={job.location}
        key={i}
      />
    )}
  </section>
)

const Reference = props => {

  return (
    <section>
      <div>{props.name}</div>
      <div>{props.title}</div>
      <div>{props.company}</div>
      <div>{props.location}</div>
      <div>{formatPhone(props.phone.toString())}</div>
      <div>{formatEmail(props.email)}</div>
    </section>
  )
}

const References = () => (
  <section id="references">
    <header>References</header>
    {info.references.map(
      (reference, i) => <Reference
        name={reference.name}
        title={reference.title}
        company={reference.company}
        location={reference.location}
        phone={reference.phone}
        email={reference.email}
        key={i}
      />
    )}
  </section>
)

const Resume = () => (
  <article>
    <PersonalInfo />
    <hr />
    <Bio />
    <hr />
    <Skills />
    <hr />
    <Education />
    <hr />
    <WorkExperience />
    <hr />
    <References />
  </article>
)

export default Resume
