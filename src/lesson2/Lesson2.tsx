import React from "react";

type LessonProps = {
    name?: string
}

type LessonState = {
    count: number
}

class Lesson2 extends React.Component<LessonProps, LessonState>{

    static  defaultProps: LessonProps = {
        name: 'default'
    }

    constructor(props:LessonProps) {
        super(props);

        this.state = {
            count: 0
        }
    }

    componentWillMount():void {

    }

    handleClick = () => {
    this.setState(({count})=>({
        count: ++count
    }))}

    render() {
        return(
            <div>
                <h2>{this.props.name}</h2>
                <h3>{this.state.count}</h3>
                <button type='button' onClick={this.handleClick}>Click clack</button>
            </div>
        );
    }
}

export default Lesson2;