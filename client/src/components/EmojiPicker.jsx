import React from 'react'
import { useState } from 'react';
import { SmileyBlank } from "phosphor-react";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

export const EmojiPicker = () => {
    const [emoji, setEmoji] = useState()

    return (
        <div className="form-field">
            <input />

            <span className="icon"><SmileyBlank size={38} color="#061a2e" /></span>

            <Picker data={data} onEmojiSelect={e => setEmoji(e.native)} />
        </div>
    )
}
