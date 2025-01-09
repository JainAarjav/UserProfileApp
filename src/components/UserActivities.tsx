import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserActivities, Activity } from "../data-provider/dataprovider";

const UserActivities = () => {
  const { id } = useParams<{ id: string }>();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadActivities = async () => {
      try {
        const activityData = await fetchUserActivities(Number(id));
        setActivities(activityData);
      } catch {
        setError("Failed to load activities. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadActivities();
  }, [id]);

  if (loading) return <p>Loading activities...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>User Activities</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <h3>{activity.title}</h3>
            <p>{activity.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserActivities;
