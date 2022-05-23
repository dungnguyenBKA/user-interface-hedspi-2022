import React from "react";

interface AppTextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {

}

const AppText: React.FC<AppTextProps> = (props) => {
    const {children, style} = props
    return <p
        {...props}
        style={{
            margin: 0,
            padding: 0,
            ...style
        }}>
        {children}
    </p>
}

export default AppText