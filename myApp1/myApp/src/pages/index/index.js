import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtButton, AtTabBar } from 'taro-ui'

import './index.scss'


@inject('counterStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  increment = () => {
    const { counterStore } = this.props
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }

  tabBarHandler = () => {
    console.log('hello');
//页面跳转
    Taro.navigateTo({
      url: '/pages/discovery/discovery',
    })

  }

  render() {
    const { counterStore: { counter } } = this.props
    return (
      <View className='index'>
        <Text>{counter}</Text>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>

        <AtButton>test</AtButton>
        <AtButton>test</AtButton>

        <AtTabBar
          fixed
          tabList={[
            { title: '待办事项', iconType: 'bullet-list', text: 'old' },
            { title: '拍照', iconType: 'camera' },
            { title: '文件夹', iconType: 'folder', text: '100', max: '99' }
          ]}
          onClick={this.tabBarHandler}
          current={this.state.current}
        />


      </View>
    )
  }
}

export default Index
