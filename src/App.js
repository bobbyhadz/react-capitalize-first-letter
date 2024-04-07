import './App.css';

// 👇️ If you need to capitalize first and lowercase the rest
const capitalizeFirstLowercaseRest = str => {
  return (
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  );
};

export default function App() {
  // 👇️ If you only need to capitalize the first letter
  const capitalizeFirst = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const str = 'bobby hadz';

  console.log(capitalizeFirst(str)); // 👉️ "Bobby hadz"
  return (
    <div>
      <h2>{capitalizeFirst(str)}</h2>
    </div>
  );
}
