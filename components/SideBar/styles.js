import styled from 'styled-components';

const StyledLeftSide = styled.div`
    position: relative;
    left: 0;
    top: 0;
    width: 4%;
    height: 100vh;
    background-color: #3f51b5;
    transition: 0.5s;
    color: white;
    &:hover {
        width: 10%;
    }

    &.notexpanded div.link-text {
        display: none;
    }
    &.expanded div.link-text  {
        display: block;
        margin-right: 1%;
        width: 100vw;
        line-height: 1.5;
    }
`;



const StyledLeftSideVerticalMenu = styled.ul`
    list-style: none;
    padding: 0;
    & .link-container {
        display: flex;
    }
    li {
        display: block;
        margin: 1em;
        padding-left: 0.5em;
        width: 100vw;
        svg {
            margin-right: 10px;;
        }
    }
`;

export { StyledLeftSide, StyledLeftSideVerticalMenu }

  