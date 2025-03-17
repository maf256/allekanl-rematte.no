// components/Gravatar.js
import md5 from 'blueimp-md5'

const Gravatar = ({
  email,
  size = 80,
  defaultImage = 'identicon',
  alt = 'webutvikler',
}) => {
  const hash = md5(email.trim().toLowerCase())
  console.log(hash)

  const gravatarUrl = `https://www.gravatar.com/avatar/${hash}?s=${size}&d=${defaultImage}`

  return <img src={gravatarUrl} alt={alt} width={500} height={500} />
}

export default Gravatar
