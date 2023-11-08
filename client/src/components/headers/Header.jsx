import { AppBar, Toolbar, Typography,styled, Box } from '@mui/material';

import Logo from '../../assets/logo/flipkart.png';
import sub from '../../assets/logo/sub-logo.png';

//components field
import Search from './Search';
// import CustomButtons from '../CustomButtons';
import CustomButtons from './CustomButtons';


const StyledHeader = styled(AppBar)`
    background: #2874f0;
    
`;
const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
`;

const SubTypography = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`;

const PlusLogo = styled('img')({
    width:10,
    height:11,
    marginLeft:1
});

const CustomButtonWrapper = styled(Box)`
    margin: 0 6% 0 1.4em;
`

const Header = () => {
    return ( 
        <StyledHeader>
            <Toolbar style={{minHeight:55}}>
                <Component className='logo-main'>
                    <img src ={Logo} alt='logo' className='logo-f'/>
                    <Box className='wrapper'>
                        <SubTypography>Explore&nbsp;
                            <Box component='span'style={{color:'#FFE500'}}>Plus</Box>
                        </SubTypography>
                        <PlusLogo src={sub} alt='sublogo'/>
                    </Box>
                </Component>
                <Search/>
                <CustomButtonWrapper>
                    <CustomButtons/>
                </CustomButtonWrapper>
                
            </Toolbar>
        </StyledHeader>
     );
}
 
export default Header;