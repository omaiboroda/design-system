import React from 'react';
import injectSheet from 'react-jss'

const style = {
  header: {
    border: '1px solid orange',
    color: 'darkblue'
  }
}

const H1 = ({ classes, children }) => <h1 className={{classes.header}}>{children}</h1>;

export default injectSheet(style)(H1);