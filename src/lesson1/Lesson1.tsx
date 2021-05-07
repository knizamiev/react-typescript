import React from "react";
import Moment from 'react-moment';


type TableProps = {
    id: number,
    name: string,
    deleted: boolean,
    dateDeleted?: Date
};

type TestProps = {
    id: number,
    name?: string
};

const Lesson1 = () => {

    const ar: Array<TableProps> = [
        {id: 1, name: 'Test1', deleted: false},
        {id: 2, name: 'Test2', deleted: true, dateDeleted: new Date('1976-04-19 12:59')},
        {id: 3, name: 'Test3', deleted: false},
        {id: 4, name: 'Test4', deleted: true, dateDeleted: new Date('1976-04-19 14:43')},
        {id: 5, name: 'Test5', deleted: true, dateDeleted: new Date('1976-04-19 18:20')}]

    return(
        <div>
            <MyTable array={ar}/>
            <br/>
            <Test id = {2} name = "Vitek"/>
            <Test id = {3} />
        </div>
    )
}

const MyTable:React.FC<{array: Array<TableProps>}> = ({array}) => {
    return(
        <div>
        <table style={{border:'solid 1px black'}}>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>deleted</th>
                <th>dateDeleted</th>
            </tr>
            {array.map(item=><tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.deleted ? 'Да' : 'Нет'}</td>
                <td>{item.deleted && <Moment date={item.dateDeleted} format="HH:mm:SS"/>}</td>
            </tr>)}
        </table>
        </div>
    )
};

const Test = ({id, name = 'default'}: TestProps) => {
    return(
        <div>
            <span>{id} {name}</span>
        </div>
    )
}

export default Lesson1;
