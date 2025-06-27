interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'joojen Running Page',
  siteUrl: 'https://joojen.com',
  logo: 'https://avatars.githubusercontent.com/u/4427397?s=400&u=1614c0c4c4cd75765a49e0ab27d0b7d47120b43b&v=4',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: '个人网站',
      url: 'https://joojen.com/',
    },
    {
      name: 'About',
      url: 'https://github.com/joojen/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
