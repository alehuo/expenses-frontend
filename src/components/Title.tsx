import * as React from "react";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => <div className="title">{title}</div>;

export default Title;
