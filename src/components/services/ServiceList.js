export default function ServiceList() {
  const myServices = [
    {
      id: 0,
      name: "Tax Services",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt nunc pulvinar sapien et. Tempor orci eu lobortis elementum nibh tellus molestie. Vestibulum morbi blandit cursus risus at ultrices mi. Mattis aliquam faucibus purus in massa.",
      img_url: "../images/taxes-200x133.jpg",
    },
    {
      id: 1,
      name: "Estate Planning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt nunc pulvinar sapien et. Tempor orci eu lobortis elementum nibh tellus molestie. Vestibulum morbi blandit cursus risus at ultrices mi. Mattis aliquam faucibus purus in massa.",
      img_url: "../images/estate-planning-200x133.jpg",
    },
    {
      id: 2,
      name: "Criminal Defense",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt nunc pulvinar sapien et. Tempor orci eu lobortis elementum nibh tellus molestie. Vestibulum morbi blandit cursus risus at ultrices mi. Mattis aliquam faucibus purus in massa.",
      img_url: "../images/criminal-defense-200x133.jpg",
    },
  ];

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://finalspaceapi.com/api/v0/character/?limit=24")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);
  return myServices;
}
