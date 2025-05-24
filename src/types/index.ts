export interface NavItemProps {
  label: string;
  href: string;
}

export interface SocialLinkProps {
  name: string;
  url: string;
  icon: string;
}

export interface ProjectProps {
  title: string;
  description: string;
  image?: string;
}

export interface YouTubeVideoProps {
  id: string;
  title: string;
}