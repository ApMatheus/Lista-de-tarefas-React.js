import { Container } from "./styles";
import { Item } from '../../types/item';
import { useState } from 'react';
import{FiDelete} from 'react-icons/fi'

type Props = {
    item: Item;
    onChange: (id: number, done: boolean) => void;
    onClick:(id:number)=>void
}

const ListItem = ({ item, onChange, onClick }: Props) => {

    return (
        <Container done={item.done}>
            <div>
                <input type='checkbox'
                    checked={item.done}
                    onChange={e => onChange(item.id, e.target.checked)} />
                <label>{item.name}</label>
            </div>
            <div>
                <FiDelete size={25} color={"#fff"} onClick={e=>onClick(item.id)}>delete</FiDelete>
            </div>
        </Container>
    );
}

export default ListItem