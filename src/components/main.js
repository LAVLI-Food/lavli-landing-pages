/* React LAVLI <Main> component */

import classNames from 'classnames';

/* The <Main> component */
function Main({ className, children }) {
  const classes = classNames(className, 'mt-14 md:mt-28 lg:mt-32');

  /**
   * Returns the <Main> React element.
   */
  return <main className={classes}>{children}</main>;
}

export default Main;
