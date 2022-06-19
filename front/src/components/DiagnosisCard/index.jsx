import React from "react";
import { Alert } from "antd";

const DiagnosisCard = ({
  type = "success",
  name,
  description = "Все выши показатели в пределах нормы",
}) => {
  name =
    type !== "success"
      ? `В анализе обнаружены отклонения от нормы. Возможный диагноз: ${name}`
      : "Вы здоровы!";
  return (
    <Alert message={name} description={description} type={type} showIcon />
  );
};

export default DiagnosisCard;
