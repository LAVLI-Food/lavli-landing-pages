import classNames from 'classnames';

export default function Spinner({ page, button, ...props }) {
  return (
    <>
      <style jsx>{`
        .loader {
          -webkit-animation: spinner 1.5s linear infinite;
          animation: spinner 1.5s linear infinite;
        }

        @-webkit-keyframes spinner {
          0% {
            -webkit-transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
          }
        }

        @keyframes spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <div
        className={classNames(
          'loader rounded-full ease-linear',
          props.className,
          {
            'center-xy absolute h-16 w-16 border-4 border-blue-90 border-t-blue-50':
              page,
            'h-6 w-6 border-2 border-transparent border-t-blue-90': button,
          }
        )}></div>
    </>
  );
}
