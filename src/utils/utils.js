import {
  useLocation
} from 'react-router-dom';

export function usePageViews() {
    let location = useLocation();
    React.useEffect(() => {
      ga.send(['pageview', location.pathname]);
    }, [location]);
}

export function getCookie(cname) {
  if(typeof window !== 'object') return;
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}