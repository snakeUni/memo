import Taro, { Component } from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'
import { AtInput, AtTextarea } from 'taro-ui'
import './memo.scss'

const  priority = ['最低', '低', '中等', '高', '最高']

export default class Index extends Component {

  config = {
    navigationBarTitleText: '详情页'
  }

  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      textareaValue: '',

    }
  }

  componentWillMount () { 
    console.log(this.$router.params)
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleChange = value => {
    this.setState({
      inputValue: value
    })
  }

  handleTextareaChange = e => {
    this.setState({
      textareaValue: e.target.value
    })
  }

  handlePickerChange = e => {
    console.log(e)
  }

  render () {
    return (
      <View className='memo-detail'>
        <View>
          <Text>优先级</Text>
          <View>
            <Picker mode='selector' range={priority} onChange={this.handlePickerChange}>

            </Picker>
          </View>
        </View>
        <View className='title'>
          <Text>标题</Text>
          <View>
            <AtInput
              name='value'
              type='text'
              placeholder='请输入标题'
              value={this.state.inputValue}
              onChange={this.handleChange.bind(this)}
            />
          </View>  
        </View>
        <View className='content'>
          <Text>内容</Text>
          <View className='textarea'>
            <AtTextarea
              value={this.state.textareaValue}
              onChange={this.handleTextareaChange.bind(this)}
              maxlength='200'
              placeholder='内容'
            />
          </View>
        </View>
      </View>
    )
  }
}

