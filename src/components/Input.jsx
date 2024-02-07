import { forwardRef } from 'react';

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes = 'inputs w-full p-1 border-b-2 focus:outline-none';
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props}></textarea>
      ) : (
        <input ref={ref} className={classes} {...props}></input>
      )}
    </p>
  );
});

export default Input;
