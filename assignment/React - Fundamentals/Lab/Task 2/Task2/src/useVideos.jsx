import { useEffect, useState } from "react";

const useVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const response = [
        {
          id: 1,
          title: "React Crash Course",
        },
        {
          id: 2,
          title: "JavaScript Tutorial",
        },
        {
          id: 3,
          title: "Node.js Beginner Guide",
        },
      ];

      setVideos(response);
    }

    fetchVideos();
  }, []);

  return videos;
};

export default useVideos;