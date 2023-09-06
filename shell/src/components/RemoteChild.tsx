import React, { Suspense } from 'react';
import { injectScript } from '@module-federation/nextjs-mf/utils';
import { ChildConfig } from '@/types/childManifest';

type RemoteChildProps = {
  config: ChildConfig
}

const RemoteChild = ({ config }: RemoteChildProps) => {
  const {id, url, module} = config;
  const getRemoteModule = async () => {
    const container = await injectScript({
      global: id,
      url: url,
    });
    
    return await container
      .get(module)
      // @ts-ignore
      .then((factory) => factory());
  };

  const Component = React.lazy(() => getRemoteModule());
  // console.log('Component', Component);

  /* return React.createElement(
    React.Suspense,
    { fallback: null },
    React.createElement(Component, {})
  ) */;

  return (
    <Suspense fallback={"<div>Loading</div>"}>
      <Component />
    </Suspense>
  )
};

export default RemoteChild;
