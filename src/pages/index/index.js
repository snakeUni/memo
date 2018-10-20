import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import ListItem from '../memo-item/index'
import './index.scss'

export default class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  config = {
    navigationBarTitleText: '首页'
  }


  componentWillMount () { }

  componentDidMount () {
    this.queryList()
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  queryList () {
    Taro.request({url: 'http://172.16.8.224:8080/memo/query/list'}).then(result => {
      this.setState({ list: result.data.result.list })
    })
  }

  skip () {
    Taro.navigateTo({
      url: '/pages/memo-detail/memo'
    })
  }

  render () {
    return (
      <View className='index'>
        {this.state.list.length ? this.state.list.map((item, index) => {
          return (
            <View key={index} className='memo-list-item'>
              <ListItem item={item} />
            </View>
          )
        }) : null}
      </View>
    )
  }
}

