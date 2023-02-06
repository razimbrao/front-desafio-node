import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>RESTaurant - Sistema de Gerenciamento</title>
        <meta name="description" content="Sistema de gerenciamento de restaurantes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.svg" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div className='place-content-center'>
              <img
                className="mx-auto h-44 w-auto rounded-full bg-slate-200 p-5 "
                src="/icon.svg"
                alt="Your Company"
              />
              <div>
                <h1 className="mt-4 text-center text-5xl font-extrabold text-gray-900">
                  RESTaurant
                </h1>
                <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900">
                  Faça seu login!
                </h2>
              </div>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-900 focus:outline-none focus:ring-red-900 sm:text-sm"
                    placeholder="e-mail"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-900 focus:outline-none focus:ring-red-900 sm:text-sm"
                    placeholder="senha"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-900 py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-red-900 focus:ring-offset-2"
                >
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
    </>
  )
}
