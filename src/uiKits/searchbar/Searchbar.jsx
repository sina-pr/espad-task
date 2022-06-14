import {
  StyleSearchBar,
  StyleSearchbarIcon,
  StyleSearchBarInput,
} from './style';

const SearchBar = ({ ...props }) => {
  return (
    <StyleSearchBar>
      <StyleSearchBarInput {...props} placeholder='Search customer...' />
      <StyleSearchbarIcon
        src={require('../../assets/images/icons/searchIcon.png')}
      />
    </StyleSearchBar>
  );
};
export default SearchBar;
