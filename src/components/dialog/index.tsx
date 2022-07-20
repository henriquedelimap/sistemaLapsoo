import { Group, Dialog, Text, Button, TextInput } from "@mantine/core";
import { useState } from "react";

export function DialogSystem(){
    const [opened, setOpened] = useState(true)

    return(
        <Dialog 
            opened={opened} 
            withCloseButton
            onClose={()=>setOpened(!opened)}
            size='xl'
            radius='md'            
        >
            <Text size='md' >
                novidade do dia
            </Text>
            <Text size='sm' style={{padding: ".4rem 0"}}>
                assine nossa newsletter e fique por detro das novidades
            </Text>

            <Group size='sm' >
                <TextInput placeholder="exemplo@lapsoo.com" style={{ flex: 1 }} />
                <Button onClick={() => setOpened(false)}>Subscribe</Button>
            </Group>


        </Dialog>
    )
}