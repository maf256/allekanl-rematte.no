import Image from 'next/image'

import Img from '../common/image/matematikklærer.webp'

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
            alt="matematikklærer - Johny Alnæs"
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
          <p>{langData.p2}</p>
          <SocialMediaLinks />
          <SocialShare
            url="https://allekanlærematte.no/"
            title="Pensjonert matematikklærer med lang erfaring og personlig oppfølgingi"
            description="Privatundervisning som gjør matematikk forståelig og spennende"
          />
        </Div>
      </Main>
    </>
  )
}
