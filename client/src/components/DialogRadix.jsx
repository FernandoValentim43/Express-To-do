import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

export const DialogRadix = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="middle">
          <div className="add">+</div>
          <div>Add a Todo</div>
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Add A Todo</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Type a Todo then click the button
          </Dialog.Description>
          <fieldset className="Fieldset">
            <input className="Input" id="name" placeholder="Type a Todo" />
          </fieldset>

          <Dialog.Close asChild>
            <button className="Button green" onClick={() => window.alert("a")}>
              Save changes
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
