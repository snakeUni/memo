import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import moment from 'moment'
import * as Constant from './constant'
import './index.scss'

const map = new Map([
  [Constant.LOWEST, 'lowest'],
  [Constant.LOW, 'low'],
  [Constant.MIDDLE, 'middle'],
  [Constant.HIGH, 'high'],
  [Constant.HIGHEST, 'highest']
])

export default class Index extends Component {

  config = {
    navigationBarTitleText: '详情页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  getClassName (type) {
    return `memo-item ${map.get(type)}`
  }
  render () {
    const item = this.props.item
    return (
      <View className={this.getClassName(item.level)}>
        <View>
          <View className='title-time'>
            <View className='title'>{item.title}</View>
            <View className='time'>{moment(item.createdTime).format('YYYY-MM-DD HH:mm:ss')}</View>
          </View>
          <View className='content'>
            <View className='content-content'>
              {item.content}
            </View>
          </View>
        </View>
      </View>
    )
  }
}

