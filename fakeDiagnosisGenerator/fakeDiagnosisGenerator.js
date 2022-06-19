import { faker } from '@faker-js/faker';
import DIAGNOSIS from './diagnosis.js'

export function createRandomDiagnosis() {
  return {
    id: faker.datatype.uuid(),
    name: faker.helpers.arrayElement(DIAGNOSIS),
    description: faker.lorem.paragraph(),
    type: 'warning',
  };
}

export function createOkMessage() {
    return {
      id: faker.datatype.uuid(),
      type: 'success',
    };
  }

export function isAnalysisOk() {
    return faker.helpers.arrayElement([true, false]);
}