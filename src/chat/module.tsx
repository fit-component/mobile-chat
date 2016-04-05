export interface PositionInterface {
    Left:string
    Right:string
}

export const Position:PositionInterface = {
    Left: 'left',
    Right: 'right'
}

export interface PropsInterface {
    /**
     * 聊天内容
     */
    content?:string

    /**
     * 位置,聊天冒泡在左边或者右边
     */
    position?:string

    /**
     * 头像地址
     */
    portrait?:string

    /**
     * 用户名
     */
    name?:string

    /**
     * 用户名,自定义渲染
     */
    nameRender?:()=>any

    [x:string]:any
}

export class Props implements PropsInterface {
    content = ''
    position = Position.Left
    portrait = ''
    name = ''
    nameRender = ()=> {
    }
}

export interface StateInterface {

}

export class State implements StateInterface {

}