export const dateCreate = (time) => {
  const date = new Date(time);
    return date.toLocaleDateString();
}
