export default function Note({ title, children }) {
  return (
    <div className="w-full bg-gray-100 dark:bg-gray-800 px-5 py-0.5 rounded-md">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
