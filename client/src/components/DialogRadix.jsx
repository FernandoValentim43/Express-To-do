import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

export const DialogRadix = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button" size="large">
          Edit profile
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Add A Todo</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Type a new Todo then click the button
          </Dialog.Description>
          <fieldset className="Fieldset">
            <form onSubmit={handleSubmit}>
              <label>
                Enter your name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <input type="submit" />
            </form>
          </fieldset>

          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          ></div>

          {/* <Dialog.Close asChild>
            <button className="Button" type="submit">
              Save changes
            </button>
          </Dialog.Close> */}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
