import css from './Loader.module.css';
import { MagnifyingGlass } from 'react-loader-spinner';

const Loader = () => {
return (
    <div className={css.loaderWrap}> 
    <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#76b5c5"
    />
    </div>
);
};

export default Loader;