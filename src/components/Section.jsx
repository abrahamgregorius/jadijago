export default function Section({children, className}) {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class={`py-8 px-4 mx-auto max-w-screen-xl md:min-h-[40vh] lg:py-16 text-white ${className}`}>
          {children}
        </div>
      </section>
    </>
  );
}
