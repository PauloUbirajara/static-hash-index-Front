import { Stats, StatsRow, StatsProps } from './Stats';

import { MainTemplate, CenteredDiv } from '../../common';
import { IconComponent, IconEnum } from '../../components';

const fakeData = {
  overflowCount: 18,
  collisionCount: 120,
};

export const StatsPage = (props: StatsProps) => {
  const { pageSize } = props;
  const { overflowCount, collisionCount } = fakeData;

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
