export default function Home() {
  return (
    <main className="max-w-prose mx-auto my-8">
      <div className="grid gap-2 justify-items-center">
        <h1 className="text-2xl font-medium">German Market</h1>
        <div>
          This text is made for the German market. It should be displayed when
          the user is shopping in Germany. A geolocation banner is shown above
          when you visit from a different supported market.
        </div>
        <button className="bg-black rounded-md text-white py-2 px-4 mt-2">
          Shop
        </button>
      </div>
    </main>
  );
}
