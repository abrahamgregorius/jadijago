export default function Section({children, className}) {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class={`py-4 px-4 mx-auto max-w-screen-xl min-h-[40vh] md:min-h-[75vh] lg:pt-12 text-white ${className}`}>
          {children}
        </div>
      </section>
    </>
  );
}
