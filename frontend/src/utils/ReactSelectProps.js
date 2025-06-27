export const options = [
        { value: "Hyderabad", label: "Hyderabad" },
        { value: "Chennai", label: "Chennai" },
        { value: "Bangalore", label: "Bangalore" },
        { value: "Mumbai", label: "Mumbai" },
        { value: "Pune", label: "Pune" },
        { value: "Delhi", label: "Delhi" },
        { value: "Kolkata", label: "Kolkata" },
        { value: "Ahmedabad", label: "Ahmedabad" }
];

export const customStyles = {
                control: (base, state) => ({
                    ...base,
                    boxShadow: 'none',
                    borderColor: '#fff',
                    '&:hover': { borderColor: '#fff' },
                    outline: 'none',
                    borderWidth: '1px',
                }),
                input: (base) => ({
                    ...base,
                    boxShadow: 'none',
                    outline: 'none',
                    border:'none'
                }),
                menu: (base) => ({
                    ...base,
                    zIndex: 20,
                }),
                indicatorSeparator:(base)=>({
                    borderColor: '#fff',
                    '&:hover': { borderColor: '#fff' },
                })
                };
export const jobTypes = [
        { value: "Internship", label: "Internship" },
        { value: "Full Time", label: "Full Time" },
        { value: "Partime", label: "Partime" },
        { value: "Contract", label: "Contract" },
       
];

export const createJobSelectStyle={
    control: (base, state) => ({
    ...base,
    borderColor: state.isFocused ? '#000' : '#ccc', // Black on focus, light gray otherwise
    boxShadow: state.isFocused ? '0 0 0 1px #000' : 'none', // Optional: black ring instead of blue
    '&:hover': {
      borderColor: '#000', // Black on hover too
    },
  }),
  input: (base) => ({
    ...base,
    outline: 'none',
    boxShadow: 'none',
  }),
  indicatorSeparator:(base)=>({
                    borderColor: '#fff',
                    '&:hover': { borderColor: '#fff' },
                })
}
