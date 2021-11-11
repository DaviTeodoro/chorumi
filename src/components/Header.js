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

const lll =
  ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis ullamcorper tortor. Cras lacinia pulvinar velit sed consequat. In sed massa et est aliquet tincidunt et sit amet nibh. Cras vulputate dapibus diam, at elementum orci bibendum a. Vivamus euismod nibh sit amet neque sodales, ultrices gravida ligula consectetur. Phasellus vitae facilisis quam, in facilisis urna. Duis vestibulum suscipit massa sed efficitur. Mauris ac diam lacus. Curabitur malesuada neque sed tellus blandit facilisis. Proin nisl erat, congue quis volutpat quis, pulvinar in nibh. Nullam aliquam urna consectetur nibh scelerisque venenatis. Phasellus at diam facilisis, molestie arcu at, faucibus lorem. Suspendisse id urna lorem. Curabitur et pulvinar sapien.Morbi molestie nunc ex, a vulputate mi vulputate ut. Vestibulum urna eros, vehicula quis turpis vel, molestie sagittis libero. Integer at velit interdum, bibendum tortor at, tempus tortor. Etiam cursus rhoncus purus, sed tempus eros finibus a. Quisque ornare, orci id hendrerit dapibus, sapien libero suscipit nisi, a suscipit ante tortor quis arcu. In semper est eget mauris pharetra condimentum. Donec at pulvinar massa, non accumsan mi. Quisque ultrices tempus auctor. Mauris et mi diam. Curabitur quis turpis elit. Curabitur condimentum dignissim sapien, et scelerisque neque congue in. Donec sed dolor eget nunc cursus tincidunt. Etiam semper lectus a purus euismod semper.In congue dapibus vulputate. Duis dignissim metus vel lacus aliquam, nec blandit enim convallis. Pellentesque efficitur, lorem at ultrices mattis, eros quam sagittis justo, quis mattis sem erat vel nisl. Vivamus at nulla ac ipsum pretium semper vitae ac quam. Sed convallis elit nisl, non molestie eros accumsan ut. Mauris sed rhoncus metus. Vivamus sollicitudin interdum feugiat. Morbi at ipsum sed velit efficitur maximus at id tortor. Ut eget dapibus felis. Quisque ac lacus at velit sagittis interdum a eget metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi ullamcorper ipsum eu interdum bibendum. Cras scelerisque purus sed urna pulvinar, commodo porta nunc sodales. Sed ac semper justo. ';
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
