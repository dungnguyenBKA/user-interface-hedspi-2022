import React from "react";

export type FontType = "bold" | "medium" | "regular" | "semiBold"

interface AppTextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  fontType?: FontType
}

function getFont(fontType?: FontType): string {
  if (!fontType) {
    return "Regular"
  }
  switch (fontType) {
    case "bold":
      return "Bold"
    case "medium":
      return "Medium"
    case "semiBold":
      return "SemiBold"
    default:
      return "Regular"
  }
}

const AppText: React.FC<AppTextProps> = (props) => {
  const {children, style, fontType} = props
  const font = React.useMemo(() => {
    return getFont(fontType)
  }, [fontType])
  return <p
    {...props}
    style={{
      margin: 0,
      padding: 0,
      fontFamily: font,
      ...style,
    }}>
    {children}
  </p>
}

export default AppText
