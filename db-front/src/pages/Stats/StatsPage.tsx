import { Stats, StatsRow, StatsProps } from './Stats';

import { MainTemplate, CenteredDiv } from '../../common';
import { IconComponent, IconEnum } from '../../components';
import { useEffect, useState } from 'react';
import { BackResponse } from '../../helper/Response';

const fakeData = {
  overflowCount: 18,
  collisionCount: 120,
};

export const StatsPage = (props: any) => {
  console.log(props.location.state.alo)
  const { pageSize } = props;
  const { overflowCount, collisionCount } = fakeData;
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/stats')
    .then((data) => setStats(data))
    .then((_) => console.log(stats))
  }, [setStats])

  return (
    <MainTemplate>
      <CenteredDiv>
        <Stats>
          <h1>Estatísticas</h1>

          <StatsRow>
            <IconComponent icon={IconEnum.SINGLE_PAGE_SIZE} />
            <span>Tamanho individual de página: {pageSize}</span>
          </StatsRow>

          <StatsRow>
            <IconComponent icon={IconEnum.COLLISION} />
            <span>Quantia de colisões: {collisionCount}</span>
          </StatsRow>

          <StatsRow>
            <IconComponent icon={IconEnum.OVERFLOW} />
            <span>Quantia de overflows: {overflowCount}</span>
          </StatsRow>
        </Stats>
      </CenteredDiv>
    </MainTemplate>
  );
};
