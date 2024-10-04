import React from "react";
import classNames from "classnames";
import { X } from "lucide-react";
import Button from "../button";

//弹窗 标题 内容 按钮 显示隐藏 大小
export interface ModalProps {
  title?: string;
  footer?: boolean;
  children?: React.ReactNode;
  showmodal?: boolean;
  onCancel?: () => void;
  onOk?: () => void;
  size?: "small" | "medium" | "large";
  className?: string;
}

function Modal(props: ModalProps) {
  const {
    title,
    footer = true,
    children,
    showmodal,
    onCancel,
    onOk,
    size = "small",
    className
  } = props;

  if (!showmodal) return null;

  const modalClasses = classNames("bg-white border-2 border-black border-solid rounded shadow-sm p-5 flex flex-col gap-3", className,{
    "w-1/4": size === "small",
    "w-2/4": size === "medium",
    "w-3/4": size === "large",
  });

  return (
    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
      <div className={modalClasses}>
        {/* 弹窗页眉 */}
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-normal">{title}</h1>
          <X 
          className="cursor-pointer"
          onClick={onCancel}
          />
        </div>

        <hr />
        {/* 弹窗内容 */}
        <div className="text-sm">{children}</div>
        {/* 弹窗页脚 */}
        {footer && (
            <div className="flex justify-end gap-3 mt-3">
                <Button onClick={onCancel}>取消</Button>
                <Button onClick={onOk}>确定</Button>
            </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
