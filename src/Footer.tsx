import { CopyrightOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import React, { Fragment, CSSProperties } from 'react';

import GlobalFooter from './GlobalFooter';
import { WithFalse } from './typings';
import nova from './assets/logo/nova.svg';
import twitter from './assets/icons/twitter.svg';
import linkedin from './assets/icons/linkedin.svg';
import facebook from './assets/icons/facebook.svg';
import instagram from './assets/icons/instagram.svg';

const { Footer } = Layout;

const defaultLinks = [
  {
    key: 'twitter',
    title: <img src={twitter} alt="twitter" />,
    href: 'https://twitter.com/novasolutionsys/',
    blankTarget: true,
  },
  {
    key: 'linkedin',
    title: <img src={linkedin} alt="linkedin" />,
    href: 'https://www.linkedin.com/company/novasolutionsystems/',
    blankTarget: true,
  },
  {
    key: 'facebook',
    title: <img src={facebook} alt="facebook" />,
    href: 'https://www.facebook.com/novasolutionsystems/',
    blankTarget: true,
  },
  {
    key: 'instagram',
    title: <img src={instagram} alt="instagram" />,
    href: 'https://www.instagram.com/novasolutionsystems/',
    blankTarget: true,
  },
];

const today = new Date();
const currentYear = today.getFullYear();

export interface FooterProps {
  links?: WithFalse<
    {
      key?: string;
      title: React.ReactNode;
      href: string;
      blankTarget?: boolean;
    }[]
  >;
  copyright?: WithFalse<String>;
  style?: CSSProperties;
  className?: string;
}

const FooterView: React.FC<FooterProps> = ({
  links,
  copyright,
  style,
  className,
}: FooterProps) => (
  <Footer className={className} style={{ padding: 0, ...style }}>
    <GlobalFooter
      links={links !== undefined ? links : defaultLinks}
      copyright={
        copyright === false ? null : (
          <Fragment>
            <a
              href="https://novasolutionsystems.com/"
              target="blank"
              style={{ color: 'rgba(0,0,0,0.45)' }}
            >
              <img src={nova} alt="nova" /> Nova <CopyrightOutlined /> Copyright{' '}
              {currentYear}
            </a>
          </Fragment>
        )
      }
    />
  </Footer>
);

export default FooterView;
