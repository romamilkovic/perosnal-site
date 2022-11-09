import Head from 'next/head'
import Image from 'next/image'
import tw from 'twin.macro'
import DribbbleIcon from '../components/Icons/Dribbble'
import GithubIcon from '../components/Icons/Github'
import TwitterIcon from '../components/Icons/Twitter'
import Spotify from '../components/Spotify/Spotify'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header css={tw`py-16`}>
        <div css={tw`flex flex-col items-center md:items-start md:flex-row md:justify-between space-y-8 md:space-y-0 md:space-x-8`}>
          <div css={tw`order-2 md:order-1`}>
            <h1 css={tw`text-4xl font-bold mb-8`}>Frontend &amp; <br/> UI/UX Designer</h1>
            <p css={tw`text-xl leading-8 text-gray-500 mb-8`}>Hey 👋 there, I am Roman Slonov. Last 6+ years I develop and design fast and convenient User Interfaces that people enjoy. Design system enthusiast.</p>
            <div css={tw`flex justify-between`}>
              <ul css={tw`flex items-center space-x-4`}>
                <li>
                  <a title='Github' css={tw`hover:text-[#1d9bf0]`} href='https://github.com/romanslonov' target='_blank' rel="noreferrer">
                    <span css={tw`sr-only`}>Github</span>
                    <GithubIcon width={20} height={20} />
                  </a>
                </li>
                <li>
                  <a title='Dribbble' css={tw`transition-colors duration-300 hover:text-[#ea4c89]`} href='https://dribbble.com/romanslonov' target='_blank' rel="noreferrer">
                    <span css={tw`sr-only`}>Dribbble</span>
                    <DribbbleIcon width={20} height={20} />
                  </a>
                </li>
                <li>
                  <a title='Twitter' css={tw`transition-colors duration-300 hover:text-[#1d9bf0]`} href='https://twitter.com/romanslonov' target='_blank' rel="noreferrer">
                    <span css={tw`sr-only`}>Twitter</span>
                    <TwitterIcon width={20} height={20} />
                  </a>
                </li>
              </ul>

              <Spotify />
            </div>
          </div>
          <div css={tw`order-1 md:order-2 flex-shrink-0`}>
            <Image css={tw`flex-shrink-0 rounded-full grayscale`} priority src='/avatar.jpg' width={120} height={120} sizes={'20vw'} alt='Profile picture' />
          </div>
        </div>

        
      </header>

      <section>
        <h2 css={tw`text-xl font-bold mb-4`}>Latest work</h2>

        <div css={tw`grid grid-cols-3 gap-4`}>
          <div css={tw`bg-black/10 rounded-xl h-64`}></div>
          <div css={tw`bg-black/10 rounded-xl h-64`}></div>
          <div css={tw`bg-black/10 rounded-xl h-64`}></div>
        </div>
      </section>
    </>
  )
}
