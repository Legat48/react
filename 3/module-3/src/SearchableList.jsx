import { useState } from "react";
import { FocusInput } from './FocusInput';

export const SearchableList = ({ list }) => {
    const [searchString, setSearchString] = useState('');

    if (!Array.isArray(list)) {
        return <div>List is not available</div>;
    }

    const filteredList = list.filter(({ title }) =>
        title.toLowerCase().includes(searchString.toLowerCase())
    );

    const handleSearch = (e) => {
        setSearchString(e.target.value);
    };

    return (
        <div>
            <label>
                <span>Поиск</span>
                <FocusInput searchString={searchString} handleSearch={handleSearch} />
            </label>
            <ul>
                {filteredList.map(({ title, id }) => (
                    <li key={id}>{title}</li>
                ))}
            </ul>
        </div>
    );
};