import { Avatar, Button } from "@mui/material";
import styled from "styled-components";

const BoxProfile = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  width: 350px;
  align-items: center;
`;

const StyledAvatar = styled(Avatar)(() => ({
  marginBottom: "15px",
  justifySelf: "center",
}));

interface BoxProfileProps {
  alt: string;
  src: string;
  textButton: string;
  sx?: {};
}

export const BoxProfileComp: React.FC<BoxProfileProps> = ({
  alt,
  src,
  sx,
  textButton,
}) => {
  return (
    <BoxProfile>
      <StyledAvatar alt={alt} src={src} sx={sx} />
      <Button variant="outlined" color="inherit">
        {textButton}
      </Button>
    </BoxProfile>
  );
};
