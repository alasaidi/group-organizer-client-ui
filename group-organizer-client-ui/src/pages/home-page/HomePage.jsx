import { useEffect, useState } from "react";
import "./homePage.css";
import { getHealth, create } from "../../services/healthServices";

export const HomePage = () => {
  const [health, setHealth] = useState({});
  const [request, setRequest] = useState({
    Title: "",
    Description: "",
    ImageURL: "",
    // Add other fields as needed
  });
  const [isChange, setIsChange] = useState(false);
  useEffect(() => {
    // runs when page loads
    checkHealth();
  }, []);
  useEffect(() => {
    checkHealth();
  }, [isChange]);
  const checkHealth = async () => {
    const healthData = await getHealth();

    setHealth(healthData.data.data);
    console.log("health is:", health);
  };
  // {
  //   "GroupId": 1,
  //   "Title": "group 1",
  //   "Description": "group 1 description",
  //   "ImageURL": "www.group-image1.net"
  // },

  const handleInput = (event) => {
    const { name, value } = event.target;
    setRequest((previous) => ({ ...previous, [name]: value }));
  };
  const handleSubmit = async () => {
    try {
      const result = await create(request);
      console.log("Group created:", result.data);
      setIsChange(!isChange);
      // Clear the form or show a success message
    } catch (error) {
      console.error("Failed to create group:", error);
      // Show an error message to the user
    }
  };

  return (
    <div className="home-page">
      <pre>{JSON.stringify(request, null, 2)}</pre>
      <form>
        <label htmlFor="Title">
          Title
          <input type="text" name="Title" value={request.Title} onChange={handleInput} />
        </label>

        <label htmlFor="Description">
          Description <input type="text" name="Description" value={request.Description} onChange={handleInput} />{" "}
        </label>
        <label htmlFor="ImageURL">
          ImageURL
          <input type="text" name="ImageURL" value={request.ImageURL} onChange={handleInput} />
        </label>
        <button type="button" onClick={handleSubmit}>
          create new group
        </button>
      </form>
      <h2>this is my page</h2>
      {health.length > 0 ? (
        <div>
          <ul>
            {health.map((d, i) => (
              <li key={i}>{d.Description}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
};
