import React from 'react';
import style from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ stats, title }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.statList}>
        {stats.map(data => (
          <li className={style.item} key={data.id}>
            <span className={style.label}>{data.label}</span>
            <span className={style.percentage}>{data.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: 'no title',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
