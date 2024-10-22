import { useMutation } from '@tanstack/react-query';
import { api } from '../../services/api';

const telegram = async (data) => {
  try {
    const response = await api.post('/telegram', data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export function useTelegramPOST() {
  const mutate = useMutation({
    mutationFn: telegram,
  });

  return mutate;
}
