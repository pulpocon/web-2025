export interface MenuItem {
  link: string
  title: string
}

const menu: MenuItem[] = [
  {
    'link': '/#home',
    'title': 'Home'
  },
  {
    'link': 'https://entradas.pulpocon.es',
    'title': 'Tickets'
  },
  {
    'link': '/#sponsors',
    'title': 'Sponsors'
  },
  {
     'link': '/program',
     'title': 'Schedule'
  },
  {
    'link': '/organization',
    'title': 'Organization'
  },
  {
    'link': '/codigo-de-conducta',
    'title': 'Code of Conduct'
  },
  {
    'link': '/diversity',
    'title': 'Diversity'
  },
  {
    'link': '/ediciones-anteriores',
    'title': 'Past Editions'
  }
]

export default menu
