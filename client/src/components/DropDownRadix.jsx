import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { SmileyBlank } from "phosphor-react";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

import '../../src/index.css';

const DropdownMenuRadix = () => {
   

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <SmileyBlank size={38} color="#061a2e" />
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
                    <Picker data={data} categories={["objects", "activity", "foods", "nature", "people"]} perLine={8} onEmojiSelect={e => setEmoji(e.native)} />
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default DropdownMenuRadix;
