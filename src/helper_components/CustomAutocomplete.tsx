import { Autocomplete, TextField } from '@mui/material'
import React, { SVGProps, useEffect, useState } from 'react';

type Option = {
    label: string,
    value: string
}

type CustomAutocompleteProps = {
    options: Option[],
    icon?: React.ReactElement<SVGProps<SVGSVGElement>> | null;
    placeholder?: string
}

const CustomAutocomplete: React.FC<CustomAutocompleteProps> = ({ options, icon, placeholder = "" }: CustomAutocompleteProps) => {

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
                sx={{ width: 300 }}
                popupIcon={icon}
                renderInput={(params) => <TextField {...params} label={placeholder} />}
            />
        </>
    )
}

export default CustomAutocomplete