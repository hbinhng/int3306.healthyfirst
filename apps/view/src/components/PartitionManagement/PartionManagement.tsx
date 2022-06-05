import { ReactElement, useState } from 'react';

import { LocationOn } from '@mui/icons-material';
import { Navigations } from '../Navigations';
import styled from '@emotion/styled';
import Flexbox from '@/view/common/components/Flexbox';

const Root = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Content = styled(Flexbox)`
  width: 200%;
  height: 100%;
  overflow: hidden;
  transition: margin 0.2s ease-out;

  &.next {
    margin-left: -100%;
  }
`;

const Segment = styled.div`
  height: 100%;
  width: 50%;
  overflow: hidden;
`;

function PartitionManagement(): ReactElement {
  const [viewingSegment, setViewingSegment] = useState(0);

  return (
    <Root>
      <Content className={viewingSegment === 0 ? '' : 'next'}>
        <Segment>
          {/* <AccountsTable switchSegment={() => setViewingSegment(1)} /> */}
        </Segment>

        <Segment>
          {/* <RegistrationForm switchSegment={() => setViewingSegment(0)} /> */}
        </Segment>
      </Content>
    </Root>
  );
}

export default PartitionManagement;

Navigations.getInstance().registerNavigation('/partition-management', {
  icon: <LocationOn />,
  label: 'Phân vùng quản lý',
  childOf: null,
})(PartitionManagement);
