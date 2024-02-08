export default function Button({ black, red, white, children, ...props }) {
  return (
    <>
      {red && (
        <button className="button-red px-6 py-2 rounded-md" {...props}>
          {children}
        </button>
      )}
      {white && (
        <button className="button-white px-6 py-2 rounded-md" {...props}>
          {children}
        </button>
      )}
      {black && (
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
