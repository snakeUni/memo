import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './memo.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '详情页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>memo</Text>
      </View>
    )
  }
}

