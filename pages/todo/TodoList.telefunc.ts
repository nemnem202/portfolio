// We use Telefunc (https://telefunc.com) for data mutations.

export async function onNewTodo({ text }: { text: string }) {
  console.log(`Received ${text}`);
}
