import React, { useEffect, useState } from 'react'
import InternCard from "./components/InternCard.jsx"
function App() {



  const [companyInfo, setCompanyInfo] = useState(null);
  const [internInfo, setInternInfo] = useState(null);
  const [taskInfo, setTaskInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      try {
        const [companyResponse, internResponse, taskResponse] = await Promise.all([
          fetch("http://localhost:5000/api/company"),
          fetch("http://localhost:5000/api/interns"),
          fetch("http://localhost:5000/api/tasks"),
        ]);

        if (!companyResponse.ok) {
          throw new Error("Failed to fetch company info");
        }

        if (!internResponse.ok) {
          throw new Error("Failed to fetch intern info");
        }

        if (!taskResponse.ok) {
          throw new Error("Failed to fetch task info");
        }

        const companyData = await companyResponse.json();
        const internData = await internResponse.json();
        const taskData = await taskResponse.json();

        console.log("Company Data:", companyData);
        console.log("Intern Data:", internData);
        console.log("Task Data:", taskData);  

        setCompanyInfo(companyData);
        setInternInfo({
          company: companyData.name,
          name: internData.name,
          domain: internData.domain,
          period: internData.duration,
          supervisor: internData.supervisor,
        });
        setTaskInfo(
          taskData.map((task) => ({
            id: task.taskId,
            title: task.taskName,
            status: task.status,
          }))
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#f4e3d4] via-[#ead4c0] to-[#dcbda3] px-4 py-6 sm:px-6 lg:px-10">
        <div className="mx-auto w-full max-w-6xl space-y-6 sm:space-y-8">
          <header className='flex flex-col gap-4 rounded-2xl border border-[#425b62] bg-[#14252C] p-4 text-[#E6CAB3] shadow-xl sm:flex-row sm:items-center sm:justify-between sm:p-6'>
            <div>
              <p className='text-xs uppercase tracking-[0.2em] text-[#ccb39b]'>MERN Internship</p>
              <h2 className='mt-1 text-xl font-bold sm:text-2xl lg:text-3xl'>Internship Dashboard</h2>
            </div>

            <button className='w-full rounded-xl border border-[#a7a39c] bg-[#20353b] px-4 py-2 text-sm font-semibold transition hover:bg-[#2a434a] sm:w-auto'>
              Logout
            </button>
          </header>

          {/* Company Info */}
          <section className='grid gap-5 rounded-2xl border border-[#31454b] bg-[#14252C] p-4 text-[#E6CAB3] shadow-xl sm:grid-cols-[140px_1fr] sm:items-center sm:gap-6 sm:p-6 lg:grid-cols-[170px_1fr]'>
            <div className='mx-auto w-full max-w-[170px] overflow-hidden rounded-xl border border-[#3c5960] bg-[#23363c] p-2'>
              <img src="logo.png" alt="Allied Software Engineers logo" className='h-24 w-full rounded-lg object-cover sm:h-28 lg:h-32' />
            </div>

            <div className='space-y-2 text-center sm:text-left'>
              <h2 className='text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl'>
                {companyInfo?.name || "Allied Software Engineers"}
              </h2>
              <p className='text-sm text-[#d9c0a9] sm:text-base'>
                {companyInfo?.location || "Pakistan"}
              </p>
            </div>
          </section>

          {/* Internship Info */}
          <InternCard intern={internInfo} tasks={taskInfo} />
        </div>
      </div>
    </>
  )
}
export default App