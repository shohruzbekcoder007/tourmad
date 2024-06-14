import { Autocomplete, TextField } from '@mui/material'
import React, { SVGProps, useEffect, useState } from 'react'

type Option = {
    label: string,
    value: string
}

type CustomAutocompleteProps = {
    options: Option[],
    icon?: React.ReactElement<SVGProps<SVGSVGElement>> | null;
    placeholder?: string,
    getChange: (val: Option | null) => void
}

const CustomAutocomplete: React.FC<CustomAutocompleteProps> = ({ options, icon, placeholder = "", getChange }: CustomAutocompleteProps) => {

    const [optionList, setOptionList] = useState<Option[]>(options)

    useEffect(() => {
        setOptionList(options)
    }, [options])


    return (
        <>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={optionList}
                getOptionLabel={(option) => `${option.label}`}
                popupIcon={icon}
                onChange={(_: React.SyntheticEvent<Element, Event>, newValue: Option | null) => {
                    getChange(newValue);
                }}
                sx={{
                    width: "100%",
                    '& .MuiAutocomplete-paper': {
                        zIndex: 10,
                    }
                }}
                renderInput={(params) => <TextField 
                    {...params} 
                    label={placeholder} 
                />}
            />
        </>
    )
}

export default CustomAutocomplete