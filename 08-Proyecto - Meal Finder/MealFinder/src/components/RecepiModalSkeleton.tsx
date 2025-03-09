import { Container, Skeleton, SkeletonText } from "@chakra-ui/react";

const RecepiModalSkeleton = () => {
  return (
    <>
      <Container>
        <SkeletonText mt="4" mb="5" noOfLines={1} skeletonHeight={8} />
        <Skeleton noOfLines={1} height="280px" borderRadius="10px" />
        <SkeletonText mt="4" noOfLines={5} spacing={4} />
      </Container>
    </>
  );
};

export default RecepiModalSkeleton;
