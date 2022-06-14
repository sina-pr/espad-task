import { StyleBtn } from './style';

const ButtonWidget = ({
  width,
  height,
  color,
  background,
  backgroundColor,
  style,
  children,
  ...other
}) => {
  return (
    <StyleBtn
      style={style}
      width={width}
      height={height}
      color={color}
      background={background}
      backgroundColor={backgroundColor}
      {...other}
    >
      {children}
    </StyleBtn>
  );
};

export default ButtonWidget;
