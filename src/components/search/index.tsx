import { Autocomplete, Avatar, Group, MantineColor, SelectItemProps, Text } from '@mantine/core'
import { forwardRef, useState } from 'react'
import { Icone } from '@/components/Icone'

interface ItemProps extends SelectItemProps{
    color: MantineColor
    description: String
    image: string
}

const charactersList = [
    {
      image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
      label: 'adicionar itens',
      description: 'Adicionar os produtos ao seu site',
    },
  
    {
      image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
      label: 'gerenciar itens',
      description: 'Gerencie os produtos já adicionados ao site',
    },
    {
      image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
      label: 'configuração',
      description: 'defina as configurações da conta',
    },
    {
      image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
      label: 'atividade recente',
      description: 'Monitore a atividade recente do site',
    },
  ];


  const data = charactersList.map((item) => ({ ...item, value: item.label }));




const AutoCompleteItem = forwardRef<HTMLDivElement, ItemProps>(
    ({description, value, image, ...others}: ItemProps, ref) => (
        <div ref={ref} {...others} >
            <Group noWrap>
                <Avatar src={image} />
                <div>
                    <Text>{value}</Text>
                    <Text size='xs' >{description}</Text>
                </div>
            </Group>
        </div>
    )
)



export function Search(){
    const [value, setValue] = useState('')
    return(
        <Autocomplete 
            placeholder='pesquisar'
            itemComponent={AutoCompleteItem}
            onChange={setValue}           
            data={data} 
            icon={Icone("search")}
            filter={(value: string, item: { value: string; description: string }) =>
                item.value.toLowerCase().includes(value.toLowerCase().trim()) ||
                item.description.toLowerCase().includes(value.toLowerCase().trim())
              }
            />
    )
}

