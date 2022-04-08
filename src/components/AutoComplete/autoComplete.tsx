import React, {FC, useState, ChangeEvent, ReactElement, useEffect, KeyboardEvent, useRef} from 'react';
import classNames from 'classnames';
import Input, { InputProps } from '../Input/input'
import Icon from '../Icon/icon'
import useDebounce from '../../hooks/useDebounce';
import useClickOutside from '../../hooks/useClickOutside';
import Transition from '../Transition/transition'

interface DataSourceObject {
  value: string;
}

export type DataSourceType<T={}> = T & DataSourceObject ;

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect?: (item: DataSourceType) => void;
  renderOption?: (item: DataSourceType) => ReactElement;
}

const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const { fetchSuggestions, onSelect, value, renderOption, ...restProps  } = props
  const [ inputValue, setInputValue ] = useState(value as string)
  const [ suggestions, setSuggestions ] = useState<DataSourceType[]>([])
  const [ loading, setLoading ] = useState(false)
  const [ highlightIndex, setHighlightIndex ] = useState(-1)
  const triggerSearch = useRef(false);
  const componentRef = useRef<HTMLDivElement>(null);
  const debouncedValue = useDebounce(inputValue, 500)
  const [ showDropdown, setShowDropdown] = useState(false)

  useClickOutside(componentRef, () => {
    setSuggestions([])
  })

  useEffect(() => {
    if (debouncedValue && triggerSearch.current) {
      const results = fetchSuggestions(debouncedValue)
      if (results instanceof Promise) {
        console.log('trigger')
        setLoading(true)
        results.then(data => {
          setLoading(false)
          setSuggestions(data)
          if (data.length > 0) {
            setShowDropdown(true)
          }
        })
      } else {
        setSuggestions(results)
      }
    } else {
      setSuggestions([])
    }
    setHighlightIndex(-1)
  }, [debouncedValue])

  const highlight = (index: number) => {
    if (index < 0) index = 0
    if (index >= suggestions.length) index = suggestions.length - 1
    setHighlightIndex(index)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.keyCode) {
      case 13:
        if (suggestions[highlightIndex]) {
          handleSelect(suggestions[highlightIndex])
        }
        break
      case 38:
        console.log(123)
        highlight(highlightIndex - 1)
        break
      case 40:
        console.log(456)
        highlight(highlightIndex + 1)
        break
      case 27:
        console.log('esc')
        setShowDropdown(false)
        break
      default:
        break
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    triggerSearch.current  = true;
  }

  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value)
    setSuggestions([])
    if (onSelect) {
      onSelect(item)
    }
    triggerSearch.current = false;
  }

  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value;
  }

  const generateDropdown = () => {
    return (
      <Transition in={showDropdown || loading}
                  animation="zoom-in-top"
                  timeout={300}
                  onExited={() => {setSuggestions([])}}>
        <ul className="viking-suggestion-list">
          { suggestions.map((item, index) => {
            const cnames = classNames('suggestion-item', {
              'is-active': index === highlightIndex
            })
            return (
              <li key={index} className={cnames} onClick={ () => handleSelect(item) }>
                {renderTemplate(item)}
              </li>
            )
          }) }
        </ul>
      </Transition>
    )
  }

  return (
    <div className="viking-auto-complete" ref={componentRef}>
      <Input
        value={ inputValue }
        onChange={ handleChange }
        onKeyDown={ handleKeyDown }
        { ... restProps}
      >
      </Input>
      { loading && <ul><Icon icon="spinner" spin /></ul>}
      { (suggestions.length>0) && generateDropdown() }
    </div>
  )
}

export default AutoComplete;
