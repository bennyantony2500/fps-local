import { createApp } from '@backstage/frontend-defaults';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import azureDevOpsPlugin from '@backstage-community/plugin-azure-devops/alpha';
import { navModule } from './modules/nav';

export default createApp({
  features: [catalogPlugin, azureDevOpsPlugin, navModule],
});


