// components/FadeInRightComponent.js
import useFadeInRight from './useFadeInRight';

const FadeInRightComponent = ({ children }) => {
  const fadeInRightRef = useFadeInRight();

  return (
    <div ref={fadeInRightRef}>
      {children}
    </div>
  );
};

export default FadeInRightComponent;
