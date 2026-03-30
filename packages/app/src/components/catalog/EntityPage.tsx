import React from 'react';
import { EntityLayout } from '@backstage/plugin-catalog';
import {
  EntityAzurePipelinesContent,
  EntityAzurePullRequestsContent,
  isAzureDevOpsAvailable,
} from '@backstage-community/plugin-azure-devops';

export const EntityPage = () => (
  <EntityLayout>
    
    {/* CI/CD TAB */}
    <EntityLayout.Route
      if={isAzureDevOpsAvailable}
      path="/ci-cd"
      title="CI/CD"
    >
      <EntityAzurePipelinesContent />
    </EntityLayout.Route>

    {/* PULL REQUESTS TAB */}
    <EntityLayout.Route
      if={isAzureDevOpsAvailable}
      path="/pull-requests"
      title="Pull Requests"
    >
      <EntityAzurePullRequestsContent />
    </EntityLayout.Route>

  </EntityLayout>
);