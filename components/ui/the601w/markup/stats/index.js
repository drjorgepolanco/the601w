import { Item } from './item';

export const Stats = (props) => {
  const { stats, settings } = props;
  return (
    <div className="stats">
      { stats.map((stat, index) => <Item attr={ stat } index={ index } key={ index } settings={ settings } />) }

      <style>{`
        .stats {
          padding-top: 32px;
        }
      `}</style>
    </div>
  );
}