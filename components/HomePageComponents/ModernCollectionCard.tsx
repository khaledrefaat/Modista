import Box from '@mui/material/Box';
import Image from 'next/image';
import CustomButton from '../CustomButton';

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
        backgroundColor: 'var(--background-light)',
        height: {
          sm: props.height,
          xs: 300,
        },
        position: 'relative',
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
      <CustomButton sticky>Shop Now</CustomButton>
    </Box>
  );
}
