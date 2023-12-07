import { test, expect } from '@playwright/test';

test.describe('api tests', () => {
    // Create a test using request context
    test('Demo API Get', async ({ request }) => {
        // Send a GET request & store response in a variable
        const response = await request.get('https://reqres.in/api/users/2');

        // Verify the status code of the response is 200
        expect(response.status()).toBe(200);

        // Check response contains some text
        const text = await response.text();
        expect(text).toContain('Janet');

        // Write response on the console
        console.log(await response.json());
    });

    test('Demo API POST request', async ({ request }) => {
        // Send a POST request along with request body & store response in a variable
        const response = await request.post('https://reqres.in/api/users', {
            data: {
                name: 'Raghav',
                job: 'teacher',
            },
        });

        expect(response.status()).toBe(201);

        const text = await response.text();

        expect(text).toContain('Raghav');

        console.log(await response.json());
    });

    test('Demo API PUT Request', async ({ request }) => {
        const response = await request.put('https://reqres.in/api/users/2', {
            data: {
                first_name: 'Raghav',
                last_name: 'teacher',
            },
        });

        expect(response.status()).toBe(200);

        const text = await response.text();

        expect(text).toContain('Raghav');

        console.log(await response.json());
    });

    test('Demo API DELETE Request', async ({ request }) => {
        const response = await request.delete('https://reqres.in/api/users/2');

        expect(response.status()).toBe(204);
    });
});
