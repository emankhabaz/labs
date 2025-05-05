'use client';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const plate = useRef();
  const owner = useRef();
  const reason = useRef();

  const [vehicles, setVehicles] = useState([]);
  const [selected, setSelected] = useState(null);
  const [stale, setStale] = useState(true);

  useEffect(() => {
    if (stale) {
      fetch("/api/vehicle")
        .then(res => res.json())
        .then(data => {
          setVehicles(data);
          setStale(false);
        });
    }
  }, [stale]);

  async function handleAddVehicle() {
    const res = await fetch("/api/vehicle", {
      method: "POST",
      body: JSON.stringify({
        plate: plate.current.value,
        owner: owner.current.value,
      }),
    });
    if (res.ok) {
      plate.current.value = '';
      owner.current.value = '';
      setStale(true);
    }
  }

  async function handleAddViolation() {
    const res = await fetch(`/api/vehicle/${selected}/violations`, {
      method: "POST",
      body: JSON.stringify({
        reason: reason.current.value,
      }),
    });
    if (res.ok) {
      reason.current.value = '';
      setStale(true);
    }
  }

  async function handlePayViolation(id) {
    const res = await fetch(`/api/violation/${id}`, { method: "PUT" });
    if (res.ok) setStale(true);
  }

  async function handleDeleteViolation(id) {
    const res = await fetch(`/api/violation/${id}`, { method: "DELETE" });
    if (res.ok) setStale(true);
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  }

  const paidCount = vehicles.reduce((acc, v) => acc + v.violations.filter(vi => vi.paid).length, 0);
  const unpaidCount = vehicles.reduce((acc, v) => acc + v.violations.filter(vi => !vi.paid).length, 0);

  return (
    <main className="p-4 space-y-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Traffic Violations</h1>
        <div className="flex gap-2">
          <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">{paidCount}</span>
          <span className="bg-red-600 text-white px-2 py-1 rounded text-sm">{unpaidCount}</span>
        </div>
      </div>

      {/* Create Vehicle Section */}
      <section className="p-1 rounded-lg">
        <div className="flex flex-wrap items-end gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700"></label>
            <input ref={plate} placeholder="Plate#" className="border p-2 rounded w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700"></label>
            <input ref={owner} placeholder="Owner" className="border p-2 rounded w-full" />
          </div>
          <button
            onClick={handleAddVehicle}
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 px-4 rounded"
          >
            Create
          </button>
        </div>
      </section>

      {/* Vehicles List */}
      <section className="space-y-4">
        {vehicles.map(vehicle => (
          <div key={vehicle.id} className="border rounded-lg overflow-hidden shadow">
            {/* Header */}
            <div
              onClick={() => setSelected(selected === vehicle.id ? null : vehicle.id)}
              className="p-4 bg-gray-800 text-white font-semibold cursor-pointer flex justify-between"
            >
              #{vehicle.id} / {vehicle.owner}
            </div>

            {/* Violations */}
            <div className="p-4 space-y-2 text-sm">
              {vehicle.violations.map(v => (
                <div key={v.id} className="flex items-center justify-between">
                  <div>
                    {formatDate(v.createdAt)} {v.reason}
                  </div>
                  <div className="flex items-center gap-2">
                    {v.paid ? (
                      <span className="bg-gray-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">Paid</span>
                    ) : (
                      <button
                        onClick={() => handlePayViolation(v.id)}
                        className="bg-green-700 text-white px-3 py-1 rounded text-sm hover:bg-gray-800"
                      >
                        Paid
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteViolation(v.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Violation */}
            {selected === vehicle.id && (
              <div className="border-t p-4 space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <input
                    disabled
                    value={new Date().toLocaleDateString('en-US', {
                      month: '2-digit',
                      day: '2-digit',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: true,
                    })}
                    className="bg-gray-200 text-gray-700 p-2 rounded cursor-not-allowed"
                  />

                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-1">
                      <input type="radio" name={`reason-${vehicle.id}`} onClick={() => reason.current.value = 'Speeding'} />
                      Speeding
                    </label>
                    <label className="flex items-center gap-1">
                      <input type="radio" name={`reason-${vehicle.id}`} onClick={() => reason.current.value = 'Parking'} />
                      Parking
                    </label>
                  </div>

                  <button
                    onClick={handleAddViolation}
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
                  >
                    Create
                  </button>
                </div>

                <input
                  ref={reason}
                />
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
