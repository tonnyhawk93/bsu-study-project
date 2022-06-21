import { faker } from '@faker-js/faker';
import DIAGNOSIS from './diagnosis.js'

export function createRandomDiagnosis(count = 1) {
  return new Array(count).fill(null).map(() => {
    return {
      id: faker.datatype.uuid(),
      name: faker.helpers.arrayElement(DIAGNOSIS),
      description: faker.lorem.paragraph(),
      type: 'warning',
    };
  })
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

export function getDiagnosisList() {
  return DIAGNOSIS;
}

export function getRandomCount() {
  return Math.ceil(Math.random() * 10)
}