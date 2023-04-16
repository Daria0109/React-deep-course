import { I18nextProvider } from 'react-i18next';
import { Story } from '@storybook/react';
import { Suspense } from 'react';
import i18n from '../i18n/i18n';

export const TranslationDecorator = (StoryComponent: Story): any => (
	<I18nextProvider i18n={i18n}>
		<Suspense fallback="">
			<StoryComponent />
		</Suspense>
	</I18nextProvider>
);
