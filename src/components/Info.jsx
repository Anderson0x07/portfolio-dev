const Info = ({ darkTheme }) => {
  return (
    <section className={`${darkTheme ? 'bg-gray-800 text-white' : 'text-gray-900'} relative isolate overflow-hidden px-6 py-4 sm:py-8 lg:px-8`}>
      <div className="mx-auto max-w-2xl lg:max-w-4xl">

        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl mb-8">Skills</h2>

        <blockquote className="text-center text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
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

export default Info;