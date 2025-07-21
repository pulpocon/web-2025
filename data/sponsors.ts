export interface Sponsor {
  name: string
  logo: string
  link?: string;
}

export enum SponsorType {
  Octopus = 'octopus',
  Diamond = 'diamond',
  Gold = 'gold',
  Silver = 'silver',
  Multimedia = 'multimedia',
  Partner = 'partners'
}

type SponsorGroups = Record<SponsorType, Sponsor[]>

const sponsors: SponsorGroups = {
  [SponsorType.Octopus]: [
    {
      name: 'Lambdaloopers',
      logo: '/i/sps/lambdaloopers.webp',
      link: 'https://lambdaloopers.com/?utm_origin=pulpocon&utm_medium=web'
    },
  ],
  [SponsorType.Diamond]: [
    {
      name: 'Grafana',
      logo: '/i/sps/grafana.svg',
      link: 'https://grafana.com/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'Innatial',
      logo: '/i/sps/innatial.png',
      link: 'https://www.innatial.com/?utm_origin=pulpocon&utm_medium=web'
    }
  ],
  [SponsorType.Gold]: [
    {
      name: 'Gradiant',
      logo: '/i/sps/gradiant.png',
      link: 'https://gradiant.org/?utm_origin=pulpocon&utm_medium=web'
    },
  ],
  [SponsorType.Silver]: [
    {
      name: 'Vitae',
      logo: '/i/sps/vitae.png',
      link: 'https://www.vitaedigital.com'
    },
    {
      name: 'Apipana',
      logo: '/i/sps/apipana.png',
      link: 'https://apipana.io/es?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'Qualifyze',
      logo: '/i/sps/qualifyzeLogo.png',
      link: 'https://www.qualifyze.com/?utm_origin=pulpocon&utm_medium=web'
    },
  ],
  [SponsorType.Multimedia]: [
    {
      name: 'Teltek',
      logo: '/i/sps/teltek.png',
      link: 'https://teltek.es/?utm_origin=pulpocon&utm_medium=web'
    }
  ],
  [SponsorType.Partner]: [
    {
      name: 'AFundación',
      logo: '/i/sps/afundacion.png',
      link: 'https://www.afundacion.org/es/centros/centro/centro_social_afundacion_vigo/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'NH-Collection',
      logo: '/i/sps/nh-collection.png',
      link: 'https://www.nh-collection.com/es/hotel/nh-collection-vigo/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'El Molino',
      logo: '/i/sps/el-molino.jpeg',
      link: 'https://www.facebook.com/MolinoVigo/?utm_origin=pulpocon&utm_medium=web'
    }
  ]

}

export default sponsors
