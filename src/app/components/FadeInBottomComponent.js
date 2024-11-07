// components/FadeInBottomComponent.js
import useFadeInBottom from './useFadeInBottom';

const FadeInBottomComponent = ({ children }) => {
  const fadeInBottomRef = useFadeInBottom();

  return (
    <div ref={fadeInBottomRef}>
      {children}
    </div>
  );
};

export default FadeInBottomComponent;
