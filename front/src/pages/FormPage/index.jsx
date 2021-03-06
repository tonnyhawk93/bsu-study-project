import React from "react";
import { Button, Row, Typography, Alert } from "antd";
import PageLayout from "../../components/PageLayout";
import BloodAnalysisForm from "../../components/BloodAnalysisForm";
import DiagnosisCard from "../../components/DiagnosisCard";
import { fetchDiagnosis, fetchRecommendation } from "../../api";
import { Link } from "react-router-dom";

const FormPage = () => {
  const [diagnosis, setDiagnosis] = React.useState(null);
  const [recommendation, setRecommendation] = React.useState(null);

  const handleSubmit = React.useCallback(async () => {
    const diagnosis = await fetchDiagnosis();
    const recommendation = await fetchRecommendation();
    setDiagnosis(diagnosis);
    setRecommendation(recommendation);
  }, [setDiagnosis, setRecommendation]);

  return (
    <PageLayout>
      {diagnosis ? (
        <>
          {diagnosis.length > 0 ? (
            <>
              {diagnosis.map((d) => (
                <DiagnosisCard {...d} />
              ))}
              <Alert
                showIcon
                type="info"
                description={recommendation.description}
              />
            </>
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
