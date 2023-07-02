export default function Info() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">Skills</h2>

        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
          <p className="mb-8"> 
            I have an excellent ability to work in a team and communicate effectively. I am looking for a challenging opportunity that allows me to apply my skills
            and experience in a collaborative work environment.
          </p>
          <p>
            I am passionate about taking advantage of all available online resources with the goal of becoming a competent developer, capable of finding sophisticated
            solutions to complex and demanding problems.
          </p>
        </blockquote>

      </div>
    </section>
  )
}
