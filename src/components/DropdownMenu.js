import React, { useState } from 'react';        

const DropdownMenu = ({options, prompt, value, onChange}) => {
    const [isOpen, setIsOpen] = useState(false);

    const SizeList = () => {
        return(
            options.map(option =>
                <div 
                key={option.id} 
                className={`option ${isOpen ? "" : "hidden"}`}
                onClick={() => {
                    onChange(option.name)
                    setIsOpen(!isOpen)
                }}
                >
                {option.name}
                </div>
            )
        )
    }

    return(
        <div className="dropdown margin-bottom-s">
            <div>
                <div 
                    className = {`dropDown-control ${isOpen ? "open" : ""}`}
                    onClick = {() => setIsOpen(!isOpen)}
                >
                    <div 
                        className={`selected-value ${isOpen ? "active-border" : ""}`}
                    >
                        {value ? value: prompt}
                    </div>
                    <SizeList />
                </div>
            </div>
        </div>
    )
}

export default DropdownMenu