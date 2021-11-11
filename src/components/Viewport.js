import { useViewport } from '../providers/ViewProvider';
import { Box } from '@chakra-ui/react';

export default function Viewport() {
  const [{ viewport }] = useViewport();

  return <Box pt={12}>{viewport}</Box>;
}
