export const ContactList = ({ contactsBook, onDelete }) => {
  return (
    <ul>
      {contactsBook.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
