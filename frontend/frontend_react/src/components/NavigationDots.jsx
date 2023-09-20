import React from 'react';

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {['Home', 'About', 'Work', 'Skills', 'Testimonials', 'Contact'].map(
        (item, index) => (
          <a
            key={item + index}
            style={active === item ? { backgroundColor: '#313BAC' } : {}}
            href={`#${item}`}
            className='app__navigation-dot'
          >
            {' '}
          </a>
        )
      )}
    </div>
  );
};

export default NavigationDots;
