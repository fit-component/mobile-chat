import * as React from 'react'
import Chat from '../../src'

export default class Demo extends React.Component<any,any> {
    handleNameRender() {
        return (
            <div>fitRender</div>
        )
    }

    render() {
        return (
            <div>
                <Chat name="fit"
                      content="fit组件很好用"
                      portrait="http://himg.bdimg.com/sys/portrait/item/052ee28496e7bfb1e7be8ae7bebde5a4a7e7a9ba4620.jpg"/>
                <Chat position={Chat.Position.Right}
                      name="fit"
                      nameRender={this.handleNameRender.bind(this)}
                      content="没错儿"
                      portrait="http://himg.bdimg.com/sys/portrait/item/052ee28496e7bfb1e7be8ae7bebde5a4a7e7a9ba4620.jpg"/>
            </div>
        )
    }
}