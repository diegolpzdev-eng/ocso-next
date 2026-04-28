import EmployeesLocation from "./@locations/_components/EmployeesLocation";


export default function DashboardPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  
    <>
      <div className="h-full w-4/12">
        <div className="h-[90vh] overflow-hidden overflow-y-auto first:mt-0 last:mb-0">
          
          {
            searchParams?.store ? (
              <EmployeesLocation store={searchParams?.store} />
            ) : (
              <p className="w-full text-2xl px-2 mt-10 text-center">Seleccione una tienda para ver los empleados</p>
            )
          }
          
        </div>
      </div>
    </>
  
}