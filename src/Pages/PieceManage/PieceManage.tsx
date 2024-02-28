import { Controller, UseFormReturn } from 'react-hook-form';
import { TFormValues } from './TFormValues';

const PieceManage = ({ control }: UseFormReturn<TFormValues, any, TFormValues>) => (
  <>
    <Controller control={control} render={({ field }) => <input type="text" {...field} />} name="firstName" />
    <Controller control={control} render={({ field }) => <input type="text" {...field} />} name="lastName" />
  </>
);

export default PieceManage;
