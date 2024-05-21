import React from "react";
import { Container, Box, VStack, HStack, Text, Avatar, Input, Button, IconButton, Divider } from "@chakra-ui/react";
import { FaTwitter, FaHome, FaBell, FaEnvelope, FaUser, FaHashtag } from "react-icons/fa";

const tweets = [
  {
    id: 1,
    user: {
      name: "John Doe",
      handle: "@johndoe",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzE2MzA5MjM2fDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    content: "This is a sample tweet!",
    timestamp: "2h",
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      handle: "@janesmith",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTYzMDkyMzd8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    content: "Hello Twitter!",
    timestamp: "3h",
  },
];

const Tweet = ({ tweet }) => (
  <Box w="100%" p={4} borderBottom="1px" borderColor="gray.200">
    <HStack align="start">
      <Avatar src={tweet.user.avatar} />
      <VStack align="start" spacing={1}>
        <HStack>
          <Text fontWeight="bold">{tweet.user.name}</Text>
          <Text color="gray.500">{tweet.user.handle}</Text>
          <Text color="gray.500">· {tweet.timestamp}</Text>
        </HStack>
        <Text>{tweet.content}</Text>
      </VStack>
    </HStack>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.lg" p={0} m={4}>
      <HStack align="start" spacing={0}>
        {/* Sidebar */}
        <VStack w="20%" p={4} spacing={4} align="start" borderRight="1px" borderColor="gray.200">
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" variant="ghost" />
          <IconButton aria-label="Home" icon={<FaHome />} size="lg" variant="ghost" />
          <IconButton aria-label="Explore" icon={<FaHashtag />} size="lg" variant="ghost" />
          <IconButton aria-label="Notifications" icon={<FaBell />} size="lg" variant="ghost" />
          <IconButton aria-label="Messages" icon={<FaEnvelope />} size="lg" variant="ghost" />
          <IconButton aria-label="Profile" icon={<FaUser />} size="lg" variant="ghost" />
        </VStack>

        {/* Main Content */}
        <VStack w="60%" spacing={0}>
          <Box w="100%" p={4} borderBottom="1px" borderColor="gray.200">
            <HStack>
              <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNjIyMjkyM3ww&ixlib=rb-4.0.3&q=80&w=1080" />
              <Input placeholder="What's happening?" variant="unstyled" />
            </HStack>
            <HStack justify="flex-end" mt={2}>
              <Button colorScheme="twitter">Tweet</Button>
            </HStack>
          </Box>
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </VStack>

        {/* Right Sidebar */}
        <VStack w="20%" p={4} spacing={4} align="start" borderLeft="1px" borderColor="gray.200">
          <Text fontWeight="bold">Trends for you</Text>
          <Divider />
          <Text>#ReactJS</Text>
          <Text>#ChakraUI</Text>
          <Text>#JavaScript</Text>
        </VStack>
      </HStack>
    </Container>
  );
};

export default Index;
