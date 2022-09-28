const getCurrentAge = (date: Date) => new Date().getFullYear() - new Date(date).getFullYear();

export default getCurrentAge;
