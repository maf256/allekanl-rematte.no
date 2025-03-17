import styled from 'styled-components'
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa'
import {
  ShareText,
  SocialLink,
  SocialShare,
  SocialContainer,
} from './SocialShareButtons'
export default function SocialMediaLinks() {
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/farsangi',
      icon: <FaLinkedin />,
      name: 'LinkedIn',
    },
    {
      href: 'https://github.com/maf256',
      icon: <FaGithub />,
      name: 'GitHub',
    },
    {
      href: 'tel:+4740189111',
      icon: <FaPhone />,
      name: 'Phone',
    },
    {
      href: 'https://wa.me/+4740189111',
      icon: <FaWhatsapp />,
      name: 'WhatsApp',
    },
    {
      href: 'mailto:majid@sitedesign.no',
      icon: <FaEnvelope />,
      name: 'Email',
    },
  ]

  return (
    <SocialContainer>
      <ShareText>Follow me on social media</ShareText>
      {socialLinks.map(social => (
        <SocialLink
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          title={social.name}
          aria-label={social.name}
        >
          {social.icon}
        </SocialLink>
      ))}
    </SocialContainer>
  )
}

// const SocialContainer = styled.div`
//   display: flex;
//   gap: 15px;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
//   margin-top: 20px;
// `

// const SocialLink = styled.a`
//   width: 45px;
//   height: 45px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 50%;
//   background-color: ${({ theme }) => theme.primary};
//   color: ${({ theme }) => theme.iconColor || '#ffffff'};
//   font-size: 20px;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: scale(1.1);
//     background-color: ${({ theme }) => theme.secondary};
//   }
// `
