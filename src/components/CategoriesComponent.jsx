import React from "react";

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

export default CategoriesComponent;
