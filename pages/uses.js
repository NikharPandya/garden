import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'
import usesData from '@/data/usesData'
import Link from '@/components/Link'

export default function Uses() {
  return (
    <>
      <PageSeo
        title={`Uses - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/uses`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Uses
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Software and hardware collection of things I'm using daily. Some of it are affiliate
            links. If you buy through them you won't pay more, but I'll get a small comission. This
            helps me bring more free content day by day
          </p>
        </div>
        <div className="container py-12">
          <div className="grid grid-cols-2">
            {usesData.map((d) => (
              <Link key={d.href} href={d.href}>
                <a className="flex items-center justify-start w-full col-span-1 p-6 hover:bg-gray-100 hover:bg-opacity-40 hover:rounded-xl group dark:hover:bg-opacity-40 dark:hover:bg-gray-500 backdrop-filter transition duration-200 cursor-pointer mb-8">
                  <div className="flex-shrink-0 p-3 font-sans text-gray-700 dark:text-gray-50 ">
                    <svg
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="leading-6 text-center text-gray-700 dark:text-gray-50 align-middle stroke-current w-12 h-12"
                    >
                      <path d="M4 17L10 11 4 5" />
                      <path d="M12 19L20 19" />
                    </svg>
                  </div>
                  <div className="flex flex-col p-3">
                    <h3 className="text-sm font-bold leading-5 text-gray-800 dark:text-white truncate sm:text-base lg:text-base">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base lg:text-sm xl:text-base">
                      {d.description}
                    </p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <p>
          This page is currently a draft. Look back later to see what's changed.{' '}
          <span role="img" aria-label="roadwork sign">
            🚧
          </span>
        </p>
      </div>
    </>
  )
}