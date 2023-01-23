import React from "react";
import { useState } from "react";
import DropdownMenuRadix from "./DropDownRadix";



import * as Dialog from "@radix-ui/react-dialog";


export const DialogRadix = (props) => {
  const [name, setName] = useState("");
  const [open, setOpen] = React.useState(false);
  const wait = () => new Promise((resolve) => setTimeout(resolve, 100));


  return (


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
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              X
            </button>
          </Dialog.Close>

          <form
            onSubmit={(event) => {
              wait().then(() => setOpen(false));
              event.preventDefault();
              props.createTodo(name)
              setName("");
            }}
          >

            <div className="form-field">
              <input

                className="Input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="New Todo"
              />

              <span className="icon"><DropdownMenuRadix/></span>

            </div>




            <button disabled={!name} className="Submit" type="submit">Submit</button>

          </form>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>

  );
};
