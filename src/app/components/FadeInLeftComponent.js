// components/FadeInLeftComponent.js
import useFadeInLeft from './useFadeInLeft';

const FadeInLeftComponent = ({ children }) => {
  const fadeInLeftRef = useFadeInLeft();

  return (
    <div ref={fadeInLeftRef}>
      {children}
    </div>
  );
};

export default FadeInLeftComponent;
