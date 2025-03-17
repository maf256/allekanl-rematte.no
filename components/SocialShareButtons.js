import styled from 'styled-components'
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaPinterest,
  FaTelegram,
  FaWhatsapp,
  FaInstagram,
  FaSms,
} from 'react-icons/fa'

export default function SocialShare({ url, title, description }) {
  const encodedURL = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)

  const platforms = [
    {
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`,
      icon: <FaFacebook />,
      name: 'Facebook',
    },
    {
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedURL}`,
      icon: <FaLinkedin />,
      name: 'LinkedIn',
    },
    {
      href: `https://twitter.com/intent/tweet?url=${encodedURL}&text=${encodedTitle}`,
      icon: <FaTwitter />,
      name: 'Twitter',
    },
    {
      href: `https://pinterest.com/pin/create/button/?url=${encodedURL}&description=${encodedDescription}`,
      icon: <FaPinterest />,
      name: 'Pinterest',
    },
    {
      href: `https://telegram.me/share/url?url=${encodedURL}&text=${encodedTitle}`,
      icon: <FaTelegram />,
      name: 'Telegram',
    },
    {
      href: `https://wa.me/?text=${encodedTitle}%20${encodedURL}`,
      icon: <FaWhatsapp />,
      name: 'WhatsApp',
    },
    {
      href: `https://www.instagram.com/?url=${encodedURL}`,
      icon: <FaInstagram />,
      name: 'Instagram',
    },
    {
      href: `sms:?&body=${encodedTitle}%20${encodedURL}`,
      icon: <FaSms />,
      name: 'SMS',
    },
  ]

  return (
    <SocialContainer>
      <ShareText>Share this page</ShareText>
      {platforms.map(platform => (
        <SocialLink
          key={platform.name}
          href={platform.href}
          target="_blank"
          rel="noopener noreferrer"
          title={`Share via ${platform.name}`}
          aria-label={`Share via ${platform.name}`}
        >
          {platform.icon}
        </SocialLink>
      ))}
    </SocialContainer>
  )
}

export const SocialContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`

export const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.iconColor || '#ffffff'};
  font-size: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.secondary};
  }
`

export const ShareText = styled.span`
  width: 100%;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.Text_Title};
`
