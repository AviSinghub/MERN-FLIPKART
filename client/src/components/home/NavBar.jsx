import { Box, styled, Typography } from "@mui/material";
import { navData } from "../../constants/data";

const Component = styled(Box)`
    display: flex;
    margin: 55px 12px 0 12px;
    justify-content: space-between;
`;

const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center;
    margin: 0 12px 0 12px;
`;

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`

const NavBar = () => {
    return (
        <Component>
            {
                navData.map(data => (
                    <Container>
                        <img src={data.url} alt="navp" style={{ width:64}}/>
                        <Text>{data.text}</Text>
                    </Container>
                ))
            }
        </Component>
    );
}
 
export default NavBar;