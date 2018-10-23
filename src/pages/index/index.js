import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
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

  queryList = () => {
    Taro.request({url: 'http://localhost:8080/memo/query/list'}).then(result => {
      this.setState({ list: result.data.result.list })
    })
  }

  skip = item => {
    Taro.navigateTo({
      url: `/pages/memo-detail/memo?id=${item.id}`
    })
  }

  render () {
    return (
      <View className='index'>
        {this.state.list.length ? this.state.list.map((item, index) => {
          return (
            <View key={index} className='memo-list-item' onClick={this.skip.bind(this, item)}>
              <ListItem item={item} />
            </View>
          )
        }) : null}
      </View>
    )
  }
}

