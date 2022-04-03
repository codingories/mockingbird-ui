import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {AutoComplete, DataSourceType} from './autoComplete';
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
  // const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
  //   'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
  const lakersWithNumber = [
    {value: 'bradley', number: 11},
    {value: 'pope', number: 1},
    {value: 'caruso', number: 4},
    {value: 'cook', number: 2},
    {value: 'cousins', number: 15},
    {value: 'james', number: 23},
    {value: 'AD', number: 3},
    {value: 'green', number: 14},
    {value: 'howard', number: 39},
    {value: 'kuzma', number: 0},
  ]

  // const handleFetch = (query: string) => {
  //   return lakersWithNumber.filter(player => player.value.includes(query))
  // }

  // const handleFetch = (query: string) => {
  //   return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
  // }

  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(({items}) => {
        console.log(items)
        return items.slice(0, 10).map((item: any) => ({value: item.login, ...item}))
      })
    // return lakersWithNumber.filter(player => player.value.includes(query))
  }

  // const renderOption = (item: DataSourceType<LakerPlayerProps>) => {
  //   return (
  //     <>
  //       <h2>Name: {item.value}</h2>
  //       <p>Number: {item.number}</p>
  //     </>
  //   )
  // }

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

  // const handleFetch = (query: string) => {
  //   return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
  // }
  // const handleFetch = (query: string) => {
  //   return lakersWithNumber.filter(player => player.value.includes(query))
  // }
  // const handleFetch = (query: string) => {
  //   return fetch(`https://api.github.com/search/users?q=${query}`)
  //     .then(res => res.json())
  //     .then(({items}) => {
  //       console.log(items)
  //       return items.slice(0, 10).map((item: any) => ({value: item.login, ...item}))
  //     })
  // }
}

const Template: ComponentStory<typeof AutoComplete> = (args) => <AutoComplete {...args} />;

SimpleComplete.args = {

};

// export const 默认AutoComplete = Template.bind({});
// export const 被禁用的AutoComplete = Template.bind({});
// export const 带图标的AutoComplete = Template.bind({});
// export const 大小不同的AutoComplete = Template.bind({});
// export const 带前后缀的AutoComplete = Template.bind({});
//
// 默认AutoComplete.args = {
//   placeholder: 'placeholder',
//   style: {"width": '300px'}
// };
//
// 被禁用的AutoComplete.args = {
//   placeholder: 'disabled AutoComplete',
//   style: {"width": '300px'},
//   disabled: true
// }
//
// 带图标的AutoComplete.args = {
//   placeholder: 'AutoComplete with icon',
//   style: {"width": '300px'},
//   icon: "search"
// }
//
// 大小不同的AutoComplete.args = {
//   placeholder: 'large size',
//   style: {"width": '300px'},
//   size: "lg"
// }
//
// 带前后缀的AutoComplete.args = {
//   defaultValue: "baidu",
//   style: {"width": '300px'},
//   append: ".com"
// }

