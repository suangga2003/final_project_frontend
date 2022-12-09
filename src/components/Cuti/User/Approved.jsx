import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Spacer,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Approved = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Stack spacing={8}>
      {data.map((item) => (
        <Card key={item.id}>
          <CardBody>
            <Stack spacing={4}>
              <Heading as="h4" size="md">
                {item.jeniscuti}
              </Heading>
              <Text>{item.alasan}</Text>
            </Stack>
            <Flex mt={8} alignItems="center">
              <Box>
                <Tag size={"lg"} key={"md"} variant="solid" colorScheme="green">
                Disetujui Supervisor
                </Tag>
              </Box>
              <Spacer />
              <Box>
                <HStack>
                  {/* <Button colorScheme='red'>Delete</Button> */}
                  <Button
                    colorScheme="blue"
                    onClick={() => navigate(`/cuti/detail/${item.idcuti}`)}
                  >
                    Detail
                  </Button>
                </HStack>
              </Box>
            </Flex>
          </CardBody>
        </Card>
      ))}
    </Stack>
  );
};

export default Approved;
