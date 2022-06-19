import React from "react";
import { Link } from "react-router-dom";
import { Typography, Space } from "antd";

const Propmo = () => {
  return (
    <>
      <Typography.Title level={3}>
        Добро пожаловать в медицинский анализатор
      </Typography.Title>
      <Typography.Title level={4}>
        Для начала выберите интересующий вас анализ и введите данные в форму
      </Typography.Title>
      <Space direction="vertical">
        <Link to="/analysis">
          <Typography.Link>Общий анализ крови</Typography.Link>
        </Link>
        <Link to="/analysis">
          <Typography.Link>Общий анализ мочи</Typography.Link>
        </Link>
        <Link to="/analysis">
          <Typography.Link>Биохимический анализ крови</Typography.Link>
        </Link>
      </Space>
    </>
  );
};

export default Propmo;
