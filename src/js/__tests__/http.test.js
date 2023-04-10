import { httpGet, httpPost } from '../http';
/* eslint-disable no-undef */
/* eslint-disable import/extensions */

describe('"http.js" file will be teste', () => {
	test('the httpGet test now', () => {
		const httpGetTest = () => {
			httpGet('https://jestjs.io/');
		};

		expect(httpGetTest).toThrow();
	});

	test('the httpPost test here', () => {
		const httpPostTest = () => {
			httpPost('https://jestjs.io/');
		};

		expect(httpPostTest).toThrow();
	});
});
