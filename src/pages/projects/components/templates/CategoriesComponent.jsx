import PropTypes from "prop-types";

const CategoriesComponent = ({
    id,
    category,
    componentClass,
    selectCategory,
    setSelectCategory,
    itemSelect,
    setItemSelect,
}) => {
    const handlerCategory = (event) => {
        itemSelect == event.target.value ? setSelectCategory(!selectCategory) : setSelectCategory(true);
        setItemSelect(event.target.value);
    };

    return (
        <li>
            <button onClick={handlerCategory} className={componentClass} value={id}>
                {category}
            </button>
        </li>
    );
};

CategoriesComponent.propTypes = {
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    componentClass: PropTypes.string.isRequired,
    selectCategory: PropTypes.bool.isRequired,
    setSelectCategory: PropTypes.func.isRequired,
    itemSelect: PropTypes.number.isRequired,
    setItemSelect: PropTypes.func.isRequired,
};

export default CategoriesComponent;
