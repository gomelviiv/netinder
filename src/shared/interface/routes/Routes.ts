import React from 'react';

interface IRouteComponent {
  appTitle?: string;
  path: string;
  exact?: boolean;
  component: React.FC;
}

export default IRouteComponent;
