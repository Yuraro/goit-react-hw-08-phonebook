import styles from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';


const Filter = () => {
	const dispatch = useDispatch();

	const handleChange = ({ target }) => {
	dispatch(setFilter(target.value))
}
    return (
    <label className={styles.label}>
    Find contacts by name
    <input
        className={styles.filterInput} 
        name="filter"
        placeholder="Name"
        onChange={handleChange}
    />
    </label>
);
};

export default Filter;