import CookieBot from 'react-cookiebot';

import config from '@plone/volto/registry';

export const CookieBotAppExtra = (props) => {
  const domainGroupId = config.settings.cookiebotDomainGroupId;
  console.log('rendering cookiebotappextra', domainGroupId);
  return <CookieBot domainGroupId={domainGroupId} />;
};
