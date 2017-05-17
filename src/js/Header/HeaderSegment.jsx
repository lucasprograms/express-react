import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const HeaderSegment = ({ content, icon }) => {
  const iconClass = classnames({
    header__segment: true,
    fa: icon,
    [`fa-${icon}`]: icon,
  });

  return (
    <span className="header__segment">
      <i className={iconClass} />
      {content}
    </span>
  );
};

HeaderSegment.propTypes = {
  content: PropTypes.string.isRequired,
};

export default HeaderSegment;
