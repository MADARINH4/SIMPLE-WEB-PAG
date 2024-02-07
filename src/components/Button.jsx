export default function Button({ white, children, ...props }) {
  return (
    <>
      {white ? (
        <button className="button-white px-6 py-2 rounded-md" {...props}>
          {children}
        </button>
      ) : (
        <button
          className="button-black px-4 py-2 text-xs md:text-base font-semibold rounded-md cursor-pointer "
          {...props}
        >
          {children}
        </button>
      )}
    </>
  );
}
