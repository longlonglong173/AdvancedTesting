import test from '@playwright/test';
import { exec } from 'child_process';

export const testA = () => {
  return new Promise<void>((resolve) => {
    exec('npx nx start fromZero', (err) => {
      if (err) {
        console.log('some error');
      } else {
        console.log('no-error');
      }
      resolve();
    });
  });
};

export const initTests = () => {
  test.beforeAll(async () => {
    await testA();
  });
};
