import React from "react";

// 参考https://typescript.bootcss.com/tutorials/react.html
export interface Props {
  name: string;
  enthusiasmLevel?: number; // 名字后面加?为指定可选参数
}

function Hello({ name, enthusiasmLevel = 1 }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic. :D");
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}

export default Hello;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}
