/* eslint-disable react/prop-types */

const ScreenO = ({ children, className }) => {
  return (
    <div className={`w-100 px-4 py-4 svh-100 max-width-1200 ${className}`}>
      {children}
    </div>
  );
};

export default ScreenO;
