import { useState } from "react";
import Modal from ".";
import { ModalProps } from ".";
import Button from "../button";

export default {
  title: "Modal",
  component: Modal,
  tags:["autodocs"]
};

const Template = (args: ModalProps) => {
  const [showmodal, setShowModal] = useState(false);
  const HandleOK = () => {
    setShowModal(false);
  };
  return (
    <div>
      <Button
        title="Open Modal"
        onClick={() => setShowModal(true)}
        variant="outlined"
        rounded="medium"
      />
      <Modal
        {...args}
        showmodal={showmodal}
        onCancel={() => setShowModal(false)}
        onOk={HandleOK}
      />
    </div>
  );
};

export const Basic = {
  args: {
    showmodal: true,
    title: "Modal Title",
    children: "Modal Content",
    closabel: false,
    size: "small",
  },
  render: Template,
} as { args: ModalProps };


export const WithoutFooter = {
  args: {
    showmodal: true,
    title: "Modal Title",
    children: "Modal Content",
    closabel: false,
    size: "small",
    footer: false,
  },
  render: Template,
} as { args: ModalProps };