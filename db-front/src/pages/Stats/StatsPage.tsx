import { Stats, StatsRow } from './style';

import { MainTemplate, CenteredDiv } from '../../common';
import { IconComponent, IconEnum } from '../../components';
import { useEffect, useState } from 'react';
import { viewStats } from '../../services/viewStats';
import { StatsResponse, SearchValuesResponse } from './types';

export const StatsPage = (props: any) => {
  const [stats, setStats] = useState<StatsResponse>();
  const [searchValues, setSearchValues] = useState<SearchValuesResponse>();
  
  useEffect(() => {
    viewStats().then(data => {
      setStats(data.data)
      console.log(data)
    })

    setSearchValues(JSON.parse(localStorage.getItem('searchValue')))
  }, [localStorage.getItem('searchValue')])

  return (
    <MainTemplate>
      <CenteredDiv>
        <Stats>
          <h1>Estatísticas</h1>

          <StatsRow>
            <IconComponent icon={IconEnum.SINGLE_PAGE_SIZE} />
            <span>Tamanho individual de página: {JSON.parse(localStorage.getItem('pageSize'))}</span>
          </StatsRow>

          <StatsRow>
            <IconComponent icon={IconEnum.COLLISION} />
            <span>Quantia de colisões: {stats && stats.collisions}</span>
          </StatsRow>

          <StatsRow>
            <IconComponent icon={IconEnum.OVERFLOW} />
            <span>Quantia de overflows: {stats && stats.overflows}</span>
          </StatsRow>

          <StatsRow>
            <IconComponent icon={IconEnum.OVERFLOW} />
            <span>Custo: {stats && stats.custo}</span>
          </StatsRow>
        </Stats>

        <Stats style={{ marginTop: '10px' }}>
          <h1>{searchValues && searchValues.res}</h1>
          <h2 style={{ marginTop: '10px' }}>Na página: {searchValues && searchValues.page}</h2>
        </Stats>
      </CenteredDiv>
    </MainTemplate>
  );
};
