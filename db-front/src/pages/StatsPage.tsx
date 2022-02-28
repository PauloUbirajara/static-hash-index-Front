import MainTemplate from '../common/MainTemplate'


type StatsProps = {
  pageSize: number;
}

export const StatsPage = (props: StatsProps) => {
  const { pageSize } = props;

  return (
    <MainTemplate>
      <div className="stats">
        <h1>Estatísticas sobre banco de dados</h1>
        <h1>Tamanho individual da página: {pageSize}</h1>
      </div>
    </MainTemplate>
  )
}