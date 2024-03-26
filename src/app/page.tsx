import ClientComponent from "./client-component";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-gray-50 dark:bg-gray-900 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="py-16">
        <div className="container max-w-4xl mx-auto">
          <p className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight dark:text-slate-50 ">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-sky-500">
              TimeZones
            </span>
          </p>
          <h2 className="text-slate-900 font-light text-xl sm:text-xl lg:text-2xl tracking-tighter text-center dark:text-white py-4">
            Stay synchronized across the globe with multiple time zones.
          </h2>
          <ClientComponent />
        </div>
      </div>
    </div>
  );
}
