// components/FadeInUpComponent.js
import useFadeInUp from './useFadeInUp';

const FadeInUpComponent = ({ children }) => {
  const fadeInUpRef = useFadeInUp();

  return (
    <div ref={fadeInUpRef}>
      {children}
    </div>
  );
};

export default FadeInUpComponent;
