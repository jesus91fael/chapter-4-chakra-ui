import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Rafael Prado</Text>
          <Text color="gray.300" fontSize="small">
            rafaeljprado@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Rafael Prado"
        src="https://avatars.githubusercontent.com/u/44417633?v=4"
      ></Avatar>
    </Flex>
  );
}