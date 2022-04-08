import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AutoComplete, {DataSourceType} from './autoComplete';
import {action} from '@storybook/addon-actions';

export default {
  title: '组件展示/AutoComplete',
  component: AutoComplete,
  argTypes: {
  }
} as ComponentMeta<typeof AutoComplete>;

const ControlledAutoComplete = () => {
  const [value, setValue] = useState('')
  // return <AutoComplete value={value} defaultValue={value} onChange={(e) => {setValue(e.target.value)}}/>
}

interface LakerPlayerProps {
  value: string;
  number?: number;
}

interface GithubUserProps {
  login: string;
  url: string;
  avatar_url: string;
}

export const SimpleComplete = () => {
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(({items}) => {
        console.log(items)
        return items.slice(0, 10).map((item: any) => ({value: item.login, ...item}))
      })
  }

  const renderOption = (item: DataSourceType<GithubUserProps>) => {
    return (
      <>
        <div>Name: {item.login}</div>
      </>
    )
  }

  return (
    // @ts-ignore
    <AutoComplete fetchSuggestions={handleFetch} onSelect={action('selected')} renderOption={renderOption}/>
  )
}

const Template: ComponentStory<typeof AutoComplete> = (args) => <AutoComplete {...args} />;

SimpleComplete.args = {

};
