/* React LAVLI <Button> component */

import classNames from 'classnames';

import styles from './button.module.css';

/* The <Button> component */
function Button({
  className,
  light,
  secondary,
  xs,
  sm,
  md,
  lg,
  xl,
  full,
  ...props
}) {
  const classes = classNames(className, styles.button, {
    [`${styles.buttonLight}`]: light,
    [`${styles.buttonSecondary}`]: secondary,
    [`${styles.buttonXs}`]: xs,
    [`${styles.buttonSm}`]: sm,
    [`${styles.buttonMd}`]: md,
    [`${styles.buttonLg}`]: lg,
    [`${styles.buttonXl}`]: xl,
    [`${styles.buttonFull}`]: full,
  });

  /**
   * Returns <a> wrapper for rendering.
   */
  const anchorElement = (classes) => {
    return (
      <a className={classes} {...props}>
        {props.children}
      </a>
    );
  };

  /**
   * Returns <button> wrapper for rendering.
   */
  const buttonElement = (classes) => {
    const isDisabled = props.disabled ? true : false;

    return (
      <button className={classes} disabled={isDisabled} {...props}>
        {props.children}
      </button>
    );
  };

  /**
   * Returns the <Button> React element.
   */
  return props.as === 'a' ? anchorElement(classes) : buttonElement(classes);
}

export default Button;
