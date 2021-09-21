import type { NextPage } from 'next'
import React from 'react';
import { MainGrid } from '../imports/components/page-grid';

export default (React.memo<any>(function Custome() {
    return <MainGrid />
}), () => true);
