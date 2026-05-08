import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";

export default function Register() {
    return (
        <>
      <header>
        <Show when="signed-out">
          <SignInButton />
          <SignUpButton />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
    </>
    )
}