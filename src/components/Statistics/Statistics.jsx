import PropTypes from 'prop-types';
import './statistics.css';

export const Statistics = ({ title, stats }) => (
  <section className="statistics">
    <h2 className="title">{title}</h2>
    <ul className="stat-list">
      {stats.map((stat, index) => (
        <li
          className="item"
          key={index}
          style={{
            backgroundColor:
              '#' + Math.floor(Math.random() * 16777215).toString(16),
          }}
        >
          <span className="stats__label">{stat.label}</span>
          <span className="percentage">{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
