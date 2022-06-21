import React from "react";
import { Button, Row } from "antd";
import PageLayout from "../../components/PageLayout";
import BloodAnalysisForm from "../../components/BloodAnalysisForm";
import DiagnosisCard from "../../components/DiagnosisCard";
import { fetchDiagnosis } from "../../api";
import { Link } from "react-router-dom";

const FormPage = () => {
  const [diagnosis, setDiagnosis] = React.useState(null);

  const handleSubmit = React.useCallback(async () => {
    const diagnosis = await fetchDiagnosis();
    setDiagnosis(diagnosis);
  }, [setDiagnosis]);

  return (
    <PageLayout>
      {diagnosis ? (
        <>
          {diagnosis.length > 0 ? (
            diagnosis.map((d) => <DiagnosisCard {...d} />)
          ) : (
            <DiagnosisCard {...diagnosis} />
          )}
        </>
      ) : (
        <BloodAnalysisForm onSubmit={handleSubmit} />
      )}
      {!!diagnosis && (
        <Row justify="end" style={{ marginTop: "8px" }}>
          <Link to="/">
            <Button>Назад</Button>
          </Link>
        </Row>
      )}
    </PageLayout>
  );
};

export default FormPage;
