export default function Tecnologias() {

  const tecnologias = [
    { url: 'js.png', alt: 'js' },
    { url: 'react.png', alt: 'react' },
    { url: 'css.png', alt: 'css' },
    { url: 'html.png', alt: 'html' },
    { url: 'java.png', alt: 'java' },
    { url: 'spring.png', alt: 'spring' },
    { url: 'mui.png', alt: 'mui' },
    { url: 'bootstrap.png', alt: 'bootstrap' },
    { url: 'github.png', alt: 'github' },
    { url: 'angular.svg', alt: 'angular' },
  ]

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technologies</h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {
            tecnologias.map((tecnologia) => {
              return (
                <img key={tecnologia.alt}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src={`src/assets/${tecnologia.url}`}
                  alt={tecnologia.alt}
                  width={158}
                  height={48}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
