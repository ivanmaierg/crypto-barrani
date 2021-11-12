import { ArgAnalytics } from '@/components/ArgAnalytics/ArgAnalytics';
import React, { ReactElement } from 'react';
import Layout from '../layout/layout';

export default function News(): ReactElement {
  return (
    <Layout>
      <ArgAnalytics />
    </Layout>
  );
}
