// components/FadeInCenterComponent.js
import useFadeInCenter from './useFadeInCenter';

const FadeInCenterComponent = ({ children }) => {
  const fadeInCenterRef = useFadeInCenter();

  return (
    <div ref={fadeInCenterRef}>
      {children}
    </div>
  );
};

export default FadeInCenterComponent;
