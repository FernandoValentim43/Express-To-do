import React from "react";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

export const DialogRadix = () => {
  const [open, setOpen] = React.useState(false);
  const wait = () => new Promise((resolve) => setTimeout(resolve, 100));
  const [name, setName] = useState("");

  return (
    <>
      <Dialog.Root open={open} onOpenChange={setOpen}>
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

            <fieldset className="Fieldset">
              <form
                onSubmit={(event) => {
                  wait().then(() => setOpen(false));
                  event.preventDefault();
                  console.log(name);
                  setName("");
                }}
              >
                <button type="submit">Submit</button>

                <label>
                  Type your Todo
                  <input
                    className="Input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="New Todo"
                  />
                </label>
              </form>
            </fieldset>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
