import { Stats, StatsRow, StatsContainer } from './style';

import { MainTemplate, CenteredDiv } from '../../common';
import { IconComponent, IconEnum } from '../../components';
import { useEffect, useState } from 'react';
import { viewStats } from '../../services/viewStats';
import { StatsResponse, SearchValuesResponse } from './types';

export const StatsPage = (_props: any) => {
  const [stats, setStats] = useState<StatsResponse>();
  const [searchValues, setSearchValues] = useState<SearchValuesResponse>();

  useEffect(() => {
    viewStats().then(data => {
      setStats(data.data)
      console.log(data)
    })

    setSearchValues(JSON.parse(localStorage.getItem('searchValue')))
  }, [localStorage.getItem('searchValue')])

  const lastPageResult = () => {
    const hasFoundResult = searchValues && searchValues.page != -1;

    if (hasFoundResult) {
      return searchValues.page
    }

    return "Nenhuma"
  }

  return (
    <MainTemplate>
      <CenteredDiv>
        <StatsContainer>
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

          {/* <Stats style={{ marginTop: '10px' }}> */}
          <Stats>
            <h1>{searchValues && searchValues.res}</h1>
            <h2>Na página: { lastPageResult() }</h2>
          </Stats>
        </StatsContainer>
      </CenteredDiv>
    </MainTemplate>
  );
};
