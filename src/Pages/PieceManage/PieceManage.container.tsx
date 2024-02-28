import { useForm } from 'react-hook-form';
import { defaultValues, TFormValues } from './TFormValues';
import PieceManage from './PieceManage';

const PieceManageContainer = () => {
  const form = useForm<TFormValues>({
    defaultValues,
  });

  return <PieceManage {...form} />;
};

export default PieceManageContainer;
