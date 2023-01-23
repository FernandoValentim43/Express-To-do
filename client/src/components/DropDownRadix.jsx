import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { SmileyBlank } from "phosphor-react";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

import '../../src/index.css';

const DropdownMenuRadix = (props) => {
    const handleEmoji = (emoji) => {
        const actualText = props.text
        props.setText(actualText + emoji)
    }
   

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <SmileyBlank size={38} color="#061a2e" />
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
                 <Picker skinTonePosition={"none"} previewPosition={"none"} data={data} categories={["objects", "activity", "foods", "nature", "people"]} perLine={12} onEmojiSelect={ e => handleEmoji(e.native)} />
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default DropdownMenuRadix;
