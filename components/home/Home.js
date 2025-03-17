import Image from 'next/image'

import Img from '../common/image/matematikklærer.jpg'

import { Data } from '../common/Data'
import { Main, Div, Card } from './Home.styled.js'
import SocialShare from '../SocialShareButtons.js'
import SocialMediaLinks from '../SocialMediaLinks.js'

export default function Home({ language, theme }) {
  const langData = Data.home[language ? 'en' : 'nr']

  return (
    <>
      <Main aria-label="Introduction">
        <Card>
          <Image
            src={Img}
            alt="Webutvikler & Webdesign - Majid Askarifarsangi"
            placeholder="blur"
            priority={true}
          />
        </Card>
        <Div>
          <h1>{langData.h1}</h1>
          <h2>{langData.h2}</h2>
          <h3>{langData.h3}</h3>
          <h4>{langData.h4}</h4>
          <h5>{langData.h5}</h5>
          <p>{langData.p}</p>
          <p>{langData.p1}</p>
          <SocialMediaLinks />
          <SocialShare
            url="https://sitedesign.no"
            title="Webdesign og Webutvikling i Oslo - Majid Askarifarsangi"
            description="Profesjonell webutvikling og webdesign av Majid Askarifarsangi i Oslo"
          />
        </Div>
      </Main>
    </>
  )
}
