export default function Home() {
  return (
    <main className="flex w-screen h-screen flex-col items-center justify-center">
      <div className="flex w-screen h-8 flex-row items-center justify-between bg-background-topbar">
        <div className="group flex flex-row justify-center items-center px-2 gap-2">
          <button className="h-3 w-3 rounded-full bg-background-buttons group-hover:bg-red-400 cursor-pointer" />
          <button className="h-3 w-3 rounded-full bg-background-buttons group-hover:bg-yellow-500 cursor-pointer" />
          <button className="h-3 w-3 rounded-full bg-background-buttons group-hover:bg-green-500 cursor-pointer" />
        </div>
        <div className="group flex flex-row justify-center items-center px-2 gap-4">
          <div className="gap-4 flex flex-row justify-center items-center">
            <span className="text-text-sidebar">&larr;</span>
            <span className="text-background-buttons">&rarr;</span>
          </div>
          <div className="w-96 h-6 border border-border-searchbar rounded-md bg-background-searchbar flex flex-row justify-center items-center">
            <span className="text-text-sidebar text-xs font-normal">
              next-vscode-portfolio
            </span>
          </div>
        </div>
        <div className="group flex flex-row justify-center items-center px-2 gap-2">
          <div className="gap-3 flex flex-row justify-center items-center">
            <span className="text-text-sidebar">&euro;</span>
            <span className="text-text-sidebar">&euro;</span>
            <span className="text-text-sidebar">&euro;</span>
            <span className="text-text-sidebar">&euro;</span>
          </div>
        </div>
      </div>
      <div className="flex w-screen flex-1 items-center justify-center">
        <div className="flex flex-col items-center justify-center w-14 h-full bg-background-sidebar">
          Test
        </div>
        <div className="flex flex-col items-center justify-center w-56 h-full bg-background-explorer">
          Test
        </div>
        <div className="flex flex-col items-center justify-center flex-1 h-full bg-background-main">
          Test
        </div>
      </div>
      <div className="flex w-screen h-6 flex-col items-center justify-center bg-background-footer text-white">
        Test
      </div>
    </main>
  );
}
