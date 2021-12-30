import styled from "@emotion/styled";

const StyledLeftSide = styled.div`
    position: relative;
    left: 0;
    top: 0;
    width: 80px;
    height: 100vh;
    background-color: #3f51b5;
    transition: 0.5s;
    color: white;
    &:hover {
        width: 8%;
    }

    &.notexpanded div.link-text {
        display: none;
    }
    &.expanded div.link-text  {
        display: block;
        margin-right: 1%;
        line-height: 1.5;
    }
`;



const StyledLeftSideVerticalMenu = styled.ul`
    list-style: none;
    padding: 0;
    & .link-container {
        display: flex;
        overflow: hidden;
    }
    li {
        display: block;
        margin: 1em;
        padding-left: 0.5em;
        svg {
            margin-right: 10px;;
        }
        width: 120px;
    }
`;

export { StyledLeftSide, StyledLeftSideVerticalMenu }

  