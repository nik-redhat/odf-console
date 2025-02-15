import * as React from 'react';
import { useCustomTranslation } from '@odf/shared/useCustomTranslationHook';
import { Card, CardBody, CardHeader, CardTitle } from '@patternfly/react-core';
// import { DRResourcesContext } from '../policy-dashboard-context';

export const SummaryCard: React.FC = () => {
  const { t } = useCustomTranslation();
  // const { argoApplicationSetResources, loaded, loadError } = React.useContext(DRResourcesContext);

  return (
    <Card data-test="summary-card">
      <CardHeader>
        <CardTitle>{t('Summary')}</CardTitle>
      </CardHeader>
      <CardBody>{/** ToDo: add card here */}</CardBody>
    </Card>
  );
};
