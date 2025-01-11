// filepath: /home/Rajchal/Desktop/vsRepo/cookfresh/pages/api/data.js
export default function handler(req, res) {
  // Sample data
  const data = {
    message: "Hello, this is your data!",
    items: [1, 2, 3, 4, 5],
  };

  // Send the data as a JSON response
  res.status(200).json(data);
}
