import React, { Component } from 'react';


class OptionsDisplay extends Component {
    // displayOptions

    constructor(){
        super();
        this.renderOptionForm = this.renderOptionForm.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(e) {
        e.preventDefault();
        const drugName = this.drugName.value;
        console.log("ref drugName", drugName);
        this.props.onSaveSearchOption(drugName);
    }
    
    renderOptionForm(innerRxcui, obj) {
        let drugName = obj[innerRxcui];
        console.log("innerRxcui, drugName",innerRxcui, drugName);
        return(
            <form className="optionsDisplayForm" key={innerRxcui}> 
                <div className="displayOptionsFormInnerDiv"> 

                    <input className="optionsDisplaySubmit column column-10" value="save" type="submit" onClick={e => {
                        this.handleOnClick(e);
                        }}
                    />
                    <div className="optionsDisplayFormInfo column column-80"> {drugName} </div>

                    <input type="hidden" value={drugName} ref={input => {
                            this.drugName = input
                        }} 
                    />

                </div>

            </form>
        );
    }

    render(){
        console.log("displayOptions O.D.", this.props.displayOptions);
        const displayOptions = this.props.displayOptions;
        return(
            <div className="optionsDisplayDiv">
                <div className="optionsDisplaySpacer"> </div>
                {Object.keys(displayOptions).map( rxcuiNum => {
                    console.log("rxcuiNum", rxcuiNum);
                    return ( Object.keys(displayOptions[rxcuiNum]).map( innerRxcui => {
                        return( this.renderOptionForm(innerRxcui, displayOptions[rxcuiNum])
                    )}))
                        
                    
                })}
                
            </div>
        );
    }
}

export default OptionsDisplay;