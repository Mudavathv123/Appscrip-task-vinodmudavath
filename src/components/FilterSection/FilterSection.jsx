import { MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp} from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import './filtersection.css'
import { useState } from "react";

const filterValues = [
    {
        selectId: uuidv4(),
        selectValue: "IDEAL FOR",
        options: [
            {
                optionId: uuidv4(),
                text: "Men",
            },
            {
                optionId: uuidv4(),
                text: "Women",
            },
            {
                optionId: uuidv4(),
                text: "Baby & kids",
            }
        ],
        isActive : false
    },
    {
        selectId: uuidv4(),
        selectValue: "OCCASION",
        options: [
            {
                optionId: uuidv4(),
                text: "Men",
            },
            {
                optionId: uuidv4(),
                text: "Women",
            },
            {
                optionId: uuidv4(),
                text: "Baby & kids",
            }
        ],
        isActive : false
    },
    {
        selectId: uuidv4(),
        selectValue: "WORK",
        options: [
            {
                optionId: uuidv4(),
                text: "Men",
            },
            {
                optionId: uuidv4(),
                text: "Women",
            },
            {
                optionId: uuidv4(),
                text: "Baby & kids",
            }
        ],
        isActive : false
    },
    {
        selectId: uuidv4(),
        selectValue: "FABRIC",
        options: [
            {
                optionId: uuidv4(),
                text: "Men",
            },
            {
                optionId: uuidv4(),
                text: "Women",
            },
            {
                optionId: uuidv4(),
                text: "Baby & kids",
            }
        ],
        isActive : false
    },
    {
        selectId: uuidv4(),
        selectValue: "SEGMENT",
        options: [
            {
                optionId: uuidv4(),
                text: "Men",
            },
            {
                optionId: uuidv4(),
                text: "Women",
            },
            {
                optionId: uuidv4(),
                text: "Baby & kids",
            }
        ],
        isActive : false
    },
    {
        selectId: uuidv4(),
        selectValue: "SUITABLE FOR",
        options: [
            {
                optionId: uuidv4(),
                text: "Men",
            },
            {
                optionId: uuidv4(),
                text: "Women",
            },
            {
                optionId: uuidv4(),
                text: "Baby & kids",
            }
        ],
        isActive : false
    },
    {
        selectId: uuidv4(),
        selectValue: "RAW MATERIALS",
        options: [
            {
                optionId: uuidv4(),
                text: "Men",
            },
            {
                optionId: uuidv4(),
                text: "Women",
            },
            {
                optionId: uuidv4(),
                text: "Baby & kids",
            }
        ],
        isActive : false
    },
    {
        selectId: uuidv4(),
        selectValue: "PATTERN",
        options: [
            {
                optionId: uuidv4(),
                text: "Men",
            },
            {
                optionId: uuidv4(),
                text: "Women",
            },
            {
                optionId: uuidv4(),
                text: "Baby & kids",
            }
        ],
        isActive : false
    },
]

const FilterSection = () => {


    const [optionList, setOptionList] = useState(filterValues);

    const onClickSelect = event => {
        
        setOptionList(prevOptionList => prevOptionList.map(eachFilter => {
            if(eachFilter.selectId === event.target.id) {
                return {...eachFilter, 
                    isActive : !eachFilter.isActive}
            }
            return eachFilter;
        }));
        
    }

    return (
        <div className="filter-section-container">
            <div className="customizable-checkbox-container">
                <input className="customizable-checkbox" type="checkbox"  id = "customeFilter"/>
                <label className="customizable-label" htmlFor="customeFilter">Customizble</label>
            </div>
            <ul className="filter-list-container">
                
                {
                 
                 optionList.map(eachFilter => (
                        <>
                        <li key={eachFilter.selectId} >
                            <div className="select-lable-container" >
                                <p className='select-lable'>{eachFilter.selectValue} <span className="select-default-option">All</span></p>
                                {
                                    eachFilter.isActive ?  <MdOutlineKeyboardArrowUp size="24" onClick = {onClickSelect} id = {eachFilter.selectId}/>: <MdOutlineKeyboardArrowDown size="24" onClick = {onClickSelect} id = {eachFilter.selectId}/>
                                }
                                
                            </div>
                            <div className= {eachFilter.isActive ? 'active-option-container' : 'inactive-option-container'}>
                            {
                                eachFilter.options.map(eachOption => (
                                    <div className="option-input-conatiner" key={eachOption.optionId}>
                                        <input type="checkbox" id={eachOption.optionId} className="checkbox-input" />
                                        <label htmlFor={eachOption.optionId} className="option-label">{eachOption.text}</label>
                                    </div>
                                ))
                            }
                            </div>
                        </li>
                        <hr/>
                    </>
                    ))

                }
            </ul>
        </div>
    )
}

export default FilterSection