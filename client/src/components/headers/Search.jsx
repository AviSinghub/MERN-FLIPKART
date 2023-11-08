import { InputBase, Box, styled} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchContianer = styled(Box)`
    background: #fff;
    width:38%;
    font-size: 14px;
    margin-left: 10px;
    margin-bottom:10px;
    margin-top:10px;
    height: 36px;
    
    border-radius: 2px 0 0 2px;
    display: flex;     
`;

const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: 14px;
`;

const SerachIconWrapper = styled(Box)`
    color: blue;
    padding: 2.8px;
    cursor: pointer;
    display: flex;
`

const Search = () => {
    return ( 
        <SearchContianer>
            <InputSearchBase
                placeholder="Serach for products, brands and more"
            />
            <SerachIconWrapper className="search-icon">
                <SearchIcon className="s-icon"/>
            </SerachIconWrapper>
        </SearchContianer>
     );
}
 
export default Search;