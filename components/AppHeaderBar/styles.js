import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
const appBarUseStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const StyledRightSide = styled.div`
    position: relative;
    right: 0;
`;

export { appBarUseStyles, StyledRightSide }

  