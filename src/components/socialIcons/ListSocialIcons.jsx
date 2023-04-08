import { GitHub, Instagram, Linkedin } from '../Icons'

const listSocialIcons = [
  {
    id: 'icon1',
    component: <GitHub />,
    path: 'https://github.com/estebanv23'
  },
  {
    id: 'icon2',
    component: <Linkedin />,
    path: 'https://linkedin.com/in/esteban-villamizar'
  },
  {
    id: 'icon3',
    component: <Instagram />,
    path: 'https://instagram.com/estebandev_'
  }
]

export default function ListSocialIcons () {
  return listSocialIcons.map(socialIcon => (
    <a href={socialIcon.path} target='_blank' key={socialIcon.id} rel='noreferrer'>
      {socialIcon.component}
    </a>
  ))
}
