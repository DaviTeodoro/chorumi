import { useViewport } from '../providers/ViewProvider';
import { Box } from '@chakra-ui/react';
import parse from 'html-react-parser';

export default function Viewport() {
  const [{ viewport }] = useViewport();

  console.log(parse(viewport));
  return <Box pt={12}>{parse(viewport)}</Box>;
}
