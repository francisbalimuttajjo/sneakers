import { useEffect, useState } from "react";

type Props = {
  WindowDimentions: {
    width: number | undefined;
    height: number | undefined;
  };
  Screen: {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
  };
};

type ReturnProps = {
  width: number | undefined;
  height: number | undefined;
  screen: Props["Screen"];
};

const initialValues = {
  dimensions: {
    width: undefined,
    height: undefined,
  },
  screen: {
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  },
};

const useWindowDimensions = (): ReturnProps => {
  const [windowDimensions, setWindowDimensions] = useState<
    Props["WindowDimentions"]
  >(initialValues.dimensions);
  const [screen, setScreen] = useState<Props["Screen"]>(initialValues.screen);

  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      if (windowDimensions.width !== undefined) {
        const { width } = windowDimensions;
        if (width <= 500) {
          setScreen({ ...initialValues.screen, isMobile: true });
        }
        if (width > 500 && width < 960) {
          setScreen({ ...initialValues.screen, isTablet: true });
        }
        if (width > 960) {
          setScreen({ ...initialValues.screen, isDesktop: true });
        }
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, [screen, windowDimensions]);

  const { isMobile, isDesktop, isTablet } = screen

  return {
    width: windowDimensions.width,
    height: windowDimensions.height,
    screen,
  };
};

export default useWindowDimensions;
