import React, { ReactElement } from 'react';
import { CryptoMain } from '@/components/CryptoMain/CryptoMain';
import Layout from '../layout/layout';

export default function Crypto(): ReactElement {
  return (
    <Layout>
      <CryptoMain />
    </Layout>
  );
}
