import React from "react";
import style from "./style.module.css";
import { Form, Radio, DatePicker, Button, InputNumber, Row } from "antd";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const BloodAnalysisForm = ({ onSubmit }) => {
  return (
    <div className={style.container}>
      <Form {...formItemLayout} onFinish={onSubmit}>
        <Form.Item label="Пол">
          <Radio.Group required defaultValue="m">
            <Radio value="m">Мужской</Radio>
            <Radio value="f">Женский</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Дата рождения">
          <DatePicker required />
        </Form.Item>
        <Form.Item label="HGB">
          <InputNumber addonAfter="г/л" required />
        </Form.Item>
        <Form.Item label="RBC">
          <InputNumber addonAfter={"2\u00B9\u00B2 ед"} required />
        </Form.Item>
        <Form.Item label="HCT">
          <InputNumber required />
        </Form.Item>
        <Form.Item label="WBC">
          <InputNumber addonAfter={"2\u2079 ед"} required />
        </Form.Item>
        <Form.Item label="PLT">
          <InputNumber addonAfter={"2\u2079 ед"} required />
        </Form.Item>
        <Form.Item label="ESR">
          <InputNumber addonAfter="мм/час" required />
        </Form.Item>
        <Form.Item justify="center">
          <Row justify="center">
            <Button type="primary" htmlType="submit" className={style.button}>
              Проверить анализ
            </Button>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BloodAnalysisForm;
