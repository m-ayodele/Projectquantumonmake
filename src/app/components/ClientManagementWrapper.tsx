import ClientManagement from '../../imports/ClientManagement/ClientManagement';

export function ClientManagementWrapper() {
  return (
    <div className="w-full min-h-screen overflow-auto">
      <div className="max-w-[1440px] mx-auto">
        <ClientManagement />
      </div>
    </div>
  );
}
