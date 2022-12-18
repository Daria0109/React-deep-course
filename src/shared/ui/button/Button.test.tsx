import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/button/Button';

describe('Button', () => {
	test('Should be rendered', () => {
		render(<Button>Test</Button>);
		expect(screen.getByText('Test')).toBeInTheDocument();
	});
});
