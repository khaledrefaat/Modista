import Box from '@mui/material/Box';
import Image from 'next/image';

interface Props {
  imgSrc: string;
  alt: string;
  mb?: number;
  height: number;
}

export default function ModernCollectionCard(props: Props) {
  return (
    <Box
      sx={{
        backgroundColor: 'var(--background-desktop)',
        height: {
          sm: props.height,
          xs: 300,
        },
      }}
      mb={props.mb || 0}
    >
      <Image
        src={props.imgSrc}
        alt={props.alt}
        width={300}
        height={300}
        className="full"
      />
    </Box>
  );
}
