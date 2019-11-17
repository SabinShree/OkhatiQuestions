import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

class DropdownComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownData: [{
                value: "Default Text One",
                label: "Default Text One",
            }, {
                value: " Longer Default Text One",
                label: " Longer Default Text One",
            }, {value: " Longer Default Text Two ", label: "Longer Default Text Two"}, {
                value: "Very very long Default Text",
                label: "Very very long Default Text and again long text ",
            }, {
                value: "Default Text three",
                label: "Default Text three",
            }]
        }
    }

    render() {
        const animatedComponents = makeAnimated();
        const colourStyles = {
            container: (provided) => ({
                ...provided,
                display: 'inline-block',
                width: '600px',
                minHeight: '1px',
                textAlign: 'left',
                border: 'none',
            }),
            control: (provided) => ({
                ...provided,
                border: '2px solid black',
                borderRadius: "6px",
                minHeight: '1px',
            }),
            input: (provided) => ({
                ...provided,
                minHeight: '1px',
                color: "green",
                fontSize: "24px"

            }),
            option: (provided) => ({
                ...provided,
                backgroundColor: '#B3CCC2',
                borderRadius: '16px',
                padding: "7px",
                margin: "5px",
                width: "48%",
                display: 'inline-block',
                border: "1px solid white",
                marginBottom: "10px",
                fontSize: '16px',
                textAlign: 'center',
                color: 'black',
                cursor: 'pointer',
            }),
            multiValue: (provided) => (
                {
                    ...provided,
                    color: "black",
                    maxWidth: '100%',
                    minWidth: '150px',
                    float: 'left',
                    clear: 'left',
                    textAlign: "center",
                    backgroundColor: "white",
                    borderRadius: "11px",
                    border: "2px solid green",
                }
            ),
            multiValueRemove: (provided) => (
                {
                    ...provided,
                    color: "white",
                    margin: "1px",
                    float: 'right',
                    marginLeft: "10px",
                    borderRadius: "15px",
                    backgroundColor: 'black',
                    border: "1px solid white",
                    cursor: 'pointer',

                }
            ),
            menu: (provided) => (
                {
                    ...provided,
                    width: '100%',
                    padding: "10px",
                    border : "1px solid black"
                }
            ),
            clearIndicator: (provided) => ({
                ...provided,
                minHeight: '1px',
                color: 'red',
                cursor: 'pointer'
            }),
            valueContainer: (provided) => ({
                ...provided,
                minHeight: '1px',
                fontSize: "18px",
                paddingTop: '0',
                display: "block",
                paddingBottom: '0',
            }),
        };
        return (
            <div style={{width: "800px", margin: "0 auto"}}>

                <p>DropDown Menu</p>
                <Select
                    placeholder=''
                    components={animatedComponents}
                    closeMenuOnSelect={false}
                    isMulti
                    allowCreate={true}
                    DownChevron={true}
                    options={this.state.dropdownData}
                    noResultsText={() => null}
                    styles={colourStyles}

                />


            </div>
        );
    }
}

export default DropdownComponents;