import { GenerateConfig } from '../generate';
import { CustomFormat, Locale } from '../interface';
export interface ValueTextConfig<DateType> {
    formatList: Array<string | CustomFormat<DateType>>;
    generateConfig: GenerateConfig<DateType>;
    locale: Locale;
}
export default function useValueTexts<DateType>(value: DateType | null, { formatList, generateConfig, locale }: ValueTextConfig<DateType>): [string[], string];
