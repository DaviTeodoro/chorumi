import { useEffect } from 'react';

import { Flex, Input } from '@chakra-ui/react';

// import {
//   app,
//   dialog,
//   event,
//   fs,
//   clipboard,
//   globalShortcut,
// } from '@tauri-apps/api';

import { useViewport } from '../providers/ViewProvider';

import { invoke } from '@tauri-apps/api/tauri';

export default function Header() {
  const [{ url }, dispatch] = useViewport();

  useEffect(() => {
    invoke('request', { url: url }).then((res) =>
      dispatch(['SET_VIEWPORT', res])
    );
  }, []);

  return (
    <Flex
      bg="gray.100"
      h={12}
      w="100%"
      position="fixed"
      align="center"
      justify="center"
      px={2}
      py={2}
    >
      <Input
        w="50%"
        bg="gray.300"
        size="sm"
        color="gray.700"
        fontSize={18}
        value={url}
        onChange={(event) => dispatch(['SET_URL', event.target.value])}
      />
    </Flex>
  );
}
