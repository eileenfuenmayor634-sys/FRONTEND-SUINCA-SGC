interface Activity {
  id: number;
  user: string;
  action: string;
  time: string;
  status: 'completed' | 'pending' | 'failed';
}

const activities: Activity[] = [
  { id: 1, user: 'Sarah Johnson', action: 'Created new order #1234', time: '2 mins ago', status: 'completed' },
  { id: 2, user: 'Mike Chen', action: 'Updated product inventory', time: '15 mins ago', status: 'completed' },
  { id: 3, user: 'Emily Davis', action: 'Processed refund #5678', time: '1 hour ago', status: 'pending' },
  { id: 4, user: 'James Wilson', action: 'Added new customer', time: '2 hours ago', status: 'completed' },
  { id: 5, user: 'Lisa Anderson', action: 'Generated monthly report', time: '3 hours ago', status: 'failed' },
];

export function ActivityTable() {
  const getStatusColor = (status: Activity['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h3 className="mb-6">Recent Activity</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm text-gray-600">User</th>
              <th className="text-left py-3 px-4 text-sm text-gray-600">Action</th>
              <th className="text-left py-3 px-4 text-sm text-gray-600">Time</th>
              <th className="text-left py-3 px-4 text-sm text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4">{activity.user}</td>
                <td className="py-3 px-4 text-gray-600">{activity.action}</td>
                <td className="py-3 px-4 text-gray-500 text-sm">{activity.time}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(activity.status)}`}>
                    {activity.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
