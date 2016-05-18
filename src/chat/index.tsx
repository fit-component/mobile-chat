import * as React from 'react'
import * as classNames from 'classnames'
import * as _ from 'lodash'
import * as module from './module'
import {others} from '../../../../common/transmit-transparently/src'
import './index.scss'

export default class Chat extends React.Component<module.PropsInterface,module.StateInterface> {
    static defaultProps = new module.Props()
    public state = new module.State()
    static Position = module.Position

    constructor(props: any) {
        super(props)
    }

    public render() {
        let containerClass = classNames({
            '_namespace': true,
            'left': this.props.position === module.Position.Left,
            'right': this.props.position === module.Position.Right,
            [this.props['className']]: !!this.props['className']
        })

        let textContentClass = classNames({
            'text-content': true,
            'left': this.props.position === module.Position.Left,
            'right': this.props.position === module.Position.Right
        })

        let rightContentClass = classNames({
            'right-content': true,
            'left': this.props.position === module.Position.Left,
            'right': this.props.position === module.Position.Right
        })

        return (
            <div {...others(new module.Props(), this.props)} className={containerClass}>
                <img className="portrait"
                     src={this.props.portrait}/>
                <div className={rightContentClass}>
                    <div className="name">
                        {!_.isEmpty(this.props.nameRender()) ? this.props.nameRender() : this.props.name}
                    </div>
                    <div className={textContentClass}>
                        {this.props.content}
                    </div>
                </div>
            </div>
        )
    }
}