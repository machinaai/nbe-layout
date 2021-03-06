import React from 'react';
// eslint-disable-next-line import/no-unresolved
import ProLayout, { PageContainer } from '@machinaai/pro-layout';

export default () => (
  <div
    style={{
      height: 400,
      overflow: 'auto',
    }}
  >
    <ProLayout
      location={{
        pathname: '/articles/new',
      }}
      iconfontUrl="//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
      route={{
        routes: [
          {
            path: '/home',
            name: 'Favoritos',
            icon: 'icon-shoucang1',
          },
          {
            key: 'test',
            name: 'test',
            icon: 'smile',
            path: '/test',
            exact: true,
          },
          {
            path: '/home/overview',
            name: 'FaceBook',
            icon: 'icon-facebook',
          },
          {
            path: '/home/search',
            name: 'Twitter',
            icon: 'icon-twitter',
          },
        ],
      }}
    >
      <PageContainer content="Bienvenido">
        <div>Hello World</div>
      </PageContainer>
    </ProLayout>
  </div>
);
