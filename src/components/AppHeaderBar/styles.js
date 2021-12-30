import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";

const StyledIconButton = styled(IconButton)`
    margin-right: 5px;
`;

const RightSide = styled.div`
    position: relative;
    right: 0;
`;

const AppBarContainer = styled.div`
    width: '100%';
    flex-grow: 1;
`;

export { 
    StyledIconButton as IconButton,
    RightSide,
    AppBarContainer
}

  