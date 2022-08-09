import React from 'react';

interface IRouteComponent {
  appTitle?: string;
  path: string;
  exact?: boolean;
  name: string;
  component: React.FC;
}

export default IRouteComponent;
