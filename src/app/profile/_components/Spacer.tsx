type Props = {
  size?: 1 | 2 | 3 | 4 | 5;
};

const getSize = (size: Props["size"]) => {
  switch (size) {
    case 1:
      return "h-4";
    case 2:
      return "h-8";
    case 3:
      return "h-12";
    case 4:
      return "h-16";
    case 5:
      return "h-20";
    default:
      return "h-4";
  }
};

export const Spacer = ({ size }: Props) => {
  return <div className={getSize(size)} />;
};
