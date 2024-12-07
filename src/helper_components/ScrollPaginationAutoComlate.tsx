import { Autocomplete, CircularProgress, TextField, TextFieldProps } from '@mui/material'
import React, { useState, useEffect } from 'react'

interface ScrollPaginationAutoComlateProps {
  options: any[]
  getOptions: (params: { search: string; page: number }) => Promise<{ results: any[]; next: string | null }>
  TextFieldProps?: TextFieldProps
}

const ScrollPaginationAutoComlate = ({ options, getOptions, TextFieldProps, ...props }: ScrollPaginationAutoComlateProps) => {
  const [open, setOpen] = useState(false)
  const [optionsState, setOptionsState] = useState<any[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (!open) {
      setOptionsState(options)
    }
  }, [open])

  useEffect(() => {
    if (open) {
      if (search) {
        if (page === 1) {
          setOptionsState([])
        }
        getOptions({ search, page })
          .then(data => {
            const newOptions = data.results
            setOptionsState(prev => [...prev, ...newOptions])
            setHasMore(data.next !== null)
            setLoading(false)
          })
          .catch(e => {
            console.log(e)
            setLoading(false)
          })
      }
    }
  }, [open, search, page])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearch(value)
    setPage(1)
  }

  const handleLoadMore = () => {
    setLoading(true)
    setPage(page + 1)
  }

  return (
    <Autocomplete
      {...props}
      open={open}
      onOpen={() => {
        setOpen(true)
      }}
      onClose={() => {
        setOpen(false)
      }}
      getOptionLabel={option => option.name}
      options={optionsState}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          {...TextFieldProps}
          onChange={handleSearch}
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
      renderOption={(props, option) => (
        <li {...props} key={option.id}>{option.name}</li>
      )}
      ListboxProps={{
        style: { maxHeight: 400 },
        onScroll: (event) => {
          const listboxNode = event.currentTarget
          if (
            listboxNode.scrollTop + listboxNode.clientHeight ===
            listboxNode.scrollHeight
          ) {
            if (hasMore) {
              handleLoadMore()
            }
          }
        },
      }}
    />
  )
}

export default ScrollPaginationAutoComlate

