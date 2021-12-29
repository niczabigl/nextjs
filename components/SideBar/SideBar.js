import React, {useState} from 'react';
import Link from 'next/link';
import {StyledLeftSideVerticalMenu, StyledLeftSide} from './styles';
import {ROUTES} from '../../internals/routes';

export const SideBar = (props) => {
    console.log('SideBar', props)

    const [isShowMore, setIsShowMore] = useState(false);
    // const [openMenu, setOpenMenu] = useState(false);
    // const [AnchorEl, setAnchorEl] = useState(null);

    // const handleClick = (event) => {
    //   setOpenMenu(!openMenu);
    //   setAnchorEl(event.currentTarget);
    // }
    // const handleClose = () => {
    //   setAnchorEl(null)
    //   setOpenMenu(!openMenu);
    // }

    const handleHover = (e) => {
      //setIsShowMore(true)
      setIsShowMore(e.type === 'mouseenter');
    }

    const renderLeftSideMenu = () => {

      const { users } = ROUTES
      const { icon: Icon} = users;
      console.log('isShowMore', isShowMore);

      return (<li>
        <Link key={ROUTES.users.text} href={ROUTES.users.href}>
          <div className={'link-container'}>
            <Icon /><div className={'link-text'}>{isShowMore && users.text}</div>
          </div>
        </Link>
      </li>)
    }

    return (
      <StyledLeftSide onMouseLeave={(e)=>handleHover(e)} onMouseEnter={(e)=>handleHover(e)} className={`left-vertical-sidebar ${isShowMore ? 'expanded' : 'notexpanded'}`}>
        <StyledLeftSideVerticalMenu>
          {renderLeftSideMenu()}
        </StyledLeftSideVerticalMenu>
      </StyledLeftSide>
    );
}