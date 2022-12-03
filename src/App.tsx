import React from 'react';
import { Container, Area, Header } from './App.styles';
import { useState, useCallback, useEffect } from 'react';
import { Item } from './types/item'
import ListItem from './components/ListItem';
import AddArea from './components/AddArea';
import { supabase } from './components/api/supabase';


function App() {

  const [list, setList] = useState<Item[]>([
  ])

  const RequestSupabase = useCallback(async () => {

    let { data: Tarefas, error } = await supabase
      .from('Tarefas')
      .select("*")

    let array: any = [];

    Tarefas?.forEach((e: { id: any; name: any; done: any; }) => {
      array.push({
        id: e.id,
        name: e.name,
        done: e.done
      });
    })
    setList(array)

  }, [])

  useEffect(() => {
    RequestSupabase();
  }, [])

  const Insert = async (name: string) => {

    const { data, error } = await supabase
      .from('Tarefas')
      .insert([
        {
          id: list.length + 1,
          name: name,
          done: false
        },
      ]);
    RequestSupabase();
  }

  const Update = async (id: number, done:boolean) => {

    const { data, error } = await supabase
      .from('Tarefas')
      .update({ done: done })
      .eq('id', id)
      RequestSupabase();
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    Update(id, done)
  }

  const DeleteItem = async (id: number) => {
    const { error } = await supabase
        .from('Tarefas')
        .delete()
        .eq('id', id)

        RequestSupabase();
        
}

  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>

        <AddArea onEnter={Insert} />
        {
          list.map((item, index) => (
            <ListItem key={index} item={item} onChange={handleTaskChange} onClick={DeleteItem}/>
          ))
        }
      </Area>
    </Container>
  );
}

export default App;
