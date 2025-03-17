import {
  AboutPage,
  NameContainer,
  InfoContainer,
  Ul,
  Knowledge,
  ButtonCV,
  Span,
  UlKnowledge,
  EducationContainer,
  Education,
  UlKnowledgeDiv,
  UlEducation,
} from './pageStyled'
import { Data } from '../common/Data'
import Image from 'next/image'
import Img from '../common/image/webutvikler-about.webp'
import { Play } from '../common/Svg'

export default function About({ language }) {
  const langData = Data.about[language ? 'en' : 'nr']
  const ListSection = ({ title, items }) => (
    <Education>
      <h2>{title}</h2>
      <UlEducation>
        {items.map((item, idx) => (
          <li key={idx}>
            <h5>{item.date}</h5>
            <div>
              <h3>{item.name}</h3>
              <h4>{item.uni}</h4>
            </div>
          </li>
        ))}
      </UlEducation>
    </Education>
  )
  return (
    <AboutPage className="DefuiltHomepage">
      <Span>{langData.subject}</Span>
      <h2>{langData.subject}</h2>
      <Image
        src={Img}
        alt="Webutvikler & Webdesign - Majid Askarifarsangi"
        placeholder="blur"
        priority={true}
      />
      <NameContainer>
        <h2>{langData.name}</h2>
        <h3>{langData.h2}</h3>
      </NameContainer>
      <InfoContainer>
        <Ul>
          {langData.info.map((item, inx) => (
            <li key={inx}>
              <h5>{item.name}: </h5>
              <p>{item.data}</p>
            </li>
          ))}
        </Ul>
      </InfoContainer>
      <ButtonCV
        href="https://drive.usercontent.google.com/uc?id=1I0il499PFD---80tiWG4vDpd0qnXW2xh&export=download"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download CV webutvikler & webdesign - Majid Askarifarsangi"
        title="Download CV webutvikler & webdesign - Majid Askarifarsangi"
      >
        {langData.buttonName}
      </ButtonCV>
      {/* <Skills>

        </Skills> */}

      <EducationContainer>
        <ListSection title="Education" items={langData.education} />
        <ListSection title="Experience" items={langData.experience} />
      </EducationContainer>
      <UlKnowledgeDiv>
        <h2>{langData.knowledge.knowledge}</h2>
        <Knowledge>
          <UlKnowledge>
            <h4>Frontend</h4>
            {langData.knowledge.frontend.map((item, inx) => (
              <li key={inx}>
                <span>
                  <Play fontSize="15px" />
                </span>
                <h5>{item}</h5>
              </li>
            ))}
          </UlKnowledge>
          <UlKnowledge>
            <h4>Backend</h4>
            {langData.knowledge.backend.map((item, inx) => (
              <li key={inx}>
                <span>
                  <Play fontSize="15px" />
                </span>
                <h5>{item}</h5>
              </li>
            ))}
          </UlKnowledge>
        </Knowledge>
      </UlKnowledgeDiv>
    </AboutPage>
  )
}
